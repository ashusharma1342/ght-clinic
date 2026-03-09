import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {

    return (

        <section
            aria-label="Hair and Skin Clinic Introduction"
            className="relative overflow-hidden"
        >

            <div className="container grid lg:grid-cols-2 gap-12 items-center py-20">

                {/* TEXT CONTENT */}

                <div>

                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight">

                        Advanced Hair Transplant & Skin Treatments
                        <span className="text-pastel-primary">
                            {" "}for Natural Confidence
                        </span>

                    </h1>

                    <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">

                        GHT Clinic provides advanced hair restoration and professional
                        dermatology treatments using modern technology and expert care.
                        Our goal is to help you achieve healthier skin and natural hair
                        growth with safe and proven procedures.

                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">

                        <Link
                            href="/contact"
                            className="px-6 py-3 rounded-lg bg-pastel-primary text-white font-medium hover:opacity-90 transition"
                        >
                            Book Free Consultation
                        </Link>

                        <Link
                            // href="/services"
                            href=""
                            className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                        >
                            Explore Treatments
                        </Link>

                    </div>

                    {/* TRUST BADGES */}

                    <div className="flex gap-8 mt-10 text-sm text-gray-500 dark:text-gray-400">

                        <div>
                            <strong className="block text-lg text-gray-900 dark:text-white">
                                10+
                            </strong>
                            Years Experience
                        </div>

                        <div>
                            <strong className="block text-lg text-gray-900 dark:text-white">
                                5K+
                            </strong>
                            Successful Treatments
                        </div>

                        <div>
                            <strong className="block text-lg text-gray-900 dark:text-white">
                                4.9★
                            </strong>
                            Patient Rating
                        </div>

                    </div>

                </div>


                {/* HERO IMAGE */}

                <div className="relative">

                    <Image
                        src="/images/hero-clinic.jpg"
                        alt="Hair transplant and skin treatment clinic consultation"
                        width={600}
                        height={500}
                        priority
                        className="rounded-2xl shadow-xl object-cover"
                    />

                </div>

            </div>


            {/* BACKGROUND DECORATION */}

            <div
                className="absolute -top-32 -right-32 w-96 h-96 bg-pastel-secondary opacity-20 rounded-full blur-3xl"
                aria-hidden="true"
            />

            <div
                className="absolute -bottom-32 -left-32 w-96 h-96 bg-pastel-accent opacity-20 rounded-full blur-3xl"
                aria-hidden="true"
            />

        </section>

    )

}