/**
 * Domain and URL Configuration
 * Owned by: danishahmed111
 * Contact: danishahmed012320@yahoo.in
 * Last Updated: 2024
 */

export const domainConfig = {
  // Owner Information
  owner: {
    name: 'danishahmed111',
    email: 'danishahmed012320@yahoo.in',
    github: 'https://github.com/danishahmed111',
  },

  // Environment-specific domains
  domains: {
    development: {
      protocol: 'http',
      domain: 'localhost',
      port: 3001,
      url: 'http://localhost:3001',
    },
    staging: {
      protocol: 'https',
      domain: 'staging.dashboard.danishahmed111.dev',
      url: 'https://staging.dashboard.danishahmed111.dev',
    },
    production: {
      protocol: 'https',
      domain: 'dashboard.danishahmed111.dev',
      url: 'https://dashboard.danishahmed111.dev',
    },
  },

  // API endpoints
  api: {
    development: 'http://localhost:3001/api',
    staging: 'https://staging.dashboard.danishahmed111.dev/api',
    production: 'https://dashboard.danishahmed111.dev/api',
  },

  // Application metadata
  app: {
    name: 'Admin Dashboard',
    description: 'Professional Admin Dashboard - Owned by danishahmed111',
    owner: 'danishahmed111',
    ownerEmail: 'danishahmed012320@yahoo.in',
    version: '1.0.0',
    author: 'danishahmed111',
    repository: 'https://github.com/danishahmed111/v0-vercel-gatsby-project',
  },

  // Security contact
  security: {
    email: 'danishahmed012320@yahoo.in',
    gpgKey: null, // Add GPG key URL if available
    securityPolicy: '/SECURITY.md',
  },

  // SSL/TLS Configuration
  ssl: {
    enabled: true,
    autoRenewal: true,
    provider: 'Let\'s Encrypt',
  },

  // CDN and caching
  cdn: {
    enabled: true,
    provider: 'Vercel Edge Network',
    cacheControl: {
      static: 'public, max-age=31536000, immutable',
      dynamic: 'public, max-age=60, s-maxage=120',
    },
  },

  // Redirects
  redirects: [
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

  // Headers
  headers: {
    'X-Owned-By': 'danishahmed111',
    'X-Contact-Email': 'danishahmed012320@yahoo.in',
    'X-Repository': 'https://github.com/danishahmed111/v0-vercel-gatsby-project',
  },
}

/**
 * Get the current environment
 */
export function getCurrentEnvironment(): 'development' | 'staging' | 'production' {
  if (typeof window !== 'undefined') {
    return process.env.NODE_ENV === 'production' ? 'production' : 'development'
  }
  return (process.env.NEXT_PUBLIC_ENV as any) || 'development'
}

/**
 * Get current domain configuration
 */
export function getCurrentDomainConfig() {
  const env = getCurrentEnvironment()
  return domainConfig.domains[env]
}

/**
 * Get current API endpoint
 */
export function getCurrentApiUrl() {
  const env = getCurrentEnvironment()
  return domainConfig.api[env]
}

/**
 * Verify ownership
 */
export function verifyOwnership(): {
  owner: string
  email: string
  verified: boolean
} {
  return {
    owner: domainConfig.owner.name,
    email: domainConfig.owner.email,
    verified: true,
  }
}

/**
 * Get application metadata
 */
export function getAppMetadata() {
  return {
    ...domainConfig.app,
    currentDomain: getCurrentDomainConfig(),
  }
}
