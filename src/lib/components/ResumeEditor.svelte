<script lang="ts">
    import {
        SpeedDialTrigger,
        SpeedDial,
        Listgroup,
        Textarea,
        Toolbar,
        ToolbarGroup,
        ToolbarButton,
        Button,
        BreadcrumbStepper,
        ProgressStepper,
        Stepper,
        VerticalStepper,
        Modal
    } from "flowbite-svelte";

    import {
        EditOutline,
        UserOutline,
        BuildingOutline,
        GraduationCapOutline,
        PaperClipOutline,
        FileOutline,
        PaperPlaneOutline,
        UserCircleOutline,
        PlusOutline,
        FileLinesOutline,
        ChevronRightOutline,
        ChevronLeftOutline,
        DownloadOutline
    } from "flowbite-svelte-icons";

    import { type Component, type SvelteComponent } from "svelte";

    import ProfileForm from "./forms/ProfileForm.svelte";
    import ProjectsForm from "./forms/ProjectsForm.svelte";
    import CertificationsForm from "./forms/CertificationsForm.svelte";
    import SkillsForm from "./forms/SkillsForm.svelte";
    import EducationForm from "./forms/EducationForm.svelte";
    import WorkForm from "./forms/WorkForm.svelte";
    import DownloadForm from "./forms/DownloadForm.svelte";

    let open = $state(true);

    let currentStep = $state(7);
    const STEP_ICON_CLASS = "h-5 2-5 lg:h-6 lg:w-6";
    let steps = [
        {
            id: 1,
            icon: UserOutline,
            iconClass: STEP_ICON_CLASS
        },
        {
            id: 2,
            icon: GraduationCapOutline,
            iconClass: STEP_ICON_CLASS
        },
        {
            id: 3,
            icon: BuildingOutline,
            iconClass: STEP_ICON_CLASS
        },
        {
            id: 4,
            icon: PaperPlaneOutline,
            iconClass: STEP_ICON_CLASS
        },
        {
            id: 5,
            icon: FileLinesOutline,
            iconClass: STEP_ICON_CLASS
        },
        {
            id: 6,
            icon: PaperClipOutline,
            iconClass: STEP_ICON_CLASS
        },
        {
            id: 7,
            icon: DownloadOutline,
            iconClass: STEP_ICON_CLASS
        }
    ];

    let stepLabels = [
        "Profile",
        "Education",
        "Work Experience",
        "Projects",
        "Certifications",
        "Skills",
        "Download"
    ];

    let stepForms: Component[] = [
        ProfileForm,
        EducationForm,
        WorkForm,
        ProjectsForm,
        CertificationsForm,
        SkillsForm,
        DownloadForm
    ];
</script>


{#snippet stepForm(StepForm)}
    <StepForm/>
{/snippet}


<Modal title="Editor"
       bind:open
       size="md"
       outsideclose={false}>

    <ProgressStepper {steps}
                     bind:current={currentStep}
                     showCheckmarkForCompleted={false}
                     class="mb-8"/>

<!--    <h2 class="text-2xl font-normal tracking-wide">{stepLabels[currentStep - 1]}</h2>-->
    <h2 class="mb-4 text-lg leading-none font-medium text-gray-900 dark:text-white">
        {stepLabels[currentStep-1]}
    </h2>

    {@render stepForm(stepForms[currentStep - 1])}

    {#snippet footer()}
        <div class="flex justify-between w-full">
            <Button pill class="p-1.5!" disabled={currentStep < 2} onclick={() => --currentStep}>
                <ChevronLeftOutline class="w-7 h-7"/>
            </Button>

            <Button pill class="p-1.5!" disabled={currentStep === steps.length} onclick={() => ++currentStep}>
                <ChevronRightOutline class="w-7 h-7"/>
            </Button>
        </div>
    {/snippet}
</Modal>


<Button onclick={() => (open = true)}
        pill
        class="fixed bottom-0 right-0 mr-4 mb-4 p-3!">
    <EditOutline size="lg" class="w-6 h-6"/>
</Button>


<style>
    @import "tailwindcss";

    :global(label) {
        @apply text-sm font-normal mb-0.5;
    }
</style>