# Vercel Deployment Guide

## Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tnsurya7/praskla)

## Manual Deployment Steps

### 1. Prerequisites
- GitHub account with repository access
- Vercel account (sign up at https://vercel.com)
- SMTP credentials for email functionality

### 2. Connect Repository to Vercel

1. Go to https://vercel.com/new
2. Import your GitHub repository: `tnsurya7/praskla`
3. Configure project settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** ./
   - **Build Command:** `npm run build`
   - **Output Directory:** .next
   - **Install Command:** `npm install`

### 3. Configure Environment Variables

In Vercel Dashboard → Settings → Environment Variables, add:


**For Gmail:**
1. Enable 2-factor authentication
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Use the 16-character app password (not your regular password)

**Note:** The contact form will send:
- **Admin notification** to `SMTP_TO_EMAIL` with contact details
- **Customer confirmation** to the customer's email with a thank you message

**For SendGrid:**
```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
SMTP_FROM_EMAIL=noreply@prasklatechnology.com
```

### 4. Deploy

Click **Deploy** button. Vercel will:
- Install dependencies
- Build the Next.js application
- Deploy to production
- Provide a live URL (e.g., `praskla.vercel.app`)

### 5. Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain: `prasklatechnology.com`
3. Configure DNS records as instructed by Vercel
4. Wait for DNS propagation (usually 24-48 hours)

## Vercel CLI Deployment

### Install Vercel CLI
```bash
npm i -g vercel
```

### Login to Vercel
```bash
vercel login
```

### Deploy to Production
```bash
vercel --prod
```

### Deploy to Preview
```bash
vercel
```

## Environment Variables via CLI

```bash
# Add environment variable
vercel env add SMTP_HOST production

# Pull environment variables locally
vercel env pull .env.local
```

## Automatic Deployments

Vercel automatically deploys:
- **Production:** Every push to `main` branch
- **Preview:** Every push to other branches or pull requests

## Performance Optimization

The project is already optimized for Vercel:
- ✅ Next.js 14 App Router
- ✅ Automatic code splitting
- ✅ Image optimization
- ✅ Edge functions for API routes
- ✅ Static generation where possible
- ✅ Incremental Static Regeneration (ISR)

## Monitoring

After deployment, monitor your site:
- **Analytics:** Vercel Dashboard → Analytics
- **Logs:** Vercel Dashboard → Deployments → View Function Logs
- **Performance:** Vercel Dashboard → Speed Insights

## Troubleshooting

### Build Fails
- Check build logs in Vercel Dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Contact Form Not Working
- Verify SMTP environment variables are set
- Check Function Logs for email errors
- Test SMTP credentials locally first

### 404 Errors
- Ensure `next.config.js` is properly configured
- Check that all routes are defined correctly
- Verify API routes are in `app/api/` directory

## Support

- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- GitHub Issues: https://github.com/tnsurya7/praskla/issues

## Production Checklist

Before going live:
- [ ] Configure all environment variables
- [ ] Test contact form functionality
- [ ] Verify all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Test all navigation links
- [ ] Configure custom domain (if applicable)
- [ ] Set up analytics
- [ ] Enable HTTPS (automatic with Vercel)
- [ ] Test email delivery
- [ ] Review SEO meta tags

## Post-Deployment

Your site will be live at:
- **Vercel URL:** `https://praskla.vercel.app`
- **Custom Domain:** `https://prasklatechnology.com` (if configured)

Enjoy your premium Praskla Technology website! 🚀
