import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-14">

                <div className="grid md:grid-cols-4 gap-10">

                    {/* Logo + About */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/ght-logo-footer.png"
                                alt="GHT Clinic"
                                width={260}
                                height={100}
                                className="h-20 w-auto"
                            />
                            <span className="font-bold text-lg">
                                GHT Clinic
                            </span>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            GHT Clinic provides advanced treatments for hair loss,
                            skin rejuvenation, acne solutions, and aesthetic dermatology
                            using modern technology and expert dermatologists.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">

                            <li>
                                <Link href="/" className="hover:text-primary">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link href="/results" className="hover:text-primary">
                                    Results
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact" className="hover:text-primary">
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            Treatments
                        </h3>

                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">

                            <li>Hair Transplant</li>
                            <li>PRP Hair Therapy</li>
                            <li>Laser Hair Removal</li>
                            <li>Acne Treatment</li>
                            <li>Skin Rejuvenation</li>

                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            Contact
                        </h3>

                        <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">

                            <li className="flex items-start gap-2">
                                <MapPin size={16} />
                                3, K-2, opp. ICICI Bank, DLF Phase 2, Sector 25, Gurugram, Sarhol, Haryana 122002
                            </li>

                            <li className="flex items-center gap-2">
                                <Phone size={16} />
                                +91 70154 86410
                            </li>

                            <li className="flex items-center gap-2">
                                <Mail size={16} />
                                contact@ghtclinic.com
                            </li>

                            <li className="flex items-center gap-2">
                                <Clock size={16} />
                                Mon – Sat : 09:00 AM – 6:30 PM
                            </li>

                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}

                <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">

                    © {new Date().getFullYear()} GHT Clinic. All rights reserved.

                </div>

            </div>
        </footer>
    )
}