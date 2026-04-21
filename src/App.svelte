<script lang="ts">
    import {
        Accordion,
        AccordionItem,
        Button,
        Drawer,
        Input,
        Label,
        Tags,
        Textarea,
        Timeline,
        TimelineItem,
        Datepicker,
        Checkbox,
        ButtonGroup,
        Li,
        Helper
    } from "flowbite-svelte";

    import {
        EditOutline,
        PaperClipOutline,
        PlusOutline,
        CloseOutline,
        FileImportSolid,
        FileExportSolid,
        UserSolid,
        GraduationCapSolid,
        PaperPlaneSolid,
        HammerSolid,
        ClipboardCheckSolid,
        DownloadSolid,
        MapPinAltOutline,
        EnvelopeOutline,
        GlobeOutline,
        PhoneOutline
    } from "flowbite-svelte-icons";

    import moment from "moment";

    import html2canvas from "html2canvas-pro";
    import html2pdf from "html2pdf.js";
    import { workData } from "./lib/ResumeData.svelte.ts";
    import { projects } from "./lib/DataHandler.svelte.ts";
    import ResumeSection from "./lib/components/ResumeSection.svelte";

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

    const DATE_FORMAT = "MMM YYYY";

    let drawerOpen = $state(true);

    let name: string = $state("John Doe");
    let location: string = $state("Seattle, WA");
    let phone: string = $state("+1 123 456 7890");
    let email: string = $state("john.doe@example.com");
    let links: string[] = $state(["https://example.com", "https://example2.com"]);


    let education = $state([
        {
            id: 0,
            school: "The University of Texas",
            concentration: "B.S. Electrical Engineering",
            location: "Austin, TX",
            startDate: moment("August 1, 2019").format(DATE_FORMAT),
            endDate: moment("Dec 1, 2025").format(DATE_FORMAT),
            ongoing: false,
            summary: "summarytext"
        },
        {
            id: 1,
            school: "Plano West Senior High School",
            concentration: "High School Diploma",
            location: "Plano, TX",
            startDate: moment("August 1, 2015").format(DATE_FORMAT),
            endDate: moment("June 1, 2019").format(DATE_FORMAT),
            ongoing: false,
            summary: "summarytext"
        }
    ]);

    let educationForm = $state({
        id: 0,
        school: "",
        concentration: "",
        location: "",
        startDate: undefined,
        endDate: undefined,
        ongoing: false,
        summary: ""
    });

    let sortedEducation = $derived([...education].sort((a, b) => {
        let aMoment = moment(a.endDate);
        let bMoment = moment(b.endDate);

        if (a.ongoing)
            return -1;

        if (aMoment.isSame(bMoment))
            return 0;

        return aMoment.isAfter(bMoment) ? -1 : 1;
    }));


    let certifications = $state([
        {
            id: 0,
            cert: "Cisco Certified Networking Associate (CCNA)",
            awarder: "Cisco",
            date: new Date("2021-12-1")
        }
    ]);

    let certificationForm = $state({
        id: 0,
        cert: "",
        awarder: "",
        date: undefined
    });

    let sortedCertifications = $derived([...certifications].sort((a, b) => {
        let aMoment = moment(a.date);
        let bMoment = moment(b.date);

        if (aMoment.isSame(bMoment))
            return 0;

        return aMoment.isAfter(bMoment) ? -1 : 1;
    }));

    let skills: string[] = $state(["Skill 1", "Skill 2", "Skill 3"]);
</script>


<svelte:window on:keydown={(e) => {
    if (e.key === "Tab" && !drawerOpen) {
        e.preventDefault();
        drawerOpen = !drawerOpen;
    }
}}/>


<Button onclick={() => drawerOpen = true}
        class="fixed bottom-5 right-5 p-4"
        pill>
    <EditOutline class="w-6 h-6"/>
</Button>


