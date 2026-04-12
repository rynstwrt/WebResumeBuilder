<script lang="ts">
    import { Li } from "flowbite-svelte";
    import Section from "../Section.svelte";
    import { projectsData } from "../../ResumeData.svelte.ts";
</script>


{#if projectsData.length}
    <Section title="Projects">
        {#each projectsData as entry}
            <div class="entry">
                <h3 class="header">{entry.name}</h3>
                <a class="subheader" href={entry.link}>{entry.link}</a>
                {#if entry.bulletpoints?.length}
                    <ul class="list-disc pl-[1.5ch] mt-0.5">
                        {#each entry.bulletpoints as bulletpoint}
                            <Li class="text-sm font-light">{bulletpoint}</Li>
                        {/each}
                    </ul>
                {/if}
                <!--{#each entry.links as link}-->
                <!--                    <a href={link} class="block text-sm font-light">{link}</a>-->
                <!--                {/each}-->
            </div>
        {/each}
    </Section>
{/if}