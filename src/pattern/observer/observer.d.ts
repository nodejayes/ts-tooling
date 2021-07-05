type Listener<EventType> = (event: EventType) => void;

export function createObserver<EventType>(): {
    subscribe: (listener: Listener<EventType>) => () => void,
    publish: (event: EventType) => void,
}
