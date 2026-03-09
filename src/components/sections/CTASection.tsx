import Link from "next/link"

export default function CTASection() {

    return (

        <section
            aria-label="Clinic Consultation Call To Action"
            className="py-24"
        >

            <div className="container">

                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-pastel-primary to-pastel-secondary p-12 text-center text-white">

                    {/* HEADLINE */}

                    <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white">

                        Start Your Hair & Skin Transformation Today

                    </h2>

                    <p className="mt-4 max-w-2xl mx-auto text-lg">

                        Book a free consultation with our dermatology specialists
                        and discover the most advanced hair transplant and skin
                        treatment solutions available at GHT Clinic.

                    </p>


                    {/* CTA BUTTONS */}

                    <div className="flex flex-wrap justify-center gap-6 mt-10">

                        <Link
                            href="/contact"
                            className="px-7 py-3 rounded-lg bg-white text-gray-900 font-medium hover:opacity-90 transition"
                        >
                            Book Free Consultation
                        </Link>

                        <a
                            href="https://wa.me/917015486410?text=Hello%20GHT%20Clinic,%0A%0AI%20would%20like%20to%20book%20a%20consultation.%0A%0AName:%0APhone:%0ATreatment%20Interested%20In:%0APreferred%20Date:%0A%0APlease%20assist."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-7 py-3 rounded-lg border border-white hover:bg-white hover:text-gray-900 transition"
                        >
                            WhatsApp Consultation
                        </a>

                    </div>


                    {/* TRUST INDICATORS */}

                    <div className="flex justify-center gap-10 mt-12 text-sm">

                        <div>
                            <strong className="block text-xl">5000+</strong>
                            Successful Treatments
                        </div>

                        <div>
                            <strong className="block text-xl">10+</strong>
                            Years Experience
                        </div>

                        <div>
                            <strong className="block text-xl">4.9★</strong>
                            Google Rating
                        </div>

                    </div>

                </div>

            </div>

        </section>

    )

}