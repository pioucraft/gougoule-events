<script>
	import { onMount } from "svelte";
	import { loadEvents } from "./loadData";
	import { events } from "./store";
	import { get } from "svelte/store";

    onMount(() => {
        loadEvents()
        console.log(get(events))
    })

    function deleteEvent(id) {
        if (confirm("Delete this event ?")) {
            events.set(get(events).filter(x => x.id != id))
            localStorage.setItem("events", JSON.stringify(get(events)))
        }
    }
</script>

<div class="flex flex-col gap-5 p-3">
    {#each $events as event}
        <button on:click={() => deleteEvent(event.id)} class="bg-green-500 h-24 p-3 rounded-3xl text-start">
            <h1 class="text-xl">{event.name}</h1>
            {#if event.days > 1}

            <p>{new Date(event.start).toDateString()} -> {new Date(event.end).toDateString()}</p>
            <p>{event.days} days</p>
            {:else}
            <p>{new Date(event.start).toDateString()}</p>
            {/if}
        </button>
    {/each}
</div>



<a href="addEvent" class="size-16 border-solid border-white border-2 items-center justify-center flex bg-gray-700 rounded-3xl bottom-4 right-4 fixed">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-12">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
</a>