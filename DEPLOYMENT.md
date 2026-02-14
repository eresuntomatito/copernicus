# Deployment Guide

## GitHub Setup

### 1. Create GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the "+" icon in the top right → "New repository"
3. Repository settings:
   - **Name**: `copernicus` (or your preferred name)
   - **Description**: "Interactive MBA Learning Platform for academic papers and case studies"
   - **Visibility**: Public (so others can use it)
   - **DO NOT** initialize with README (we already have one)
4. Click "Create repository"

### 2. Push Your Code

GitHub will show you commands. Use these:

```bash
cd "/Users/eresuntomatito/Documents/Vault Test/thesis-learning-app"

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/copernicus.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Update README

After pushing, update the README.md installation command:
- Change `YOUR_USERNAME` to your actual GitHub username

## Free Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Best for**: Easy deployment, automatic HTTPS, perfect for React apps

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click "Add New Project"
4. Import your `copernicus` repository
5. Vercel auto-detects Vite settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"
7. Your app will be live at `copernicus.vercel.app` (or custom domain)

**Pros**: 
- Zero configuration needed
- Automatic deployments on git push
- Free SSL certificate
- Global CDN

### Option 2: Netlify

**Best for**: More customization options, form handling

1. Go to [netlify.com](https://netlify.com)
2. Sign up with your GitHub account
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

**Pros**:
- Custom domain support
- Continuous deployment
- Analytics included

### Option 3: GitHub Pages

**Best for**: Simple hosting directly from GitHub

1. In your repository, go to Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages`
4. Install gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```
5. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
6. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/copernicus/', // Your repo name
     // ... rest of config
   })
   ```
7. Deploy:
   ```bash
   npm run deploy
   ```
8. Access at: `https://YOUR_USERNAME.github.io/copernicus/`

**Pros**:
- Free forever
- Integrated with GitHub
- No external service needed

### Option 4: Render

**Best for**: If you need backend services later

1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. New → Static Site
4. Connect your repository
5. Build command: `npm run build`
6. Publish directory: `dist`

## Custom Domain (Optional)

All platforms above support custom domains:
1. Buy a domain (Namecheap, Google Domains, etc.)
2. Add CNAME record pointing to your deployment URL
3. Configure in your deployment platform settings

## Environment Variables

Currently, this app doesn't need environment variables. If you add backend features later:

**Vercel/Netlify**: Add in dashboard under "Environment Variables"
**GitHub Pages**: Use GitHub Secrets

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Verify flashcard quiz works
- [ ] Test navigation between pages
- [ ] Ensure images/assets load
- [ ] Confirm progress tracking works (localStorage)
- [ ] Share the link! 🎉

## Updating Your Site

After deployment, any changes pushed to your main branch will automatically redeploy:

```bash
# Make your changes
git add .
git commit -m "Add new case study"
git push

# Vercel/Netlify will automatically rebuild and deploy
```

## Monitoring

- **Vercel**: Analytics dashboard shows page views, performance
- **Netlify**: Analytics tab for visitor stats
- **GitHub Pages**: Use Google Analytics (add to `index.html`)

## Troubleshooting

### Build fails on deployment
- Check Node.js version (should be 18+)
- Run `npm run build` locally to test
- Check deployment logs for specific errors

### Pages show 404
- Ensure `base` in vite.config.ts matches your deployment path
- Check routing configuration

### Assets not loading
- Verify paths are relative, not absolute
- Check public folder structure
- Clear deployment cache and rebuild

## Cost Breakdown

All options above are **FREE** for open source projects like yours:
- Vercel: Free for personal projects
- Netlify: Free tier (100GB bandwidth/month)
- GitHub Pages: Free for public repos
- Render: Free tier available

You can share your app with unlimited users at no cost! 🚀
