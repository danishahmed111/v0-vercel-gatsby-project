import { Navbar } from '@/components/website/navbar'
import { Footer } from '@/components/website/footer'
import { ServiceCard } from '@/components/website/service-card'
import { getServices } from '@/lib/db'

export const metadata = {
  title: 'Services | danishahmed111',
  description: 'Professional services including consulting, development, design, and support',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600">Comprehensive solutions for your business needs</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                price={service.price}
                features={service.features || []}
                slug={service.slug}
              />
            ))}
          </div>

          {services.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">Services coming soon. Check back later!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a custom solution?</h2>
          <p className="text-lg text-gray-600 mb-8">Contact us to discuss your specific requirements</p>
          <a href="/contact" className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
