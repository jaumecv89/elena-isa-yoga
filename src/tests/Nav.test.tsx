import { render, screen } from "@testing-library/react"
import { describe } from "vitest"
import Nav from "../components/Nav"
import MenuItems from "../utils/MenuItems"
import SocialMedia from "../utils/SocialMedia"
import { NavText } from "../utils/Texts"

describe("Nav component", () => {
    beforeEach(() => {
        render(<Nav />)
    })

    test("displays the logo", () => {
        expect(screen.getByText(NavText.title)).toBeDefined()
    })

    test("displays the menu", () => {
        MenuItems.map((item) => {
            expect(screen.getByText(item.title)).toBeDefined()
        })
    })

    test("displays the social media", () => {
        const links = screen.getAllByRole("link")
        expect(links[0]).toHaveAttribute("href", SocialMedia[0].link)
        expect(links[1]).toHaveAttribute("href", SocialMedia[1].link)
    })
})
