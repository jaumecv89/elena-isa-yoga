import { Link } from "react-scroll"
import MenuItems from "../utils/MenuItems"

const Nav = () => {

    return <nav className="w-full absolute py-8 z-10 text-white select-none">
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <span className="font-primary text-2xl uppercase">Elena Isa</span>
                <ul className="flex flex-row">
                    {MenuItems.map((item) => (
                        <li className="flex pl-10 py-[13px] text-base text-center items-center" key={item.key}>
                            <Link
                                to={item.path}
                                smooth={true}
                                className="cursor-pointer hover:text-primary transition">{item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
}

export default Nav
