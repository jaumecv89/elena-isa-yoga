import { ITestimonial } from "../types/Testimonial"

type Props = {
    testimonial: ITestimonial
}

const TestimonialCard: React.FC<Props> = ({ testimonial }) => {

    return (
        <div className="w-full h-full">
            <span className="text-xl text-secondary">
                {testimonial.name}
            </span>
            <div className="flex flex-row w-full items-center justify-between">
                <hr className="flex w-[40%] text-primary" />
                <span className="w-full uppercase text-xs justify-center text-black/70">
                    {testimonial.subtitle}
                </span>
                <hr className="flex w-[40%]" />
            </div>
            <p className="m-0">
                {testimonial.text}
            </p>
        </div>
    )
}

export default TestimonialCard
