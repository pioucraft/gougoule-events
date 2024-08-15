import { goto } from "$app/navigation";
import { get } from "svelte/store";
import { events } from "../store";

export function addEvent(name, startDate, days) {
    
    let formatedStartDate = new Date(startDate)
    let formatedEndDate = formatedStartDate.addDays(days-1)
    let event = {"name": name, "start": formatedStartDate, "end": formatedEndDate, "days": days, "id": new Date().getTime()}
   
    events.set(get(events).concat(event).sort((a, b) => a.start > b.start))
    localStorage.setItem("events", JSON.stringify(get(events)))

    goto("/")
}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}