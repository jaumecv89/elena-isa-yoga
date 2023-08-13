import { ApolloError } from "@apollo/client"
import { MockedResponse } from "@apollo/client/testing"
import { GraphQLError } from "graphql"
import { GET_TESTIMONIALS_QUERY } from "../../graphql/Queries"

export const allTestimonialsData = {
    testimonials: [
        {
            name: "Cristina Moreno",
            subtitle: "Alumna de clases privadas",
            text: "Las particulares con Elena son maravillosas. Te acompaña a cumplir tus objetivos y superar tus retos desde la constancia pero con mucha dulzura y amor. Se nota que le apasiona y te transmite su amor por la práctica. Además tiene un don para los ajustes. Sin duda ha sido un antes y un después en mi práctica de yoga.",
        },
        {
            name: "Paula Barker",
            subtitle: "Alumna en Sharma Climbing",
            text: "Elena es una inspiración. Practicar con ella no es solo un aprendizaje, es contagiarte con su energía positiva, su vitalidad y su calidez. Transmite su amor por el yoga siempre con una sonrisa. He aprendido a creer más en mi fuerza y en mi capacidad desde que practico con ella, y sobre todo, confío plenamente en su guía.",
        },
    ],
}

export const successAllTestimonialsMock: MockedResponse[] = [
    {
        request: {
            query: GET_TESTIMONIALS_QUERY,
        },
        result: {
            data: allTestimonialsData,
        },
    },
]

export const errorAllTestimonialsMock: MockedResponse[] = [
    {
        request: {
            query: GET_TESTIMONIALS_QUERY,
        },
        error: new ApolloError({
            graphQLErrors: [new GraphQLError("The fetch was unsuccessful!")],
        }),
    },
]

export const emptyAllTestimonialsMock: MockedResponse[] = [
    {
        request: {
            query: GET_TESTIMONIALS_QUERY,
        },
        result: {
            data: [],
        },
    },
]
