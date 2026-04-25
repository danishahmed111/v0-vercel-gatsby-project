import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Heart } from 'lucide-react'
import { useState } from 'react'

interface ProductCardProps {
  id: string
  name: string
  slug: string
  price: number
  sale_price?: number
  image_url?: string
  is_featured?: boolean
}

export function ProductCard({
  id,
  name,
  slug,
  price,
  sale_price,
  image_url,
  is_featured,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const discount = sale_price ? Math.round(((price - sale_price) / price) * 100) : 0

  return (
    <div className="group bg-white rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="relative bg-gray-100 overflow-hidden h-64 md:h-72">
        {image_url ? (
          <Image
            src={image_url}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
            <span className="text-gray-400">No Image</span>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-4 right-4 flex gap-2">
          {is_featured && (
            <span className="px-3 py-1 bg-yellow-400 text-gray-900 text-xs font-semibold rounded-full">
              Featured
            </span>
          )}
          {discount > 0 && (
            <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
              -{discount}%
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 left-4 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all"
        >
          <Heart
            size={20}
            className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{name}</h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-gray-900">
            ${(sale_price || price).toFixed(2)}
          </span>
          {sale_price && (
            <span className="text-sm text-gray-500 line-through">
              ${price.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Link href={`/shop/${slug}`} className="w-full">
          <Button className="w-full gap-2 bg-blue-600 hover:bg-blue-700">
            <ShoppingCart size={18} />
            View Product
          </Button>
        </Link>
      </div>
    </div>
  )
}
