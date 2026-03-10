import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/Services";
import ReviewsSection from "@/components/sections/Reviews";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection"
import CTASection from "@/components/sections/CTASection"
import ContactForm from "@/components/forms/ContactForm"
import Footer from "@/components/sections/Footer"
import PremiumHero from "@/components/sections/PremiumHero";

export const metadata = {
  title: "GHT Hair & Skin Clinic | Best Hair Transplant & Skin Specialist",
  description:
    "GHT Hair & Skin Clinic offers advanced hair transplant, PRP therapy, and skin treatments. Book consultation with experienced dermatology specialists.",
  keywords: [
    "hair transplant clinic",
    "PRP hair treatment",
    "dermatologist clinic",
    "hair loss treatment",
    "best skin doctor",
  ],
  alternates: {
    canonical: "https://ght-clinic.vercel.app",
  },

  openGraph: {
    title: "GHT Hair & Skin Clinic",
    description:
      "Advanced hair transplant and dermatology treatments at GHT Clinic.",
    url: "https://ght-clinic.vercel.app",
    siteName: "GHT Clinic",
    images: [
      {
        url: "images/doctor.png",
        width: 600,
        height: 330,
        alt: "GHT Hair & Skin Clinic",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

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

    </main>
  )
}