import { Link } from "react-scroll"
import jpegImage2 from "../assets/about-image-2.jpeg"
import webpImage2 from "../assets/about-image-2.webp"
import wave1 from "../assets/wave-1.svg"
import wave2 from "../assets/wave-2.svg"
import Image from "../components/Image"
import { AboutText } from "../utils/Texts"

const About = () => {

    return <section id="about" className="w-full select-none">
        <div className="container mx-auto py-28 text-center">
            <div className="flex flex-col tablet:flex-row gap-16 mb-28">
                <div className="flex h-[30em] tablet:h-auto tablet:w-[50%] bg-about-image bg-no-repeat bg-cover bg-center rounded-lg" />
                <div className="flex flex-col tablet:w-[50%] tablet:text-left">
                    <span className="heading-title">{AboutText.heading[0]}</span>
                    <h2 className="pb-5">{AboutText.title[0]}</h2>
                    <p>{AboutText.paragraph[0]}</p>
                    <p className="mb-0">{AboutText.paragraph[1]}</p>
                </div>
            </div>
            <div className="flex flex-col gap-5 items-center text-secondary">
                <span className="font-primary italic text-[22px] tablet:text-[28px] desktop:text-[40px] leading-[1.2em] tablet:w-[80%] desktop:w-[70%]">{AboutText.quote}</span>
                <span className="tablet:text-lg desktop:text-xl">{AboutText.author}</span>
            </div>
        </div>
        <Image
            src={wave1}
            fallback={wave1}
            type="image/svg"
            alt="Wave transition"
        />
        <div className="bg-white">
            <div className="container mx-auto py-20 tablet:pb-0 text-center">
                <div className="flex flex-col items-center">
                    <span className="heading-title">{AboutText.heading[1]}</span>
                    <h2 className="pb-5">{AboutText.title[1]}</h2>
                    <p className="tablet:w-[60%] mb-10">{AboutText.paragraph[2]}</p>
                    <div className="flex flex-col tablet:flex-row gap-5 mb-20">
                        <Link
                            to="classes"
                            smooth="true"
                            className="btn-primary"
                        >
                            {AboutText.button}
                        </Link>
                        <Link
                            to="events"
                            smooth="true"
                            className="btn-secondary"
                        >
                            {AboutText.button2}
                        </Link>
                    </div>
                    <div className="flex flex-col tablet:w-[85%] items-center">
                        <Image
                            src={webpImage2}
                            fallback={jpegImage2}
                            alt="Clase de yoga"
                            className="rounded-xl"
                        />
                        <div className="relative tablet:w-[60%] tablet:top-[-150px] pt-10 tablet:p-10 tablet:rounded-lg tablet:shadow-lg tablet:bg-background">
                            <h2>{AboutText.title[2]}</h2>
                            <p>{AboutText.paragraph[3]}</p>
                            <p>{AboutText.paragraph[4]}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Image
                src={wave2}
                fallback={wave2}
                type="image/svg"
                alt="Wave transition"
                className="relative bottom-[-1px]"
            />
        </div>
    </section>
}

export default About
