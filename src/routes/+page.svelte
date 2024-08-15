<script>
	import { onMount } from "svelte";
	import { loadEvents } from "./loadData";
	import { events } from "./store";
	import { get } from "svelte/store";

    onMount(() => {
        loadEvents()
        console.log(get(events))
    })
    
</script>

<a href="addEvent" class="size-16 border-solid border-white border-2 items-center justify-center flex bg-gray-700 rounded-3xl bottom-4 right-4 fixed">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-12">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
</a>