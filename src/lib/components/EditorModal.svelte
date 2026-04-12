<script lang="ts">
    import { Modal } from "flowbite-svelte";

    let {title, Icon, open = $bindable(), children} = $props();
</script>



<Modal bind:open outsideclose={false} size="sm">
    {#snippet header()}
        <span class="flex items-center">
            <Icon size="xl" class="me-0.5"/>
            {title}
        </span>
    {/snippet}

    {@render children()}
</Modal>