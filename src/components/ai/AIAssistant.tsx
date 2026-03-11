"use client"

import { useState } from "react"
import AIChatWindow from "./AIChatWindow"

export default function AIAssistant() {

    const [open, setOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-6 right-6 bg-teal-600 text-white px-5 py-3 rounded-full shadow-lg"
            >
                AI Assistance
            </button>

            {open && <AIChatWindow close={() => setOpen(false)} />}
        </>
    )
}