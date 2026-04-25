import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'

interface ServiceCardProps {
  id: string
  title: string
  description: string
  icon?: string
  price?: number
  features?: string[]
  slug?: string
}

export function ServiceCard({
  title,
  description,
  icon,
  price,
  features = [],
  slug,
}: ServiceCardProps) {
  const href = slug ? `/services/${slug}` : '#'

  return (
    <Link href={href}>
      <div className="group h-full bg-white rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 overflow-hidden">
        {/* Header */}
        <div className="p-6 pb-4">
          {icon && (
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-200 transition-colors">
              {icon}
            </div>
          )}
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Features */}
        {features.length > 0 && (
          <div className="px-6 py-4 border-t border-gray-100">
            <ul className="space-y-2">
              {features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                  <Check size={16} className="text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between bg-gray-50 group-hover:bg-blue-50 transition-colors">
          {price && (
            <div className="text-lg font-bold text-gray-900">
              ${price.toFixed(2)}
            </div>
          )}
          <Button
            size="sm"
            variant="ghost"
            className="gap-2 text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-transform"
          >
            Learn More
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </Link>
  )
}
