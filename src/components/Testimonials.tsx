import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { BiSolidQuoteAltLeft } from "react-icons/bi"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { getAllTestimonials } from "../graphql/Queries"
import { TestimonialsText } from "../utils/Texts"

const variants = {
    initial: (direction: number) => {
        return {
            x: direction < 0 ? 200 : -200,
            opacity: 0,
        }
    },
    animate: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => {
        return {
            x: direction < 0 ? -200 : 200,
            opacity: 0,
        }
    },
}

const TestimonialsList = () => {
    const { loading, error, data } = getAllTestimonials()
    const testimonials = data?.testimonials?.length ? data.testimonials : []

    const [active, setActive] = useState(0)
    const [direction, setDirection] = useState(0)

    const handlePrev = () => {
        setDirection(1)
        setActive((active) =>
            active === 0 ? testimonials.length - 1 : active - 1
        )
    }

    const handleNext = () => {
        setDirection(-1)
        setActive((active) =>
            active === testimonials.length - 1 ? 0 : active + 1
        )
    }

    if (loading)
        return (
            <p className="w-full text-xl items-center text-center">
                {TestimonialsText.loading}
            </p>
        )

    if (error)
        return (
            <p className="w-full text-xl items-center text-center">
                {TestimonialsText.error}
            </p>
        )

    if (!testimonials.length)
        return (
            <p className="w-full text-xl items-center text-center">
                {TestimonialsText.empty}
            </p>
        )

    return (
        <>
            <div className="flex flex-col items-center gap-10">
                <div className="flex items-center gap-[10%] overflow-hidden">
                    <button
                        onClick={handlePrev}
                        className="hidden tablet:flex text-white text-2xl bg-text/40 hover:bg-primary p-2 rounded-full cursor-pointer transition"
                    >
                        <IoIosArrowBack />
                    </button>
                    <AnimatePresence initial={false} custom={direction}>
                        <>
                            <motion.div
                                variants={variants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                custom={direction}
                                key={active}
                                className="flex flex-col w-full items-center"
                            >
                                <p className="flex min-h-[250px] tablet:min-h-[150px] items-center">
                                    {testimonials[active].text}
                                </p>
                                <BiSolidQuoteAltLeft className="text-primary text-2xl tablet:text-3xl mb-5" />
                                <span className="font-primary font-bold text-secondary text-md tablet:text-xl mb-2">
                                    {testimonials[active].name}
                                </span>
                                <span className="text-xs tablet:text-sm text-text">
                                    {testimonials[active].subtitle}
                                </span>
                            </motion.div>
                        </>
                    </AnimatePresence>
                    <button
                        onClick={handleNext}
                        className="hidden tablet:flex text-white text-2xl bg-text/40 hover:bg-primary p-2 rounded-full cursor-pointer transition"
                    >
                        <IoIosArrowForward />
                    </button>
                </div>
                <div className="flex gap-10 items-center">
                    <div
                        onClick={handlePrev}
                        className="tablet:hidden flex text-white text-xl bg-text/40 hover:bg-primary p-2 rounded-full cursor-pointer transition"
                    >
                        <IoIosArrowBack />
                    </div>
                    <div className="flex gap-2">
                        {testimonials.map((_, i) => (
                            <div
                                onClick={() => setActive(i)}
                                key={i}
                                className={`${
                                    i === active ? "bg-primary" : "bg-text/40"
                                } h-[10px] w-[10px] rounded-full cursor-pointer`}
                            />
                        ))}
                    </div>
                    <div
                        onClick={handleNext}
                        className="tablet:hidden text-white text-xl bg-text/40 hover:bg-primary p-2 rounded-full cursor-pointer transition"
                    >
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialsList
