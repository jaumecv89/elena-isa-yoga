import { useState } from "react"
import { IoIosArrowUp } from "react-icons/io"

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        scrolled > 500 ? setVisible(true) : setVisible(false)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    window.addEventListener("scroll", toggleVisible)

    return (
        <button
            className="fixed bottom-0 right-0 text-white text-2xl bg-primary p-2 m-5 rounded-full shadow-lg cursor-pointer transition ease-in-out hover:bg-accent z-50"
            style={{ display: !visible ? "none" : "" }}
            onClick={scrollToTop}
        >
            <IoIosArrowUp />
        </button>
    )
}

export default ScrollButton
