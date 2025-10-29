# CodingCup Labs Website

A professional, full-stack SaaS company website built with React, Express, TypeScript, and MySQL. Features include a multi-page layout, contact form, blog management, and job listings.

## Overview

This website showcases CodingCup Labs, a SaaS company established in 2022 in Bangalore. It includes seven main pages:

- **Home:** Hero section with value propositions and CTAs
- **About:** Company story, mission, values, team, and statistics
- **Services:** Six SaaS offerings with pricing tiers
- **Careers:** Job listings and application process
- **Blogs:** Blog post management and display
- **Contact:** Contact form with owner notifications
- **Privacy Policy:** Data protection and compliance information

## Tech Stack

**Frontend:**
- React 19 with TypeScript
- Tailwind CSS 4 for styling
- Wouter for routing
- shadcn/ui components
- Lucide React for icons

**Backend:**
- Express 4 with Node.js
- tRPC 11 for type-safe APIs
- Drizzle ORM for database management
- MySQL/TiDB for data persistence

**Authentication:**
- Manus OAuth integration

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **pnpm** (v8 or higher) - [Install](https://pnpm.io/installation)
- **MySQL** (v8 or higher) or compatible database - [Download](https://www.mysql.com/downloads/)

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd codingcup-labs-website
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database Configuration
DATABASE_URL="mysql://username:password@localhost:3306/codingcup_labs"

# OAuth Configuration
VITE_APP_ID="your-manus-app-id"
OAUTH_SERVER_URL="https://api.manus.im"
VITE_OAUTH_PORTAL_URL="https://login.manus.im"
JWT_SECRET="your-jwt-secret-key"

# App Configuration
VITE_APP_TITLE="CodingCup Labs"
VITE_APP_LOGO="https://your-logo-url.png"

# Owner Information
OWNER_NAME="Your Name"
OWNER_OPEN_ID="your-open-id"

# API Configuration
BUILT_IN_FORGE_API_URL="https://api.manus.im"
BUILT_IN_FORGE_API_KEY="your-api-key"

# Analytics (Optional)
VITE_ANALYTICS_ENDPOINT="https://analytics.example.com"
VITE_ANALYTICS_WEBSITE_ID="your-website-id"
```

**Note:** For local development, you can use placeholder values for OAuth and API keys. The website will still function for testing purposes.

### 4. Set Up the Database

Create a new MySQL database:

```bash
mysql -u root -p
CREATE DATABASE codingcup_labs;
EXIT;
```

### 5. Run Database Migrations

```bash
pnpm db:push
```

This command will:
- Generate migration files from the schema
- Apply all pending migrations to your database

## Running Locally

### Development Mode

Start the development server with hot reload:

```bash
pnpm dev
```

The application will be available at:
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:3000/api

### Build for Production

```bash
pnpm build
```

### Start Production Server

```bash
pnpm start
```

## Project Structure

```
codingcup-labs-website/
├── client/                      # React frontend
│   ├── src/
│   │   ├── pages/              # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Careers.tsx
│   │   │   ├── JobDetail.tsx
│   │   │   ├── Blogs.tsx
│   │   │   ├── BlogDetail.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── PrivacyPolicy.tsx
│   │   ├── components/         # Reusable UI components
│   │   ├── lib/                # Utilities and helpers
│   │   ├── App.tsx             # Main app component
│   │   └── main.tsx            # Entry point
│   └── index.html
├── server/                      # Express backend
│   ├── db.ts                   # Database queries
│   ├── routers.ts              # tRPC procedures
│   └── _core/                  # Core infrastructure
├── drizzle/                     # Database schema and migrations
│   ├── schema.ts               # Table definitions
│   └── migrations/             # Migration files
├── shared/                      # Shared constants and types
├── storage/                     # S3 file storage helpers
├── .env.local                  # Environment variables (create this)
├── package.json
├── pnpm-lock.yaml
└── README.md
```

## Database Schema

The project includes four main tables:

### Users
```sql
- id (Primary Key)
- openId (Unique)
- name
- email
- loginMethod
- role (admin | user)
- createdAt
- updatedAt
- lastSignedIn
```

### Blog Posts
```sql
- id (Primary Key)
- title
- slug (Unique)
- excerpt
- content
- author
- category
- imageUrl
- published (0 | 1)
- createdAt
- updatedAt
```

### Job Listings
```sql
- id (Primary Key)
- title
- slug (Unique)
- department
- location
- jobType
- description
- requirements
- salaryRange
- active (0 | 1)
- createdAt
- updatedAt
```

### Contact Submissions
```sql
- id (Primary Key)
- name
- email
- phone
- subject
- message
- createdAt
```

## Adding Content

### Add a Blog Post

Insert a new blog post into the database:

```sql
INSERT INTO blog_posts (title, slug, excerpt, content, author, category, published)
VALUES (
  'Getting Started with SaaS',
  'getting-started-with-saas',
  'Learn the basics of building SaaS applications',
  'Full blog content here...',
  'John Doe',
  'Development',
  1
);
```

### Add a Job Listing

Insert a new job listing:

```sql
INSERT INTO job_listings (title, slug, department, location, jobType, description, requirements, salaryRange, active)
VALUES (
  'Senior Full Stack Developer',
  'senior-full-stack-developer',
  'Engineering',
  'Bangalore, India',
  'Full-time',
  'We are looking for a senior developer...',
  'Requirements here...',
  '₹80,000 - ₹120,000 per month',
  1
);
```

## API Endpoints

### Blog Procedures
- `GET /api/trpc/blog.list` - Get all published blog posts
- `GET /api/trpc/blog.getBySlug?input={"slug":"..."}` - Get a specific blog post

### Jobs Procedures
- `GET /api/trpc/jobs.list` - Get all active job listings
- `GET /api/trpc/jobs.getBySlug?input={"slug":"..."}` - Get a specific job listing

### Contact Procedures
- `POST /api/trpc/contact.submit` - Submit a contact form
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+91 9876543210",
    "subject": "Inquiry",
    "message": "Your message here"
  }
  ```

## Common Tasks

### Modify Navigation

Edit the navigation in `client/src/pages/Home.tsx` (and other pages):

```tsx
<nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
  <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
    {/* Update links here */}
  </div>
</nav>
```

### Change Colors and Branding

Update Tailwind CSS variables in `client/src/index.css`:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.6%;
    /* Update color values */
  }
}
```

### Add a New Page

1. Create a new file in `client/src/pages/NewPage.tsx`
2. Add the route in `client/src/App.tsx`:
   ```tsx
   <Route path="/new-page" component={NewPage} />
   ```
3. Update navigation links as needed

### Create a New Database Table

1. Add the table definition to `drizzle/schema.ts`
2. Run `pnpm db:push` to apply the migration
3. Add query helpers to `server/db.ts`
4. Create tRPC procedures in `server/routers.ts`

## Troubleshooting

### Database Connection Error

**Error:** `Error: connect ECONNREFUSED 127.0.0.1:3306`

**Solution:**
- Ensure MySQL is running: `mysql -u root -p`
- Check DATABASE_URL in `.env.local`
- Verify database exists: `SHOW DATABASES;`

### Port Already in Use

**Error:** `Error: listen EADDRINUSE: address already in use :::3000`

**Solution:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 pnpm dev
```

