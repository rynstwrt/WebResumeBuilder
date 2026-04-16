<script lang="ts">
    import {
        Timeline,
        TimelineItem,
        Input,
        Button,
        FloatingLabelInput
    } from "flowbite-svelte";

    import {
        PlusOutline
    } from "flowbite-svelte-icons";

    let {open = $bindable()} = $props();

    import { data } from "../../ResumeData.svelte.ts";

    let formData = {
        employer: "",
        position: "",
        dates: ""
    };
</script>


<div class="grid grid-cols-2 gap-6">
    <div class="grid grid-cols-1 gap-y-6 auto-rows-min">
        <FloatingLabelInput type="text"
                            bind:value={formData.employer}>Employer</FloatingLabelInput>
        <FloatingLabelInput type="text" bind:value={formData.position}>Position</FloatingLabelInput>
        <FloatingLabelInput type="text" bind:value={formData.dates}>Dates</FloatingLabelInput>

        <Button size="sm" onclick={() => {
            data.workExperience.push(formData);
        }}>
            <span class="flex items-center">
                <PlusOutline class="me-1"/>
                Add
            </span>
        </Button>
    </div>

    <Timeline>
        {#each data.workExperience as job}
            <TimelineItem title={job.employer}
                          date={job.dates}>
                <p>{job.position}</p>
            </TimelineItem>
        {/each}
    </Timeline>
</div>