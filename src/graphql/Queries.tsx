import { gql, useQuery } from "@apollo/client"
import { IEvents } from "../types/Event"
import { ITestimonials } from "../types/Testimonial"

export const GET_EVENTS_QUERY = gql`
    {
        events(first: 3, orderBy: date_ASC, where: { date_gte: TODAY }) {
            title
            subtitle
            description
            location
            date
            price
        }
    }
`

export const GET_TESTIMONIALS_QUERY = gql`
    {
        testimonials(first: 7) {
            name
            subtitle
            text
        }
    }
`

export const getAllEvents = () => {
    const { data, loading, error } = useQuery<IEvents>(GET_EVENTS_QUERY)
    return { data, loading, error }
}

export const getAllTestimonials = () => {
    const { data, loading, error } = useQuery<ITestimonials>(
        GET_TESTIMONIALS_QUERY
    )
    return { data, loading, error }
}
