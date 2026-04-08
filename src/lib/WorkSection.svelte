<script lang="ts">
    import { CirclePlusOutline } from "flowbite-svelte-icons";
    import { Button } from "flowbite-svelte";

    let {info} = $props();
</script>


<div class="editor-section">
    <h3>Work</h3>
    <Button size="sm" class="w-fit font-normal">
        <CirclePlusOutline size="sm" class="mr-1"/>
        Experience
    </Button>
</div>