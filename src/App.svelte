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
        MapPinAltSolid,
        PhoneSolid,
        EnvelopeSolid,
        LinkOutline
    } from "flowbite-svelte-icons";

    import moment from "moment";

    import html2canvas from "html2canvas-pro";
    import html2pdf from "html2pdf.js";
    import ResumeSection from "./lib/components/ResumeSection.svelte";


    const DATE_FORMAT = "MMM YYYY";

    let drawerOpen = $state(true);
    let drawerSection = $state(0);

    let name: string = $state("");
    let location: string = $state("");
    let phone: string = $state("");
    let email: string = $state("");
    let links: string[] = $state([]);


    let education = $state([]);

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



    let workExperience = $state([]);

    let workExperienceForm = $state({
        id: 0,
        company: "",
        role: "",
        location: "",
        startDate: undefined,
        endDate: undefined,
        ongoing: false,
        desc: ""
    });

    let sortedWorkExperience = $derived([...workExperience].sort((a, b) => {
        let aMoment = moment(a.endDate);
        let bMoment = moment(b.endDate);

        if (a.ongoing)
            return -1;

        if (aMoment.isSame(bMoment))
            return 0;

        return aMoment.isAfter(bMoment) ? -1 : 1;
    }));



    let projects = $state([]);

    let projectForm = $state({
        id: 0,
        name: "",
        links: [],
        desc: "",
    });



    let certifications = $state([]);

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



    let skills: string[] = $state([]);



    function downloadPDF() {
        const el: HTMLElement = document.querySelector("main")!;
        html2canvas(el).then(canvas => {
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

    function exportConfig() {
        let config = {
            name: name,
            location: location,
            phone: phone,
            email: email,
            links: links,
            education: education,
            workExperience: workExperience,
            projects: projects,
            certifications: certifications,
            skills: skills
        };

        let dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(config, null, 4))}`

        let downloadAnchorNode = document.createElement("a");
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "wrb-config.json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }

    let importFileInput;
    async function onImportFileChange(event) {
        let importedFiles = event.target.files;
        if (!importedFiles.length)
            return;

        const reader = new FileReader();

        reader.onload = (e) => {
            let config = JSON.parse(e.target.result);
            console.log(config);
            name = config.name;
            location = config.location;
            phone = config.phone;
            email = config.email;
            links = config.links;
            education = config.education;
            workExperience = config.workExperience;
            projects = config.projects;
            certifications = config.certifications;
            skills = config.skills;
        }

        reader.readAsText(importedFiles[0]);
    }
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
        id="drawer"
        class="w-100">

    <ButtonGroup class="grid grid-cols-3 mt-8.5 mb-4">
        <Button outline onclick={exportConfig}>
            <FileExportSolid class="me-2 h-4 w-4"/>
            Save
        </Button>
        <Button outline onclick={() => importFileInput.click()}>
            <FileImportSolid class="me-2 h-4 w-4"/>
            Load
        </Button>
        <input type="file"
               bind:this={importFileInput}
               onchange={onImportFileChange}
               class="hidden"/>
        <Button outline onclick={downloadPDF}>
            <DownloadSolid class="me-2 h-4 w-4"/>
            Download
        </Button>
    </ButtonGroup>

    <Accordion flush={true}>
        <AccordionItem open>
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
                    Work Experience
                </span>
            {/snippet}
            <Timeline class="mx-1">
                {#each sortedWorkExperience as job}
                    {@const startDate = moment(job.startDate).format(DATE_FORMAT)}
                    {@const endDate = job.ongoing ? "Present" : moment(job.endDate).format(DATE_FORMAT)}
                    <TimelineItem title={job.company}
                                  date={`${startDate} - ${endDate}`}
                                  class="mb-4">
                        <Button class="absolute top-0 right-0 p-0 bg-transparent! focus-within:ring-0!"
                                onclick={() => {
                                    workExperience = workExperience.filter(sch => sch.id !== job.id)
                                }}>
                            <CloseOutline size="sm"/>
                        </Button>
                        <p class="text-sm font-medium">{job.role}</p>
                        {#if job.desc.trim().length}
                            <ul>
                                {#each job.desc.trim().replace(/^- /gm, "").split("\n") as bulletpoint}
                                    <Li class="text-sm font-thin list-disc ml-[2ch]">{bulletpoint}</Li>
                                {/each}
                            </ul>
                        {/if}
                    </TimelineItem>
                {/each}
            </Timeline>
            <div class="grid grid-cols-2 gap-1.5">
                <div class="col-span-full">
                    <Label class="text-sm font-normal leading-6">
                        Company
                        <Input size="md"
                               bind:value={workExperienceForm.company}
                               placeholder="Fiction Co."/>
                    </Label>
                </div>
                <div class="col-span-full">
                    <Label class="text-sm font-normal leading-6">
                        Role
                        <Input size="md"
                               bind:value={workExperienceForm.role}
                               placeholder="Frontend Developer"/>
                    </Label>
                </div>
                <div class="col-span-full">
                    <Label class="text-sm font-normal leading-6">
                        Location
                        <Input type="md"
                               bind:value={workExperienceForm.location}
                               placeholder="Fictionville, MA"/>
                    </Label>
                </div>
                <div>
                    <Label class="text-sm font-normal leading-6">
                        Start Date
                        <Datepicker dateFormat={{month: "short", year: "numeric"}}
                                    bind:value={workExperienceForm.startDate}/>
                    </Label>
                </div>
                <div>
                    <Label class="text-sm font-normal leading-6">
                        End Date
                        <Datepicker dateFormat={{month: "short", year: "numeric"}}
                                    bind:value={workExperienceForm.endDate}
                                    disabled={workExperienceForm.ongoing}/>
                    </Label>
                    <Label class="float-right mt-1">
                        Ongoing
                        <Checkbox class="ml-0.5" bind:checked={workExperienceForm.ongoing}/>
                    </Label>
                </div>
                <div class="col-span-full">
                    <Label class="text-sm font-normal leading-6">
                        Description
                        <Textarea rows={3}
                                  bind:value={workExperienceForm.desc}
                                  class="w-full bg-gray-700! border-gray-600!"
                                  placeholder="Add bulletpoints, one per line"/>
                    </Label>
                </div>
                <Button class="col-span-full" onclick={() => {
                    workExperienceForm.id = workExperience.length;
                    workExperience.push(workExperienceForm);
                    workExperienceForm = {
                        id: 0,
                        company: "",
                        role: "",
                        location: "",
                        startDate: undefined,
                        endDate: undefined,
                        ongoing: false,
                        desc: ""
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
                    <PaperPlaneSolid size="md" class="me-2"/>
                    Projects
                </span>
            {/snippet}
            <div class="grid grid-cols-2 gap-1.5">
                <div class="col-span-full">
                    <Label class="text-sm font-normal leading-6">
                        Project Name
                        <Input size="md"
                               bind:value={projectForm.name}
                               placeholder="My Awesome Project"/>
                    </Label>
                </div>
                <div class="col-span-full">
                    <Label class="text-sm font-normal leading-6">
                        Bulletpoints
                        <Textarea rows={3}
                                  bind:value={projectForm.desc}
                                  class="w-full bg-gray-700! border-gray-600! -mb-2"
                                  placeholder="Add bulletpoints, one per each line"/>
                    </Label>
                </div>
                <div class="col-span-full">
                    <Label class="text-sm font-normal leading-6">
                        Links
                        <Tags bind:value={projectForm.links}
                              placeholder="Enter links as tags"
                              unique={true}
                              showHelper={true}/>
                    </Label>
                    <Helper class="mt-0.5 text-sm">Press enter after typing a link to enter a tag.</Helper>
                </div>
                <Button class="col-span-full mt-1" onclick={() => {
                    projectForm.id = projects.length;
                    projects.push(projectForm);
                    projectForm = {
                        id: 0,
                        name: "",
                        links: [],
                        desc: ""
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
            <span>
                <MapPinAltSolid size="sm" class="inline"/>
                {location || "Seattle, WA"}
            </span>
            |
            <span>
                <PhoneSolid size="sm" class="inline"/>
                {phone || "+1 123 456 7890"}
            </span>
            |
            <span>
                <EnvelopeSolid size="sm" class="inline"/>
                {email || "john.doe@example.com"}
            </span>
        </div>
        <div class="flex gap-2 text-xs font-light">
            {#each links.length ? links : ['https://example.com', 'https://example.com'] as link, i}
                    <span>
                        <LinkOutline size="sm" class="inline"/>
                        <a href={link}>{link}</a>
                    </span>
                {#if i !== (links.length ? links : ['https://example.com', 'https://example.com']).length - 1}
                    |
                {/if}
            {/each}
        </div>
    </section>

    <ResumeSection title="Education">
        {#each (sortedEducation.length ? sortedEducation : [{
            id: 0,
            school: "Boston University",
            concentration: "B.S. Electrical Engineering",
            location: "Boston, MA",
            startDate: moment("August 1, 2019").format(DATE_FORMAT),
            endDate: moment("Dec 1, 2025").format(DATE_FORMAT),
            ongoing: false,
            summary: "3.73 GPA"
        }]) as school}
            {@const startDate = moment(school.startDate).format(DATE_FORMAT)}
            {@const endDate = school.ongoing ? "Present" : moment(school.endDate).format(DATE_FORMAT)}
            {@const summary = school.summary.trim().replace(/^- a/gm, "").split("\n")}
            <div class="entry flex justify-between">
                <div class="w-full flex justify-between">
                    <div>
                        <h3 class="header">{school.school}</h3>
                        <h4 class="subheader">{school.concentration}</h4>
                        <ul>
                            {#each summary as bulletpoint}
                                <Li class="list-disc text-sm ml-[2ch] font-light">{bulletpoint}</Li>
                            {/each}
                        </ul>
                    </div>
                    <div class="text-right tracking-tight">
                        <p class="detail">{school.location}</p>
                        <p class="detail">{startDate} - {endDate}</p>
                    </div>
                </div>
            </div>
        {/each}
    </ResumeSection>

    <ResumeSection title="Experience">
        {#each (workExperience.length ? sortedWorkExperience : [{
            id: 0,
            company: "Fiction Co.",
            role: "Frontend Developer",
            location: "Seattle, WA",
            startDate: moment("August 1, 2019").format(DATE_FORMAT),
            endDate: moment("Dec 1, 2025").format(DATE_FORMAT),
            ongoing: false,
            desc: "Bulletpoint 1\nBulletpoint 2"
        }]) as job}
            {@const startDate = moment(job.startDate).format(DATE_FORMAT)}
            {@const endDate = job.ongoing ? "Present" : moment(job.endDate).format(DATE_FORMAT)}
            <div class="entry">
                <div class="flex justify-between">
                    <div>
                        <h3 class="header">{job.company}</h3>
                        <h4 class="subheader">{job.role}</h4>
                    </div>
                    <div>
                        <p class="detail">{job.location}</p>
                        <p class="detail">{startDate} - {endDate}</p>
                    </div>
                </div>
                {#if job.desc.length}
                    <ul class="list-disc pl-[1.5ch] mt-0.5">
                        {#each job.desc.trim().replace(/^- /gm, "").split("\n") as bulletpoint}
                            <Li class="text-sm font-light">{bulletpoint}</Li>
                        {/each}
                    </ul>
                {/if}
            </div>
        {/each}
    </ResumeSection>

    <ResumeSection title="Projects">
        {#each (projects.length ? projects : [{
            id: 0,
            name: "Project 1",
            links: ["https://example.com", "https://example2.com"],
            desc: "Bulletpoint 1\nBulletpoint 2"
        }]) as project}
            <div class="entry">
                <h3 class="header">{project.name}</h3>
                {#if project.links?.length}
                    {#each project.links as link}
                        <a class="text-sm text-left place-self-start block leading-4" href={link}>{link}</a>
                    {/each}
                {/if}
                {#if project.desc?.length}
                    <ul class="list-disc pl-[1.5ch] mt-1">
                        {#each project.desc.split("\n") as bulletpoint}
                            <Li class="text-sm font-light">{bulletpoint}</Li>
                        {/each}
                    </ul>
                {/if}
            </div>
        {/each}
    </ResumeSection>

    <ResumeSection title="Certifications">
        {#each (certifications.length ? sortedCertifications : [{
            id: 0,
            cert: "Cisco Certified Network Associate (CCNA)",
            awarder: "Cisco",
            date: new Date("2021-12-1")
        }]) as cert}
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

    <ResumeSection title="Skills">
        <p class="detail text-left!">{(skills.length ? skills : ["Skill 1", "Skill 2"]).join(", ")}.</p>
    </ResumeSection>
</main>


<style>
    @import "tailwindcss";

    .entry {
        @apply not-last:mb-3;
    }

    .header {
        @apply font-bold text-sm -tracking-[0.01rem];
    }

    .subheader {
        @apply font-normal text-sm;
    }

    .detail {
        @apply text-right text-xs font-light text-gray-600 tracking-tight;
    }
</style>