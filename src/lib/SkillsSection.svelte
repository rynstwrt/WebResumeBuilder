<script>
    import {CirclePlusOutline} from "flowbite-svelte-icons";
    import {Button} from "flowbite-svelte";

    let {info} = $props();
</script>


<div class="editor-section">
    <h3>Skills</h3>

    <div class="flex flex-wrap items-center text-nowrap gap-2">
        {#each info.skills as skill}
            <Button size="xs" class="w-min">{skill}</Button>
        {/each}
    </div>

    <Button size="sm" class="w-fit font-normal">
        <CirclePlusOutline size="sm" class="mr-1"/>
        Skill
    </Button>
</div>