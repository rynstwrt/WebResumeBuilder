<script lang="ts">
    import { P } from "flowbite-svelte";
    import { educationData } from "../../ResumeData.svelte.ts";
    import Section from "../Section.svelte";
</script>


<Section title="Education">
    {#each educationData as entry}
        <div class="entry flex justify-between">
            <div class="w-full flex justify-between">
                <div>
                    <h3 class="header">{entry.school}</h3>
                    <h4 class="subheader">{entry.degree}</h4>
                </div>
                <div class="text-right tracking-tight">
                    <P class="detail">{entry.city}</P>
                    <P class="detail">{entry.date}</P>
                </div>
            </div>
        </div>
    {/each}
</Section>


<!--{#if educationData.length}-->
<!--    <section id="education">-->
<!--        <h2 class="header">Education</h2>-->

<!--        {#each educationData as entry}-->
<!--            <div class="tile leading-5.5 flex justify-between">-->
<!--                <div class="w-full flex justify-between">-->
<!--                    <div>-->
<!--                        <h3 class="subheader">{entry.school}</h3>-->
<!--                        <h4 class="subheader-2">{entry.degree}</h4>-->
<!--                    </div>-->
<!--                    <div class="dates text-right tracking-tight">-->
<!--                        <p class="dates">{entry.city}</p>-->
<!--                        <p class="dates">{entry.date}</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        {/each}-->
<!--    </section>-->
<!--{/if}-->