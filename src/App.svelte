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
        Checkbox
    } from "flowbite-svelte";

    import {
        BuildingOutline,
        EditOutline,
        FileLinesOutline,
        GraduationCapOutline,
        PaperClipOutline,
        PaperPlaneOutline,
        UserOutline,
        PlusOutline,
        CloseOutline,
        SchoolOutline
    } from "flowbite-svelte-icons";

    import moment from "moment";

    import ResumePreview from "./lib/components/ResumePreview.svelte";

    // function downloadPDF() {
    //     const el: HTMLElement = document.querySelector("main")!;
    //     html2canvas(el).then(canvas => {
    //         console.log(canvas);
    //         document.body.append(canvas);
    //         html2pdf(canvas, {
    //             filename: "Resume.pdf",
    //             jsPDF: {
    //                 unit: "in",
    //                 format: "letter",
    //                 orientation: "portrait"
    //             }
    //         });
    //     });
    // }

    let drawerOpen = $state(true);

    let name: string = $state("");
    let location: string = $state("");
    let phoneNumber: string = $state("");
    let email: string = $state("");
    let links: string[] = $state([]);

    let education = $state([
        {
            id: 0,
            school: "The University of Texas",
            concentration: "B.S. Electrical Engineering",
            startDate: new Date("August 1, 2019"),
            endDate: new Date("Dec 1, 2025"),
            ongoing: false,
            summary: "summarytext"
        },
        {
            id: 1,
            school: "Plano West Senior High School",
            concentration: "High School Diploma",
            startDate: new Date("August 1, 2015"),
            endDate: new Date("June 1, 2019"),
            ongoing: false,
            summary: "summarytext"
        }
    ]);

    let educationForm = $state({
        id: 0,
        school: "",
        concentration: "",
        startDate: undefined,
        endDate: undefined,
        ongoing: false,
        summary: ""
    });

    const DATE_FORMAT = "MMM YYYY";
    let sortedEducation = $derived([...education].sort((a, b) => {
        let aMoment = moment(a.endDate);
        let bMoment = moment(b.endDate);

        if (aMoment.isSame(bMoment))
            return 0;

        return aMoment.isAfter(bMoment) ? 1 : -1;
    }));
</script>


<ResumePreview/>


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
    <Accordion class="mt-10" flush={true}>
        <AccordionItem>
            {#snippet header()}
                <span class="flex items-center">
                    <UserOutline size="md" class="me-1"/>
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
                    <Input size="md" name="phone" bind:value={phoneNumber} placeholder="+1 123 456 7890"/>
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

        <AccordionItem open>
            {#snippet header()}
                <span class="flex items-center">
                    <GraduationCapOutline size="md" class="me-1"/>
                    Education
                </span>
            {/snippet}
            <Timeline>
                {#each sortedEducation as school, i}
                    {@const startDate = moment(school.startDate).format(DATE_FORMAT)}
                    {@const endDate = school.ongoing ? "Present" : moment(school.endDate).format(DATE_FORMAT)}
                    <TimelineItem title={school.school + school.id}
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
                    <Label for="school" class="text-sm font-normal leading-6">School</Label>
                    <Input size="md"
                           name="school"
                           bind:value={educationForm.school}
                           placeholder="The University of Fictionville"/>
                </div>
                <div class="col-span-full">
                    <Label for="concentration" class="text-sm font-normal leading-6">Concentration</Label>
                    <Input size="md"
                           name="concentration"
                           bind:value={educationForm.concentration}
                           placeholder="B.S. Electrical Engineering"/>
                </div>
                <div>
                    <Label for="school-start" class="text-sm font-normal leading-6">Start Date</Label>
                    <Datepicker id="school-start"
                                dateFormat={{month: "short", year: "numeric"}}
                                bind:value={educationForm.startDate}/>
                </div>
                <div>
                    <Label for="school-end" class="text-sm font-normal leading-6">End Date</Label>
                    <Datepicker id="school-end"
                                dateFormat={{month: "short", year: "numeric"}}
                                bind:value={educationForm.endDate}
                                disabled={educationForm.ongoing}/>
                    <Label class="float-right mt-1">
                        Ongoing
                        <Checkbox class="ml-0.5" bind:checked={educationForm.ongoing}/>
                    </Label>
                </div>
                <div class="col-span-full">
                    <Label for="school-summary" class="text-sm font-normal leading-6">Summary</Label>
                    <Textarea name="school-summary"
                              rows={3}
                              bind:value={educationForm.summary}
                              class="w-full bg-gray-700! border-gray-600!"
                              placeholder="Add additional info or bulletpoints"/>
                </div>
                <Button class="col-span-full" onclick={() => {
                    educationForm.id = education.length;
                    education.push(educationForm);
                    educationForm = {
                        id: 0,
                        school: "",
                        concentration: "",
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
                    <BuildingOutline size="md" class="me-1"/>
                    Work Experience
                </span>
            {/snippet}
            <p>Work Experience</p>
        </AccordionItem>

        <AccordionItem>
            {#snippet header()}
                <span class="flex items-center">
                    <PaperPlaneOutline size="md" class="me-1"/>
                    Projects
                </span>
            {/snippet}
            <p>Projects</p>
        </AccordionItem>

        <AccordionItem>
            {#snippet header()}
                <span class="flex items-center">
                    <FileLinesOutline size="md" class="me-1"/>
                    Certifications
                </span>
            {/snippet}
            <p>Certifications</p>
        </AccordionItem>

        <AccordionItem>
            {#snippet header()}
                <span class="flex items-center">
                    <PaperClipOutline size="md" class="me-1"/>
                    Skills
                </span>
            {/snippet}
            <p>Skills</p>
        </AccordionItem>
    </Accordion>
</Drawer>