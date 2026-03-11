"use client"

import { useState } from "react"
import ChatMessage from "./ChatMessage"
import ChatInput from "./ChatInput"
import Link from "next/link"

export default function AIChatWindow({ close }: any) {

    type ChatMessageType = {
        role: "user" | "ai"
        text?: string
        image?: string
    }
    const [messages, setMessages] = useState<ChatMessageType[]>([
        {
            role: "ai",
            text: "Hi 👋 Welcome to GHT Clinic AI Assistance. How may I help you today?"
        }
    ])

    const [diagnosis, setDiagnosis] = useState("")
    function addMessage(role: "user" | "ai", text?: string, image?: string) {
        setMessages((prev) => [...prev, { role, text, image }])
    }
    async function handleImage(base64: string) {

        addMessage("user", "Uploaded image")

        const res = await fetch("/api/ai-consult", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ image: base64 })
        })

        const data = await res.json()

        addMessage("ai", data.analysis)

        setDiagnosis(data.analysis)
    }

    return (
        <div className="
fixed
bottom-24
right-6
w-[380px]
h-[520px]
bg-white
dark:bg-gray-900
shadow-2xl
rounded-2xl
flex
flex-col
overflow-hidden
z-[9999]
border
border-gray-200
dark:border-gray-700
">
            <div className="
flex
items-center
justify-between
px-4
py-3
border-b
bg-white
dark:bg-gray-900
">

                <h3 className="font-semibold text-gray-900 dark:text-white">
                    GHT AI Assistant
                </h3>

                <button
                    onClick={close}
                    className="text-gray-500 hover:text-black dark:hover:text-white"
                >
                    ✕
                </button>

            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50 dark:bg-gray-800">

                {messages.map((m, i) => (
                    <ChatMessage
                        key={i}
                        role={m.role}
                        text={m.text}
                        image={m.image}
                    />
                ))}
            </div>

            {diagnosis && (
                <Link
                    href={`/contact?diagnosis=${encodeURIComponent(diagnosis)}`}
                    className="bg-blue-600 text-white text-center py-2 m-3 rounded"
                >
                    Book Appointment
                </Link>
            )}

            <ChatInput
                addMessage={addMessage}
                onImageUpload={handleImage}
            />

        </div>
    )
}