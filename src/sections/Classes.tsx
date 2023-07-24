import wave from "../assets/wave-4.svg"
import Image from "../components/Image"

const Classes = () => {

    return <section id="classes" className="select-none">
        <div className="container mx-auto py-28 text-center">
            Clases
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

export default Classes
