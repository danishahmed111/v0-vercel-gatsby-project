/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Domain and URL Configuration - Owned by danishahmed111
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Owned-By',
          value: 'danishahmed111',
        },
        {
          key: 'X-Contact-Email',
          value: 'danishahmed012320@yahoo.in',
        },
        {
          key: 'X-Repository',
          value: 'https://github.com/danishahmed111/v0-vercel-gatsby-project',
        },
      ],
    },
  ],

  // Redirects for domain management
  redirects: async () => [
    {
      source: '/home',
      destination: '/',
      permanent: false,
    },
    {
      source: '/admin',
      destination: '/dashboard',
      permanent: true,
    },
  ],

  // Environment variables
  env: {
    NEXT_PUBLIC_APP_OWNER: 'danishahmed111',
    NEXT_PUBLIC_OWNER_EMAIL: 'danishahmed012320@yahoo.in',
    NEXT_PUBLIC_APP_NAME: 'Admin Dashboard',
    NEXT_PUBLIC_GITHUB_REPO: 'https://github.com/danishahmed111/v0-vercel-gatsby-project',
  },
}

export default nextConfig
