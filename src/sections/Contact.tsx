import { motion } from "framer-motion"
import { FaPhone } from "react-icons/fa"
import { TbMailFilled } from "react-icons/tb"
import wave from "../assets/wave-footer.svg"
import ContactForm from "../components/ContactForm"
import Image from "../components/Image"
import SocialMedia from "../utils/SocialMedia"
import { ContactText } from "../utils/Texts"

const Contact = () => {
    return (
        <section id="contact" className="select-none">
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
                            {ContactText.heading}
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="pb-5"
                        >
                            {ContactText.title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            {ContactText.paragraph}
                        </motion.p>
                    </div>
                </div>
                <div className="flex flex-col tablet:flex-row tablet:gap-[5%] desktop:gap-[10%]">
                    <ContactForm />
                    <div className="flex flex-col mx-[10%] tablet:mx-0 tablet:mr-12 desktop:mr-16 gap-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="icons-container"
                        >
                            <div className="contact-icon">
                                <TbMailFilled />
                            </div>
                            <div className="flex flex-col w-full items-start">
                                <span className="text-sm text-primary">
                                    {ContactText.email}
                                </span>
                                <a
                                    href="mailto:elenaisa.yoga@gmail.com"
                                    className="text-md font-bold text-secondary hover:text-primary transition"
                                >
                                    {ContactText.contact}
                                </a>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.75 }}
                            viewport={{ once: true }}
                            className="icons-container"
                        >
                            <div className="contact-icon">
                                <FaPhone />
                            </div>
                            <div className="flex flex-col w-full items-start">
                                <span className="text-sm text-primary">
                                    {ContactText.phone}
                                </span>
                                <a
                                    href="tel:679741661"
                                    className="text-md font-bold text-secondary hover:text-primary transition"
                                >
                                    {ContactText.phoneContact}
                                </a>
                            </div>
                        </motion.div>
                        {SocialMedia.map((item, i) => (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.75 + 0.25 * (i + 1),
                                }}
                                viewport={{ once: true }}
                                className="icons-container"
                                key={item.key}
                            >
                                <div className="contact-icon">{item.icon}</div>
                                <div className="flex flex-col w-full items-start">
                                    <span className="text-sm text-primary">
                                        {item.name}
                                    </span>
                                    <a
                                        href={item.link}
                                        className="text-md font-bold text-secondary hover:text-primary transition"
                                    >
                                        {item.text}
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
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

export default Contact
