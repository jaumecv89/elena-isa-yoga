import { motion } from "framer-motion"
import image2 from "../assets/classes-image-2.webp"
import image3 from "../assets/classes-image-3.webp"
import image4 from "../assets/classes-image-4.webp"
import wave from "../assets/wave-4.svg"
import Collaborate from "../components/Collaborate"
import Image from "../components/Image"
import Testimonials from "../components/Testimonials"
import { ClasesText } from "../utils/Texts"

const Classes = () => {
    return (
        <section id="classes" className="select-none">
            <div className="container mx-auto py-28 text-center">
                <div className="flex flex-col items-center mb-12">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="heading-title"
                    >
                        {ClasesText.heading}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="pb-5"
                    >
                        {ClasesText.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="tablet:w-[90%] desktop:w-[70%]"
                    >
                        {ClasesText.paragraph1}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.75 }}
                        viewport={{ once: true }}
                        className="tablet:w-[90%] desktop:w-[70%]"
                    >
                        {ClasesText.paragraph2}
                    </motion.p>
                </div>
                <div className="flex flex-col gap-14 items-center">
                    <div className="flex flex-col tablet:flex-row w-full relative items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.75, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="w-full tablet:w-[40%] h-[50vh] tablet:h-[30em] desktop:h-[40em] mb-10 tablet:mb-0 bg-cover bg-no-repeat rounded-lg relative tablet:right-[-5%]"
                            style={{ backgroundImage: `url(${image4})` }}
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.75, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col tablet:w-[40%] desktop:w-[30%] tablet:text-left bg-background tablet:p-10 tablet:left-[-5%] relative"
                        >
                            <h2>{ClasesText.class1Title}</h2>
                            <p className="m-0">{ClasesText.class1Text}</p>
                        </motion.div>
                    </div>
                    <div className="flex flex-col tablet:flex-row w-full relative items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.75, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="tablet:hidden w-full h-[50vh] mb-10 bg-cover bg-center bg-no-repeat rounded-lg"
                            style={{ backgroundImage: `url(${image3})` }}
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.75, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col tablet:w-[40%] desktop:w-[30%] tablet:text-right bg-background tablet:p-10 tablet:left-[5%] relative z-10"
                        >
                            <h2>{ClasesText.class2Title}</h2>
                            <p className="m-0">{ClasesText.class2Text}</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.75, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="hidden tablet:flex w-[40%] h-[30em] desktop:h-[40em] mb-0 bg-cover bg-center bg-no-repeat rounded-lg relative right-[5%]"
                            style={{ backgroundImage: `url(${image3})` }}
                        />
                    </div>
                    <div className="flex flex-col tablet:flex-row w-full relative items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.75, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="w-full tablet:w-[40%] h-[50vh] tablet:h-[30em] desktop:h-[40em] mb-10 tablet:mb-0 bg-cover bg-no-repeat rounded-lg relative tablet:right-[-5%]"
                            style={{ backgroundImage: `url(${image2})` }}
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.75, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col tablet:w-[40%] desktop:w-[30%] tablet:text-left bg-background tablet:p-10 tablet:left-[-5%] relative"
                        >
                            <h2>{ClasesText.class3Title}</h2>
                            <p className="m-0">{ClasesText.class3Text}</p>
                        </motion.div>
                    </div>
                </div>
            </div>
            <Collaborate />
            <div className="container mx-auto py-28 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <h2 className="pb-5">{ClasesText.testimonials}</h2>
                </motion.div>
                <Testimonials />
            </div>
            <Image
                src={wave}
                fallback={wave}
                type="image/svg"
                alt="Bottom page transition"
                className="relative w-full h-full bottom-[-1px]"
            />
        </section>
    )
}

export default Classes
