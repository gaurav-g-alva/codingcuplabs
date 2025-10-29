# CodingCup Labs Website

A professional, full-stack SaaS company website built with React, Express, TypeScript, and MySQL.

## GitHub Pages Deployment

This project is configured for deployment to GitHub Pages. Follow these steps to deploy:

### 1. Push to GitHub

First, create a GitHub repository and push your code:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/codingcup-labs-website.git
git push -u origin main
```

### 2. Configure GitHub Pages

1. Go to your GitHub repository
2. Navigate to Settings > Pages
3. Under "Source", select "GitHub Actions"

### 3. Automatic Deployment

The included GitHub Actions workflow will automatically build and deploy your site when you push to the main branch. The workflow:

- Installs dependencies
- Builds the project
- Deploys to GitHub Pages

### 4. Access Your Site

Once deployed, your site will be available at:
`https://yourusername.github.io/codingcup-labs-website/`

### 5. Custom Domain (Optional)

To use a custom domain:

1. Add your domain in the GitHub Pages settings
2. Create the necessary DNS records
3. Update the `base` path in `vite.config.ts` to `/` instead of `/codingcup-labs-website/`

## Local Development

Refer to the detailed instructions in `read.md` for local development setup.