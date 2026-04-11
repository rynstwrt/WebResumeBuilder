<script lang="ts">
    import "@fontsource/open-sans";

    // Supports weights 100-900
    import '@fontsource-variable/inter/standard.css';

    import {
        EnvelopeOutline,
        GlobeOutline,
        MapPinAltOutline,
        PhoneOutline,
    } from "flowbite-svelte-icons";

    const isDevMode = process.env.NODE_ENV === "development";

    import ResumeData from "./lib/ResumeInfo.svelte.ts";
    const info = new ResumeData(isDevMode);

    import Editor from "./lib/components/Editor.svelte";

    import html2pdf from "html2pdf.js";
    import html2canvas from "html2canvas-pro";

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


<!--<EditorDrawer addToast={addToast} openOnLoad={false} info={info}/>-->
<Editor openOnLoad={true} info={info} {isDevMode} {downloadPDF}/>

<main
        class="w-204 min-h-264 bg-white mx-auto p-12 mt-4 mb-12">
    <!--    class="w-204 min-h-264 bg-white mx-auto p-12 mt-4 mb-12">-->
    <!--    class="w-204 h-264 border border-gray-400 bg-white mx-auto p-12 mt-4 mb-12">-->
    <!-- ABOUT SECTION  -->

    <section
            id="about"
            class="text-center flex flex-col items-center">
        <h1 class="text-3xl font-semibold mb-1">{info.name}</h1>
        <!--        <p class="text-sm font-light flex gap-1 items-center">-->
        <!--            <span><EnvelopeOutline size="sm" class="inline align-middle mr-1"/>{info.email}</span> |-->
        <!--            <span><PhoneOutline size="sm" class="inline align-middle mr-1" />{info.phone}</span> |-->
        <!--            <span><MapPinAltOutline size="sm" class="inline align-middle mr-1" />{info.location}</span>-->
        <!--        </p>-->

        <div class="text-xs font-light flex gap-2">
			<span>
				<EnvelopeOutline size="sm" class="inline"/>
                {info.email}
			</span>

            |

            <span>
				<PhoneOutline size="sm" class="inline"/>
                {info.phone}
			</span>

            |

            <span>
				<MapPinAltOutline size="sm" class="inline"/>
                {info.location}
			</span>
        </div>

        {#if info.links}
            <div class="flex gap-2 text-xs font-light">
                {#each info.links.split("\n") as link, i}
                    <span>
                        <GlobeOutline size="sm" class="inline"/>
                        <a href={link}>{link}</a>
                    </span>

                    {#if i !== info.links.split("\n").length - 1}
                        |
                    {/if}
                {/each}
            </div>
        {/if}
    </section>

    <!-- EXPERIENCE SECTION -->
    {#if info.workExperience?.length}
        <section id="experience">
            <h2 class="header">Experience</h2>

            {#each info.workExperience as entry}
                <div class="tile">
                    <div class="flex justify-between">
                        <div>
                            <h3 class="subheader">{entry.role}</h3>
                            <h4 class="subheader-2">{entry.employer}</h4>
                        </div>

                        <div class="dates text-right tracking-tight">
                            <!--                        <p>{entry.start} - {entry.end || "Present"}</p>-->
                            <p>{entry.dates}</p>
                            <p>Dallas, TX</p>
                        </div>
                    </div>

                    <!--                <div class="flex items-center">-->
                    <!--                    <h3 class="subheader">{entry.title}</h3>-->
                    <!--                    <p class="dates ml-2">{entry.start} - {entry.end || "Present"}</p>-->
                    <!--                </div>-->
                    <!--                <h4 class="subheader-2">{entry.employer}</h4>-->
                    <!--                <p class="description">{entry.description}</p>-->

                    {#if entry.bulletpoints?.length}
                        <ul class="list-disc pl-[1.5ch] mt-0.5">
                            {#each entry.bulletpoints as bulletpoint}
                                <!--                            <li class="text-sm font-light">• {bulletpoint}</li>-->
                                <li class="text-sm font-light">{bulletpoint}</li>
                            {/each}
                        </ul>
                    {/if}
                </div>
            {/each}
        </section>
    {/if}

    <!-- EDUCATION SECTION -->
    {#if info.education?.length}
        <section id="education">
            <h2 class="header">Education</h2>

            {#each info.education as entry}
                <div class="tile leading-5.5 flex justify-between">
                    <div>
                        <h3 class="subheader">{entry.school}</h3>
                        <h4 class="subheader-2">{entry.diploma}</h4>
                        <p class="dates">{entry.dates}</p>
                        <!--                    <p class="dates">{entry.start} - {entry.end || "Present"}</p>-->
                        <!--                <p class="dates">{entry.start} - {entry.end || "Present"}, Richardson, TX</p>-->
                    </div>

                    <!--                <div>-->
                    <!--                    <h3 class="subheader">{entry.school}</h3>-->
                    <!--                    <h4 class="subheader-2">{entry.diploma}</h4>-->
                    <!--                    <p class="dates">Richardson, TX</p>-->
                    <!--                    &lt;!&ndash;                <p class="dates">{entry.start} - {entry.end || "Present"}, Richardson, TX</p>&ndash;&gt;-->
                    <!--                </div>-->
                    <!--                <div>-->
                    <!--                    <p class="dates text-right">{entry.start} - {entry.end || "Present"}</p>-->
                    <!--                </div>-->
                </div>
            {/each}
        </section>
    {/if}

    <!-- PROJECTS SECTION -->
    {#if info.projects?.length}
        <section id="projects">
            <h2 class="header">Projects</h2>

            {#each info.projects as entry}
                <div class="tile">
                    <h3 class="subheader">{entry.title}</h3>
                    <!--                <p class="font-light text-sm">{entry.description}</p>-->
                    {#if entry.bulletpoints?.length}
                        <ul class="list-disc pl-[1.5ch] mt-0.5">
                            {#each entry.bulletpoints as bulletpoint}
                                <!--                            <li class="text-sm font-light">• {bulletpoint}</li>-->
                                <li class="text-sm font-light">{bulletpoint}</li>
                            {/each}
                        </ul>
                    {/if}
                    {#each entry.links as link}
                        <!--                            <li class="text-sm font-light">• {bulletpoint}</li>-->
                        <a href={link} class="block text-sm font-light">{link}</a>
                    {/each}
                </div>
            {/each}
        </section>
    {/if}

    <!-- CERTIFICATIONS SECTION -->
    {#if info.certifications?.length}
        <section id="certifications">
            <h2 class="header">Certifications</h2>

            {#each info.certifications as entry}
                <div class="tile">
                    <h3 class="subheader">{entry.title}</h3>
                    <!--                <p class="font-light text-sm">{entry.description}</p>-->
                    <!--                <p class="dates">{entry.start} - {entry.end || "Present"}</p>-->
                    <p class="dates">{entry.dates}</p>
                    {#if entry.bulletpoints?.length}
                        <ul class="list-disc pl-[1.5ch] mt-0.5">
                            {#each entry.bulletpoints as bulletpoint}
                                <!--                            <li class="text-sm font-light">• {bulletpoint}</li>-->
                                <li class="text-sm font-light">{bulletpoint}</li>
                            {/each}
                        </ul>
                    {/if}
                </div>
            {/each}
        </section>
    {/if}


    <!-- SKILLS SECTION -->
    {#if info.skills?.length}
        <section id="skills">
            <h2 class="header">Skills</h2>
            <p class="text-xs font-light">{info.skills}</p>
        </section>
    {/if}
</main>

<style>
    @import "tailwindcss";

    main {
        font-family: "Inter Variable", sans-serif;
    }

    section {
        &:not(:last-of-type) {
            @apply mb-6;
        }

        .tile {
            @apply py-2.5;
        }
    }

    .header {
        @apply text-lg font-semibold border-b border-gray-400 -tracking-[0.02rem] mb-1;
    }

    .subheader {
        @apply font-bold text-sm -tracking-[0.01rem];
    }

    .subheader-2 {
        @apply font-normal text-sm;
    }

    .dates {
        @apply text-xs font-light italic text-gray-600 tracking-tight;
    }
</style>
