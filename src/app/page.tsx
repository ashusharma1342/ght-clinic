import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/Services";
import ReviewsSection from "@/components/sections/Reviews";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection"
import CTASection from "@/components/sections/CTASection"
import ContactForm from "@/components/forms/ContactForm"
import Footer from "@/components/sections/Footer"
import PremiumHero from "@/components/sections/PremiumHero";
import AIAssistant from "@/components/ai/AIAssistant";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <main>

      {/* <HeroSection /> */}
      <PremiumHero />

      <ServicesSection />

      <ReviewsSection />

      <BeforeAfterSection />

      <CTASection />

      <ContactForm />
      <Footer />
      <Suspense fallback={null}>

        <AIAssistant />
      </Suspense>

    </main>
  )
}