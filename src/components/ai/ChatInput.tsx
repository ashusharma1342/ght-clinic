"use client"

import { useRef, useState } from "react"

export default function ChatInput({ addMessage, onImageUpload }: any) {

    const [text, setText] = useState("")
    const fileRef = useRef<HTMLInputElement>(null)

    async function send() {

        if (!text.trim()) return

        addMessage("user", text)

        const res = await fetch("/api/ai-chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: text })
        })

        const data = await res.json()

        addMessage("ai", data.reply)

        setText("")

    }

    function openFile() {
        fileRef.current?.click()
    }

    function handleFile(e: any) {

        const file = e.target.files[0]

        if (!file) return

        const reader = new FileReader()

        reader.onloadend = () => {

            const base64 = (reader.result as string).split(",")[1]

            addMessage("user", "", reader.result)

            onImageUpload(base64)

        }

        reader.readAsDataURL(file)

    }

    return (

        <div className="border-t bg-white dark:bg-gray-900 p-3">

            <div className="flex items-center gap-2">

                <input
                    type="file"
                    ref={fileRef}
                    accept="image/*"
                    onChange={handleFile}
                    className="hidden"
                />

                <button
                    onClick={openFile}
                    className="
    w-9
    h-9
    flex
    items-center
    justify-center
    rounded-full
    hover:bg-gray-200
    dark:hover:bg-gray-700
    "
                >
                    📎
                </button>

                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type your concern..."
                    className="
    flex-1
    bg-gray-100
    dark:bg-gray-800
    px-4
    py-2
    rounded-full
    text-sm
    outline-none
    "
                />

                <button
                    onClick={send}
                    className="
    bg-blue-600
    text-white
    px-4
    py-2
    rounded-full
    text-sm
    hover:bg-blue-700
    "
                >
                    Send
                </button>

            </div>

        </div>

    )
}