<Drawer bind:open={drawerOpen}
        outsideclose={false}
        placement="left"
        width="half"
        id="drawer">

    <ButtonGroup class="grid grid-cols-3 mt-8.5 mb-4">
        <Button outline>
            <FileImportSolid class="me-2 h-4 w-4"/>
            Import
        </Button>
        <Button outline>
            <FileExportSolid class="me-2 h-4 w-4"/>
            Export
        </Button>
        <Button outline onclick={downloadPDF}>
            <DownloadSolid class="me-2 h-4 w-4"/>
            Download
        </Button>
    </ButtonGroup>

    <Accordion flush={true}>
        <AccordionItem>
            {#snippet header()}
                <span class="flex items-center">
                    <UserSolid size="md" class="me-2"/>
                    Profile
                </span>
            {/snippet}
            <div class="grid grid-cols-2 gap-1.5">
                <div>
                    <Label for="name" class="text-sm font-normal leading-6">Name</Label>
                    <Input size="md" name="name" bind:value={name} placeholder="John Doe"/>
                </div>
                <div>
                    <Label for="location" class="text-sm font-normal leading-6">Location</Label>
                    <Input size="md" name="location" bind:value={location} placeholder="Seattle, WA"/>
                </div>
                <div>
                    <Label for="phone" class="text-sm font-normal leading-6">Phone</Label>
                    <Input size="md" name="phone" bind:value={phone} placeholder="+1 123 456 7890"/>
                </div>
                <div>
                    <Label for="email" class="text-sm font-normal leading-6">Email</Label>
                    <Input size="md" name="email" bind:value={email} placeholder="john.doe@example.com"/>
                </div>
                <div class="col-span-full">
                    <Label for="links" class="text-sm font-normal leading-6">Links</Label>
                    <Tags id="links" placeholder="Enter links here and press enter" bind:value={links}/>
                </div>
            </div>
        </AccordionItem>

        <AccordionItem>
            {#snippet header()}
                <span class="flex items-center">
                    <GraduationCapSolid size="md" class="me-2"/>
                    Education
                </span>
            {/snippet}
            <Timeline class="mx-1">
                {#each sortedEducation as school}
                    {@const startDate = moment(school.startDate).format(DATE_FORMAT)}
                    {@const endDate = school.ongoing ? "Present" : moment(school.endDate).format(DATE_FORMAT)}
                    <TimelineItem title={school.school}
                                  date={`${startDate} - ${endDate}`}
                                  class="mb-4">
                        <Button class="absolute top-0 right-0 p-0 bg-transparent! focus-within:ring-0!"
                                onclick={() => {
                                    education = education.filter(sch => sch.id !== school.id)
                                }}>
                            <CloseOutline size="sm"/>
                        </Button>
                        <p class="text-sm font-medium">{school.concentration}</p>
                        <p class="text-sm font-light">{school.summary}</p>
                    </TimelineItem>
                {/each}
            </Timeline>
            <div class="grid grid-cols-2 gap-1.5">
                <div class="col-span-full">
                    <Label class="text-sm font-normal leading-6">
                        School
                        <Input size="md"
                               bind:value={educationForm.school}
                               placeholder="The University of Fictionville"/>
                    </Label>
                </div>
                <div class="col-span-full">
                    <Label class="text-sm font-normal leading-6">
                        Concentration
                        <Input size="md"
                               bind:value={educationForm.concentration}
                               placeholder="B.S. Electrical Engineering"/>
                    </Label>
                </div>
                <div class="col-span-full">
                    <Label class="text-sm font-normal leading-6">
                        Location
                        <Input type="md"
                               bind:value={educationForm.location}
                               placeholder="Fictionville, MA"/>
                    </Label>
                </div>
                <div>
                    <Label class="text-sm font-normal leading-6">
                        Start Date
                        <Datepicker dateFormat={{month: "short", year: "numeric"}}
                                    bind:value={educationForm.startDate}/>
                    </Label>
                </div>
                <div>
                    <Label for="school-end" class="text-sm font-normal leading-6">
                        End Date
                        <Datepicker dateFormat={{month: "short", year: "numeric"}}
                                    bind:value={educationForm.endDate}
                                    disabled={educationForm.ongoing}/>
                    </Label>
                    <Label class="float-right mt-1">
                        Ongoing
                        <Checkbox class="ml-0.5" bind:checked={educationForm.ongoing}/>
                    </Label>
                </div>
                <div class="col-span-full">
                    <Label class="text-sm font-normal leading-6">
                        Summary
                        <Textarea rows={3}
                                  bind:value={educationForm.summary}
                                  class="w-full bg-gray-700! border-gray-600!"
                                  placeholder="Add additional info or bulletpoints"/>
                    </Label>
                </div>
                <Button class="col-span-full" onclick={() => {
                    educationForm.id = education.length;
                    education.push(educationForm);
                    educationForm = {
                        id: 0,
                        school: "",
                        concentration: "",
                        location: "",
                        startDate: undefined,
                        endDate: undefined,
                        ongoing: false,
                        summary: ""
                    };
                }}>
                    <span class="flex items-center">
                        <PlusOutline size="sm" class="me-0.5"/>
                        Add
                    </span>
                </Button>
            </div>
        </AccordionItem>

        <AccordionItem>
            {#snippet header()}
                <span class="flex items-center">
                    <HammerSolid size="md" class="me-2"/>
                    Work Experience (WIP)
                </span>
            {/snippet}
            <p>Work Experience</p>
        </AccordionItem>

        <AccordionItem>
            {#snippet header()}
                <span class="flex items-center">
                    <PaperPlaneSolid size="md" class="me-2"/>
                    Projects (WIP)
                </span>
            {/snippet}
            <p>Projects</p>
        </AccordionItem>

        <AccordionItem>
            {#snippet header()}
                <span class="flex items-center">
                    <ClipboardCheckSolid size="md" class="me-2"/>
                    Certifications
                </span>
            {/snippet}
            <Timeline class="mx-1">
                {#each sortedCertifications as cert}
                    {@const date = moment(cert.date).format(DATE_FORMAT)}
                    <TimelineItem title={cert.cert}
                                  date={`${date}`}
                                  class="mb-4">
                        <Button class="absolute top-0 right-0 p-0 bg-transparent! focus-within:ring-0!"
                                onclick={() => {
                                    certifications = certifications.filter(c => c.id !== cert.id)
                                }}>
                            <CloseOutline size="sm"/>
                        </Button>
                        <p class="text-sm font-medium">{cert.awarder}</p>
                    </TimelineItem>
                {/each}
            </Timeline>
            <div class="grid grid-cols-2 gap-1.5">
                <div class="col-span-full">
                    <Label class="text-sm font-normal leading-6">
                        Name
                        <Input size="md"
                               bind:value={certificationForm.cert}
                               placeholder="CCNA"/>
                    </Label>
                </div>
                <div class="col-span-full">
                    <Label class="text-sm font-normal leading-6">
                        Awarder
                        <Input size="md"
                               bind:value={certificationForm.awarder}
                               placeholder="Cisco Systems, Inc."/>
                    </Label>
                </div>
                <div class="col-span-full">
                    <Label class="text-sm font-normal leading-6">
                        Awarded Date
                        <Datepicker dateFormat={{month: "short", year: "numeric"}}
                                    bind:value={certificationForm.date}/>
                    </Label>
                </div>
                <Button class="col-span-full mt-1.5" onclick={() => {
                    certificationForm.id = certifications.length;
                    certifications.push(certificationForm);
                    certificationForm = {
                        id: 0,
                        cert: "",
                        awarder: "",
                        date: undefined
                    };
                }}>
                    <span class="flex items-center">
                        <PlusOutline size="sm" class="me-0.5"/>
                        Add
                    </span>
                </Button>
            </div>
        </AccordionItem>

        <AccordionItem>
            {#snippet header()}
                <span class="flex items-center">
                    <PaperClipOutline size="md" class="me-2"/>
                    Skills
                </span>
            {/snippet}
            <Tags bind:value={skills}
                  placeholder="Enter skills as tags"
                  unique={true}
                  showHelper={true}/>
            <Helper class="mt-1 text-sm">Press enter after typing a skill to enter a tag.</Helper>
        </AccordionItem>
    </Accordion>
</Drawer>


<main class="w-204 min-h-264 bg-white mx-auto p-12 mt-4 mb-12">
    <section id="profile" class="text-center flex flex-col items-center">
        <h1 class="text-3xl font-semibold mb-1">{name || "John Doe"}</h1>
        <div class="text-xs font-light flex gap-2">
            {#if location}
                <span>
				    <MapPinAltOutline size="sm" class="inline"/>
                    {location}
			    </span>
                {#if phone || email}
                    |
                {/if}
            {/if}
            {#if phone}
                <span>
                    <PhoneOutline size="sm" class="inline"/>
                    {phone}
                </span>
                {#if email}
                    |
                {/if}
            {/if}
            {#if email}
                <span>
                    <EnvelopeOutline size="sm" class="inline"/>
                    {email}
                </span>
            {/if}
        </div>
        {#if links?.length}
            <div class="flex gap-2 text-xs font-light">
                {#each links as link, idx}
                    <span>
                        <GlobeOutline size="sm" class="inline"/>
                        <a href={link}>{link}</a>
                    </span>
                    {#if idx !== links.length - 1}
                        |
                    {/if}
                {/each}
            </div>
        {/if}
    </section>

    {#if sortedEducation.length}
        <ResumeSection title="Education">
            {#each sortedEducation as school}
                {@const dates = `${school.startDate} - ${school.endDate}`}
                <div class="entry flex justify-between">
                    <div class="w-full flex justify-between">
                        <div>
                            <h3 class="header">{school.school}</h3>
                            <h4 class="subheader">{school.concentration}</h4>
                        </div>
                        <div class="text-right tracking-tight">
                            <p class="detail">{school.location}</p>
                            <p class="detail">{dates}</p>
                        </div>
                    </div>
                </div>
            {/each}
        </ResumeSection>
    {/if}

    {#if workData.length}
        <ResumeSection title="Experience">
            {#each workData as entry}
                <div class="entry">
                    <div class="flex justify-between">
                        <div>
                            <h3 class="header">{entry.company}</h3>
                            <h4 class="subheader">{entry.position}</h4>
                        </div>
                        <div>
                            <p class="detail">{entry.city}</p>
                            <p class="detail">{entry.dates}</p>
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
        </ResumeSection>
    {/if}

    {#if projects.length}
        <ResumeSection title="Projects">
            {#each projects as entry}
                <div class="entry">
                    <h3 class="header">{entry.name}</h3>
                    <!--                    <a class="subheader" href={entry.link}>{entry.link}</a>-->
                    {#if entry.links?.length}
                        {#each entry.links as link, idx}
                            <!--{#if idx === entry.links.length - 1}-->
                            <!--    <a class="text-xs text-left place-self-start block mb-1" href={link}>{link}</a>-->
                            <!--{:else}-->
                            <!--    <a class="text-xs text-left place-self-start block" href={link}>{link}</a>-->
                            <!--{/if}-->
                            <a class="text-sm text-left place-self-start block {(idx === entry.links.length - 1) && 'mb-0.5'}"
                               href={link}>{link}</a>
                        {/each}
                    {/if}
                    {#if entry.bulletpoints?.length}
                        <ul class="list-disc pl-[1.5ch] mt-0.5">
                            {#each entry.bulletpoints as bulletpoint}
                                <Li class="text-sm font-light">{bulletpoint}</Li>
                            {/each}
                        </ul>
                    {/if}
                </div>
            {/each}
        </ResumeSection>
    {/if}

    {#if sortedCertifications.length}
        <ResumeSection title="Certifications">
            {#each sortedCertifications as cert}
                {@const date = moment(cert.date).format(DATE_FORMAT)}
                <div class="entry flex justify-between">
                    <div class="">
                        <h3 class="header">{cert.cert}</h3>
                        <h4 class="subheader">{cert.awarder}</h4>
                    </div>

                    <p class="detail">{date}</p>
                </div>
            {/each}
        </ResumeSection>
    {/if}

    {#if skills.length}
        <ResumeSection title="Skills">
            <p class="detail text-left!">{skills.join(", ")}.</p>
        </ResumeSection>
    {/if}
</main>
