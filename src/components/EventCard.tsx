import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { FaClock, FaLocationDot } from "react-icons/fa6"
import { MdExpandLess, MdExpandMore } from "react-icons/md"
import { Link } from "react-scroll"
import { IEvent } from "../types/Event"
import { EventCardText } from "../utils/Texts"

type Props = {
    event: IEvent
}

const EventCard: React.FC<Props> = ({ event }) => {
    const date = new Date(event.date)
    const month = date.toLocaleString("es-ES", { month: "short" })

    const [detailsOpen, setDetailsOpen] = useState(false)

    const toggleOpen = () => {
        setDetailsOpen((detailsOpen) => !detailsOpen)
    }

    return (
        <motion.div
            initial={false}
            onClick={toggleOpen}
            className="flex flex-col relative bg-background rounded-md shadow-lg border-[1px] border-primary/30 cursor-pointer"
        >
            {detailsOpen ? (
                <MdExpandLess className="absolute text-primary m-1 text-2xl top-0 right-0" />
            ) : (
                <MdExpandMore className="absolute text-primary m-1 text-2xl top-0 right-0" />
            )}
            <div className="flex flex-col tablet:flex-row p-6 z-30">
                <div className="flex flex-row tablet:w-[70%] pb-6 tablet:pb-0">
                    <div className="flex flex-col w-[20%] pr-6 justify-center border-r-[1px] border-primary/30">
                        <span className="text-[11px] tablet:text-[12px] desktop:text-sm text-text font-primary">
                            {date.getUTCFullYear()}
                        </span>
                        <span className="text-[40px] tablet:text-[55px] desktop:text-[60px] text-primary font-primary leading-tight">
                            {date.getUTCDate()}
                        </span>
                        <span className="font-bold text-xs tablet:text-md uppercase tracking-[3.5px]">
                            {month}
                        </span>
                    </div>
                    <div className="flex flex-col w-[80%] pl-6 tablet:pr-6 tablet:border-r-[1px] border-primary/30 gap-2 items-start text-left justify-center ">
                        <span className="text-md desktop:text-lg font-bold uppercase">
                            {event.title}
                        </span>
                        <span className="text-md desktop:text-lg">
                            {event.subtitle}
                        </span>
                    </div>
                </div>
                <div className="flex flex-row tablet:flex-col tablet:w-[30%] text-sm pt-6 tablet:pt-0 tablet:pl-6 gap-2 text-left justify-center items-center tablet:items-start border-t-[1px] tablet:border-t-0 border-primary/30">
                    <div className="flex w-[80%] tablet:w-auto justify-start items-center gap-2">
                        <FaLocationDot className="text-primary" />{" "}
                        {event.location}
                    </div>
                    <div className="flex w-[20%] tablet:w-auto justify-end items-center gap-2">
                        <FaClock className="text-primary" />{" "}
                        {`${("0" + date.getHours()).slice(-2)}:${(
                            "0" + date.getMinutes()
                        ).slice(-2)}`}
                    </div>
                </div>
            </div>
            <AnimatePresence initial={false}>
                {detailsOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { height: "auto" },
                            collapsed: { height: 0 },
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                        className="flex flex-col z-20"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.3 } }}
                            exit={{ opacity: 0, transition: { duration: 0 } }}
                            className="flex flex-col px-6 pb-6 gap-6"
                        >
                            <p className="text-left m-0">{event.description}</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.3 } }}
                            exit={{ opacity: 0, transition: { duration: 0 } }}
                            className="flex px-6 pb-6 items-center justify-between"
                        >
                            <Link
                                to="contact"
                                smooth="true"
                                onClick={toggleOpen}
                                className="btn-primary"
                            >
                                {EventCardText.signIn}
                            </Link>
                            <span className="text-primary border-[1px] border-alternative uppercase text-[17px] py-[16px] px-[40px] leading-4 bg-white rounded-3xl justify-center">
                                {event.price ? `${event.price} €` : "-"}
                            </span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default EventCard
