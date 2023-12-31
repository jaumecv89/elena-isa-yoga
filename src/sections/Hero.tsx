import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import { Link } from "react-scroll"
import fallbackVideoImage from "../assets/landing-video.jpg"
import fallbackVideo from "../assets/landing-video.mp4"
import video from "../assets/landing-video.webm"
import Video from "../components/Video"
import VideoPopup from "../components/VideoPopup"
import { HeroText } from "../utils/Texts"

const animationVariants = {
    firstLoadAnimation: {
        opacity: [0, 1],
        scale: [0.75, 1],
        transition: { duration: 1, delay: 0.25 },
    },
    openedVideoAnimation: {
        opacity: [1, 0],
        scale: [1, 20],
        transition: { ease: "easeIn", duration: 0.5, delay: 0.75 },
    },
}

const Hero = () => {
    const [videoOpened, setVideoOpened] = useState(false)

    const toggleVideoOpened = () => {
        setVideoOpened((videoOpened) => !videoOpened)
    }

    useEffect(() => {
        videoOpened
            ? [
                  (document.body.style.overflow = "hidden"),
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" }),
              ]
            : (document.body.style.overflow = "unset")
    }, [videoOpened])

    return (
        <section id="home" className="w-full h-screen select-none">
            {videoOpened ? (
                <VideoPopup setVideoOpened={setVideoOpened} />
            ) : (
                <div className="absolute w-full h-screen top-0 left-0 bg-black/40" />
            )}
            <Video
                src={video}
                fallbackVideo={fallbackVideo}
                fallbackImage={fallbackVideoImage}
                className={`${
                    videoOpened && "absolute z-30 "
                }w-full h-screen object-cover`}
            />
            <div className="flex flex-col items-center">
                <div className="flex flex-col absolute px-[15px] w-full h-full top-0 justify-center items-center text-center overflow-hidden gap-10">
                    <motion.div
                        variants={animationVariants}
                        animate={
                            videoOpened
                                ? "openedVideoAnimation"
                                : "firstLoadAnimation"
                        }
                        className={`flex flex-col font-primary text-5xl tablet:text-6xl desktop:text-7xl items-center ${
                            videoOpened && "z-50"
                        }`}
                    >
                        <h1 className="flex flex-col">
                            <span
                                className={
                                    videoOpened ? "text-primary" : "text-white"
                                }
                            >
                                {HeroText.title1}
                            </span>
                            <span
                                className={
                                    videoOpened
                                        ? "text-primary"
                                        : "text-alternative"
                                }
                            >
                                {HeroText.title2}
                            </span>
                        </h1>
                    </motion.div>
                    <motion.span
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 1.5 }}
                        className="text-white text-lg desktop:text-xl"
                    >
                        {HeroText.paragraph}
                    </motion.span>
                    <motion.button
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.75 }}
                        className="btn-primary"
                        onClick={toggleVideoOpened}
                    >
                        {HeroText.button}
                    </motion.button>
                </div>
                <div className="flex w-full absolute flex-col bottom-0 left-0 items-center pb-10 gap-10">
                    <Link
                        to="about"
                        smooth={true}
                        className="text-white text-xl bg-primary p-3 rounded-full shadow-lg cursor-pointer transition ease-in-out hover:bg-accent hover:translate-y-0.5"
                    >
                        <IoIosArrowDown />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero
