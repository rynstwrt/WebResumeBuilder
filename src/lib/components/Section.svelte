<script lang="ts">
    const {title, children} = $props();
</script>





<section class="not-last:mb-6">
    <h2 class="mb-3 text-lg font-semibold border-b border-gray-400 -tracking-[0.02rem]">{title}</h2>

    {@render children()}
    <!--{#each data as entry}-->
    <!--    <div class="tile">-->
    <!--        <div class="flex justify-between">-->
    <!--            <h3 class="subheader">{entry.name}</h3>-->
    <!--            <p class="dates">{entry.date}</p>-->
    <!--        </div>-->

    <!--        <p>{entry.from}</p>-->

    <!--        {#if entry.bulletpoints?.length}-->
    <!--            <ul class="list-disc pl-[1.5ch] mt-0.5">-->
    <!--                {#each entry.bulletpoints as bulletpoint}-->
    <!--                    &lt;!&ndash;                            <li class="text-sm font-light">• {bulletpoint}</li>&ndash;&gt;-->
    <!--                    <li class="text-sm font-light">{bulletpoint}</li>-->
    <!--                {/each}-->
    <!--            </ul>-->
    <!--        {/if}-->
    <!--    </div>-->
    <!--{/each}-->
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