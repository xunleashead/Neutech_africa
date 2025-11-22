# Complete Vercel Deployment Guide for NeuTechAfrica

This guide provides **complete, step-by-step instructions** for deploying your NeuTechAfrica website to Vercel.

---

## Method 1: Deploy via Vercel Dashboard (Recommended)

This is the easiest method and recommended for most users.

### Step 1: Create a GitHub Account (if you don't have one)

1. Go to [https://github.com](https://github.com)
2. Click "Sign up" in the top right
3. Follow the registration process
4. Verify your email address

### Step 2: Create a New GitHub Repository

1. **Log in to GitHub**
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Fill in the repository details:**
   - Repository name: `neutechafrica-website` (or any name you prefer)
   - Description: "Official NeuTechAfrica marketing website"
   - Choose "Public" or "Private" (either works with Vercel)
   - **DO NOT** check "Initialize this repository with a README"
5. **Click "Create repository"**

### Step 3: Push Your Code to GitHub

You'll see a screen with instructions. Follow these commands in your terminal:

**Option A: If you're in the Same IDE**

1. **Initialize Git repository:**
```bash
cd neutechafrica
git init
```

2. **Add all files:**
```bash
git add .
```

3. **Create your first commit:**
```bash
git commit -m "Initial commit: NeuTechAfrica website"
```

4. **Add GitHub as remote** (replace `YOUR-USERNAME` with your GitHub username):
```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/neutechafrica-website.git
```

5. **Push to GitHub:**
```bash
git push -u origin main
```

**You might be prompted for GitHub credentials:**
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (NOT your password)
  - To create a token: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token
  - Select "repo" scope
  - Copy the token and use it as your password

### Step 4: Create a Vercel Account

1. **Go to [https://vercel.com](https://vercel.com)**
2. **Click "Sign Up"**
3. **Select "Continue with GitHub"** (recommended - this links your accounts)
4. **Authorize Vercel** to access your GitHub account
5. **Complete the signup process**

### Step 5: Deploy to Vercel

1. **After logging in, click "Add New..."** (top right)
2. **Select "Project"**
3. **Import Git Repository:**
   - You'll see a list of your GitHub repositories
   - Find "neutechafrica-website" (or whatever you named it)
   - Click "Import"

4. **Configure Project:**
   - **Project Name:** `neutechafrica` (or leave default)
   - **Framework Preset:** Next.js (should auto-detect)
   - **Root Directory:** `./` (leave as is)
   - **Build and Output Settings:**
     - Build Command: `bun run build` (or `npm run build`)
     - Output Directory: `.next` (should be auto-filled)
     - Install Command: `bun install` (or `npm install`)

5. **Environment Variables:** (Optional - none needed for this project currently)
   - Skip this section for now
   - Click "Deploy"

6. **Wait for Deployment:**
   - Vercel will now build and deploy your site
   - This typically takes 1-3 minutes
   - You'll see a progress screen with build logs

7. **Success!**
   - Once complete, you'll see confetti 🎉
   - You'll get a URL like: `https://neutechafrica.vercel.app`
   - Click "Visit" to see your live site!

### Step 6: Configure Custom Domain (Optional)

If you have a custom domain:

1. **In Vercel Dashboard, go to your project**
2. **Click "Settings" tab**
3. **Click "Domains" in the sidebar**
4. **Add your domain** (e.g., `neutechafrica.com`)
5. **Follow Vercel's instructions** to update your DNS settings
6. **Vercel will automatically:**
   - Provision SSL certificate
   - Configure HTTPS
   - Set up redirects

---

## Method 2: Deploy via Vercel CLI (Advanced)

This method is faster if you're comfortable with the command line.

### Step 1: Install Vercel CLI

```bash
bun add -g vercel
# OR
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

- Enter your email
- Check your email for the verification link
- Click the link to confirm

### Step 3: Deploy

From your project directory:

```bash
cd neutechafrica
vercel
```

**Follow the prompts:**

1. **Set up and deploy?** → Yes
2. **Which scope?** → Your personal account or team
3. **Link to existing project?** → No (first time)
4. **What's your project's name?** → neutechafrica (or press Enter for default)
5. **In which directory is your code located?** → `./` (press Enter)
6. **Want to override the settings?** → No (press Enter)

Vercel will now:
- Upload your files
- Build your project
- Deploy to a URL

You'll get a production URL like: `https://neutechafrica.vercel.app`

### Step 4: Deploy to Production

The first deploy is a preview. To deploy to production:

```bash
vercel --prod
```

---

## Post-Deployment Steps

### 1. Test Your Deployment

Visit your Vercel URL and test:
- ✅ Homepage loads correctly
- ✅ About page works
- ✅ Navigation menu functions
- ✅ Contact form submits (check browser console for API response)
- ✅ All images display
- ✅ Responsive design on mobile
- ✅ Smooth scrolling works

### 2. Set Up Continuous Deployment

**Good news:** If you deployed via GitHub, this is already set up!

Every time you push to GitHub:
- Vercel automatically builds and deploys
- You get a preview URL for each pull request
- Main branch deploys to production

### 3. Monitor Your Site

1. **Visit Vercel Dashboard:** [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. **Click your project**
3. **View analytics:**
   - Page views
   - Performance metrics
   - Build logs
   - Error tracking

---

## Making Updates After Deployment

### If you deployed via GitHub:

1. **Make changes to your code locally**
2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update: description of your changes"
   git push
   ```
3. **Vercel automatically deploys** the new version
4. **Check the deployment** in your Vercel dashboard

### If you deployed via CLI:

1. **Make changes to your code**
2. **Run:**
   ```bash
   vercel --prod
   ```

---

## Vercel Project Settings

### Recommended Settings:

1. **Auto-assign custom production domains:** ON
2. **Auto-expose System Environment Variables:** ON
3. **Automatically enable HTTPS:** ON (default)
4. **Build & Development Settings:**
   - Build Command: `bun run build`
   - Output Directory: `.next`
   - Install Command: `bun install`
   - Development Command: `bun run dev`

---

## Troubleshooting

### Build Failed?

1. **Check build logs** in Vercel dashboard
2. **Common issues:**
   - Missing dependencies → Check package.json
   - Environment variables → Add in Vercel settings
   - Node version → Vercel uses latest LTS by default

### Contact Form Not Working?

1. **Check API route** is deployed: `your-url.vercel.app/api/contact`
2. **Check browser console** for errors
3. **Verify** the fetch URL in ContactSection.tsx

### Images Not Loading?

1. **Ensure images are in** `public/images/`
2. **Use correct paths:** `/images/filename.ext` (NOT `./public/images/`)
3. **Check** file names are correct (case-sensitive)

---

## Advanced: Environment Variables

If you need environment variables (e.g., for email service):

1. **Vercel Dashboard** → Your Project → Settings → Environment Variables
2. **Add variables:**
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```
3. **Select environment:** Production, Preview, Development
4. **Redeploy** for changes to take effect

---

## Getting Help

- **Vercel Documentation:** [https://vercel.com/docs](https://vercel.com/docs)
- **Vercel Support:** [https://vercel.com/support](https://vercel.com/support)
- **Community:** [https://github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

## Your Deployment Checklist

- [ ] GitHub account created
- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported to Vercel
- [ ] Deployment successful
- [ ] Live site tested
- [ ] Custom domain configured (optional)
- [ ] Continuous deployment verified

---

**Congratulations! Your NeuTechAfrica website is now live! 🎉**

Share your URL:
- Production: `https://neutechafrica.vercel.app`
- Or your custom domain: `https://neutechafrica.com`
