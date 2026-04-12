<script lang="ts">
    import { Button, P, Card, Input, Label } from "flowbite-svelte";
    import { CirclePlusOutline, CloseCircleOutline } from "flowbite-svelte-icons";

    import { educationData } from "../../ResumeData.svelte.ts";
    import type { Snapshot } from "@sveltejs/kit";

    let {open = $bindable()} = $props();

    let formData = {
        school: "",
        degree: "",
        city: "",
        date: ""
    };

    export const snapshot: Snapshot<typeof formData> = {
        capture: () => ({...formData}),
        restore: (value) => Object.assign(formData, value)
    };
</script>


<div class="mb-4">
    {#each educationData as entry, idx}
        <div class="bg-gray-600 p-3 rounded-md not-last:mb-1.5 w-full">
            <div class="flex justify-between mb-1.5">
                <P class="font-normal underline decoration-1 underline-offset-3" size="base">School #{idx + 1}</P>
                <CloseCircleOutline size="md" onclick={() => {educationData.splice(idx, 1)}}/>
            </div>
            <div class="flex justify-between **:text-sm ">
                <div class="*:font-light">
                    <P>{entry.school}</P>
                    <P>{entry.degree}</P>
                </div>
                <div class="*:text-right *:font-thin">
                    <P>{entry.city}</P>
                    <P>{entry.date}</P>
                </div>

            </div>
        </div>
    {/each}
</div>


<form class="grid grid-cols-2 gap-x-2 gap-y-0.5">
    <Label>
        School
        <Input bind:value={formData.school}
               placeholder="University of Fictionville"
               required/>
    </Label>

    <Label>
        Diploma/Degree
        <Input bind:value={formData.degree}
               placeholder="B.A. Computer Science"
               required/>
    </Label>

    <Label>
        City
        <Input bind:value={formData.city}
               placeholder="Seattle, WA"/>
    </Label>

    <Label>
        Graduation Date
        <Input bind:value={formData.date}
               placeholder="Aug 2025"/>
    </Label>
</form>


<Button size="md" onclick={() => educationData.push(formData)}>
    <span class="flex items-center text-sm font-light">
        <CirclePlusOutline class="me-1" size="sm"/>
        Add
    </span>
</Button>


<style>
    @import 'tailwindcss';


</style>


