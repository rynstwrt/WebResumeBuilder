<script lang="ts">
    import { Modal } from "flowbite-svelte";

    import { BuildingOutline } from "flowbite-svelte-icons";

    let {open = $bindable()} = $props();
</script>


<Modal bind:open outsideclose={false} size="sm">
    {#snippet header()}
        <span class="flex items-center">
            <BuildingOutline size="xl" class="me-0.5"/>
            Work
        </span>
    {/snippet}
</Modal>