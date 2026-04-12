<script lang="ts">
    import "@fontsource/open-sans";
    import '@fontsource-variable/inter/standard.css'; // Supports weights 100-900

    import Editor from "./lib/components/Editor.svelte";

    import html2pdf from "html2pdf.js";
    import html2canvas from "html2canvas-pro";
    import ProfileSection from "./lib/components/sections/ProfileSection.svelte";
    import WorkSection from "./lib/components/sections/WorkSection.svelte";
    import EducationSection from "./lib/components/sections/EducationSection.svelte";
    import ProjectsSection from "./lib/components/sections/ProjectsSection.svelte";
    import CertificationsSection from "./lib/components/sections/CertificationsSection.svelte";
    import SkillsSection from "./lib/components/sections/SkillsSection.svelte";

    function downloadPDF() {
        const el: HTMLElement = document.querySelector("main")!;
        html2canvas(el).then(canvas => {
            console.log(canvas);
            document.body.append(canvas);
            html2pdf(canvas, {
                filename: "Resume.pdf",
                jsPDF: {
                    unit: "in",
                    format: "letter",
                    orientation: "portrait"
                }
            });
        });
    }
</script>



<Editor />


<main class="w-204 min-h-264 bg-white mx-auto p-12 mt-4 mb-12">
    <ProfileSection />
    <EducationSection />
    <WorkSection />
    <ProjectsSection />
    <CertificationsSection />
    <SkillsSection />
</main>



<style>
    @import "tailwindcss";

    main {
        font-family: "Inter Variable", sans-serif;
        /*font-family: "Times New Roman", serif;*/
    }

    /*:global(section) {*/
        /*&:not(:last-of-type) {*/
        /*    @apply mb-6;*/
        /*}*/

        /*:global(.tile) {*/
        /*    @apply py-2.5;*/
        /*}*/
    /*}*/


</style>
