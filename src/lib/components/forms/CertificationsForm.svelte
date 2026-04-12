<script lang="ts">
    import { Button, Input, Label, P } from "flowbite-svelte";
    import type { Snapshot } from "@sveltejs/kit";
    import { certificationsData, educationData } from "../../ResumeData.svelte.ts";
    import { CirclePlusOutline, CloseCircleOutline } from "flowbite-svelte-icons";

    let {open = $bindable()} = $props();

    let formData = {
        name: "",
        date: "",
        from: ""
    };

    export const snapshot: Snapshot<typeof formData> = {
        capture: () => ({...formData}),
        restore: (value) => Object.assign(formData, value)
    };
</script>

<div class="mb-4">
    {#each certificationsData as cert, idx}
        <div class="bg-gray-600 p-3 rounded-md not-last:mb-1.5 w-full">
            <div class="flex justify-between mb-1.5">
                <P class="font-normal underline decoration-1 underline-offset-3" size="base">Certification #{idx + 1}</P>
                <CloseCircleOutline size="md" onclick={() => {certificationsData.splice(idx, 1)}}/>
            </div>
            <div class="flex justify-between **:text-sm ">
                <div class="*:font-light">
                    <P>{cert.name}</P>
                    <P>{cert.from}</P>
                </div>
                <div class="*:text-right *:font-thin">
                    <P>{cert.date}</P>
                </div>
            </div>
        </div>
    {/each}
</div>


<form class="grid grid-cols-2 gap-x-2 gap-y-0.5">
    <Label class="col-span-full">
        Name:
        <Input bind:value={formData.name}
               placeholder="Cisco Certified Network Associate (CCNA)"/>
    </Label>
    <Label class="">
        Awarder:
        <Input bind:value={formData.from} placeholder="Cisco Systems, Inc."/>
    </Label>
    <Label class="">
        Date:
        <Input bind:value={formData.date} placeholder="Aug 2025"/>
    </Label>


    <Button class="col-span-full mt-3" size="md" onclick={() => certificationsData.push(formData)}>
        <span class="flex items-center text-sm font-light">
            <CirclePlusOutline class="me-1" size="sm"/>
            Add
        </span>
    </Button>
</form>