import Image from "next/image";
import Link from "next/link";

export default function PremiumHero() {
    return (
        <section className="relative min-h-screen pt-20 md:pt-0 flex items-center">

            {/* Background */}

            <div className="absolute inset-0">
                <Image
                    src="/images/hero-clinic.jpg"
                    alt="GHT Hair and Skin Clinic"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>

            {/* Content */}

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}

                <div className="text-white">

                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                        Advanced Hair & Skin
                        <span className="text-teal-400"> Treatments</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-200 max-w-lg">
                        Experience world-class dermatology and hair restoration
                        treatments at GHT Clinic with modern technology and
                        experienced specialists.
                    </p>

                    {/* Trust Stats */}

                    <div className="mt-8 flex gap-8">

                        <div>
                            <p className="text-3xl font-bold text-teal-400">5000+</p>
                            <p className="text-sm text-gray-300">Happy Patients</p>
                        </div>

                        <div>
                            <p className="text-3xl font-bold text-teal-400">10+</p>
                            <p className="text-sm text-gray-300">Years Experience</p>
                        </div>

                        <div>
                            <p className="text-3xl font-bold text-teal-400">4.9★</p>
                            <p className="text-sm text-gray-300">Google Rating</p>
                        </div>

                    </div>

                    {/* CTA Buttons */}

                    <div className="mt-10 flex flex-wrap gap-4">

                        <Link
                            href="/contact"
                            className="bg-teal-600 hover:bg-teal-700 text-white px-7 py-3 rounded-full font-medium"
                        >
                            Book Consultation
                        </Link>

                        <a
                            href="/services"
                            className="border border-white px-7 py-3 rounded-full hover:bg-white hover:text-black transition"
                        >
                            Explore Treatments
                        </a>

                    </div>

                </div>

                {/* Doctor Card */}

                <div className="hidden lg:block">

                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">

                        <Image
                            src="/images/doctor.png"
                            alt="Clinic Doctor"
                            width={400}
                            height={500}
                            className="rounded-xl"
                        />

                        <h3 className="text-white text-xl font-semibold mt-4">
                            Dr. Rakesh Kumar
                        </h3>

                        <p className="text-gray-300 text-sm">
                            Hair & Skin Expert
                        </p>

                        <p className="text-gray-400 text-sm mt-2">
                            10+ years experience in advanced hair restoration
                            and skin treatments.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}