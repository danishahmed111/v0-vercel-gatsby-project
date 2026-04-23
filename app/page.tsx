import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const projects = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with React and Node.js',
    image: 'bg-gradient-to-br from-blue-400 to-purple-500',
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    description: 'Real-time data visualization and analytics platform',
    image: 'bg-gradient-to-br from-green-400 to-blue-500',
  },
  {
    id: 'mobile-app',
    title: 'Mobile Fitness App',
    description: 'Cross-platform mobile app with real-time tracking',
    image: 'bg-gradient-to-br from-orange-400 to-red-500',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 bg-background/95 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-muted-foreground transition-colors">Home</Link>
            <Link href="/projects" className="hover:text-muted-foreground transition-colors">Projects</Link>
            <Link href="/about" className="hover:text-muted-foreground transition-colors">About</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Showcasing exceptional web and mobile applications built with modern technologies
          </p>
          <Link href="/projects">
            <Button size="lg">Explore My Work</Button>
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-12 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <div className={`h-48 ${project.image}`} />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <span className="text-blue-600 font-medium hover:underline">Learn More →</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Interested in collaborating or have a question? Get in touch!
          </p>
          <Button variant="outline" size="lg">Contact Me</Button>
        </div>
      </section>
    </main>
  )
}
