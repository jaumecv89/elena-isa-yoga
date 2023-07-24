import wave from "../assets/wave-3.svg"
import Image from "../components/Image"

const Events = () => {

    return <section id="events" className="bg-white select-none">
        <div className="container mx-auto py-28 text-center">
            Eventos
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

export default Events
