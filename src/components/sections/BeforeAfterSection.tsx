import Image from "next/image"

export default function BeforeAfterSection() {

    return (

        <section
            aria-label="Before and After Hair Transplant and Skin Treatment Results"
            className="py-24 bg-gray-50 dark:bg-gray-900"
        >

            <div className="container">

                {/* SECTION HEADER */}

                <div className="text-center max-w-3xl mx-auto">

                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">

                        Real Patient Results

                    </h2>

                    <p className="mt-4 text-gray-600 dark:text-gray-300">

                        Our advanced hair restoration and dermatology treatments
                        deliver natural looking results. See the transformation
                        achieved by our patients at GHT Clinic.

                    </p>

                </div>


                {/* BEFORE AFTER GRID */}

                <div className="grid md:grid-cols-2 gap-12 mt-16">


                    {/* HAIR TRANSPLANT RESULT */}

                    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">

                        <h3 className="text-xl font-semibold mb-6">

                            Hair Transplant Transformation

                        </h3>

                        <div className="grid grid-cols-2 gap-4">

                            <div>

                                <Image
                                    src="/images/hair-before.jpeg"
                                    alt="Hair loss before hair transplant treatment"
                                    width={400}
                                    height={400}
                                    className="rounded-lg object-cover"
                                />

                                <p className="text-center text-sm mt-2 text-gray-500">
                                    Before
                                </p>

                            </div>

                            <div>

                                <Image
                                    src="/images/hair-after.jpeg"
                                    alt="Hair transplant result showing natural hair growth"
                                    width={400}
                                    height={400}
                                    className="rounded-lg object-cover"
                                />

                                <p className="text-center text-sm mt-2 text-gray-500">
                                    After
                                </p>

                            </div>

                        </div>

                        <p className="mt-6 text-sm text-gray-600 dark:text-gray-300">

                            This patient experienced significant hair density improvement
                            after a modern FUE hair transplant procedure performed by
                            our specialists.

                        </p>

                    </article>



                    {/* SKIN TREATMENT RESULT */}

                    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">

                        <h3 className="text-xl font-semibold mb-6">

                            Skin Treatment Result

                        </h3>

                        <div className="grid grid-cols-2 gap-4">

                            <div>

                                <Image
                                    src="/images/skin-before.jpeg"
                                    alt="Acne scars before dermatology treatment"
                                    width={400}
                                    height={400}
                                    className="rounded-lg object-cover"
                                />

                                <p className="text-center text-sm mt-2 text-gray-500">
                                    Before
                                </p>

                            </div>

                            <div>

                                <Image
                                    src="/images/skin-after.jpeg"
                                    alt="Clear skin after laser skin treatment"
                                    width={400}
                                    height={400}
                                    className="rounded-lg object-cover"
                                />

                                <p className="text-center text-sm mt-2 text-gray-500">
                                    After
                                </p>

                            </div>

                        </div>

                        <p className="mt-6 text-sm text-gray-600 dark:text-gray-300">

                            Laser skin treatment and dermatology care helped reduce
                            acne scars and improve overall skin texture and clarity.

                        </p>

                    </article>

                </div>

            </div>

        </section>

    )

}