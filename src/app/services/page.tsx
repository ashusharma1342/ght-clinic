import Head from "next/head";
import Image from "next/image";

const services = [
  {
    title: "Hair Transplant",
    description:
      "Advanced FUE hair transplant performed by experienced specialists for natural and permanent hair restoration.",
    image: "/images/hair-transplant.png",
  },
  {
    title: "PRP Hair Treatment",
    description:
      "Platelet-rich plasma therapy helps stimulate hair follicles and improve hair density naturally.",
    image: "/images/prp-hair.jpg",
  },
  {
    title: "Laser Hair Removal",
    description:
      "Safe and painless laser hair removal treatment for long-lasting smooth skin.",
    image: "/images/acne-treatment.jpg",
  },
  {
    title: "Acne & Scar Treatment",
    description:
      "Advanced dermatology treatments to reduce acne, scars, and pigmentation.",
    image: "/images/laser-skin.jpg",
  },
  {
    title: "Skin Rejuvenation",
    description:
      "Modern skin rejuvenation therapies to improve skin texture and glow.",
    image: "/images/skin-rejuvenation.jpg",
  },
  {
    title: "Anti-Aging Treatments",
    description:
      "Botox, fillers, and non-surgical procedures to restore youthful skin.",
    image: "/images/anti-aging.jpg",
  },
];

export default function Page() {
  return (
    <>
      <Head>
        <title>Hair & Skin Treatments | GHT Clinic</title>
        <meta
          name="description"
          content="Explore advanced hair transplant, PRP therapy, laser hair removal, acne treatment and skin rejuvenation services at GHT Clinic."
        />
      </Head>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Our Hair & Skin Treatments
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Advanced dermatology and hair restoration treatments performed
              by experienced specialists using modern technology.
            </p>
          </div>

          {/* Services Grid */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              >

                <div className="relative h-56 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>

                  <a
                    href="/contact"
                    className="inline-block mt-5 text-teal-600 dark:text-teal-400 font-medium"
                  >
                    Book Consultation →
                  </a>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA Section */}

      {/* <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-center">

        <h2 className="text-3xl font-bold">
          Start Your Hair & Skin Transformation
        </h2>

        <p className="mt-4">
          Book a consultation with our specialists today.
        </p>

        <div className="mt-8 flex justify-center gap-4">

          <a
            href="/contact"
            className="bg-white text-teal-600 px-6 py-3 rounded-full font-medium"
          >
            Book Appointment
          </a>

          <a
            href="https://wa.me/919XXXXXXXXX?text=Hello%20GHT%20Clinic,%20I%20would%20like%20a%20consultation."
            target="_blank"
            className="border border-white px-6 py-3 rounded-full"
          >
            WhatsApp Consultation
          </a>

        </div>

      </section> */}
    </>
  );
}