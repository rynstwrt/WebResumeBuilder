<script lang="ts">
    import { Modal } from "flowbite-svelte";

    import { FileOutline } from "flowbite-svelte-icons";

    let {open = $bindable()} = $props();
</script>


<Modal bind:open outsideclose={false} size="sm">
    {#snippet header()}
        <span class="flex items-center">
            <FileOutline size="xl" class="me-0.5"/>
            Certifications
        </span>
    {/snippet}
</Modal>