import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/Services";
import ReviewsSection from "@/components/sections/Reviews";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection"
import CTASection from "@/components/sections/CTASection"
import ContactForm from "@/components/forms/ContactForm"
import Footer from "@/components/sections/Footer"

export default function HomePage() {
  return (
    <main>

      <HeroSection />

      <ServicesSection />

      <ReviewsSection />

      <BeforeAfterSection />

      <CTASection />

      <ContactForm />

      <Footer />

    </main>
  )
}