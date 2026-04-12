<!--<script lang="ts">-->
<!--    -->
<!--</script>-->


<!--{#if info.projects?.length}-->
<!--    <section id="projects">-->
<!--        <h2 class="header">Projects</h2>-->

<!--        {#each info.projects as entry}-->
<!--            <div class="tile">-->
<!--                <h3 class="subheader">{entry.title}</h3>-->
<!--                &lt;!&ndash;                <p class="font-light text-sm">{entry.description}</p>&ndash;&gt;-->
<!--                {#if entry.bulletpoints?.length}-->
<!--                    <ul class="list-disc pl-[1.5ch] mt-0.5">-->
<!--                        {#each entry.bulletpoints as bulletpoint}-->
<!--                            &lt;!&ndash;                            <li class="text-sm font-light">• {bulletpoint}</li>&ndash;&gt;-->
<!--                            <li class="text-sm font-light">{bulletpoint}</li>-->
<!--                        {/each}-->
<!--                    </ul>-->
<!--                {/if}-->
<!--                {#each entry.links as link}-->
<!--                    &lt;!&ndash;                            <li class="text-sm font-light">• {bulletpoint}</li>&ndash;&gt;-->
<!--                    <a href={link} class="block text-sm font-light">{link}</a>-->
<!--                {/each}-->
<!--            </div>-->
<!--        {/each}-->
<!--    </section>-->
<!--{/if}-->