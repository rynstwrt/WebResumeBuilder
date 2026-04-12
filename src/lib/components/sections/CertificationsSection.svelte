<!--<script lang="ts">-->
<!--    -->
<!--</script>-->


<!--{#if info.certifications?.length}-->
<!--    <section id="certifications">-->
<!--        <h2 class="header">Certifications</h2>-->

<!--        {#each info.certifications as entry}-->
<!--            <div class="tile">-->
<!--                <h3 class="subheader">{entry.title}</h3>-->
<!--                &lt;!&ndash;                <p class="font-light text-sm">{entry.description}</p>&ndash;&gt;-->
<!--                &lt;!&ndash;                <p class="dates">{entry.start} - {entry.end || "Present"}</p>&ndash;&gt;-->
<!--                <p class="dates">{entry.dates}</p>-->
<!--                {#if entry.bulletpoints?.length}-->
<!--                    <ul class="list-disc pl-[1.5ch] mt-0.5">-->
<!--                        {#each entry.bulletpoints as bulletpoint}-->
<!--                            &lt;!&ndash;                            <li class="text-sm font-light">• {bulletpoint}</li>&ndash;&gt;-->
<!--                            <li class="text-sm font-light">{bulletpoint}</li>-->
<!--                        {/each}-->
<!--                    </ul>-->
<!--                {/if}-->
<!--            </div>-->
<!--        {/each}-->
<!--    </section>-->
<!--{/if}-->