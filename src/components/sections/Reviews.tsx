import { reviews } from "@/data/reviews"

export default function Reviews() {

    return (

        <section
            aria-label="Patient Reviews"
            className="py-24 bg-white dark:bg-gray-950"
        >

            <div className="container">

                {/* SECTION HEADER */}

                <div className="text-center max-w-3xl mx-auto">

                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">

                        Trusted by Our Patients

                    </h2>

                    <p className="mt-4 text-gray-600 dark:text-gray-300">

                        See what our patients say about their experience with hair
                        transplant and skin treatments at GHT Clinic.

                    </p>

                </div>

                {/* REVIEWS GRID */}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

                    {reviews.map((review, index) => (

                        <article
                            key={index}
                            className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md transition"
                        >

                            {/* STARS */}

                            <div className="flex mb-3">

                                {Array.from({ length: review.rating }).map((_, i) => (

                                    <span key={i} className="text-yellow-400 text-lg">
                                        ★
                                    </span>

                                ))}

                            </div>

                            {/* REVIEW TEXT */}

                            <p className="text-gray-600 dark:text-gray-300 mt-3 line-clamp-6">

                                "{review.review}"

                            </p>

                            {/* REVIEWER */}

                            <div className="mt-5">

                                <strong className="block">

                                    {review.name}

                                </strong>

                                {/* <span className="text-xs text-gray-500">

                                    {review.location}

                                </span> */}

                            </div>

                        </article>

                    ))}

                </div>

                {/* GOOGLE CTA */}

                <div className="text-center mt-16">

                    <p className="text-gray-600 dark:text-gray-300">

                        Rated <strong>4.9 / 5</strong> based on 218 Google Reviews

                    </p>

                    <a
                        href="https://www.google.com/maps/place/Gurgaon+Hair+Transplant+Centre/@28.4815884,77.0857798,17z/data=!4m8!3m7!1s0x390d19c5a67cde85:0x792c3a28d20b73be!8m2!3d28.4815884!4d77.0857798!9m1!1b1!16s%2Fg%2F11gr3q2z_m?hl=en&entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        className="inline-block mt-4 px-6 py-3 bg-pastel-primary text-white rounded-lg hover:opacity-90 transition"
                    >
                        View All Google Reviews
                    </a>

                </div>

            </div>

        </section>

    )

}