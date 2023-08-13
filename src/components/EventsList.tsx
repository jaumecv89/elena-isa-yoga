import { getAllEvents } from "../graphql/Queries"
import { IEvent } from "../types/Event"
import { EventsListText } from "../utils/Texts"
import EventCard from "./EventCard"

const EventsList = () => {
    const { loading, error, data } = getAllEvents()
    const events = data?.events?.length ? data.events : []

    if (loading)
        return (
            <p className="w-full text-xl items-center text-center">
                {EventsListText.loading}
            </p>
        )

    if (error)
        return (
            <p className="w-full text-xl items-center text-center">
                {EventsListText.error}
            </p>
        )

    if (!events.length)
        return (
            <p className="w-full text-xl items-center text-center">
                {EventsListText.empty}
            </p>
        )

    return (
        <div className="flex flex-col w-full tablet:w-[80%] desktop:w-[70%] gap-7 mb-10">
            {events.map((event: IEvent) => (
                <EventCard event={event} key={event.title} />
            ))}
        </div>
    )
}

export default EventsList
