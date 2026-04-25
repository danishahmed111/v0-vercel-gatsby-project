import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                Welcome to danishahmed111
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Digital Solutions & Expert Services
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Crafting beautiful, scalable digital experiences. From consulting to development, I help businesses thrive in the digital landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/services">
                <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700">
                  Explore Services
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Get in Touch
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <p className="text-gray-600 text-sm">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">30+</div>
                <p className="text-gray-600 text-sm">Happy Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">5+</div>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl font-bold mb-4">D</div>
                  <p className="text-2xl font-semibold">danishahmed111</p>
                  <p className="text-blue-100 mt-2">Digital Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
