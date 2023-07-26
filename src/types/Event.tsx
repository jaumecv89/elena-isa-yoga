export interface IEvent {
    title: string
    subtitle: string
    description: string
    location: string
    date: string
    price?: number
}

export interface IEvents {
    events: IEvent[]
}
