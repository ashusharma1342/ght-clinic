"use client"

import Image from "next/image"
import ReactMarkdown from "react-markdown"

type Props = {
    role: "user" | "ai"
    text?: string
    image?: string
}

export default function ChatMessage({ role, text, image }: Props) {

    const isUser = role === "user"

    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"} animate-fadeIn`}>

            {/* {!isUser && (
        <Image
          src="/ai-avatar.png"
          alt="AI"
          width={32}
          height={32}
          className="mr-2 rounded-full"
        />
      )} */}

            <div
                className={`
        max-w-[75%]
        px-4
        py-3
        rounded-xl
        text-sm
        shadow-sm
        leading-relaxed
        ${isUser
                        ? "bg-teal-600 text-white"
                        : "bg-gray-100 dark:bg-gray-800"
                    }
        `}
            >

                {image && (
                    <img
                        src={image}
                        className="rounded-lg mb-3 max-h-40"
                    />
                )}

                {text && (
                    <ReactMarkdown
                        components={{
                            p: ({ children }) => (
                                <p className="mb-2">{children}</p>
                            ),
                            strong: ({ children }) => (
                                <strong className="text-teal-600 font-semibold">
                                    {children}
                                </strong>
                            ),
                            ul: ({ children }) => (
                                <ul className="list-disc ml-4 mb-2">
                                    {children}
                                </ul>
                            ),
                            li: ({ children }) => (
                                <li className="mb-1">{children}</li>
                            )
                        }}
                    >
                        {text}
                    </ReactMarkdown>
                )}

            </div>
        </div>
    )
}