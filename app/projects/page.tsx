import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment processing and inventory management',
    image: 'bg-gradient-to-br from-blue-400 to-purple-500',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    year: 2024,
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    description: 'Real-time analytics platform with data visualization and reporting capabilities',
    image: 'bg-gradient-to-br from-green-400 to-blue-500',
    technologies: ['Next.js', 'TypeScript', 'Recharts', 'Supabase'],
    year: 2024,
  },
  {
    id: 'mobile-app',
    title: 'Mobile Fitness App',
    description: 'Cross-platform mobile fitness tracking app with social features and coaching',
    image: 'bg-gradient-to-br from-orange-400 to-red-500',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    year: 2023,
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-muted-foreground">
            A collection of web and mobile applications showcasing my skills and experience
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                  <div className={`h-48 ${project.image}`} />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
