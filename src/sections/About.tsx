import { motion } from "framer-motion"
import { Link } from "react-scroll"
import webpImage1 from "../assets/about-image-1.webp"
import jpegImage2 from "../assets/about-image-2.jpeg"
import webpImage2 from "../assets/about-image-2.webp"
import wave1 from "../assets/wave-1.svg"
import wave2 from "../assets/wave-2.svg"
import Image from "../components/Image"
import { AboutText } from "../utils/Texts"

const About = () => {
    return (
        <section id="about" className="w-full select-none">
            <div className="container mx-auto py-28 text-center">
                <div className="flex flex-col tablet:flex-row gap-16 mb-28">
                    <motion.div
                        initial={{ opacity: 0, x: "-100px" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="flex h-[30em] tablet:h-auto tablet:w-[50%] bg-no-repeat bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: `url(${webpImage1})` }}
                    />
                    <div className="flex flex-col tablet:w-[50%] tablet:text-left">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="heading-title"
                        >
                            {AboutText.heading1}
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, x: "100px" }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="pb-5"
                        >
                            {AboutText.title1}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            {AboutText.paragraph1}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.75 }}
                            viewport={{ once: true }}
                            className="mb-0"
                        >
                            {AboutText.paragraph2}
                        </motion.p>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-5 items-center text-secondary"
                >
                    <span className="font-primary italic text-[22px] tablet:text-[28px] desktop:text-[40px] leading-[1.2em] tablet:w-[80%] desktop:w-[70%]">
                        {AboutText.quote}
                    </span>
                    <span className="tablet:text-lg desktop:text-xl">
                        {AboutText.author}
                    </span>
                </motion.div>
            </div>
            <Image
                src={wave1}
                fallback={wave1}
                type="image/svg"
                alt="Top page transition"
                className="w-full h-full"
            />
            <div className="bg-white">
                <div className="container mx-auto py-20 tablet:pb-0 text-center">
                    <div className="flex flex-col items-center">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="heading-title"
                        >
                            {AboutText.heading2}
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="pb-5"
                        >
                            {AboutText.title2}
                        </motion.h2>
                        <div className="flex flex-col tablet:w-[80%] mb-10 gap-5">
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.35 }}
                                viewport={{ once: true }}
                            >
                                {AboutText.paragraph3}
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                {AboutText.paragraph4}
                            </motion.p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.75 }}
                            className="flex flex-col tablet:flex-row gap-5 mb-20"
                        >
                            <Link
                                to="classes"
                                smooth="true"
                                className="btn-primary"
                            >
                                {AboutText.button1}
                            </Link>
                            <Link
                                to="events"
                                smooth="true"
                                className="btn-secondary"
                            >
                                {AboutText.button2}
                            </Link>
                        </motion.div>
                        <div className="flex flex-col tablet:w-[85%] items-center">
                            <Image
                                src={webpImage2}
                                fallback={jpegImage2}
                                alt="Clase de yoga"
                                className="w-full h-full rounded-xl"
                            />
                            <motion.div
                                initial={{ opacity: 0, y: "100px" }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.35 }}
                                viewport={{ once: true }}
                                className="relative tablet:w-[60%] tablet:top-[-150px] pt-10 tablet:p-10 tablet:rounded-lg tablet:shadow-lg tablet:bg-background"
                            >
                                <h2>{AboutText.title3}</h2>
                                <p>{AboutText.paragraph5}</p>
                                <p>{AboutText.paragraph6}</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <Image
                    src={wave2}
                    fallback={wave2}
                    type="image/svg"
                    alt="Bottom page transition"
                    className="relative w-full h-full bottom-[-1px]"
                />
            </div>
        </section>
    )
}

export default About
