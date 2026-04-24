# Domain and URL Configuration Guide

**Owner:** danishahmed111  
**Contact:** danishahmed012320@yahoo.in  
**Repository:** https://github.com/danishahmed111/v0-vercel-gatsby-project  
**Last Updated:** 2024

---

## Overview

This document provides complete instructions for setting up and managing domains and URLs for the Admin Dashboard application. All configurations are owned and maintained by **danishahmed111**.

---

## Domain Structure

### Production Domain
```
https://dashboard.danishahmed111.dev
```

### Staging Domain
```
https://staging.dashboard.danishahmed111.dev
```

### Development Domain
```
http://localhost:3001
```

---

## Quick Setup

### 1. Environment Variables

Copy `.env.example` to `.env.local` and update with your domain configuration:

```bash
cp .env.example .env.local
```

Update the following variables:

```env
# Application URLs
NEXT_PUBLIC_APP_URL=https://dashboard.danishahmed111.dev
NEXT_PUBLIC_API_URL=https://dashboard.danishahmed111.dev/api

# Local development
NEXT_PUBLIC_DEV_URL=http://localhost:3001
NEXT_PUBLIC_DEV_API_URL=http://localhost:3001/api

# Owner information
NEXT_PUBLIC_APP_OWNER=danishahmed111
NEXT_PUBLIC_OWNER_EMAIL=danishahmed012320@yahoo.in
```

### 2. Vercel Deployment

#### Connect Custom Domain

1. Go to Vercel Dashboard
2. Select your project (`v0-vercel-gatsby-project`)
3. Navigate to **Settings → Domains**
4. Add domain: `dashboard.danishahmed111.dev`
5. Follow DNS configuration instructions

#### Configure DNS Records

Add the following DNS records for your domain registrar:

**For Vercel:**
```
Type: CNAME
Name: dashboard
Value: cname.vercel-dns.com
```

Or for root domain:
```
Type: A
Value: 76.76.19.161
```

### 3. SSL/TLS Certificate

Vercel automatically provides free SSL/TLS certificates via Let's Encrypt. No manual configuration needed.

---

## Application Configuration Files

### config/domain-config.ts

Main configuration file containing:
- Domain settings for all environments
- Owner information
- API endpoints
- Security headers
- CDN settings

**Usage in code:**

```typescript
import { 
  getCurrentDomainConfig, 
  getCurrentApiUrl, 
  verifyOwnership 
} from '@/config/domain-config'

// Get current domain
const domain = getCurrentDomainConfig()
console.log(domain.url) // https://dashboard.danishahmed111.dev

// Get API endpoint
const apiUrl = getCurrentApiUrl()

// Verify ownership
const ownership = verifyOwnership()
console.log(ownership.owner) // danishahmed111
```

### next.config.mjs

Enhanced configuration including:
- Custom headers with ownership information
- URL redirects
- Environment variables
- Domain-specific settings

**Custom Headers:**
```
X-Owned-By: danishahmed111
X-Contact-Email: danishahmed012320@yahoo.in
X-Repository: https://github.com/danishahmed111/v0-vercel-gatsby-project
```

---

## API Endpoints

### Development
```
http://localhost:3001/api
```

### Staging
```
https://staging.dashboard.danishahmed111.dev/api
```

### Production
```
https://dashboard.danishahmed111.dev/api
```

---

## URL Redirects

The application includes automatic redirects:

| From | To | Permanent |
|------|-----|-----------|
| `/home` | `/` | No |
| `/admin` | `/dashboard` | Yes |

---

## Ownership Verification

### Verify Ownership

Use the `verifyOwnership()` function in code:

```typescript
import { verifyOwnership } from '@/config/domain-config'

const ownership = verifyOwnership()
// Returns:
// {
//   owner: 'danishahmed111',
//   email: 'danishahmed012320@yahoo.in',
//   verified: true
// }
```

### View Ownership in Browser

Check HTTP response headers:
```bash
curl -I https://dashboard.danishahmed111.dev

# Output includes:
# X-Owned-By: danishahmed111
# X-Contact-Email: danishahmed012320@yahoo.in
# X-Repository: https://github.com/danishahmed111/v0-vercel-gatsby-project
```

---

## Metadata and SEO

### Page Titles
All pages include owner name in title:
- "Admin Dashboard - danishahmed111"

### Meta Tags
- Author: danishahmed111
- Creator: danishahmed111
- Keywords include "danishahmed111"

### Open Graph
- og:title: "Admin Dashboard - danishahmed111"
- og:url: https://dashboard.danishahmed111.dev

---

## Security Configuration

### HTTPS/SSL
- ✅ Enabled globally
- ✅ Auto-renewal via Let's Encrypt
- ✅ HSTS headers configured

### Domain Validation
- Security policy: `/SECURITY.md`
- Contact email: danishahmed012320@yahoo.in
- Vulnerability reporting via email

### Custom Headers
Every response includes owner verification:
```
X-Owned-By: danishahmed111
X-Contact-Email: danishahmed012320@yahoo.in
X-Repository: https://github.com/danishahmed111/v0-vercel-gatsby-project
```

---

## Components Using Domain Configuration

### DomainInfo Component

Displays ownership and domain information:

```tsx
import { DomainInfo } from '@/components/domain-info'

export default function SettingsPage() {
  return (
    <div>
      <DomainInfo />
    </div>
  )
}
```

Shows:
- Owner information
- Current domain configuration
- Application details
- Repository link

---

## Troubleshooting

### Domain Not Resolving

1. Check DNS propagation: https://mxtoolbox.com/
2. Verify CNAME/A records are correct
3. Wait up to 24 hours for DNS propagation
4. Clear browser cache and DNS cache

### SSL Certificate Issues

1. Go to Vercel Dashboard
2. Check "Settings → Domains"
3. Verify domain is not flagged
4. Certificate automatically renews 30 days before expiry

### API Endpoints Not Working

1. Check `NEXT_PUBLIC_APP_URL` environment variable
2. Verify API routes are accessible at `/api`
3. Check CORS headers if calling from different origin
4. Review browser console for errors

---

## Environment Variables Reference

| Variable | Purpose | Example |
|----------|---------|---------|
| `NEXT_PUBLIC_APP_URL` | Primary application URL | `https://dashboard.danishahmed111.dev` |
| `NEXT_PUBLIC_API_URL` | API endpoint URL | `https://dashboard.danishahmed111.dev/api` |
| `NEXT_PUBLIC_APP_OWNER` | Application owner | `danishahmed111` |
| `NEXT_PUBLIC_OWNER_EMAIL` | Owner contact email | `danishahmed012320@yahoo.in` |
| `NEXT_PUBLIC_APP_NAME` | Application name | `Admin Dashboard` |
| `NEXT_PUBLIC_GITHUB_REPO` | Repository URL | `https://github.com/danishahmed111/...` |
| `NODE_ENV` | Environment | `production` / `development` |

---

## Support and Contact

For domain-related issues or questions:

- **Owner:** [danishahmed111](https://github.com/danishahmed111)
- **Email:** danishahmed012320@yahoo.in
- **Repository:** https://github.com/danishahmed111/v0-vercel-gatsby-project
- **Security:** See [SECURITY.md](./SECURITY.md)

---

## Change Log

### 2024
- Initial domain configuration setup
- Added production domain: dashboard.danishahmed111.dev
- Added staging domain: staging.dashboard.danishahmed111.dev
- Implemented custom headers with ownership info
- Created domain configuration file
