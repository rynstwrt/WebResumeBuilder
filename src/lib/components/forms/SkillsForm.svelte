<script lang="ts">
    import {
        Label,
        Textarea,
        Helper,
        P,
        Tags
    } from "flowbite-svelte";

    import {
        CloseCircleSolid,
    } from "flowbite-svelte-icons";

    // import { skillsData } from "../../ResumeData.svelte.ts";
    import { data } from "../../ResumeData.svelte.ts";

    let {open = $bindable()} = $props();

    // let tags: string[] = $state([]);

    // let resumeData = new ResumeData();
</script>


<Tags bind:value={data.skillTags} onclosecapture={e => e.preventDefault()}/>


<!--<Textarea rows={5}-->
<!--          class="w-full"-->
<!--          placeholder="Type skills, one per line..."-->
<!--          bind:value={skillsText}/>-->
<!--<Helper class="text-sm">Type skills, one per line.</Helper>-->


<!--<Label class="mb-2 block mt-6">Skills:</Label>-->
<!--<div class="flex flex-wrap gap-2">-->
<!--    {#if skillsText.length}-->
<!--        {#each skillsArr as skill, idx}-->
<!--            <div class="flex items-center bg-gray-700 rounded-sm py-0.5 px-1.5">-->
<!--                <P weight="thin" size="sm">{skill}</P>-->
<!--                <CloseCircleSolid size="sm" class="ml-1" onclick={() => removeSkill(idx)}/>-->
<!--            </div>-->
<!--        {/each}-->
<!--    {/if}-->
<!--</div>-->
