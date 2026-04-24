# Deployment and Domain Management Guide

**Application:** Admin Dashboard  
**Owner:** danishahmed111  
**Contact Email:** danishahmed012320@yahoo.in  
**Repository:** https://github.com/danishahmed111/v0-vercel-gatsby-project  
**Created:** 2024

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Domain Setup](#domain-setup)
3. [Vercel Deployment](#vercel-deployment)
4. [Environment Configuration](#environment-configuration)
5. [DNS Configuration](#dns-configuration)
6. [SSL/TLS Setup](#ssltls-setup)
7. [Post-Deployment Checklist](#post-deployment-checklist)
8. [Monitoring & Maintenance](#monitoring--maintenance)
9. [Troubleshooting](#troubleshooting)

---

## Quick Start

### Prerequisites

- Node.js 18+ and pnpm
- Vercel account
- Domain name (dashboard.danishahmed111.dev recommended)
- Supabase project configured

### 1. Local Setup

```bash
# Clone repository
git clone https://github.com/danishahmed111/v0-vercel-gatsby-project
cd v0-vercel-gatsby-project

# Install dependencies
pnpm install

# Setup environment variables
cp .env.example .env.local

# Start development server
pnpm dev
```

Visit: http://localhost:3001

### 2. Vercel Deployment

```bash
# Login to Vercel
vercel login

# Deploy project
vercel deploy

# Set production domain
vercel env add NEXT_PUBLIC_APP_URL https://dashboard.danishahmed111.dev
```

---

## Domain Setup

### Recommended Domain Structure

```
Primary Domain:      dashboard.danishahmed111.dev
Staging Domain:      staging.dashboard.danishahmed111.dev
Development:         localhost:3001
```

### Domain Ownership

All domains are owned and maintained by:
- **Owner:** danishahmed111
- **Contact:** danishahmed012320@yahoo.in
- **Verification:** X-Owned-By header in all responses

---

## Vercel Deployment

### Step 1: Create Vercel Project

1. Go to https://vercel.com
2. Click "New Project"
3. Select GitHub repository: `danishahmed111/v0-vercel-gatsby-project`
4. Configure project settings:
   - **Project Name:** v0-vercel-gatsby-project
   - **Build Command:** `pnpm build`
   - **Start Command:** `pnpm start`

### Step 2: Set Environment Variables

In Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_APP_URL=https://dashboard.danishahmed111.dev
NEXT_PUBLIC_API_URL=https://dashboard.danishahmed111.dev/api
NEXT_PUBLIC_APP_OWNER=danishahmed111
NEXT_PUBLIC_OWNER_EMAIL=danishahmed012320@yahoo.in
NEXT_PUBLIC_GITHUB_REPO=https://github.com/danishahmed111/v0-vercel-gatsby-project
```

### Step 3: Add Custom Domain

1. Go to Project Settings → Domains
2. Click "Add Domain"
3. Enter: `dashboard.danishahmed111.dev`
4. Follow DNS configuration steps (see DNS Configuration section)

### Step 4: Enable Git Integration

Settings → Git Integration:
- Repository: danishahmed111/v0-vercel-gatsby-project
- Production Branch: main
- Preview Deployments: Enabled

---

## Environment Configuration

### Development Environment

File: `.env.local`

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-dev-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-dev-key

# URLs
NEXT_PUBLIC_APP_URL=http://localhost:3001
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_DEV_URL=http://localhost:3001

# Owner
NEXT_PUBLIC_APP_OWNER=danishahmed111
NEXT_PUBLIC_OWNER_EMAIL=danishahmed012320@yahoo.in

# Environment
NODE_ENV=development
NEXT_PUBLIC_ENV=development
```

### Production Environment

Set in Vercel Dashboard:

```
NEXT_PUBLIC_SUPABASE_URL=your-prod-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-prod-key
NEXT_PUBLIC_APP_URL=https://dashboard.danishahmed111.dev
NEXT_PUBLIC_API_URL=https://dashboard.danishahmed111.dev/api
NODE_ENV=production
```

### Staging Environment

Create staging branch and environment:

```
Branch: staging
Domain: staging.dashboard.danishahmed111.dev
NEXT_PUBLIC_APP_URL=https://staging.dashboard.danishahmed111.dev
```

---

## DNS Configuration

### For Vercel Hosting

#### Option 1: Using Vercel DNS (Recommended)

1. Change nameservers at domain registrar to:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

2. Vercel automatically creates necessary records

#### Option 2: Using CNAME (If keeping current registrar)

Add CNAME record:
```
Type:   CNAME
Name:   dashboard
Value:  cname.vercel-dns.com
TTL:    3600
```

#### Option 3: Using A Record (For root domain)

```
Type:   A
Name:   @
Value:  76.76.19.161
TTL:    3600
```

### DNS Records to Add

For domain: `danishahmed111.dev`

```
# Primary domain
dashboard   CNAME   cname.vercel-dns.com

# Staging domain
staging     CNAME   cname.vercel-dns.com

# MX Records (if using email)
@           MX 10   mail.danishahmed111.dev

# TXT Records
@           TXT     "v=spf1 include:vercel.net ~all"
```

### Verify DNS Propagation

```bash
# Check DNS records
nslookup dashboard.danishahmed111.dev

# Or use online tools:
# https://mxtoolbox.com/
# https://dnschecker.org/
```

---

## SSL/TLS Setup

### Automatic Setup (Vercel Default)

Vercel automatically provides:
- ✅ Free SSL certificate via Let's Encrypt
- ✅ Auto-renewal 30 days before expiry
- ✅ HSTS headers configured
- ✅ HTTP to HTTPS redirect

### Certificate Details

- **Provider:** Let's Encrypt
- **Renewal:** Automatic 90 days before expiry
- **SANs:** dashboard.danishahmed111.dev, staging.dashboard.danishahmed111.dev

### Verify SSL Certificate

```bash
# Check certificate validity
openssl s_client -connect dashboard.danishahmed111.dev:443

# Or use online tools:
# https://www.ssllabs.com/ssltest/
# https://www.sslchecker.com/
```

---

## Post-Deployment Checklist

- [ ] Domain points to Vercel
- [ ] SSL certificate is valid
- [ ] Environment variables set in Vercel
- [ ] Supabase database is accessible
- [ ] Authentication works (login/signup)
- [ ] Dashboard loads successfully
- [ ] Analytics pages display data
- [ ] User management functions
- [ ] API endpoints respond correctly
- [ ] Custom headers present (X-Owned-By: danishahmed111)
- [ ] Robots.txt is accessible
- [ ] Sitemap generates correctly
- [ ] Security headers are set
- [ ] Performance is acceptable

---

## Monitoring & Maintenance

### Weekly Tasks

- Monitor Vercel logs for errors
- Check analytics in dashboard
- Review failed logins

### Monthly Tasks

- Update dependencies: `pnpm upgrade`
- Review security logs
- Check SSL certificate expiry
- Verify domain ownership

### Quarterly Tasks

- Full security audit
- Performance optimization
- Backup database
- Update documentation

### Monitor Application Health

1. **Vercel Dashboard**
   - Settings → Functions → Logs
   - Monitor → Analytics

2. **Real-time Monitoring**
   - Check HTTP status codes
   - Monitor response times
   - Track error rates

3. **Custom Monitoring**
   - Set up Vercel Analytics
   - Create alerts for errors
   - Monitor database connections

---

## Troubleshooting

### Domain Not Resolving

**Problem:** DNS lookup fails

**Solution:**
```bash
# Check DNS records
dig dashboard.danishahmed111.dev

# Flush DNS cache (macOS)
sudo dscacheutil -flushcache

# Flush DNS cache (Windows)
ipconfig /flushdns

# Wait 24 hours for propagation
```

### SSL Certificate Issues

**Problem:** HTTPS not working

**Solution:**
1. Go to Vercel Dashboard → Domains
2. Check certificate status
3. Click "Refresh" if needed
4. Certificate automatically issued within 24 hours

### Environment Variables Not Loading

**Problem:** Variables undefined

**Solution:**
1. Check `.env.local` exists (local)
2. Verify in Vercel Dashboard (production)
3. Restart dev server: `pnpm dev`
4. Variables must start with `NEXT_PUBLIC_` for client

### Application Not Deploying

**Problem:** Build fails

**Solution:**
```bash
# Check local build
pnpm build

# Review build logs in Vercel
# Verify all dependencies installed
# Check for TypeScript errors
```

### Database Connection Issues

**Problem:** Cannot connect to Supabase

**Solution:**
1. Verify `NEXT_PUBLIC_SUPABASE_URL` is correct
2. Check `NEXT_PUBLIC_SUPABASE_ANON_KEY` has necessary permissions
3. Verify Supabase project is active
4. Check Row Level Security policies

---

## Rollback Procedure

If deployment fails:

1. **Go to Vercel Dashboard**
2. **Deployments** → Select previous working deployment
3. **Click three dots** → **Promote to Production**

```bash
# Or use Vercel CLI
vercel rollback
```

---

## Support

For issues or questions:

- **Owner:** [danishahmed111](https://github.com/danishahmed111)
- **Email:** danishahmed012320@yahoo.in
- **Repository:** https://github.com/danishahmed111/v0-vercel-gatsby-project
- **Security:** danishahmed012320@yahoo.in

---

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Supabase Setup Guide](https://supabase.com/docs)
- [Domain Management](./DOMAIN_SETUP.md)
- [Security Policy](./SECURITY.md)
