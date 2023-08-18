import { motion } from "framer-motion"
import image from "../assets/contact-image.webp"
import wave from "../assets/wave-3.svg"
import EventsList from "../components/EventsList"
import Image from "../components/Image"
import { EventsText } from "../utils/Texts"

const Events = () => {
    return (
        <section id="events" className="bg-white select-none relative">
            <div className="container mx-auto py-28 text-center">
                <div className="flex flex-col items-center mb-12 tablet:mb-16">
                    <div className="flex flex-col tablet:w-[60%]">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="heading-title"
                        >
                            {EventsText.heading}
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            {EventsText.title}
                        </motion.h2>
                    </div>
                </div>
                <EventsList />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.75, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="hidden tablet:block absolute bottom-0 right-0 w-[27%] desktop:w-[30%] h-[50em] desktop:h-[60em] bg-cover bg-no-repeat z-0"
                    style={{ backgroundImage: `url(${image})` }}
                />
            </div>
            <Image
                src={wave}
                fallback={wave}
                type="image/svg"
                alt="Wave transition"
                className="relative w-full h-full bottom-[-1px]"
            />
        </section>
    )
}

export default Events
