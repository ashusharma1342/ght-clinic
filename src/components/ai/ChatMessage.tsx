export default function ChatMessage({ role, text, image }: any) {

    return (

        <div className={`flex ${role === "user" ? "justify-end" : "justify-start"}`}>

            <div
                className={`
   max-w-[75%]
   px-4
   py-2
   rounded-2xl
   text-sm
   ${role === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                    }
   `}
            >

                {image && (
                    <img
                        src={image}
                        className="rounded-lg mb-2 max-h-48"
                    />
                )}

                {text}

            </div>

        </div>

    )

}