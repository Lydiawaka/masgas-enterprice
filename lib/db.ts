import { neon } from "@neondatabase/serverless"

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set")
}

const sql = neon(process.env.DATABASE_URL)

export interface Product {
  id: number
  name: string
  category: string
  price: number
  stock: number
  description?: string
  image_url?: string
  status: string
  created_at: string
  updated_at: string
}

export async function getProducts(): Promise<Product[]> {
  try {
    const products = await sql`
      SELECT * FROM products 
      ORDER BY created_at DESC
    `
    return products as Product[]
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export async function searchProducts(query: string): Promise<Product[]> {
  try {
    const searchTerm = `%${query}%`
    const products = await sql`
      SELECT * FROM products 
      WHERE name ILIKE ${searchTerm} 
      OR description ILIKE ${searchTerm}
      ORDER BY created_at DESC
    `
    return products as Product[]
  } catch (error) {
    console.error("Error searching products:", error)
    return []
  }
}
