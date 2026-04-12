<script lang="ts">
    import { P } from "flowbite-svelte";
    import { certificationsData } from "../../ResumeData.svelte.ts";
    import Section from "../Section.svelte";
</script>


{#if certificationsData.length}
    <Section title="Certifications">
        {#each certificationsData as entry}
            <div class="entry flex justify-between">
                <div class="">
                    <h3 class="header">{entry.name}</h3>
                    <h4 class="subheader">{entry.from}</h4>
                </div>

                <P class="detail">{entry.date}</P>
            </div>
        {/each}
    </Section>
{/if}