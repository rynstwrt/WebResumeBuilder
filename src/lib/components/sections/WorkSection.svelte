<script lang="ts">
    import { P, Li } from "flowbite-svelte";
    import Section from "../Section.svelte";
    import { workData } from "../../ResumeData.svelte.ts";
</script>


{#if workData.length}
    <Section title="Experience">
        {#each workData as entry}
            <div class="entry">
                <div class="flex justify-between">
                    <div>
                        <h3 class="header">{entry.company}</h3>
                        <h4 class="subheader">{entry.position}</h4>
                    </div>

                    <div>
                        <P class="detail">{entry.city}</P>
                        <P class="detail">{entry.dates}</P>
                    </div>
                </div>

                {#if entry.bulletpoints?.length}
                    <ul class="list-disc pl-[1.5ch] mt-0.5">
                        {#each entry.bulletpoints as bulletpoint}
                            <Li class="text-sm font-light">{bulletpoint}</Li>
                        {/each}
                    </ul>
                {/if}
            </div>
        {/each}
    </Section>
{/if}


<!--{#if workData.length}-->
<!--    <section id="experience">-->
<!--        <h2 class="header">Experience</h2>-->

<!--        {#each workData as entry}-->
<!--            <div class="tile">-->
<!--                <div class="flex justify-between">-->
<!--                    <div>-->
<!--                        <h3 class="subheader">{entry.company}</h3>-->
<!--                        <h4 class="subheader-2">{entry.position}</h4>-->
<!--                    </div>-->

<!--                    <div class="dates text-right tracking-tight">-->
<!--                        <p>{entry.city}</p>-->
<!--                        <p>{entry.dates}</p>-->
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