import { Suspense } from "react"
import ContactForm from "@/components/forms/ContactForm"
import PageContainer from "@/components/layout/PageContainer"

export const metadata = {

    title: "Contact GHT Hair & Skin Clinic",
    description:
        "Book consultation with our dermatology specialists for hair transplant and skin treatments."

}

export default function ContactPage() {

    return (
        <PageContainer>
            <Suspense fallback={<div className="p-10">Loading...</div>}>
                <section className="py-24 sm:pt-40">

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
            </Suspense>
        </PageContainer>

    )

}