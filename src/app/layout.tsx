import "./globals.css"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import Navbar from "@/components/layout/Navbar"

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
        url: "https://ght-clinic.vercel.app/images/doctor.png",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>

      </body>
    </html>
  )
}