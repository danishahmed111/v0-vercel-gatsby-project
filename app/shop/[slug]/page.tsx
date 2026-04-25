'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '@/components/website/navbar'
import { Footer } from '@/components/website/footer'
import { Button } from '@/components/ui/button'
import { getProductBySlug, getProducts } from '@/lib/db'
import { useCart } from '@/lib/cart-context'
import { ProductCard } from '@/components/website/product-card'
import { Star, ShoppingCart, Heart } from 'lucide-react'
import { toast } from 'sonner'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params
  const [product, setProduct] = useState<any>(null)
  const [relatedProducts, setRelatedProducts] = useState<any[]>([])
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const [loading, setLoading] = useState(true)
  const { addToCart } = useCart()

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await getProductBySlug(slug)
        setProduct(data)

        // Load related products from same category
        if (data.category) {
          const related = await getProducts(data.category)
          setRelatedProducts(related.filter((p: any) => p.id !== data.id).slice(0, 4))
        }
      } catch (error) {
        console.error('Error loading product:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProduct()
  }, [slug])

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="flex items-center justify-center py-20">
          <p className="text-lg text-gray-600">Loading product...</p>
        </div>
        <Footer />
      </main>
    )
  }

  if (!product) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="flex items-center justify-center py-20">
          <p className="text-lg text-gray-600">Product not found</p>
        </div>
        <Footer />
      </main>
    )
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      productId: product.id,
      name: product.name,
      price: product.sale_price || product.price,
      quantity,
      image: product.image_url,
    })
    toast.success(`${product.name} added to cart!`)
    setQuantity(1)
  }

  const discount = product.sale_price
    ? Math.round(((product.price - product.sale_price) / product.price) * 100)
    : 0

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="flex items-center justify-center bg-gray-100 rounded-lg h-96 lg:h-full overflow-hidden">
              {product.image_url ? (
                <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-400">No image available</span>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                {product.category && (
                  <p className="text-sm text-blue-600 font-semibold uppercase mb-2">{product.category}</p>
                )}
                <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">(24 reviews)</p>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-gray-900">
                  ${(product.sale_price || product.price).toFixed(2)}
                </span>
                {product.sale_price && (
                  <span className="text-2xl text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </span>
                )}
                {discount > 0 && (
                  <span className="px-4 py-2 bg-red-500 text-white rounded-full font-bold">
                    Save {discount}%
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>

              {/* Stock Status */}
              <div>
                {product.stock > 0 ? (
                  <p className="text-green-600 font-semibold">In Stock ({product.stock} available)</p>
                ) : (
                  <p className="text-red-600 font-semibold">Out of Stock</p>
                )}
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-50"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>

                <Button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-1 gap-2 bg-blue-600 hover:bg-blue-700 text-lg py-6"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </Button>

                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Heart size={24} className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'} />
                </button>
              </div>

              {/* Specifications */}
              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">SKU:</span>
                  <span className="font-semibold">{product.sku || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-semibold capitalize">{product.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  id={relatedProduct.id}
                  name={relatedProduct.name}
                  slug={relatedProduct.slug}
                  price={relatedProduct.price}
                  sale_price={relatedProduct.sale_price}
                  image_url={relatedProduct.image_url}
                  is_featured={relatedProduct.is_featured}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
