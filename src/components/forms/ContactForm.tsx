"use client"

import { useState } from "react"

export default function ContactForm() {

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {

        e.preventDefault()

        setLoading(true)
        setError("")
        setSuccess(false)

        const formData = new FormData(e.currentTarget)

        const response = await fetch("/api/contact", {
            method: "POST",
            body: formData
        })

        const data = await response.json()

        setLoading(false)

        if (data.success) {
            setSuccess(true)
            e.currentTarget.reset()
        } else {
            setError("Something went wrong. Please try again.")
        }

    }

    return (
        <section className="bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Get In Touch</h2>
                <div className="grid md:grid-cols-2 gap-10 items-start">

                    {/* Contact Form */}
                    <div className="bg-white shadow-xl rounded-2xl p-8">

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                            aria-label="Clinic Contact Form"
                        >

                            {/* NAME */}

                            <div>

                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-1"
                                >
                                    Full Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="w-full border rounded-lg px-4 py-2 dark:bg-gray-900"
                                />

                            </div>


                            {/* EMAIL */}

                            <div>

                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-1"
                                >
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full border rounded-lg px-4 py-2 dark:bg-gray-900"
                                />

                            </div>


                            {/* PHONE */}

                            <div>

                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium mb-1"
                                >
                                    Phone Number
                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    required
                                    className="w-full border rounded-lg px-4 py-2 dark:bg-gray-900"
                                />

                            </div>


                            {/* MESSAGE */}

                            <div>

                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-1"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="w-full border rounded-lg px-4 py-2 dark:bg-gray-900"
                                />

                            </div>


                            {/* SUBMIT BUTTON */}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-pastel-primary text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
                            >

                                {loading ? "Sending..." : "Send Message"}

                            </button>


                            {/* SUCCESS MESSAGE */}

                            {success && (

                                <p className="text-green-600 text-sm">

                                    Thank you! Your message has been sent successfully.

                                </p>

                            )}


                            {/* ERROR MESSAGE */}

                            {error && (

                                <p className="text-red-600 text-sm">

                                    {error}

                                </p>

                            )}

                        </form>
                    </div>

                    {/* Google Map */}
                    <div className="rounded-2xl overflow-hidden shadow-xl h-[520px]">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4411.063158692024!2d77.0857798!3d28.481588400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c5a67cde85%3A0x792c3a28d20b73be!2sGurgaon%20Hair%20Transplant%20Centre!5e1!3m2!1sen!2sin!4v1773040593146!5m2!1sen!2sin"
                            loading="lazy" className="w-full h-full border-0"></iframe>
                    </div>

                </div>

            </div>
        </section>

    )

}