import { motion } from 'framer-motion'
import { AiFillPlayCircle } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-scroll'
import Video from "../components/Video"


const Hero = () => {

    return <section id="home" className="w-full h-screen select-none">
        <div className="absolute w-full h-full top-0 left-0 bg-black/40" />
        <Video />
        <div className="flex flex-col items-center">
            <div className="container flex flex-col absolute w-full h-full top-0 justify-center items-center text-center">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.25 }}
                    className="flex flex-col text-7xl md:text-9xl font-yeseva jus items-center "
                >
                    <span className="text-white">yoga</span>
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
                    <Link to="home" className="btn-primary flex flex-row items-center gap-2">
                        <AiFillPlayCircle className="text-3xl" />
                        Reproduce el vídeo
                    </Link>
                    <Link to="home" className="text-white text-2xl bg-primary p-3 rounded-full shadow-md cursor-pointer transition ease-in-out hover:translate-y-0.5">
                        <IoIosArrowDown />
                    </Link>
                </div>
            </div>
        </div>
    </section>
}

export default Hero
