import { Navbar } from '@/components/website/navbar'
import { Footer } from '@/components/website/footer'
import { Card } from '@/components/ui/card'
import { CheckCircle, Lightbulb, Target } from 'lucide-react'

export const metadata = {
  title: 'About | danishahmed111',
  description: 'Learn about danishahmed111 and my professional journey',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">About Me</h1>
            <p className="text-xl text-gray-600">Building digital solutions that make a difference</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image */}
            <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-7xl font-bold mb-2">D</div>
                <p className="text-2xl font-semibold">danishahmed111</p>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Who I Am</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I&apos;m danishahmed111, a passionate digital expert dedicated to creating innovative solutions that drive business growth. With over 5 years of experience in web development, consulting, and digital transformation, I&apos;ve helped more than 30 businesses establish and grow their digital presence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My focus is on combining strategic thinking with technical expertise to deliver solutions that not only meet your current needs but also position you for future success.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Development</h4>
                    <p className="text-gray-600 text-sm">Full-stack web development with modern technologies</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Strategic Consulting</h4>
                    <p className="text-gray-600 text-sm">Business strategy and digital transformation guidance</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                    <p className="text-gray-600 text-sm">Ongoing maintenance and support for your projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Staying at the forefront of technology to bring cutting-edge solutions</p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">Delivering high-quality work that exceeds expectations</p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliability</h3>
              <p className="text-gray-600">Being a trusted partner you can depend on</p>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 py-12 border-t border-b border-gray-200">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to collaborate?</h2>
          <p className="text-xl text-blue-100 mb-8">Let&apos;s discuss your project and how I can help</p>
          <a href="/contact" className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
