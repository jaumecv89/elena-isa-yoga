import { useQuery } from "@apollo/client"
import { motion } from "framer-motion"
import { GET_TESTIMONIALS_QUERY } from "../graphql"
import { ITestimonial, ITestimonials } from "../types/Testimonial"
import { TestimonialsListText } from "../utils/Texts"
import TestimonialCard from "./TestimonialCard"
import { useEffect, useRef, useState } from "react"

const TestimonialsList = () => {

    const { loading, error, data } = useQuery<ITestimonials>(GET_TESTIMONIALS_QUERY)

    const [width, setWidth] = useState(0)

    const carousel = useRef<HTMLDivElement>(null)

    useEffect(() => {
        carousel.current && setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return <div>
        {loading ? (
            <p className="w-full text-xl items-center text-center">
                {TestimonialsListText.loading}
            </p>
        ) : error ? (
            <p className="w-full text-xl items-center text-center">
                {TestimonialsListText.error}
            </p>
        ) : data?.testimonials.length ? (
            <motion.div
                ref={carousel}
                whileTap={{ cursor: "grabbing" }}
                className="cursor-grab overflow-hidden"
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="flex"
                >
                    {data.testimonials.map((testimonial: ITestimonial) => (
                        <motion.div key={testimonial.name} className="min-h-[40rem] min-w-[30rem] p-10">
                            <TestimonialCard testimonial={testimonial} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        ) : (
            <p className="w-full text-xl items-center text-center">
                {TestimonialsListText.empty}
            </p>
        )}
    </div>
}

export default TestimonialsList
