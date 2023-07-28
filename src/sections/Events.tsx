import wave from "../assets/wave-3.svg"
import EventsList from "../components/EventsList"
import Image from "../components/Image"
import { EventsText } from "../utils/Texts"
import image from "../assets/contact-image.webp"

const Events = () => {

    return <section id="events" className="bg-white select-none relative">
        <div className="container mx-auto py-28 text-center">
            <div className="flex flex-col items-center mb-12 tablet:mb-16">
                <div className="flex flex-col tablet:w-[60%]">
                    <span className="heading-title">{EventsText.heading}</span>
                    <h2>{EventsText.title}</h2>
                </div>
            </div>
            <EventsList />
            <div
                className="hidden tablet:block absolute bottom-0 right-[0] tablet:w-[30%] h-[80%] bg-cover bg-no-repeat z-0"
                style={{ backgroundImage: `url(${image})` }}
            />
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
