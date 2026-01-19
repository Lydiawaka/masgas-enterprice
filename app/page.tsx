import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import MasgasHeroSection from "@/components/hero"
import ProductSection from "@/components/product-section"
import Navigation from "@/components/navigation"
import { getProducts } from "@/lib/db"

export const dynamic = 'force-dynamic';

export default async function Home() {
  const products = await getProducts();

  const productSchema = products.map((product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.image_url || "https://masgas.co.ke/placeholder.png",
    "description": product.description,
    "sku": product.id,
    "brand": {
      "@type": "Brand",
      "name": "Masgas" // Or product.category if it serves as brand
    },
    "offers": {
      "@type": "Offer",
      "url": "https://masgas.co.ke", // Ideally deep link but homepage works for single-page catalog style
      "priceCurrency": "KES",
      "price": product.price,
      "availability": product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  }));

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Header />
      <Navigation />
      <MasgasHeroSection />
      <ProductSection initialProducts={products} />
      <Footer />
    </main>
  )
}
