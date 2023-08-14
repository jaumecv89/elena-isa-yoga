import { render, screen } from "@testing-library/react"
import { describe } from "vitest"
import Hero from "../sections/Hero"
import { HeroText } from "../utils/Texts"

describe("Hero section", () => {
    beforeEach(() => {
        render(<Hero />)
    })

    test("displays the text", () => {
        Object.values(HeroText).map((text) => {
            expect(screen.getByText(text)).toBeDefined()
        })
    })
})
