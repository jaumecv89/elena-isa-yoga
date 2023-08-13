import { MockedProvider } from "@apollo/client/testing"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { describe } from "vitest"
import Classes from "../sections/Classes"
import { ClasesText, TestimonialsText } from "../utils/Texts"
import {
    allTestimonialsData,
    emptyAllTestimonialsMock,
    errorAllTestimonialsMock,
    successAllTestimonialsMock,
} from "./mocks/AllTestimonials"

const waitForData = () => new Promise((res) => setTimeout(res, 0))

describe("Classes section", () => {
    afterEach(() => {
        cleanup()
    })

    test("displays the generic text", async () => {
        render(
            <MockedProvider
                mocks={successAllTestimonialsMock}
                addTypename={false}
            >
                <Classes />
            </MockedProvider>
        )
        await waitForData()
        Object.values(ClasesText).map((text) => {
            expect(screen.getByText(text)).toBeDefined()
        })
    })

    test("displays the images", async () => {
        render(
            <MockedProvider
                mocks={successAllTestimonialsMock}
                addTypename={false}
            >
                <Classes />
            </MockedProvider>
        )
        await waitForData()
        expect(screen.getByAltText("Bottom page transition")).toBeDefined()
        expect(
            screen.getByAltText("Collaborate top page transition")
        ).toBeDefined()
        expect(
            screen.getByAltText("Collaborate bottom page transition")
        ).toBeDefined()
        expect(screen.getByAltText("Dash and Stars")).toBeDefined()
        expect(screen.getByAltText("Caraibi")).toBeDefined()
        expect(screen.getByAltText("Ecoderma")).toBeDefined()
        expect(screen.getByAltText("Byoode")).toBeDefined()
        expect(screen.getByAltText("Kombucha")).toBeDefined()
        expect(screen.getByAltText("Yohemian")).toBeDefined()
        expect(screen.getByAltText("Relax")).toBeDefined()
    })

    test("displays the success testimonials data and buttons work correctly", async () => {
        render(
            <MockedProvider
                mocks={successAllTestimonialsMock}
                addTypename={false}
            >
                <Classes />
            </MockedProvider>
        )
        await waitForData()
        const button = screen.getAllByRole("button")
        expect(
            screen.getByText(allTestimonialsData.testimonials[0].name)
        ).toBeDefined()
        expect(
            screen.getByText(allTestimonialsData.testimonials[0].subtitle)
        ).toBeDefined()
        expect(
            screen.getByText(allTestimonialsData.testimonials[0].text)
        ).toBeDefined()
        fireEvent.click(button[0])
        expect(
            screen.getByText(allTestimonialsData.testimonials[1].name)
        ).toBeDefined()
        expect(
            screen.getByText(allTestimonialsData.testimonials[1].subtitle)
        ).toBeDefined()
        expect(screen.getByText(allTestimonialsData.testimonials[1].text))
        fireEvent.click(button[1])
        expect(
            screen.getByText(allTestimonialsData.testimonials[0].name)
        ).toBeDefined()
        expect(
            screen.getByText(allTestimonialsData.testimonials[0].subtitle)
        ).toBeDefined()
        expect(
            screen.getByText(allTestimonialsData.testimonials[0].text)
        ).toBeDefined()
    })

    test("displays the error testimonials message", async () => {
        render(
            <MockedProvider
                mocks={errorAllTestimonialsMock}
                addTypename={false}
            >
                <Classes />
            </MockedProvider>
        )
        await waitForData()
        expect(screen.getByText(TestimonialsText.error)).toBeDefined()
    })

    test("displays the empty testimonials message", async () => {
        render(
            <MockedProvider
                mocks={emptyAllTestimonialsMock}
                addTypename={false}
            >
                <Classes />
            </MockedProvider>
        )
        await waitForData()
        expect(screen.getByText(TestimonialsText.empty)).toBeDefined()
    })
})
