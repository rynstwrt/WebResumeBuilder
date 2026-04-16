<script lang="ts">
    import {
        Textarea,
        Button,
        ProgressStepper,
        Modal,
        BottomNav,
        BottomNavItem,
        BottomNavHeader,
        BottomNavHeaderItem,
        ButtonGroup,
        Listgroup,
        ListgroupItem
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

    import ProfileForm from "./forms/ProfileForm.svelte";
    import ProjectsForm from "./forms/ProjectsForm.svelte";
    import CertificationsForm from "./forms/CertificationsForm.svelte";
    import SkillsForm from "./forms/SkillsForm.svelte";
    import EducationForm from "./forms/EducationForm.svelte";
    import WorkForm from "./forms/WorkForm.svelte";
    import DownloadForm from "./forms/DownloadForm.svelte";

    let open = $state(true);

    let sections = [
        {
            label: "Profile",
            Icon: UserOutline,
            Form: ProfileForm
        },
        {
            label: "Work",
            Icon: BuildingOutline,
            Form: WorkForm
        },
        {
            label: "Education",
            Icon: GraduationCapOutline,
            Form: EducationForm,
            // open: true
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
            Form: SkillsForm,
            open: true
        }
    ];

</script>


<Modal
        bind:open
        size="md"
        outsideclose={false}>
    {#snippet header()}
        <div class="flex items-center">
            <EditOutline size="lg" class="me-1"/>
            <span>Editor</span>
        </div>
    {/snippet}

<!--    <BottomNav position="relative" classes={{ inner:`grid-cols-6` }}>-->
<!--        {#each sections as {label, Icon, Form, open}}-->
<!--            <BottomNavItem btnName={label}>-->
<!--                <Icon />-->
<!--            </BottomNavItem>-->
<!--        {/each}-->
<!--    </BottomNav>-->

<!--    <Listgroup horizontal active>-->
<!--        {#each sections as {label, Icon, Form, open}}-->
<!--            <ListgroupItem id={label} iconClass={Icon}>-->
<!--                {label}</ListgroupItem>-->
<!--        {/each}-->
<!--    </Listgroup>-->

    <ButtonGroup>
        {#each sections as {label, Icon, Form, open}}
            <Button outline color="dark" class="gap-1">
                <Icon />
                {label}
            </Button>
        {/each}
    </ButtonGroup>
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

    :global(input), :global(textarea) {
        @apply rounded-sm;
    }
</style>