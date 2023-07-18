import { Link } from "react-scroll"
import MenuItems from "../utils/MenuItems"
import SocialMedia from "../utils/SocialMedia"

const Footer = () => {

    return <section id="footer" className="relative w-full select-none bg-secondary pt-16">
        <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center text-center mb-5">
                <h2 className="text-primary uppercase">Elena Isa</h2>
                <p className="text-xs tablet:text-sm desktop:text-[15px] leading-6 text-gray tablet:px-[30%] mb-[14px]">
                    Diseño y programación por <a href="https://jaumecampderros.com/" className="text-paragraph hover:text-primary transition">Jaume Campderrós</a>: creando experiencias digitales únicas.
                </p>
            </div>
            <ul className="flex justify-center text-paragraph pb-14">
                {MenuItems.map((item) => (
                    <li className="flex px-5 py-[13px] text-center items-center" key={item.key}>
                        <Link
                            to={item.path}
                            smooth={true}
                            className="cursor-pointer hover:text-primary transition">{item.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex flex-col tablet:flex-row gap-4 py-6 text-gray border-t-[1px] border-textGray/10 items-center justify-between">
                <span className="text-sm text-center">
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
