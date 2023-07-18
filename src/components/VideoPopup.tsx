import { motion } from "framer-motion"
import { Dispatch, SetStateAction } from "react"
import { AiOutlineClose } from "react-icons/ai"

type Props = {
    setVideoOpened: Dispatch<SetStateAction<boolean>>
}

const variants = { 
    hidden: { x: "-100%", display: "none" },
    visible: { x: 0, display: "", transitionEnd: { display: "none" }}
}

const VideoPopup = ({ setVideoOpened }: Props) => {

    return <div>
        <div
            onClick={() => setVideoOpened(false)}
            className="absolute right-0 text-white text-2xl m-5 rounded-full bg-black/60 shadow-2xl p-2 cursor-pointer transition hover:scale-110 z-50"
        >
            <AiOutlineClose/>
        </div>
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ ease: [0.22, 0.50, 0.08, 1], duration: 2.5 }}
            className="absolute w-full h-full bg-white z-30"
        />
    </div>
    
    
}

export default VideoPopup
