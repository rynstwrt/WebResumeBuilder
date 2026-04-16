<script lang="ts">
    import {
        Drawer,
        Button,
        Accordion,
        AccordionItem
    } from "flowbite-svelte";

    import {
        BuildingOutline, EditOutline, FileLinesOutline, GraduationCapOutline, PaperClipOutline, PaperPlaneOutline,
        UserOutline
    } from "flowbite-svelte-icons";
    import ProfileForm from "./forms/ProfileForm.svelte";
    import WorkForm from "./forms/WorkForm.svelte";
    import EducationForm from "./forms/EducationForm.svelte";
    import ProjectsForm from "./forms/ProjectsForm.svelte";
    import CertificationsForm from "./forms/CertificationsForm.svelte";
    import SkillsForm from "./forms/SkillsForm.svelte";

    let open = $state(true);

    let sections = [
        {
            label: "Profile",
            Icon: UserOutline,
            Form: ProfileForm
        },
        {
            label: "Work Experience",
            Icon: BuildingOutline,
            Form: WorkForm
        },
        {
            label: "Education",
            Icon: GraduationCapOutline,
            Form: EducationForm,
            open: true
        },
        {
            label: "Projects",
            Icon: PaperPlaneOutline,
            Form: ProjectsForm
        },
        {
            label: "Certifications",
            Icon: FileLinesOutline,
            Form: CertificationsForm
        },
        {
            label: "Skills",
            Icon: PaperClipOutline,
            Form: SkillsForm
        }
    ]
</script>


<Button onclick={() => open = true}
        class="absolute bottom-5 right-5 p-4"
        pill>
    <EditOutline class="w-6 h-6"/>
</Button>


<Drawer bind:open
        outsideclose={false}
        placement="left">
    <!--        classes={{ form: "space-y-6 mb-6" }}>-->
    <!--    <h5>TEST</h5>-->
    <Accordion class="mt-10" flush={true}>
        {#each sections as {label, Icon, Form, open}}
            <AccordionItem class="">
                {#snippet header()}
                    <span class="flex items-center">
                        <Icon class="me-1"/>
                        {label}
                    </span>
                {/snippet}
                <Form />
            </AccordionItem>
        {/each}
    </Accordion>
</Drawer>