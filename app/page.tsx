'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { BarChart3, Users, Lock, Zap } from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Real-time data visualization and comprehensive reporting',
  },
  {
    icon: Users,
    title: 'User Management',
    description: 'Complete user account management with role-based access control',
  },
  {
    icon: Lock,
    title: 'Secure Authentication',
    description: 'Enterprise-grade security with Supabase authentication',
  },
  {
    icon: Zap,
    title: 'Real-time Updates',
    description: 'Live data sync and instant notifications',
  },
]

export default function Home() {
  const router = useRouter()
  const { user } = useAuth()

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 bg-background/95 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-xs text-muted-foreground">Owned by danishahmed111</p>
          </div>
          <div className="flex gap-6 items-center">
            <Link href="/" className="hover:text-muted-foreground transition-colors">Home</Link>
            {user ? (
              <>
                <Link href="/dashboard" className="hover:text-muted-foreground transition-colors">Dashboard</Link>
                <Link href="/auth/login" className="text-sm">Sign Out</Link>
              </>
            ) : (
              <>
                <Link href="/auth/login" className="hover:text-muted-foreground transition-colors">Login</Link>
                <Link href="/auth/signup">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-background via-blue-50/30 to-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Owned by danishahmed111</span>
          </div>
          <h2 className="text-6xl font-bold mb-6 leading-tight">Professional Admin Dashboard</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A comprehensive dashboard solution with real-time analytics, user management, and advanced security features built with Next.js and Supabase.
          </p>
          <div className="flex gap-4 justify-center">
            {user ? (
              <Button size="lg" onClick={() => router.push('/dashboard')}>
                Go to Dashboard
              </Button>
            ) : (
              <>
                <Button size="lg" onClick={() => router.push('/auth/login')}>
                  Login
                </Button>
                <Button size="lg" variant="outline" onClick={() => router.push('/auth/signup')}>
                  Create Account
                </Button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold mb-4 text-center">Powerful Features</h3>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Everything you need to manage your business efficiently
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Ownership Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">About This Dashboard</h3>
          <Card className="p-8 bg-white">
            <p className="text-lg text-foreground mb-4">
              <strong>Owned and maintained by: danishahmed111</strong>
            </p>
            <p className="text-muted-foreground mb-4">
              Security Email: danishahmed012320@yahoo.in
            </p>
            <p className="text-sm text-muted-foreground">
              This dashboard is built with modern technologies including Next.js, React, Supabase, and Tailwind CSS. For security concerns, please refer to the SECURITY.md file.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Access your dashboard and start managing your business today.
          </p>
          {user ? (
            <Button size="lg" onClick={() => router.push('/dashboard')}>
              Go to Dashboard
            </Button>
          ) : (
            <Link href="/auth/login">
              <Button size="lg">Sign In Now</Button>
            </Link>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 text-center">
        <p className="text-sm text-gray-400">
          Admin Dashboard © 2024 by danishahmed111. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
