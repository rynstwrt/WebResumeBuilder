<script lang="ts">
    import {
        Label,
        Textarea,
        Helper,
        P,
        Modal
    } from "flowbite-svelte";

    import {
        CloseCircleSolid,
        PaperClipOutline
    } from "flowbite-svelte-icons";

    let {open = $bindable()} = $props();

    let skillsText = $state("asdf\ntest1\ntest2");
    let skills = $derived(skillsText.split("\n"));

    function removeSkill(idx: number) {
        skills = skills.toSpliced(idx, 1);
        skillsText = skills.join("\n");
    }

    export { skills };
</script>

<Modal bind:open outsideclose={false} size="sm">
    {#snippet header()}
        <span class="flex items-center">
            <PaperClipOutline size="xl" class="me-0.5"/>
            Skills
        </span>
    {/snippet}

    <Textarea rows={5}
              class="w-full"
              placeholder="Type skills, one per line..."
              bind:value={skillsText}/>
    <Helper class="text-sm">Type skills, one per line.</Helper>

    <Label class="mb-2 block mt-6">Skills:</Label>
    <div class="flex flex-wrap gap-2">
        {#if skillsText.length}
            {#each skills as skill, idx}
                <div class="flex items-center bg-gray-700 rounded-sm py-0.5 px-1.5">
                    <P weight="thin" size="sm">{skill}</P>
                    <CloseCircleSolid size="sm" class="ml-1" onclick={() => removeSkill(idx)}/>
                </div>
            {/each}
        {/if}
    </div>
</Modal>