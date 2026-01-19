import { NextResponse } from "next/server"
import { getProducts, searchProducts } from "@/lib/db"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('search')

  try {
    let products
    if (query) {
      products = await searchProducts(query)
    } else {
      products = await getProducts()
    }
    return NextResponse.json(products)
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}
