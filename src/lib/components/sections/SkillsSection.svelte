<script lang="ts">
    import { P } from "flowbite-svelte";
    import { skillsData } from "../../ResumeData.svelte.ts";
    import Section from "../Section.svelte";
</script>


{#if skillsData.skills.length}
    <Section title="Skills">
        <P class="detail text-left!">{skillsData.skills.join(", ")}.</P>
    </Section>
{/if}