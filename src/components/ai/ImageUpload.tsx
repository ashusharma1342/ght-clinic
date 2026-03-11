"use client"


type Props = {
    onImage: (base64: string) => void
    disabled?: boolean
}

export default function ImageUpload({ onImage, disabled }: Props) {

    function handleFile(e: React.ChangeEvent<HTMLInputElement>) {

        const file = e.target.files?.[0]

        if (!file) return

        const reader = new FileReader()

        reader.onloadend = () => {

            onImage(reader.result as string)

        }

        reader.readAsDataURL(file)

    }

    return (

        <label className="cursor-pointer text-gray-500 text-sm">

            📷

            <input
                type="file"
                accept="image/*"
                disabled={disabled}
                className="hidden"
                onChange={handleFile}
            />

        </label>

    )

}