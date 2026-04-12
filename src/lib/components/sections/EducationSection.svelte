<script lang="ts">
    import { P } from "flowbite-svelte";
    import { educationData } from "../../ResumeData.svelte.ts";
    import Section from "../Section.svelte";
</script>


{#if educationData.length}
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
{/if}