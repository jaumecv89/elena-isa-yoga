import { gql } from '@apollo/client';

export const GET_EVENTS_QUERY = gql`
    {
        events(orderBy: date_ASC, where: {date_gte: TODAY}) {
            title
            subtitle
            description
            location
            date
            price
        }
    }
`
