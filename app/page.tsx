import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import MasgasHeroSection from "@/components/hero"
import ProductSection from "@/components/product-section"
import Navigation from "@/components/navigation"



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
