import ContactForm from "@/components/forms/ContactForm"

export const metadata = {

    title: "Contact GHT Hair & Skin Clinic",
    description:
        "Book consultation with our dermatology specialists for hair transplant and skin treatments."

}

export default function ContactPage() {

    return (

        <section className="py-24">

            <div className="container max-w-3xl">

                <h1 className="text-4xl font-bold">

                    Book Your Consultation

                </h1>

                <p className="mt-4 text-gray-600 dark:text-gray-300">

                    Fill out the form below to schedule your consultation
                    with our hair transplant and dermatology specialists.

                </p>

                <div className="mt-10">

                    <ContactForm />

                </div>

            </div>

        </section>

    )

}