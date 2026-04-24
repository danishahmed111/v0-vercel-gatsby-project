# Admin Dashboard

**Owner:** [danishahmed111](https://github.com/danishahmed111)  
**Email:** danishahmed012320@yahoo.in  
**Security Email:** danishahmed012320@yahoo.in

---

## Overview

A professional, full-featured admin dashboard application built with Next.js 15, React 19, Supabase, and Tailwind CSS. This dashboard provides comprehensive tools for business management, analytics, user administration, and real-time reporting.

## Features

### 🔐 Authentication & Security
- Secure user authentication with Supabase
- Role-based access control (Admin, Manager, User)
- Password management and security settings
- Two-factor authentication support
- Session management

### 📊 Analytics & Reporting
- Real-time data visualization with Recharts
- Interactive charts (Line, Bar, Pie)
- Growth trends analysis
- Device distribution metrics
- Top pages reporting
- Custom report generation and management

### 👥 User Management
- Complete user account management interface
- Role assignment and permissions management
- User activity tracking
- Status management (Active/Inactive)
- User filtering and search capabilities

### 🎯 Dashboard Features
- Quick stats overview
- Activity logs and history
- Real-time metrics
- Customizable widgets
- Performance monitoring
- Business intelligence insights

### ⚙️ Settings & Configuration
- Profile management
- Security settings
- Notification preferences
- Role and permission management
- Account preferences

## Tech Stack

- **Frontend:** Next.js 15, React 19
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth
- **UI Components:** shadcn/ui
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Icons:** Lucide React
- **Forms:** React Hook Form, Zod
- **Notifications:** Sonner
- **State Management:** React Context API

## Project Structure

```
app/
├── auth/
│   ├── login/
│   └── signup/
├── dashboard/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── analytics/
│   ├── users/
│   ├── reports/
│   └── settings/
├── layout.tsx
└── page.tsx

components/
├── ui/
│   ├── button.tsx
│   ├── input.tsx
│   ├── card.tsx
│   └── ...
└── dashboard/
    ├── sidebar.tsx
    ├── header.tsx
    └── stats-card.tsx

lib/
├── supabase-client.ts
├── auth-context.tsx
└── utils.ts

scripts/
└── 01_init_schema.sql
```

## Database Schema

The application uses the following main tables:

- **users** - User accounts with roles and permissions
- **projects** - Project management and tracking
- **analytics** - Metric storage for dashboards
- **dashboard_widgets** - Customizable widget configurations
- **activity_logs** - User activity audit trail

All tables have Row Level Security (RLS) policies enabled for data protection.

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)
- Supabase project

### Installation

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd v0-vercel-gatsby-project
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

4. **Run database migrations**
   ```bash
   # Execute the SQL script in Supabase SQL Editor
   scripts/01_init_schema.sql
   ```

5. **Start the development server**
   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Default Demo Credentials

For testing purposes:
- **Email:** test@example.com
- **Password:** password

## Key Pages

### Public Pages
- `/` - Landing page with features and call-to-action
- `/auth/login` - User login
- `/auth/signup` - Account creation

### Dashboard Pages (Protected)
- `/dashboard` - Main dashboard with overview
- `/dashboard/analytics` - Advanced analytics and charts
- `/dashboard/users` - User management interface
- `/dashboard/reports` - Report generation and management
- `/dashboard/settings` - Account and application settings

## Security Features

- **Row Level Security (RLS)** on all database tables
- **Secure authentication** with Supabase Auth
- **Password hashing** with bcryptjs
- **HTTPS enforcement** in production
- **CORS protection** for API endpoints
- **SQL injection prevention** with parameterized queries
- **Security policy** detailed in SECURITY.md

## API Routes

The application uses server-side rendering where possible. API routes for future backend operations:

```
/api/auth/*          - Authentication endpoints
/api/users/*         - User management endpoints
/api/analytics/*     - Analytics data endpoints
/api/reports/*       - Report generation endpoints
```

## Deployment

### Deploy to Vercel

1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel project settings
4. Deploy with `vercel deploy`

### Manual Deployment

```bash
pnpm build
pnpm start
```

## Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Database query optimization with indexes
- Caching strategies with SWR
- CSS-in-JS optimization with Tailwind

## Contributing

Please refer to SECURITY.md for security reporting guidelines.

## License

See LICENSE file for details.

## Support

For issues, questions, or suggestions, please contact the owner:
- **Email:** danishahmed012320@yahoo.in
- **GitHub:** [danishahmed111](https://github.com/danishahmed111)

---

**Dashboard Owner:** danishahmed111  
**Last Updated:** April 2024
