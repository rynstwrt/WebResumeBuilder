<script lang="ts">
    const {title, children} = $props();
</script>


<section class="not-last:mb-6">
    <h2 class="mb-3 text-lg font-semibold border-b border-gray-400 -tracking-[0.02rem]">{title}</h2>
    {@render children()}
</section>


<style>
    @import "tailwindcss";

    :global(.entry) {
        @apply not-last:mb-3;
    }

    :global(.header) {
        @apply font-bold text-sm -tracking-[0.01rem];
    }

    :global(.subheader) {
        @apply font-normal text-sm;
    }

    :global(.detail) {
        @apply text-right text-xs font-light text-gray-600 tracking-tight;
    }
</style>