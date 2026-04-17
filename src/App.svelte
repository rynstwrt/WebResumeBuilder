<script lang="ts">
    import {
        Accordion,
        AccordionItem,
        Button,
        Drawer,
        Input,
        Label,
        Tags
    } from "flowbite-svelte";

    import {
        BuildingOutline,
        EditOutline,
        FileLinesOutline,
        GraduationCapOutline,
        PaperClipOutline,
        PaperPlaneOutline,
        UserOutline
    } from "flowbite-svelte-icons";

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

    // let sections = [
    //     {
    //         label: "Profile",
    //         Icon: UserOutline,
    //         Form: ProfileForm
    //     },
    //     {
    //         label: "Work Experience",
    //         Icon: BuildingOutline,
    //         Form: WorkForm
    //     },
    //     {
    //         label: "Education",
    //         Icon: GraduationCapOutline,
    //         Form: EducationForm,
    //     },
    //     {
    //         label: "Projects",
    //         Icon: PaperPlaneOutline,
    //         Form: ProjectsForm
    //     },
    //     {
    //         label: "Certifications",
    //         Icon: FileLinesOutline,
    //         Form: CertificationsForm
    //     },
    //     {
    //         label: "Skills",
    //         Icon: PaperClipOutline,
    //         Form: SkillsForm
    //     }
    // ]
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
        <AccordionItem open>
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
                    <Tags id="links" placeholder="Enter links here and press enter" bind:value={links} />
                </div>
            </div>
        </AccordionItem>

        <AccordionItem>
            {#snippet header()}
                <span class="flex items-center">
                    <GraduationCapOutline size="md" class="me-1"/>
                    Education
                </span>
            {/snippet}
            <p>EDUCATION</p>
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