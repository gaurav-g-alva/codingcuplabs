import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { getBlogPosts, getBlogPostBySlug, getJobListings, getJobListingBySlug, createContactSubmission } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Blog procedures
  blog: router({
    list: publicProcedure.query(async () => {
      return getBlogPosts(10);
    }),
    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        return getBlogPostBySlug(input.slug);
      }),
  }),

  // Jobs procedures
  jobs: router({
    list: publicProcedure.query(async () => {
      return getJobListings();
    }),
    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        return getJobListingBySlug(input.slug);
      }),
  }),

  // Contact procedures
  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        phone: z.string().optional(),
        subject: z.string().min(1),
        message: z.string().min(1),
      }))
      .mutation(async ({ input }) => {
        await createContactSubmission({
          name: input.name,
          email: input.email,
          phone: input.phone,
          subject: input.subject,
          message: input.message,
        });

        // Notify owner about new contact submission
        await notifyOwner({
          title: "New Contact Form Submission",
          content: `From: ${input.name} (${input.email})\nSubject: ${input.subject}\n\nMessage: ${input.message}`,
        });

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
