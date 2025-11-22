# Quick Deploy Guide - TL;DR Version

## Fastest Way to Deploy (5 minutes)

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Login
```bash
vercel login
```
(Check your email and click the verification link)

### 3. Deploy
```bash
cd neutechafrica
vercel --prod
```

**Done!** Your site is live at the URL shown in the terminal.

---

## Via GitHub + Vercel Dashboard (Recommended for beginners)

### 1. Push to GitHub
```bash
cd neutechafrica
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

### 2. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Add New Project"
4. Import your repository
5. Click "Deploy"

**Done!** Your site is live!

---

## Important URLs After Deployment

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Your Site:** https://neutechafrica.vercel.app (or your custom URL)
- **Build Logs:** Click your project in dashboard → Deployments

---

## Making Updates

Push to GitHub:
```bash
git add .
git commit -m "Your changes"
git push
```

Vercel automatically redeploys! ✨

---

For detailed instructions, see **DEPLOYMENT.md**
