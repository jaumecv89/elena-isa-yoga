import { motion } from "framer-motion"
import { Link } from "react-scroll"
import image from "../assets/classes-image-1.webp"
import byoode from "../assets/logo-byoode.webp"
import caraibi from "../assets/logo-caraibi.webp"
import dashAndStars from "../assets/logo-dashandstars.svg"
import ecoderma from "../assets/logo-ecoderma.webp"
import kombucha from "../assets/logo-kombuchaenergy.webp"
import relax from "../assets/logo-relax.webp"
import yohemian from "../assets/logo-yohemian.webp"
import wave2 from "../assets/wave-5.svg"
import wave3 from "../assets/wave-6.svg"
import Image from "../components/Image"
import { ClasesText } from "../utils/Texts"

const collaborators = [
    { url: dashAndStars, alt: "Dash and Stars" },
    { url: caraibi, alt: "Caraibi" },
    { url: ecoderma, alt: "Ecoderma" },
    { url: byoode, alt: "Byoode" },
    { url: kombucha, alt: "Kombucha" },
    { url: yohemian, alt: "Yohemian" },
    { url: relax, alt: "Relax" },
]

const Collaborate = () => {
    return (
        <div
            className="flex relative h-[800px] bg-cover bg-center bg-no-repeat items-center justify-center"
            style={{ backgroundImage: `url(${image})` }}
        >
            <Image
                src={wave2}
                fallback={wave2}
                type="image/svg"
                alt="Collaborate top page transition"
                className="absolute w-full h-fit top-[-1px] left-0"
            />
            <div className="w-full h-full absolute bg-background/90" />
            <div className="flex flex-col container relative py-20 items-center text-center">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="font-bold text-primary pb-5"
                >
                    {ClasesText.colaboration}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.75, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-secondary tablet:w-[80%] desktop:w-[60%]"
                >
                    {ClasesText.colaborationParagraph}
                </motion.p>
                <Link to="contact" smooth="true" className="btn-primary mt-5">
                    {ClasesText.contact}
                </Link>
                <div className="flex flex-col mt-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.75, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="font-primary text-text uppercase pb-8 tracking-widest"
                    >
                        {ClasesText.colaborators}
                    </motion.span>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.75, delay: 0.75 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap wrap gap-10 justify-center"
                    >
                        {collaborators.map((item, i) => (
                            <img
                                src={item.url}
                                key={i}
                                alt={item.alt}
                                className="w-fit h-10 desktop:h-12 opacity-[0.55] hover:opacity-100 transition"
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
            <Image
                src={wave3}
                fallback={wave3}
                type="image/svg"
                alt="Collaborate bottom page transition"
                className="absolute w-full h-fit bottom-[-1px] left-0"
            />
        </div>
    )
}

export default Collaborate
