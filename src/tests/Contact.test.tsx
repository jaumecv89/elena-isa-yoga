import { render, screen } from "@testing-library/react"
import { describe } from "vitest"
import Contact from "../sections/Contact"
import { ContactText } from "../utils/Texts"

describe("Contact section", () => {
    beforeEach(() => {
        render(<Contact />)
    })

    test("displays te text", () => {
        Object.values(ContactText).map((text) => {
            expect(screen.getByText(text)).toBeDefined()
        })
    })
})
