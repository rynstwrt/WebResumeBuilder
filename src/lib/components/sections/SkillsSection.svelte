<script lang="ts">
    import { skillsData } from "../../ResumeData.svelte.ts";
</script>


{#if skillsData.skills.length}
    <section id="skills">
        <h2 class="header">Skills</h2>
        <p class="text-xs font-light">{skillsData.skills.join(", ")}.</p>
    </section>
{/if}