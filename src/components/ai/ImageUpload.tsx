"use client"

export default function ImageUpload({ onImage }: any) {

    function handle(e: any) {

        const file = e.target.files[0]

        const reader = new FileReader()

        reader.onloadend = () => {

            const base64 = (reader.result as string).split(",")[1]

            onImage(base64)

        }

        reader.readAsDataURL(file)

    }

    return (
        <input type="file" accept="image/*" onChange={handle} className="p-2" />
    )
}