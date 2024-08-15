import { events } from "./store"

export function loadEvents() {
    let storedEvents = localStorage.getItem("events")
    if(!storedEvents) {
        storedEvents = [];
        localStorage.setItem("events", JSON.stringify(storedEvents))
        return;
    }

    events.set(JSON.parse(storedEvents).sort((a, b) => a.start > b.start))

}