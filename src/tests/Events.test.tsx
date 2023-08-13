import { MockedProvider } from "@apollo/client/testing"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { describe } from "vitest"
import Events from "../sections/Events"
import { EventsListText, EventsText } from "../utils/Texts"
import {
    allEventsData,
    emptyAllEventsMock,
    errorAllEventsMock,
    successAllEventsMock,
} from "./mocks/AllEvents"

const waitForData = () => new Promise((res) => setTimeout(res, 0))

describe("Events section", () => {
    afterEach(() => {
        cleanup()
    })

    test("displays te generic text", async () => {
        render(
            <MockedProvider mocks={successAllEventsMock} addTypename={false}>
                <Events />
            </MockedProvider>
        )
        await waitForData()
        Object.values(EventsText).map((text) => {
            expect(screen.getByText(text)).toBeDefined()
        })
    })

    test("displays the success events data and more data works correctly", async () => {
        render(
            <MockedProvider mocks={successAllEventsMock} addTypename={false}>
                <Events />
            </MockedProvider>
        )
        await waitForData()
        allEventsData.events.map((event) => {
            const date = new Date(event.date)
            const month = date.toLocaleString("es-ES", { month: "short" })
            expect(screen.getByText(event.title)).toBeDefined()
            expect(screen.getByText(event.subtitle)).toBeDefined()
            expect(screen.getByText(date.getUTCFullYear())).toBeDefined()
            expect(screen.getByText(date.getUTCDate())).toBeDefined()
            expect(screen.getByText(month)).toBeDefined()
            expect(screen.getByText(event.location)).toBeDefined()
            expect(screen.queryByText(event.description)).toBeNull()
            expect(screen.queryByText(`${event.price} €`)).toBeNull()
            const button = screen.getByText(event.title)
            fireEvent.click(button)
            expect(screen.getByText(event.description)).toBeDefined()
            expect(screen.getByText(`${event.price} €`)).toBeDefined()
        })
    })

    test("displays the error events message", async () => {
        render(
            <MockedProvider mocks={errorAllEventsMock} addTypename={false}>
                <Events />
            </MockedProvider>
        )
        await waitForData()
        expect(screen.getByText(EventsListText.error)).toBeDefined()
    })

    test("displays the empty events message", async () => {
        render(
            <MockedProvider mocks={emptyAllEventsMock} addTypename={false}>
                <Events />
            </MockedProvider>
        )
        await waitForData()
        expect(screen.getByText(EventsListText.empty)).toBeDefined()
    })
})
