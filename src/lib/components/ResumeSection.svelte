<script lang="ts">
    const {title, children} = $props();
</script>


<section class="not-last:mb-6">
    <h2 class="mb-3 text-lg font-semibold border-b border-gray-400 -tracking-[0.02rem]">{title}</h2>
    {@render children()}
</section>