import { Link } from "react-scroll"
import image from "../assets/classes-image-1.webp"
import beLegend from "../assets/logo-belegend.png"
import dashAndStars from "../assets/logo-dashandstars.svg"
import dreamfit from "../assets/logo-dreamfit.png"
import satya from "../assets/logo-satya.svg"
import sharma from "../assets/logo-sharmaclimbing.png"
import yoganet from "../assets/logo-yoganet.png"
import wave2 from "../assets/wave-5.svg"
import wave3 from "../assets/wave-6.svg"
import Image from "../components/Image"
import { ClasesText } from "../utils/Texts"

const collaborators = [dreamfit, sharma, beLegend, dashAndStars, yoganet, satya]

const Collaborate = () => {

    return (
        <div
            className="flex w-full relative h-[800px] bg-cover bg-center bg-no-repeat bg-fixed items-center justify-center"
            style={{ backgroundImage: `url(${image})` }}
        >
            <Image
                src={wave2}
                fallback={wave2}
                type="image/svg"
                alt="Wave transition"
                className="absolute top-[-1px] left-0"
            />
            <div className="w-full h-full absolute bg-background/90" />
            <div className="flex flex-col container relative py-20 items-center text-center">
                <h2 className="font-bold text-primary pb-5">
                    {ClasesText.colaboration}
                </h2>
                <p className="text-secondary tablet:w-[80%] desktop:w-[60%]">
                    {ClasesText.colaborationParagraph}
                </p>
                <Link to="contact" smooth="true" className="btn-primary mt-5">
                    {ClasesText.contact}
                </Link>
                <div className="flex flex-col mt-24">
                    <span className="font-primary text-text uppercase pb-8 tracking-widest">
                        {ClasesText.colaborators}
                    </span>
                    <div className="flex flex-wrap wrap gap-10 opacity-[0.55] justify-center">
                        {collaborators.map((item, i) =>
                            <img src={item} key={i} alt="Collaborator" className="h-10 tablet:h-12" />
                        )}
                    </div>
                </div>
            </div>
            <Image
                src={wave3}
                fallback={wave3}
                type="image/svg"
                alt="Wave transition"
                className="absolute bottom-[-1px] left-0"
            />
        </div>
    )
}

export default Collaborate