import { ApolloError } from "@apollo/client"
import { MockedResponse } from "@apollo/client/testing"
import { GraphQLError } from "graphql"
import { GET_EVENTS_QUERY } from "../../graphql/Queries"

export const allEventsData = {
    events: [
        {
            title: "Yoga al aire libre",
            subtitle: "Clase de yoga al aire libre",
            description: "Clase de yoga abierta en Montjuïc",
            location: "Montjuïc, Barcelona",
            date: "2023-09-21T00:25:00+00:00",
            price: 12,
        },
        {
            title: "Naturaleza y renovación",
            subtitle: "Un retiro para mujeres conscientes",
            description:
                '¡Descubre la magia de "Naturaleza y Renovación"! Un retiro de yoga exclusivo para mujeres conscientes en Mas Juli, Pineda de Mar, Cataluña, del 19 al 21 de abril de 2024. Sumérgete en prácticas de yoga transformadoras, disfruta de deliciosas comidas veganas y vegetarianas, y establece conexiones significativas con otras mujeres afines. ¡Reserva ahora por 350€ y regálate un fin de semana de bienestar y conexión con la naturaleza! Te esperamos con los brazos abiertos para compartir esta experiencia trascendental juntas.',
            location: "Mas Juli, Pineda de Mar",
            date: "2024-04-22T22:00:00+00:00",
            price: 350,
        },
    ],
}

export const successAllEventsMock: MockedResponse[] = [
    {
        request: {
            query: GET_EVENTS_QUERY,
        },
        result: {
            data: allEventsData,
        },
    },
]

export const errorAllEventsMock: MockedResponse[] = [
    {
        request: {
            query: GET_EVENTS_QUERY,
        },
        error: new ApolloError({
            graphQLErrors: [new GraphQLError("The fetch was unsuccessful!")],
        }),
    },
]

export const emptyAllEventsMock: MockedResponse[] = [
    {
        request: {
            query: GET_EVENTS_QUERY,
        },
        result: {
            data: [],
        },
    },
]
