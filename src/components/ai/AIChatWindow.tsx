"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"

import ChatMessage from "./ChatMessage"
import AITyping from "./AITyping"
import ImageUpload from "./ImageUpload"

import { ChatMessageType } from "@/types/chat"

export default function AIChatWindow({ close }: { close: () => void }) {

    const router = useRouter()

    const [input, setInput] = useState("")
    const [diagnosis, setDiagnosis] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const [messages, setMessages] = useState<ChatMessageType[]>([
        {
            role: "ai",
            text: "Hi 👋 Welcome to GHT Clinic AI Assistance. How may I help you today?"
        }
    ])

    const messagesEndRef = useRef<HTMLDivElement>(null)

    function scrollToBottom() {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    function addMessage(
        role: "user" | "ai",
        text?: string,
        image?: string,
        typing?: boolean
    ) {

        setMessages(prev => [...prev, { role, text, image, typing }])

    }

    async function sendMessage() {

        if (!input.trim() || isLoading) return

        const userInput = input

        addMessage("user", userInput)

        setInput("")
        setIsLoading(true)

        addMessage("ai", "", undefined, true)

        try {

            const res = await fetch("/api/ai-chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: userInput })
            })

            const reader = res.body?.getReader()

            if (!reader) {
                setIsLoading(false)
                return
            }

            let aiText = ""

            setMessages(prev => {

                const updated = [...prev]

                updated.pop()

                updated.push({ role: "ai", text: "" })

                return updated

            })

            while (true) {

                const { done, value } = await reader.read()

                if (done) break

                const chunk = new TextDecoder().decode(value)

                aiText += chunk

                setMessages(prev => {

                    const updated = [...prev]

                    updated[updated.length - 1].text = aiText

                    return updated

                })

            }

        } catch (err) {

            addMessage("ai", "⚠️ Something went wrong. Please try again.")

        }

        setIsLoading(false)

    }

    async function handleImage(base64: string) {

        addMessage("user", "", base64)

        addMessage("ai", "Analyzing image...", undefined)

        const res = await fetch("/api/ai-analyze", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ image: base64 })
        })

        const data = await res.json()

        setDiagnosis(data.diagnosis)

        addMessage("ai", data.diagnosis)

    }

    return (

        <div className="fixed bottom-24 right-6 w-[360px] h-[520px] bg-white dark:bg-gray-900 shadow-2xl rounded-xl flex flex-col z-[9999] border">

            <div className="p-3 border-b flex justify-between">

                <span className="font-medium">AI Assistant</span>

                <button onClick={close}>✕</button>

            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-3">

                {messages.map((m, i) => (

                    <div key={i}>

                        {m.typing
                            ? <AITyping />
                            : <ChatMessage role={m.role} text={m.text} image={m.image} />
                        }

                    </div>

                ))}

                <div ref={messagesEndRef}></div>

            </div>

            {diagnosis && (

                <button
                    onClick={() =>
                        router.push(`/contact?diagnosis=${encodeURIComponent(diagnosis)}`)
                    }
                    className="mx-3 mb-2 bg-teal-600 text-white py-2 rounded-lg text-sm"
                >
                    Book Appointment
                </button>

            )}

            <div className="p-3 border-t flex gap-2 items-center">

                <ImageUpload onImage={handleImage} disabled={isLoading} />

                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your concern..."
                    className="flex-1 border rounded-lg px-3 py-2 text-sm dark:bg-gray-800"
                />

                <button
                    onClick={sendMessage}
                    disabled={isLoading}
                    className={`
    px-3 py-2 rounded-lg text-sm
    ${isLoading
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-teal-600 hover:bg-teal-700 text-white"
                        }
  `}
                >
                    {isLoading ? "..." : "Send"}
                </button>

            </div>

        </div>

    )

}