import { eq, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, blogPosts, jobListings, contactSubmissions, InsertBlogPost, InsertJobListing, InsertContactSubmission } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Blog Posts Functions
export async function getBlogPosts(limit?: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get blog posts: database not available");
    return [];
  }

  const query = db.select().from(blogPosts).where(eq(blogPosts.published, 1)).orderBy(desc(blogPosts.createdAt));
  if (limit) {
    return query.limit(limit);
  }
  return query;
}

export async function getBlogPostBySlug(slug: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get blog post: database not available");
    return undefined;
  }

  const result = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createBlogPost(post: InsertBlogPost) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create blog post: database not available");
    return;
  }

  await db.insert(blogPosts).values(post);
}

// Job Listings Functions
export async function getJobListings() {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get job listings: database not available");
    return [];
  }

  return db.select().from(jobListings).where(eq(jobListings.active, 1)).orderBy(desc(jobListings.createdAt));
}

export async function getJobListingBySlug(slug: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get job listing: database not available");
    return undefined;
  }

  const result = await db.select().from(jobListings).where(eq(jobListings.slug, slug)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createJobListing(job: InsertJobListing) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create job listing: database not available");
    return;
  }

  await db.insert(jobListings).values(job);
}

// Contact Submissions Functions
export async function createContactSubmission(submission: InsertContactSubmission) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create contact submission: database not available");
    return;
  }

  await db.insert(contactSubmissions).values(submission);
}

export async function getContactSubmissions() {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get contact submissions: database not available");
    return [];
  }

  return db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
}
