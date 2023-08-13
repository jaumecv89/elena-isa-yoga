import { render, screen } from "@testing-library/react"
import { describe } from "vitest"
import About from "../sections/About"
import { AboutText } from "../utils/Texts"

describe("About section", () => {
    beforeEach(() => {
        render(<About />)
    })

    test("displays te text", () => {
        Object.values(AboutText).map((text) => {
            expect(screen.getByText(text)).toBeDefined()
        })
    })

    test("displays te images", () => {
        expect(screen.getByAltText("Top page transition")).toBeDefined()
        expect(screen.getByAltText("Bottom page transition")).toBeDefined()
    })
})
