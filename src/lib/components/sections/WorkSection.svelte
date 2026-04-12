<!--<script lang="ts">-->

<!--</script>-->


<!--{#if info.workExperience?.length}-->
<!--    <section id="experience">-->
<!--        <h2 class="header">Experience</h2>-->

<!--        {#each info.workExperience as entry}-->
<!--            <div class="tile">-->
<!--                <div class="flex justify-between">-->
<!--                    <div>-->
<!--                        <h3 class="subheader">{entry.role}</h3>-->
<!--                        <h4 class="subheader-2">{entry.employer}</h4>-->
<!--                    </div>-->

<!--                    <div class="dates text-right tracking-tight">-->
<!--                        &lt;!&ndash;                        <p>{entry.start} - {entry.end || "Present"}</p>&ndash;&gt;-->
<!--                        <p>{entry.dates}</p>-->
<!--                        <p>Dallas, TX</p>-->
<!--                    </div>-->
<!--                </div>-->

<!--                &lt;!&ndash;                <div class="flex items-center">&ndash;&gt;-->
<!--                &lt;!&ndash;                    <h3 class="subheader">{entry.title}</h3>&ndash;&gt;-->
<!--                &lt;!&ndash;                    <p class="dates ml-2">{entry.start} - {entry.end || "Present"}</p>&ndash;&gt;-->
<!--                &lt;!&ndash;                </div>&ndash;&gt;-->
<!--                &lt;!&ndash;                <h4 class="subheader-2">{entry.employer}</h4>&ndash;&gt;-->
<!--                &lt;!&ndash;                <p class="description">{entry.description}</p>&ndash;&gt;-->

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