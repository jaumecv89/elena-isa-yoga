import { AnimatePresence, easeInOut, motion } from "framer-motion"
import { Squash as Hamburger } from "hamburger-react"
import React, { useEffect, useState } from "react"
import { Link } from "react-scroll"
import MenuItems from "../utils/MenuItems"
import SocialMedia from "../utils/SocialMedia"
import { NavText } from "../utils/Texts"

const animation = {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
    transition: { ease: easeInOut, duration: 0.4 },
}

const Nav: React.FC = () => {
    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        isOpen
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "unset")
    }, [isOpen])

    return (
        <nav className="flex w-full h-full desktop:h-auto absolute justify-center text-white select-none">
            <div
                className={`flex container justify-between items-center py-8 absolute z-30`}
            >
                <span className="font-primary text-2xl uppercase">
                    {NavText.title}
                </span>
                <div className="desktop:hidden">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
                <ul className="hidden desktop:flex">
                    {MenuItems.map((item) => (
                        <li
                            className="flex pl-10 py-[13px] text-base text-center items-center"
                            key={item.key}
                        >
                            <Link
                                to={item.path}
                                smooth={true}
                                className="cursor-pointer hover:text-primary transition"
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                    <div className="flex flex-row ml-10 border-l-[1px] border-white/10">
                        {SocialMedia.map((item) => (
                            <div
                                className="flex pl-10 items-center"
                                key={item.key}
                            >
                                <a
                                    href={item.link}
                                    className="cursor-pointer hover:text-primary transition"
                                >
                                    {item.icon}
                                </a>
                            </div>
                        ))}
                    </div>
                </ul>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        {...animation}
                        className="flex w-full h-full absolute top-0 items-center justify-center bg-secondary/90 backdrop-blur-md z-20"
                    >
                        <ul className="flex flex-col items-center gap-12">
                            {MenuItems.map((item) => (
                                <li className="text-2xl" key={item.key}>
                                    <Link
                                        to={item.path}
                                        smooth={true}
                                        onClick={() => setOpen(false)}
                                        className="cursor-pointer hover:text-primary transition"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-row w-[60%] pt-10 text-xl border-t-[1px] border-white/10 absolute bottom-10 gap-10 justify-center">
                            {SocialMedia.map((item) => (
                                <a
                                    href={item.link}
                                    key={item.key}
                                    className="cursor-pointer hover:text-primary transition"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Nav
