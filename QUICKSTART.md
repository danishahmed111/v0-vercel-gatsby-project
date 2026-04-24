# Quick Start Guide

**Dashboard Owner:** danishahmed111  
**Email:** danishahmed012320@yahoo.in

## 1. Setup

### Environment Variables
Add these to your `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
POSTGRES_URL=your_database_url
SUPABASE_JWT_SECRET=your_jwt_secret
```

### Install Dependencies
```bash
pnpm install
```

## 2. Database Setup

1. Go to your Supabase project
2. Navigate to SQL Editor
3. Copy and paste the entire content from `scripts/01_init_schema.sql`
4. Execute the SQL to create tables and enable RLS

## 3. Run Development Server
```bash
pnpm dev
```

Visit http://localhost:3000 to see the application.

## 4. First Login

### Create an Account
1. Click "Sign Up" on the home page
2. Enter your email and password
3. Verify your email (check spam folder)
4. Login with your credentials

### Access Dashboard
1. After login, you'll be redirected to `/dashboard`
2. Explore Analytics, Users, Reports, and Settings sections
3. All data is stored in your Supabase database

## 5. Key Features to Explore

### Dashboard Overview (`/dashboard`)
- Real-time statistics
- Activity feeds
- Quick metrics
- Business insights

### Analytics (`/dashboard/analytics`)
- Growth trend charts
- Sales by product
- Device distribution
- Top pages reporting

### User Management (`/dashboard/users`)
- View all users
- Filter by role and status
- Manage permissions
- Edit or delete users

### Reports (`/dashboard/reports`)
- Generate custom reports
- Download reports
- View report history

### Settings (`/dashboard/settings`)
- Update profile
- Change password
- 2FA setup
- Notification preferences
- Permission management

## 6. Database Schema

The dashboard uses these main tables:

| Table | Purpose |
|-------|---------|
| `users` | User accounts with roles |
| `projects` | Project tracking |
| `analytics` | Metrics and KPIs |
| `dashboard_widgets` | Widget customization |
| `activity_logs` | Audit trail |

All tables have Row Level Security enabled for data privacy.

## 7. Authentication Flow

```
User Registration → Email Verification → Login → Dashboard Access
```

- All passwords are securely hashed
- Sessions managed by Supabase Auth
- Automatic logout on token expiry

## 8. Build for Production

```bash
pnpm build
pnpm start
```

## 9. Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel settings
4. Deploy automatically on push

## 10. Troubleshooting

### Can't login?
- Check email verification
- Ensure environment variables are set correctly
- Check Supabase project status

### Database errors?
- Verify SQL migrations ran successfully
- Check Supabase connection string
- Ensure RLS policies are enabled

### Missing components?
- Run `pnpm install` again
- Clear `.next` folder: `rm -rf .next`
- Restart dev server

## 11. Security

See `SECURITY.md` for:
- Reporting security vulnerabilities
- Security best practices
- Data protection policies
- Authentication guidelines

## 12. Support

**Owner:** danishahmed111  
**Email:** danishahmed012320@yahoo.in  
**GitHub:** https://github.com/danishahmed111

---

Happy building! 🚀
