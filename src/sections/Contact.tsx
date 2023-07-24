import { FaPhone } from "react-icons/fa"
import { TbMailFilled } from "react-icons/tb"
import wave from "../assets/wave-footer.svg"
import ContactForm from "../components/ContactForm"
import Image from "../components/Image"
import SocialMedia from "../utils/SocialMedia"
import { ContactText } from "../utils/Texts"

const Contact = () => {

    return <section id="contact" className="select-none">
        <div className="container mx-auto py-28 text-center">
            <div className="flex flex-col items-center mb-12 tablet:mb-16">
                <div className="flex flex-col tablet:w-[60%]">
                    <span className="heading-title">{ContactText.heading}</span>
                    <h2 className="pb-5">{ContactText.title}</h2>
                    <p>{ContactText.paragraph}</p>
                </div>
            </div>
            <div className="flex flex-col tablet:flex-row tablet:gap-[5%] desktop:gap-[10%]">
                <ContactForm />
                <div className="flex flex-col mx-[10%] tablet:mx-0 tablet:mr-12 desktop:mr-16 gap-10">
                    <div className="icons-container">
                        <div className="contact-icon">
                            <TbMailFilled />
                        </div>
                        <div className="flex flex-col w-full items-start">
                            <span className="text-sm text-primary">{ContactText.email}</span>
                            <a href="mailto:contacto@elenaisa.com" className="text-md font-bold text-secondary">{ContactText.contact}</a>
                        </div>
                    </div>
                    <div className="icons-container">
                        <div className="contact-icon">
                            <FaPhone />
                        </div>
                        <div className="flex flex-col w-full items-start">
                            <span className="text-sm text-primary">{ContactText.phone}</span>
                            <a href="tel:679741661" className="text-md font-bold text-secondary">{ContactText.phoneContact}</a>
                        </div>
                    </div>
                    {SocialMedia.map((item) => (
                        <div className="icons-container" key={item.key}>
                            <div className="contact-icon">
                                {item.icon}
                            </div>
                            <div className="flex flex-col w-full items-start">
                                <span className="text-sm text-primary">{item.name}</span>
                                <a href={item.link} className="text-md font-bold text-secondary">{item.text}</a>
                            </div>
                        </div>
                    ))}
                    </div>
            </div>
        </div>
        <Image
            src={wave}
            fallback={wave}
            type="image/svg"
            alt="Wave transition"
            className="relative bottom-[-1px]"
        />
    </section>
}

export default Contact
