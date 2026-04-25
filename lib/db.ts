import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase credentials')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

// Services
export async function getServices() {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true })

  if (error) throw error
  return data
}

export async function getServiceBySlug(slug: string) {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()

  if (error) throw error
  return data
}

// Products
export async function getProducts(category?: string) {
  let query = supabase
    .from('products')
    .select('*')
    .eq('is_active', true)

  if (category) {
    query = query.eq('category', category)
  }

  const { data, error } = await query.order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function getProductBySlug(slug: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()

  if (error) throw error
  return data
}

export async function getFeaturedProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .eq('is_featured', true)
    .limit(6)

  if (error) throw error
  return data
}

// Testimonials
export async function getTestimonials() {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true })

  if (error) throw error
  return data
}

// Blog Posts
export async function getBlogPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('is_published', true)
    .order('published_at', { ascending: false })

  if (error) throw error
  return data
}

export async function getBlogPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single()

  if (error) throw error
  return data
}

// Contact Messages
export async function createContactMessage(message: {
  name: string
  email: string
  subject?: string
  message: string
  phone?: string
}) {
  const { data, error } = await supabase
    .from('contact_messages')
    .insert([message])
    .select()

  if (error) throw error
  return data
}

// Orders
export async function createOrder(order: {
  order_number: string
  customer_email: string
  customer_name: string
  customer_phone?: string
  items: any[]
  total_amount: number
  payment_method?: string
  shipping_address?: any
  billing_address?: any
}) {
  const { data, error } = await supabase
    .from('orders')
    .insert([order])
    .select()

  if (error) throw error
  return data
}

// Cart
export async function getCartItems(sessionId: string) {
  const { data, error } = await supabase
    .from('cart_items')
    .select('*, products(*)')
    .eq('session_id', sessionId)

  if (error) throw error
  return data
}

export async function addToCart(sessionId: string, productId: string, quantity: number) {
  const { data, error } = await supabase
    .from('cart_items')
    .insert([{ session_id: sessionId, product_id: productId, quantity }])
    .select()

  if (error) throw error
  return data
}

export async function removeFromCart(cartItemId: string) {
  const { error } = await supabase
    .from('cart_items')
    .delete()
    .eq('id', cartItemId)

  if (error) throw error
}
