import { gql } from "@apollo/client"

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
