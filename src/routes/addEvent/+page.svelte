<script>
    import { addEvent } from "./addEvent";

    let name = ""
    let date = ""
    let days = 1
</script>

<div class="flex flex-col gap-5 p-10 pl-3 pr-3 font-bold" style="font-family: 'Comic Neue'">
    <h1 class="text-3xl">Add an event :</h1>
    <div class="flex flex-col text-xl w-full">    
        <label for="#name">Name :</label>
        <input class="bg-slate-700 rounded pl-1" id="name" type="text" bind:value={name}>
    </div>
    <div class="flex flex-row gap-10">
        <div class="flex flex-col text-xl">    
            <label for="#start">Date :</label>
            <input class="bg-slate-700 rounded h-7" id="start" type="date" bind:value={date}>
        </div>
        <div class="flex flex-col text-xl">    
            <label for="duration">Number of days :</label>
            <input id="duration" class="bg-slate-700 rounded h-7 w-5/6 pl-1"  type="number" pattern="\d*" bind:value={days}>
        </div>
    </div>
        
    <button on:click={() => addEvent(name, date, days)} class="bg-slate-700 rounded-2xl s-8 p-3 flex flex-row items-center self-center mt-10 text-xl ">Add event !</button>
    
</div>
