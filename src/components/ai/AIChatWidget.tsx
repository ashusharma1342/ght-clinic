"use client"

import { useState } from "react"
import ImageUpload from "./ImageUpload"
import ChatMessage from "./ChatMessage"

export default function AIChatWidget() {

    const [messages, setMessages] = useState<any[]>([])
    const [loading, setLoading] = useState(false)

    async function handleImage(base64: string) {

        setLoading(true)

        setMessages((m) => [
            ...m,
            { role: "user", text: "Uploaded image for analysis" }
        ])

        const res = await fetch("/api/ai-consult", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ image: base64 })
        })

        if (!res.ok) {
            console.error("API error")
            return
        }

        let data

        try {
            data = await res.json()
        } catch {
            console.error("Invalid JSON response")
            return
        }

        setMessages((m) => [
            ...m,
            { role: "ai", text: data.analysis || "AI could not analyze image." }
        ])

        setLoading(false)

    }

    return (

        <div className="fixed bottom-6 right-6 w-96 shadow-xl rounded-xl bg-white dark:bg-black p-4 space-y-4">

            <h3 className="font-semibold">
                AI Skin & Hair Consultation
            </h3>

            <div className="space-y-2 max-h-64 overflow-y-auto">

                {messages.map((m, i) => (
                    <ChatMessage key={i} role={m.role} text={m.text} />
                ))}

            </div>

            {/* <ImageUpload onImage={handleImage} /> */}

            {loading && <p>Analyzing image...</p>}

        </div>

    )

}