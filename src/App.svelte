<script lang="ts">
    import "@fontsource/open-sans";
    import '@fontsource-variable/inter/standard.css'; // Supports weights 100-900

    const isDevMode = process.env.NODE_ENV === "development";

    import Editor from "./lib/components/Editor.svelte";

    import html2pdf from "html2pdf.js";
    import html2canvas from "html2canvas-pro";
    import { onMount } from "svelte";
    import ProfileSection from "./lib/sections/ProfileSection.svelte";
    import WorkSection from "./lib/sections/WorkSection.svelte";
    import EducationSection from "./lib/sections/EducationSection.svelte";
    import ProjectsSection from "./lib/sections/ProjectsSection.svelte";
    import CertificationsSection from "./lib/sections/CertificationsSection.svelte";
    import SkillsSection from "./lib/sections/SkillsSection.svelte";

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


<Editor {downloadPDF} />

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
    }

    :global(section) {
        &:not(:last-of-type) {
            @apply mb-6;
        }

        .tile {
            @apply py-2.5;
        }

        :global(.header) {
            @apply text-lg font-semibold border-b border-gray-400 -tracking-[0.02rem] mb-1;
        }

        :global(.subheader) {
            @apply font-bold text-sm -tracking-[0.01rem];
        }

        :global(.subheader-2) {
            @apply font-normal text-sm;
        }

        .dates {
            @apply text-xs font-light italic text-gray-600 tracking-tight;
        }
    }


</style>
