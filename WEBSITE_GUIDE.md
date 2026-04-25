# Multi-Purpose Website Guide

**Owner:** danishahmed111  
**Email:** danishahmed012320@yahoo.in  
**Domain:** dashboard.danishahmed111.dev

---

## Overview

This is a complete multi-purpose website platform combining:
- Professional portfolio and services showcase
- E-commerce shop functionality
- Blog and content management
- Contact and inquiry system
- Analytics and reporting

## Features

### Core Sections

1. **Homepage** (`/`)
   - Hero section with call-to-action
   - Featured services grid
   - Featured products showcase
   - Testimonials carousel
   - Newsletter signup

2. **Services** (`/services`)
   - Complete service catalog
   - Service details and pricing
   - Feature highlights
   - Contact CTA

3. **Shop** (`/shop`)
   - Product catalog with filtering
   - Category-based browsing
   - Product search
   - Featured products
   - Sale/discount badges

4. **Product Details** (`/shop/[slug]`)
   - Full product information
   - Image galleries
   - Price and stock information
   - Add to cart functionality
   - Related products
   - Reviews and ratings

5. **Cart** (`/cart`)
   - View cart items
   - Update quantities
   - Remove items
   - Order summary
   - Checkout (Stripe ready)

6. **Blog** (`/blog`)
   - Blog post listing
   - Category filtering
   - Author information
   - Published dates
   - Post details page

7. **About** (`/about`)
   - Personal/business story
   - Values and mission
   - Team information
   - Statistics
   - CTA to contact

8. **Contact** (`/contact`)
   - Contact form with validation
   - Contact information display
   - Email subscription
   - Social media links
   - Message history (admin)

---

## Database Schema

### Tables

#### services
- id (UUID)
- title, description
- icon, price
- features (JSONB array)
- image_url, slug
- is_active, display_order
- created_at, updated_at

#### products
- id (UUID)
- name, slug
- description, price, sale_price
- category, image_url
- gallery_urls (JSONB)
- stock, sku
- is_active, is_featured
- created_at, updated_at

#### testimonials
- id (UUID)
- author_name, author_title
- author_image
- content, rating
- company
- is_active, display_order
- created_at, updated_at

#### blog_posts
- id (UUID)
- title, slug
- excerpt, content
- author, featured_image
- category, tags (JSONB)
- is_published, published_at
- created_at, updated_at

#### contact_messages
- id (UUID)
- name, email, phone
- subject, message
- status, replied_at
- created_at

#### orders
- id (UUID)
- order_number (unique)
- customer details
- items (JSONB)
- total_amount
- status, payment_method
- addresses (JSONB)
- created_at, updated_at

#### cart_items (temporary)
- id (UUID)
- session_id, product_id
- quantity
- created_at, updated_at

---

## Key Components

### Navigation (`components/website/navbar.tsx`)
- Sticky header with logo
- Main navigation links
- Shopping cart icon with count
- Mobile responsive menu

### Footer (`components/website/footer.tsx`)
- Company information
- Quick links
- Services listing
- Social media links
- Contact information

### Hero Section (`components/website/hero.tsx`)
- Large banner with headline
- Call-to-action buttons
- Statistics display
- Responsive layout

### Service Card (`components/website/service-card.tsx`)
- Service title and description
- Icon and pricing
- Feature list
- Learn more button
- Hover effects

### Product Card (`components/website/product-card.tsx`)
- Product image
- Price with sale badge
- Stock status
- Favorites toggle
- Quick view link

---

## Getting Started

### 1. Environment Setup

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_APP_OWNER=danishahmed111
NEXT_PUBLIC_OWNER_EMAIL=danishahmed012320@yahoo.in
NEXT_PUBLIC_APP_URL=https://dashboard.danishahmed111.dev
```

### 2. Database Setup

Run the migration script in Supabase SQL editor:

```bash
# File: scripts/02_website_schema.sql
```

### 3. Add Sample Data

Use the Supabase dashboard to add:
- 3-6 services with descriptions and pricing
- 5-10 featured products with images
- 2-3 testimonials from clients
- 1-2 blog posts

### 4. Install Dependencies

```bash
pnpm install sonner
```

### 5. Local Development

```bash
pnpm dev
```

Visit `http://localhost:3000`

---

## Cart & E-commerce

### Cart Context (`lib/cart-context.tsx`)
- Client-side cart state management
- LocalStorage persistence
- Add/remove/update quantity
- Total calculation

### Adding Products to Cart

```typescript
import { useCart } from '@/lib/cart-context'

const { addToCart } = useCart()

addToCart({
  id: product.id,
  productId: product.id,
  name: product.name,
  price: product.sale_price || product.price,
  quantity: 1,
  image: product.image_url
})
```

### Stripe Integration (Coming Soon)

Ready for Stripe Checkout integration:
1. Set `NEXT_PUBLIC_STRIPE_KEY`
2. Create checkout API route
3. Update cart page with Stripe button

---

## Database Functions

### Services

```typescript
getServices() // Get all active services
getServiceBySlug(slug) // Get service details
```

### Products

```typescript
getProducts(category?) // Get products with optional filtering
getProductBySlug(slug) // Get product details
getFeaturedProducts() // Get featured products
```

### Blog

```typescript
getBlogPosts() // Get all published posts
getBlogPostBySlug(slug) // Get post details
```

### Contact

```typescript
createContactMessage(message) // Save contact form submission
```

### Cart

```typescript
getCartItems(sessionId) // Get cart for session
addToCart(sessionId, productId, quantity)
removeFromCart(cartItemId)
```

---

## File Structure

```
app/
├── page.tsx (homepage)
├── about/
│   └── page.tsx
├── services/
│   └── page.tsx
├── shop/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── cart/
│   └── page.tsx
├── blog/
│   └── page.tsx
├── contact/
│   └── page.tsx
└── layout.tsx

components/website/
├── navbar.tsx
├── footer.tsx
├── hero.tsx
├── service-card.tsx
└── product-card.tsx

lib/
├── db.ts (database functions)
├── cart-context.tsx (cart state)
└── supabase-client.ts

scripts/
└── 02_website_schema.sql (database)
```

---

## SEO Optimization

### Metadata

Each page includes:
- Title and description
- Open Graph tags
- Twitter cards
- Canonical URLs
- Structured data (Schema.org)

### Sitemap

Auto-generated sitemap at `/sitemap.xml`

### Robots

SEO-friendly robots.txt at `/public/robots.txt`

---

## Deployment

### To Vercel

1. Connect GitHub repository
2. Set environment variables in Vercel dashboard
3. Push to main branch
4. Automatic deployment

### Custom Domain

1. Add domain in Vercel settings
2. Update DNS to Vercel's CNAME
3. Enable SSL (automatic)

---

## Security

- Row Level Security (RLS) on all tables
- Environment variables for sensitive data
- CORS protection
- Input validation on forms
- SQL injection prevention

---

## Next Steps

1. Add products/services/testimonials to database
2. Connect Stripe for checkout
3. Setup email notifications
4. Add analytics (Vercel Analytics)
5. Create admin dashboard for content management
6. Add image optimization (Vercel Blob)

---

## Support

**Email:** danishahmed012320@yahoo.in  
**GitHub:** https://github.com/danishahmed111

All issues and feature requests welcome!
