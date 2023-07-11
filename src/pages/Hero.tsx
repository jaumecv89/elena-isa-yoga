import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-scroll'
import LandingVideo from '../components/LandingVideo'
import VideoPopup from '../components/VideoPopup'

const animationVariants = {
    firstLoadAnimation: {
        opacity: [0, 1],
        scale: [0.75, 1],
        transition: { duration: 1, delay: 0.25 }
    },
    openedVideoAnimation: {
        opacity: [1, 0],
        scale: [1, 50],
        transition: { ease: "easeIn", duration: 1.5, delay: 1.5 }
    }
}

const Hero = () => {

    const [videoOpened, setVideoOpened] = useState(false)

    const toggleVideoOpened = () => {
        setVideoOpened((videoOpened) => !videoOpened)
    }

    useEffect(() => {
        videoOpened
            ? [document.body.style.overflow = "hidden", window.scrollTo(0, 0)]
            : document.body.style.overflow = "unset"
    }, [videoOpened])

    return <section id="home" className="w-full h-screen select-none">
        {videoOpened
            ? <VideoPopup setVideoOpened={setVideoOpened} />
            : <div className="absolute w-full h-full top-0 left-0 bg-black/40" />}
        <LandingVideo videoOpened={videoOpened} />
        <div className="flex flex-col items-center">
            <div className="flex flex-col absolute px-[15px] w-full h-full top-0 justify-center items-center text-center overflow-hidden">
                <motion.div
                    variants={animationVariants}
                    animate={videoOpened ? "openedVideoAnimation" : "firstLoadAnimation"}
                    className="flex flex-col text-7xl md:text-9xl font-yeseva jus items-center z-30"
                >
                    <span className={videoOpened ? "text-primary" : "text-white"}>yoga</span>
                    <span className="text-background">con Elena</span>
                </motion.div>
                <motion.span
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 1.5 }}
                    className="relative top-4 pt-10 text-white text-lg sm:text-xl md:text-2xl font-josefin text-center"
                >
                    Empodera tu mente, fortalece tu cuerpo y eleva tu espíritu a través del yoga.
                </motion.span>
                <div className="flex flex-col relative top-24 items-center gap-10">
                    <button
                        className="btn-primary flex flex-row items-center gap-2"
                        onClick={toggleVideoOpened}
                    >
                        <AiFillPlayCircle className="text-3xl" />
                        Reproduce el vídeo
                    </button>
                    <Link to="home" className="text-white text-2xl bg-primary p-3 rounded-full shadow-md cursor-pointer transition ease-in-out hover:translate-y-0.5">
                        <IoIosArrowDown />
                    </Link>
                </div>
            </div>
        </div>
    </section>
}

export default Hero
