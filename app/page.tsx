import { Suspense } from 'react'
import { Navbar } from '@/components/website/navbar'
import { Footer } from '@/components/website/footer'
import { HeroSection } from '@/components/website/hero'
import { ServiceCard } from '@/components/website/service-card'
import { ProductCard } from '@/components/website/product-card'
import { getServices, getFeaturedProducts, getTestimonials } from '@/lib/db'
import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

async function ServicesSection() {
  try {
    const services = await getServices()
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Professional solutions tailored to your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
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
        </div>
      </section>
    )
  } catch (error) {
    return null
  }
}

async function FeaturedProducts() {
  try {
    const products = await getFeaturedProducts()
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Explore our curated selection</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                slug={product.slug}
                price={product.price}
                sale_price={product.sale_price}
                image_url={product.image_url}
                is_featured={product.is_featured}
              />
            ))}
          </div>
        </div>
      </section>
    )
  } catch (error) {
    return null
  }
}

async function TestimonialsSection() {
  try {
    const testimonials = await getTestimonials()
    if (testimonials.length === 0) return null

    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">What our clients say about us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial) => (
              <Card key={testimonial.id} className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author_name}</p>
                  {testimonial.author_title && (
                    <p className="text-sm text-gray-600">{testimonial.author_title}</p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  } catch (error) {
    return null
  }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />

      <Suspense fallback={<div className="h-96 bg-gray-50" />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<div className="h-96" />}>
        <FeaturedProducts />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-gray-50" />}>
        <TestimonialsSection />
      </Suspense>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to work together?</h2>
          <p className="text-xl text-blue-100 mb-8">Let&apos;s bring your ideas to life</p>
          <a href="/contact" className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
