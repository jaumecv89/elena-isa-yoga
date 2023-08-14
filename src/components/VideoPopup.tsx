import { motion } from "framer-motion"
import { Dispatch, SetStateAction } from "react"
import { AiOutlineClose } from "react-icons/ai"

type Props = {
    setVideoOpened: Dispatch<SetStateAction<boolean>>
}

const VideoPopup = ({ setVideoOpened }: Props) => {
    return (
        <>
            <div
                onClick={() => setVideoOpened(false)}
                className="absolute w-full h-full z-[60]"
            >
                <div className="absolute top-0 right-0 text-white text-2xl m-5 rounded-full bg-black/60 shadow-2xl p-2 cursor-pointer transition hover:scale-110">
                    <AiOutlineClose />
                </div>
            </div>
            <motion.div
                key="firstTransition"
                initial={{ x: "-100%", display: "none" }}
                animate={{
                    x: 0,
                    display: "",
                    transitionEnd: { display: "none" },
                }}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.2 }}
                className="fixed w-full h-screen bg-background z-50"
            />
            <motion.div
                key="secondTransition"
                initial={{ x: 0 }}
                animate={{ x: "100%", display: "block" }}
                transition={{
                    ease: [0.22, 1, 0.36, 1],
                    duration: 1.2,
                    delay: 1.2,
                }}
                className="fixed hidden w-full h-screen bg-background z-50"
            />
        </>
    )
}

export default VideoPopup
