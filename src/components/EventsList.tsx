import { useQuery } from "@apollo/client"
import { GET_EVENTS_QUERY } from "../graphql"
import { IEvent, IEvents } from "../types/Event"
import { EventsListText } from "../utils/Texts"
import EventCard from "./EventCard"

const EventsList = () => {

    const { loading, error, data } = useQuery<IEvents>(GET_EVENTS_QUERY)

    return <div className="flex flex-col w-full tablet:w-[80%] desktop:w-[70%] gap-7 mb-10">
        {loading ? (
            <p className="w-full text-xl items-center text-center">
                {EventsListText.loading}
            </p>
        ) : error ? (
            <p className="w-full text-xl items-center text-center">
                {EventsListText.error}
            </p>
        ) : data?.events.length ? (
            <>
                {data.events.map((event: IEvent) => (
                    <EventCard event={event} key={event.title} />
                ))}
            </>
        ) : (
            <p className="w-full text-xl items-center text-center">
                Actualmente no hay retiros programados.
            </p>
        )}
    </div>
}

export default EventsList
