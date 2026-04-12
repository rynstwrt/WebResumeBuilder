<script lang="ts">
    import { certificationsData } from "../../ResumeData.svelte.ts";
</script>


{#if certificationsData.length}
    <section id="certifications">
        <h2 class="header">Certifications</h2>

        {#each certificationsData as entry}
            <div class="tile">
                <div class="flex justify-between">
                    <h3 class="subheader">{entry.name}</h3>
                    <p class="dates">{entry.date}</p>
                </div>

                <p>{entry.from}</p>

                <!--{#if entry.bulletpoints?.length}-->
                <!--    <ul class="list-disc pl-[1.5ch] mt-0.5">-->
                <!--        {#each entry.bulletpoints as bulletpoint}-->
                <!--            &lt;!&ndash;                            <li class="text-sm font-light">• {bulletpoint}</li>&ndash;&gt;-->
                <!--            <li class="text-sm font-light">{bulletpoint}</li>-->
                <!--        {/each}-->
                <!--    </ul>-->
                <!--{/if}-->
            </div>
        {/each}
    </section>
{/if}