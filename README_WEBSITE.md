# Professional Multi-Purpose Website

**Owner:** danishahmed111  
**Email:** danishahmed012320@yahoo.in  
**Repository:** https://github.com/danishahmed111/v0-vercel-gatsby-project

A complete, production-ready website combining portfolio, e-commerce, services, and blog in one unified platform.

---

## Features

- **Portfolio** - Showcase your work and projects
- **E-Commerce** - Sell products and services with shopping cart
- **Services** - Display and manage service offerings
- **Blog** - Publish and manage blog articles
- **Contact System** - Collect inquiries and messages
- **Responsive Design** - Works on all devices
- **Database Backed** - All content in Supabase PostgreSQL
- **SEO Optimized** - Built-in meta tags and sitemaps
- **Dark Mode Ready** - Tailwind CSS utilities

---

## Quick Start

### 1. Clone & Setup

```bash
git clone https://github.com/danishahmed111/v0-vercel-gatsby-project
cd v0-vercel-gatsby-project
pnpm install
```

### 2. Environment Setup

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=ey...
NEXT_PUBLIC_APP_OWNER=danishahmed111
NEXT_PUBLIC_OWNER_EMAIL=danishahmed012320@yahoo.in
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Database Setup

```bash
# Run SQL migration in Supabase dashboard
# Copy contents of scripts/02_website_schema.sql
# Paste into Supabase SQL editor and run
```

### 4. Local Development

```bash
pnpm dev
```

Visit `http://localhost:3000`

### 5. Deploy

```bash
git push origin main
# Vercel auto-deploys
```

---

## Pages & Routes

| Route | Description | Status |
|-------|-------------|--------|
| `/` | Homepage with hero & featured items | Live |
| `/about` | About page with bio & stats | Live |
| `/services` | Services catalog | Live |
| `/shop` | Product listing & filtering | Live |
| `/shop/[slug]` | Product details | Live |
| `/blog` | Blog post listing | Live |
| `/contact` | Contact form | Live |
| `/cart` | Shopping cart | Live |

---

## Components

### Website Components
- `navbar` - Header navigation with cart
- `footer` - Footer with links & social
- `hero` - Hero section with CTA
- `service-card` - Service display card
- `product-card` - Product display card

### UI Components (shadcn/ui)
- Button
- Card
- Input
- Textarea

---

## Database Schema

### Tables
- `services` - Service catalog
- `products` - E-commerce products
- `testimonials` - Client testimonials
- `blog_posts` - Blog articles
- `contact_messages` - Contact form submissions
- `orders` - Order history
- `cart_items` - Shopping cart items

All tables include:
- UUID primary keys
- Automatic timestamps
- Row Level Security (RLS)
- Proper indexes

---

## API Functions

### Services
```typescript
getServices()              // Get all active services
getServiceBySlug(slug)     // Get service by slug
```

### Products
```typescript
getProducts(category?)     // Get products with optional category filter
getProductBySlug(slug)     // Get product by slug
getFeaturedProducts()      // Get featured products
```

### Blog
```typescript
getBlogPosts()             // Get all published posts
getBlogPostBySlug(slug)    // Get post by slug
```

### Contact
```typescript
createContactMessage(msg)  // Save contact form
```

### Cart
```typescript
useCart()                  // Use cart context
addToCart(item)            // Add item to cart
removeFromCart(id)         // Remove from cart
updateQuantity(id, qty)    // Update quantity
```

---

## Styling

Built with Tailwind CSS:
- Color scheme: Blue primary, gray accents
- Responsive breakpoints: mobile, tablet, desktop
- Dark mode support ready
- Custom fonts: Geist (sans) + Geist Mono

---

## Documentation

1. **WEBSITE_BUILD_COMPLETE.md** - Build summary and statistics
2. **WEBSITE_GUIDE.md** - Complete feature documentation
3. **WEBSITE_DEPLOYMENT.md** - Deployment and setup guide
4. **SECURITY.md** - Security policies and reporting
5. **DOMAIN_SETUP.md** - Domain configuration

---

## Tech Stack

- **Frontend:** Next.js 15, React 19, TypeScript
- **Styling:** Tailwind CSS, Lucide Icons
- **Database:** Supabase PostgreSQL
- **Hosting:** Vercel
- **Package Manager:** pnpm

---

## Getting Content In

### Add Services

1. Go to Supabase dashboard
2. Open `services` table
3. Click "+ Row"
4. Fill in title, description, price, slug
5. Click save

### Add Products

1. Open `products` table
2. Click "+ Row"
3. Fill in name, price, category, slug
4. Optional: Add image URL
5. Set `is_active` = true, `is_featured` = true (for homepage)

### Add Blog Posts

1. Open `blog_posts` table
2. Click "+ Row"
3. Fill in title, content, slug
4. Set `is_published` = true
5. Set `published_at` = current date/time

### Add Testimonials

1. Open `testimonials` table
2. Click "+ Row"
3. Fill in author_name, content, rating
4. Set `is_active` = true

---

## Features Ready to Add

### Stripe Checkout
- [x] Database schema ready
- [x] Cart system ready
- [ ] Stripe API integration
- [ ] Webhook handling
- [ ] Order confirmation emails

### Email Notifications
- [x] Contact form saves to DB
- [ ] Email service setup (SendGrid/Resend)
- [ ] Confirmation emails
- [ ] Notification emails to owner

### User Accounts
- [x] Auth context exists
- [ ] User registration
- [ ] Order history per user
- [ ] Wishlist functionality

### Admin Dashboard
- [ ] Content management UI
- [ ] Order management
- [ ] Analytics dashboard
- [ ] User management

---

## Deployment

### To Vercel

1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Add environment variables
4. Click Deploy
5. Wait for build (~2-3 minutes)

### Custom Domain

1. Update DNS to Vercel CNAME
2. Add domain in Vercel settings
3. SSL auto-enables
4. Done!

---

## Performance

- Optimized database queries with indexes
- Lazy loading components
- Image optimization ready
- CSS minification
- JS bundling
- Edge caching

---

## Security

- Row Level Security on all tables
- Input validation
- SQL injection prevention
- No sensitive data in client
- Environment variables for secrets
- CORS configured

---

## Support

**Owner:** danishahmed111  
**Email:** danishahmed012320@yahoo.in  
**GitHub:** https://github.com/danishahmed111

---

## License

Owned and maintained by danishahmed111. See SECURITY.md for contact info.

---

## Status

✅ Core pages built  
✅ Database schema created  
✅ Components developed  
✅ Cart system implemented  
✅ SEO optimized  
⏳ Stripe integration (ready to add)  
⏳ Email service (ready to add)  
⏳ Admin dashboard (ready to add)  

---

**Ready to launch your website!** 🚀