### Module Not Found

**Error:** `Cannot find module './pages/...'`

**Solution:**
- Ensure all page files are created
- Check file names match imports exactly (case-sensitive)
- Run `pnpm install` to ensure dependencies are installed

### Database Migration Failed

**Error:** `Error: Migration failed`

**Solution:**
```bash
# Reset and retry
pnpm db:push

# Or manually check schema
mysql -u root -p codingcup_labs < drizzle/schema.sql
```

## Performance Tips

1. **Enable Caching:** Use browser caching for static assets
2. **Optimize Images:** Compress blog post images before uploading
3. **Database Indexing:** Add indexes to frequently queried columns
4. **Code Splitting:** Use dynamic imports for large components

## Security Considerations

1. **Environment Variables:** Never commit `.env.local` to version control
2. **SQL Injection:** Always use parameterized queries (Drizzle ORM handles this)
3. **CORS:** Configure CORS properly for production
4. **HTTPS:** Use HTTPS in production
5. **Input Validation:** Validate all user inputs on both client and server

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy with a single click

### Deploy to Other Platforms

Refer to the deployment documentation for your chosen platform:
- [Netlify](https://docs.netlify.com/)
- [Heroku](https://devcenter.heroku.com/)
- [AWS](https://aws.amazon.com/getting-started/)
- [DigitalOcean](https://www.digitalocean.com/docs/)

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -am 'Add new feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit a pull request

## License

This project is proprietary and owned by CodingCup Labs.

## Support

For issues, questions, or feature requests:

- **Email:** support@codingcuplabs.com
- **Phone:** +91 (080) 1234-5678
- **Address:** Tech Park, Bangalore, Karnataka, India 560001

## Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [tRPC Documentation](https://trpc.io/docs)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Express.js](https://expressjs.com/)

---

**Last Updated:** October 2024

**Version:** 1.0.0

Happy coding! 🚀
