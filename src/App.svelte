<script lang="ts">
    import "@fontsource/open-sans";
    import '@fontsource-variable/inter/standard.css'; // Supports weights 100-900

    import ResumeEditor from "./lib/components/ResumeEditor.svelte";

    import html2pdf from "html2pdf.js";
    import html2canvas from "html2canvas-pro";

    import { Li, P } from "flowbite-svelte";

    import {
        EnvelopeOutline,
        GlobeOutline,
        MapPinAltOutline,
        PhoneOutline
    } from "flowbite-svelte-icons";


    import {
        certificationsData,
        educationData,
        profileData,
        projectsData, projectsHTML,
        skillsData,
        workData
    } from "./lib/ResumeData.svelte.ts";

    import Section from "./lib/components/Section.svelte";


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


<ResumeEditor/>


<main class="w-204 min-h-264 bg-white mx-auto p-12 mt-4 mb-12">
    <section id="profile" class="text-center flex flex-col items-center">
        <h1 class="text-3xl font-semibold mb-1">{profileData.name}</h1>
        <div class="text-xs font-light flex gap-2">
            {#if profileData.location}
            <span>
				<MapPinAltOutline size="sm" class="inline"/>
                {profileData.location}
			</span>
                {#if profileData.phone || profileData.email}
                    |
                {/if}
            {/if}
            {#if profileData.phone}
            <span>
                <PhoneOutline size="sm" class="inline"/>
                {profileData.phone}
            </span>
                {#if profileData.email}
                    |
                {/if}
            {/if}
            {#if profileData.email}
            <span>
                <EnvelopeOutline size="sm" class="inline"/>
                {profileData.email}
            </span>
            {/if}
        </div>
        {#if profileData?.links?.length}
            <div class="flex gap-2 text-xs font-light">
                {#each profileData.links as link, idx}
                    <span>
                        <GlobeOutline size="sm" class="inline"/>
                        <a href={link}>{link}</a>
                    </span>
                    {#if idx !== profileData.links.length - 1}
                        |
                    {/if}
                {/each}
            </div>
        {/if}
    </section>

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

    {#if projectsData.length}
        <Section title="Projects">
            <!--{@html projectsHTML.html}-->
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
                </div>
            {/each}
        </Section>
    {/if}

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
    {#if skillsData.skills.length}
        <Section title="Skills">
            <P class="detail text-left!">{skillsData.skills.join(", ")}.</P>
        </Section>
    {/if}
</main>


<style>
    @import "tailwindcss";

    main {
        font-family: "Inter Variable", sans-serif;
        /*font-family: "Times New Roman", serif;*/
    }
</style>
