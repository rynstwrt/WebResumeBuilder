<script lang="ts">
    import { Modal } from "flowbite-svelte";

    import { PaperPlaneOutline } from "flowbite-svelte-icons";

    let {open = $bindable()} = $props();
</script>


<Modal bind:open outsideclose={false} size="sm">
    {#snippet header()}
        <span class="flex items-center">
            <PaperPlaneOutline size="xl" class="me-0.5"/>
            Projects
        </span>
    {/snippet}
</Modal>