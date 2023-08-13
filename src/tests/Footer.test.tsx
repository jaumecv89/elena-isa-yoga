import { render, screen } from "@testing-library/react"
import { describe } from "vitest"
import Footer from "../sections/Footer"
import MenuItems from "../utils/MenuItems"
import SocialMedia from "../utils/SocialMedia"
import { FooterText } from "../utils/Texts"

describe("Footer section", () => {
    beforeEach(() => {
        render(<Footer />)
    })

    test("displays the text", () => {
        expect(screen.getByText(FooterText.title)).toBeDefined()
        expect(screen.getByText(FooterText.copyright)).toBeDefined()
    })

    test("displays the link", () => {
        const links = screen.getAllByRole("link")
        expect(links[0]).toHaveAttribute("href", FooterText.website)
    })

    test("displays the menu", () => {
        MenuItems.map((item) => {
            expect(screen.getByText(item.title)).toBeDefined()
        })
    })

    test("displays the social media", () => {
        const links = screen.getAllByRole("link")
        expect(links[1]).toHaveAttribute("href", SocialMedia[0].link)
        expect(links[2]).toHaveAttribute("href", SocialMedia[1].link)
    })
})
