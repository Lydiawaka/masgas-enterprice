import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import MasgasHeroSection from "@/components/hero"
import ProductSection from "@/components/product-section"


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Navigation />
      <MasgasHeroSection />
      <ProductSection />
      <Footer />
    </main>
  )
}
