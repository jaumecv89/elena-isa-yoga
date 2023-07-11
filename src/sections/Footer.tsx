import { Link } from "react-scroll"
import MenuItems from "../utils/MenuItems"
import SocialMedia from "../utils/SocialMedia"

const Footer = () => {

    return <section id="footer" className="relative w-full select-none bg-secondary pt-16">
        <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center text-center mb-8">
                <h1 className="text-primary uppercase">Elena Isa</h1>
                <span className="text-[15px] leading-6 text-textGray md:px-[30%]">
                    Diseño y programación por <a href="https://jaumecampderros.com/" className="text-innerText hover:text-primary transition">Jaume Campderrós</a>: creando experiencias digitales únicas.
                </span>
            </div>
            <ul className="flex justify-center text-innerText transition pb-14">
                {MenuItems.map((item) => (
                    <li className="flex px-5 py-[13px] text-center items-center" key={item.key}>
                        <Link to={item.path} className="cursor-pointer hover:text-primary">{item.title}</Link>
                    </li>
                ))}
            </ul>
            <div className="flex py-6 text-textGray border-t-[1px] border-textGray items-center justify-between">
                <span className="text-sm">
                    © 2023 Elena Isa. Todos los derechos reservados.
                </span>
                <div className="flex gap-7">
                    {SocialMedia.map((item) => (
                        <a href={item.link} key={item.key} className="cursor-pointer hover:text-primary transition">{item.icon}</a>
                    ))}
                </div>
            </div>
        </div>
    </section>
}

export default Footer
