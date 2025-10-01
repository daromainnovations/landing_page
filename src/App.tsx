import { HeroSection } from "./components/hero-section"
import { BenefitsSection } from "./components/benefits-section"
import { CTASection } from "./components/cta-section"
import { Footer } from "./components/footer"

export default function App() {
  return (
    <div className="min-h-screen app">
      <HeroSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </div>
  )
}
