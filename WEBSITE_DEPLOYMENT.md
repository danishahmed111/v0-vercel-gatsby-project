# Website Deployment & Setup Guide

**Owner:** danishahmed111  
**Email:** danishahmed012320@yahoo.in

---

## Quick Start

### Prerequisites
- Supabase project (free tier okay)
- Vercel account (free tier okay)
- GitHub account (repository already set up)

### 1. Database Setup (5 minutes)

1. Go to Supabase dashboard
2. Open SQL editor
3. Copy entire content of `scripts/02_website_schema.sql`
4. Run the SQL to create all tables
5. Verify tables appear in Table Editor

### 2. Environment Variables (2 minutes)

In Vercel Settings → Environment Variables, add:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=ey...
NEXT_PUBLIC_APP_OWNER=danishahmed111
NEXT_PUBLIC_OWNER_EMAIL=danishahmed012320@yahoo.in
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NEXT_PUBLIC_API_URL=https://yourdomain.com/api
```

**How to find Supabase keys:**
- Go to Project Settings → API
- Copy URL and Anon Key

### 3. Local Testing (5 minutes)

```bash
# 1. Create .env.local
cp .env.example .env.local

# 2. Fill in your Supabase credentials
# NEXT_PUBLIC_SUPABASE_URL=
# NEXT_PUBLIC_SUPABASE_ANON_KEY=

# 3. Install dependencies
pnpm install

# 4. Run dev server
pnpm dev

