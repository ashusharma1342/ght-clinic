import Image from "next/image"
import Link from "next/link"

const services = [
    {
        title: "Hair Transplant",
        description:
            "Advanced hair transplant procedures including FUE and FUT techniques for natural and permanent hair restoration.",
        image: "/images/hair-transplant.png",
        link: "/hair-transplant"
    },
    {
        title: "PRP Hair Therapy",
        description:
            "Platelet Rich Plasma therapy stimulates natural hair growth and improves hair density using regenerative treatment.",
        image: "/images/prp-hair.jpg",
        link: "/services"
    },
    {
        title: "Laser Skin Treatments",
        description:
            "Modern laser treatments for acne scars, pigmentation, and skin rejuvenation with minimal downtime.",
        image: "/images/laser-skin.jpg",
        link: "/skin-treatments"
    },
    // {
    //     title: "Anti-Aging Skin Care",
    //     description:
    //         "Dermatologist recommended anti-aging treatments that improve skin elasticity and reduce wrinkles.",
    //     image: "/images/anti-aging.jpg",
    //     link: "/skin-treatments"
    // },
    // {
    //     title: "Acne & Scar Treatment",
    //     description:
    //         "Customized dermatology treatments to reduce acne, scars, and inflammation for clear and healthy skin.",
    //     image: "/images/acne-treatment.jpg",
    //     link: "/skin-treatments"
    // },
    // {
    //     title: "Skin Rejuvenation",
    //     description:
    //         "Non-surgical skin rejuvenation treatments to restore glow, improve texture, and enhance natural beauty.",
    //     image: "/images/skin-rejuvenation.jpg",
    //     link: "/skin-treatments"
    // }
]

export default function Services() {

    return (

        <section
            aria-label="Hair and Skin Clinic Services"
            className="py-24 bg-gray-50 dark:bg-gray-900"
        >

            <div className="container">

                {/* SECTION HEADER */}

                <div className="text-center max-w-3xl mx-auto">

                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">

                        Hair Transplant & Skin Care Services

                    </h2>

                    <p className="mt-4 text-gray-600 dark:text-gray-300">

                        At GHT Clinic we provide modern dermatology and hair restoration
                        treatments designed to deliver safe, effective, and natural
                        results for every patient.

                    </p>

                </div>

                {/* SERVICES GRID */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

                    {services.map((service, index) => (

                        <article
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
                        >

                            <Image
                                src={service.image}
                                alt={service.title}
                                width={400}
                                height={260}
                                className="w-full h-56 object-cover"
                            />

                            <div className="p-6">

                                <h3 className="text-xl font-semibold">

                                    {service.title}

                                </h3>

                                <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">

                                    {service.description}

                                </p>

                                {/* <Link
                                    href={service.link}
                                    className="inline-block mt-5 text-pastel-primary font-medium hover:underline"
                                >
                                    Learn More →
                                </Link> */}

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>

    )

}