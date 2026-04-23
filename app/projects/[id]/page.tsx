'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { useParams } from 'next/navigation'

const projectData = {
  'ecommerce-platform': {
    title: 'E-Commerce Platform',
    subtitle: 'Full-Stack E-Commerce Solution',
    description: 'A comprehensive e-commerce platform built for modern online retail.',
    image: 'bg-gradient-to-br from-blue-400 to-purple-500',
    year: 2024,
    duration: '6 months',
    role: 'Full Stack Developer',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Stripe', 'Docker'],
    
    challenge: `The client needed a scalable e-commerce platform that could handle thousands of products and concurrent users. Traditional solutions were either too expensive or lacked customization options. We needed to build something that was both cost-effective and feature-rich.`,
    
    solution: `We built a modern stack using React for the frontend and Node.js/Express for the backend, with PostgreSQL for data persistence. We implemented Stripe for secure payment processing, Redis for caching, and Docker for deployment. The platform includes real-time inventory management, advanced search capabilities, and an admin dashboard.`,
    
    results: [
      'Reduced page load time by 60% through optimization and caching',
      'Increased conversion rate by 35% with improved UX',
      'Handled 10x traffic during peak seasons without downtime',
      'Reduced operational costs by 40% compared to existing solutions',
    ],
    
    features: [
      'Product catalog with advanced filtering and search',
      'Shopping cart with real-time updates',
      'Secure checkout with multiple payment options',
      'Order tracking and management',
      'Admin dashboard with analytics',
      'Customer reviews and ratings',
      'Responsive design for all devices',
    ],
    
    liveUrl: '#',
    githubUrl: '#',
  },
  'saas-dashboard': {
    title: 'SaaS Analytics Dashboard',
    subtitle: 'Real-Time Analytics Platform',
    description: 'Enterprise analytics platform with real-time data visualization.',
    image: 'bg-gradient-to-br from-green-400 to-blue-500',
    year: 2024,
    duration: '4 months',
    role: 'Frontend & Backend Developer',
    technologies: ['Next.js', 'TypeScript', 'Recharts', 'Supabase', 'TailwindCSS', 'WebSockets'],
    
    challenge: `The client required a dashboard that could display real-time analytics for large datasets. Existing solutions were expensive and lacked customization. We needed a platform that could scale with their growing user base.`,
    
    solution: `We developed a modern analytics dashboard using Next.js and TypeScript for type safety. We used Supabase for backend services and real-time capabilities with WebSockets. Recharts provided beautiful data visualizations, and TailwindCSS ensured a polished UI.`,
    
    results: [
      'Processed 1M+ data points daily without performance issues',
      'Real-time dashboards with <100ms latency',
      'Reduced query response time by 70%',
      'Improved user retention by 45%',
    ],
    
    features: [
      'Real-time data visualization',
      'Custom dashboard creation',
      'Advanced filtering and segmentation',
      'Automated report generation',
      'Team collaboration features',
      'Mobile-responsive design',
      'API access for integrations',
    ],
    
    liveUrl: '#',
    githubUrl: '#',
  },
  'mobile-app': {
    title: 'Mobile Fitness App',
    subtitle: 'Cross-Platform Fitness Tracker',
    description: 'Comprehensive fitness app with social features and coaching.',
    image: 'bg-gradient-to-br from-orange-400 to-red-500',
    year: 2023,
    duration: '5 months',
    role: 'Full Stack Mobile Developer',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'Mapbox'],
    
    challenge: `Users wanted a fitness app that worked seamlessly on both iOS and Android, with social features and real-time tracking. Building two separate native apps was costly and time-consuming. We needed a cross-platform solution.`,
    
    solution: `We used React Native with Expo to develop a single codebase for both platforms. Firebase provided backend services and real-time database capabilities. Redux managed state complexity, and Mapbox enabled location-based features.`,
    
    results: [
      '50K+ active users within first 3 months',
      '4.8-star rating on both app stores',
      '60% user retention after 30 days',
      '10M+ miles tracked collectively',
    ],
    
    features: [
      'Workout tracking and logging',
      'GPS route mapping',
      'Social feeds and challenges',
      'Personal coaching interface',
      'Nutrition tracking',
      'Progress analytics',
      'Wearable device integration',
    ],
    
    liveUrl: '#',
    githubUrl: '#',
  },
}

export default function ProjectPage() {
  const params = useParams()
  const projectId = params.id as string
  const project = projectData[projectId as keyof typeof projectData]

  if (!project) {
    return (
      <main className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className={`${project.image} h-80`} />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-12 border-b">
          <Link href="/projects" className="text-muted-foreground hover:text-foreground mb-4 inline-block">
            ← Back to Projects
          </Link>
          <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-4">{project.subtitle}</p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>📅 {project.year}</span>
            <span>⏱️ {project.duration}</span>
            <span>👤 {project.role}</span>
          </div>
        </div>

        {/* Technologies */}
        <div className="py-8 border-b">
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </div>

        {/* Challenge */}
        <div className="py-8 border-b">
          <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{project.challenge}</p>
        </div>

        {/* Solution */}
        <div className="py-8 border-b">
          <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{project.solution}</p>
        </div>

        {/* Features */}
        <div className="py-8 border-b">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="py-8 border-b">
          <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.results.map((result) => (
              <Card key={result} className="p-4 bg-muted">
                <p className="text-muted-foreground">{result}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="py-12 flex gap-4">
          <Link href={project.liveUrl}>
            <Button>View Live Project</Button>
          </Link>
          <Link href={project.githubUrl}>
            <Button variant="outline">View on GitHub</Button>
          </Link>
        </div>

        {/* Next Project */}
        <div className="py-12 border-t text-center">
          <p className="text-muted-foreground mb-4">Interested in more?</p>
          <Link href="/projects">
            <Button variant="outline">Explore More Projects</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