# 5. Visit http://localhost:3000
```

### 4. Deploy to Vercel (3 minutes)

1. Vercel auto-detects GitHub repo
2. Set environment variables (from step 2)
3. Click Deploy
4. Wait for build to complete
5. Visit your live site

---

## Adding Content

### Add Services

1. Go to Supabase Dashboard
2. Open `services` table
3. Click "+ New Row"
4. Fill in:
   - title: "Web Development"
   - description: "Professional web development services"
   - icon: "💻" (emoji or icon name)
   - price: 5000
   - features: ["Feature 1", "Feature 2"]
   - slug: "web-development"
   - is_active: true

### Add Products

1. Open `products` table
2. Click "+ New Row"
3. Fill in:
   - name: "Product Name"
   - description: "Product description"
   - price: 99.99
   - category: "Digital"
   - slug: "product-name"
   - is_active: true
   - is_featured: true

### Add Testimonials

1. Open `testimonials` table
2. Click "+ New Row"
3. Fill in:
   - author_name: "Client Name"
   - author_title: "Position / Company"
   - content: "Amazing service!"
   - rating: 5
   - is_active: true

### Add Blog Posts

1. Open `blog_posts` table
2. Click "+ New Row"
3. Fill in:
   - title: "Blog Title"
   - slug: "blog-title"
   - content: "Full blog content..."
   - excerpt: "Short summary"
   - author: "danishahmed111"
   - category: "Web Development"
   - is_published: true
   - published_at: (current date/time)

---

## Custom Domain Setup

### Connect Domain to Vercel

1. **Vercel Dashboard**
   - Project Settings → Domains
   - Click "Add"
   - Enter: `dashboard.danishahmed111.dev`

2. **DNS Settings (at your domain provider)**
   - Type: CNAME
   - Name: dashboard
   - Value: cname.vercel-dns.com

3. **Verify**
   - Wait 24 hours for DNS propagation
   - Check via `nslookup dashboard.danishahmed111.dev`

### SSL/HTTPS

- Automatic with Vercel
- Covers main domain + all subdomains
- Renews automatically

---

## E-commerce Setup

### Stripe Integration (Optional)

Ready for checkout. To enable:

1. **Get Stripe Keys**
   - Sign up at stripe.com
   - Get publishable and secret keys

2. **Add to Environment Variables**
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
   STRIPE_SECRET_KEY=sk_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

3. **Create Checkout Route**
   ```typescript
   // app/api/checkout/route.ts
   import Stripe from 'stripe'
   
   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
   
   export async function POST(req: Request) {
     const { items } = await req.json()
     
     const session = await stripe.checkout.sessions.create({
       payment_method_types: ['card'],
       line_items: items.map(item => ({
         price_data: {
           currency: 'usd',
           product_data: { name: item.name },
           unit_amount: Math.round(item.price * 100),
         },
         quantity: item.quantity,
       })),
       mode: 'payment',
       success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
       cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cart`,
     })
     
     return Response.json({ sessionId: session.id })
   }
   ```

4. **Update Cart Page**
   - Add Stripe button
   - Redirect to checkout on success

---

## Email Notifications (Optional)

### Setup Email Service

Choose one:

1. **Vercel Blob** (recommended)
   ```bash
   pnpm add @vercel/blob
   ```

2. **SendGrid**
   ```bash
   pnpm add @sendgrid/mail
   ```

3. **Resend**
   ```bash
   pnpm add resend
   ```

### Create Email Route

```typescript
// app/api/contact/route.ts
import { createContactMessage } from '@/lib/db'

export async function POST(req: Request) {
  const data = await req.json()
  
  // Save to database
  await createContactMessage(data)
  
  // Send email (optional)
  // await sendEmail({
  //   to: process.env.OWNER_EMAIL,
  //   subject: `New contact from ${data.name}`,
  //   body: data.message
  // })
  
  return Response.json({ success: true })
}
```

---

## Performance Optimization

### Image Optimization

Use Vercel Blob for image storage:

```bash
pnpm add @vercel/blob
```

```typescript
import { put } from '@vercel/blob'

const blob = await put('filename', file, {
  access: 'public',
})
```

### Caching

- Static pages cached at edge
- ISR for blog posts (revalidate: 3600)
- Cache products for 1 hour

### Database Queries

All queries use indexes for performance:
- services by is_active and slug
- products by category, featured
- blog posts by published status
- orders by customer email

---

## Monitoring & Analytics

### Vercel Analytics

Built-in at no extra cost:
- Page views
- Core Web Vitals
- Deployment history

### Error Tracking

Add Sentry (optional):

```bash
pnpm add @sentry/nextjs
```

```javascript
// next.config.mjs
import { withSentryConfig } from '@sentry/nextjs'

export default withSentryConfig(config, {
  org: 'your-org',
  project: 'your-project',
})
```

---

## Database Backups

### Automatic Backups (Supabase)

- Free tier: Daily backups for 7 days
- Pro tier: Continuous backups indefinitely

### Manual Backup

```bash
# Export database via Supabase dashboard
# Settings → Backups → Download
```

---

## Troubleshooting

### Build Fails

**Issue:** Next.js build error

**Solution:**
1. Check environment variables in Vercel
2. Verify Supabase URL and key are correct
3. Check database tables exist (`scripts/02_website_schema.sql`)

### Pages Not Showing Data

**Issue:** Products/services not appearing

**Solution:**
1. Verify data exists in Supabase tables
2. Check `is_active` or `is_published` flags are true
3. Check database query in `lib/db.ts`

### Cart Not Working

**Issue:** Cart empties on refresh

**Solution:**
- This is expected (demo mode)
- Install `next-auth` for persistent carts
- Or connect to database cart table

### Contact Form Not Sending

**Issue:** Contact form submissions not saving

**Solution:**
1. Check `contact_messages` table exists
2. Verify Supabase key has insert permission
3. Check for console errors

---

## Production Checklist

- [ ] Database tables created (`02_website_schema.sql`)
- [ ] Environment variables set in Vercel
- [ ] Custom domain connected (if using custom domain)
- [ ] SSL certificate installed (automatic)
- [ ] Sample data added (services/products/testimonials)
- [ ] Contact form tested
- [ ] Cart functionality tested
- [ ] Mobile responsiveness verified
- [ ] SEO metadata updated
- [ ] Analytics enabled (Vercel)
- [ ] Error tracking enabled (optional)
- [ ] Backups configured (Supabase)

---

## Support & Help

**Owner:** danishahmed111  
**Email:** danishahmed012320@yahoo.in  
**GitHub:** https://github.com/danishahmed111

For issues:
1. Check WEBSITE_GUIDE.md
2. Review error logs in Vercel
3. Check Supabase logs
4. Contact danishahmed111
