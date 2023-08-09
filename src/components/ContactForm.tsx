import emailjs from "@emailjs/browser"
import { FormEvent, useRef, useState } from "react"
import { FormText } from "../utils/Texts"

const ContactForm = () => {
    const resultMessage = useRef<HTMLSpanElement>(null)

    const [error, setError] = useState(false)
    const [alert, setAlert] = useState(false)

    const handleAlerts = () => {
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 5000)
    }

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.currentTarget,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(
                () => {
                    setError(false)
                    handleAlerts()
                },
                () => {
                    setError(true)
                    handleAlerts()
                }
            )

        e.currentTarget.reset()
    }

    return (
        <form
            onSubmit={sendEmail}
            className="flex flex-col w-full gap-4 mb-16 tablet:mb-0"
        >
            <div className="flex flex-col tablet:flex-row gap-4">
                <input
                    type="text"
                    name="user_name"
                    className="w-full"
                    placeholder={FormText.name}
                    required
                />
                <input
                    type="email"
                    name="user_email"
                    className="w-full"
                    placeholder={FormText.email}
                    required
                />
            </div>
            <textarea
                rows={8}
                name="message"
                placeholder={FormText.message}
                required
            />
            <div className="flex flex-col tablet:flex-row items-center gap-4">
                <button
                    type="submit"
                    className="btn-primary w-full tablet:w-fit"
                >
                    {FormText.send}
                </button>
                <div className="h-4 leading-4">
                    {alert && (
                        <span
                            ref={resultMessage}
                            className={error ? "text-red" : "text-green"}
                        >
                            {error ? FormText.error : FormText.success}
                        </span>
                    )}
                </div>
            </div>
        </form>
    )
}

export default ContactForm
