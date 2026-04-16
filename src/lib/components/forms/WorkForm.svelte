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
</script>


<div class="grid grid-cols-2 gap-6">
    <div class="grid grid-cols-1 gap-y-6 auto-rows-min">
<!--        <Input placeholder="Employer"/>-->
<!--        <Input placeholder="Position"/>-->
<!--        <Input placeholder="Dates"/>-->
        <FloatingLabelInput type="text">Employer</FloatingLabelInput>
        <FloatingLabelInput type="text">Position</FloatingLabelInput>
        <FloatingLabelInput type="text">Dates</FloatingLabelInput>

        <Button size="sm" class="flex items-center">
            <!--{#snippet ()}-->
                <PlusOutline class="me-1"/>
                Add
            <!--{/snippet}-->
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