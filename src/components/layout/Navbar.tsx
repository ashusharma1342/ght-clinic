"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)
    const { theme, setTheme } = useTheme()

    return (
        // <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">

        //     <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        //         {/* Logo */}

        //         <Link href="/" className="flex items-center gap-3">
        //             <Image
        //                 src="/ght-logo-navbar.png"
        //                 alt="GHT Hair & Skin Clinic"
        //                 width={120}
        //                 height={50}
        //                 className="h-12 w-auto"
        //                 priority
        //             />
        //             <span className="font-bold text-lg">
        //                 Clinic
        //             </span>
        //         </Link>

        //         {/* Desktop Menu */}

        //         <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

        //             <Link href="/" className="hover:text-primary transition">
        //                 Home
        //             </Link>

        //             <Link href="/services" className="hover:text-primary transition">
        //                 Services
        //             </Link>

        //             {/* <Link href="/results" className="hover:text-primary transition">
        //                 Results
        //             </Link> */}

        //         </nav>

        //         {/* Right Controls */}

        //         <div className="flex items-center gap-3">

        //             {/* Dark Mode Toggle */}

        //             <button
        //                 aria-label="Toggle Dark Mode"
        //                 onClick={() =>
        //                     setTheme(theme === "dark" ? "light" : "dark")
        //                 }
        //                 className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        //             >
        //                 {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        //             </button>

        //             {/* CTA */}

        //             <Link
        //                 href="/contact"
        //                 className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-full"
        //             >
        //                 Book Appointment
        //             </Link>

        //             {/* Mobile Menu Button */}

        //             {/* <button
        //                 className="md:hidden"
        //                 onClick={() => setMenuOpen(!menuOpen)}
        //                 aria-label="Toggle Menu"
        //             >
        //                 {menuOpen ? <X size={22} /> : <Menu size={22} />}
        //             </button> */}

        //         </div>

        //     </div>

        //     {/* Mobile Menu */}

        //     {menuOpen && (
        //         <div className="md:hidden border-t border-gray-200 dark:border-gray-800">

        //             <nav className="flex flex-col px-6 py-6 gap-4 text-sm">

        //                 <Link
        //                     href="/"
        //                     onClick={() => setMenuOpen(false)}
        //                     className="hover:text-primary"
        //                 >
        //                     Home
        //                 </Link>

        //                 <Link
        //                     href="/services"
        //                     onClick={() => setMenuOpen(false)}
        //                     className="hover:text-primary"
        //                 >
        //                     Services
        //                 </Link>

        //                 {/*<Link
        //                     href="/results"
        //                     onClick={() => setMenuOpen(false)}
        //                     className="hover:text-primary"
        //                 >
        //                     Results
        //                 </Link> */}

        //             </nav>

        //         </div>
        //     )}
        // </header>
        <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-center md:justify-between relative">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="GHT Hair & Skin Clinic"
                        width={150}
                        height={60}
                        priority
                        className="w-[110px] sm:w-[130px] lg:w-[150px] h-auto object-contain"
                    />
                </Link>
            </div>
        </header>
    )
}