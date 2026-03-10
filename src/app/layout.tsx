import "./globals.css"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import Navbar from "@/components/layout/Navbar"

export const metadata = {
  metadataBase: new URL("https://ght-clinic.vercel.app"),

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
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GHT Hair & Skin Clinic",
      },
    ],

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
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