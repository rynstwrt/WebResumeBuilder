<script lang="ts">
    import {
        Listgroup,
        Textarea,
        Button,
        ProgressStepper,
        Modal,
        Accordion,
        AccordionItem,
        Tabs,
        TabItem
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
            Form: WorkForm,
            open: true
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
            label: "Certs",
            Icon: FileLinesOutline,
            Form: CertificationsForm
        },
        {
            label: "Skills",
            Icon: PaperClipOutline,
            Form: SkillsForm,
            // open: true
        }
    ];

</script>


<Modal
        bind:open
        size="md"
        autoclose={false}>
    <!--{#snippet header()}-->
    <!--        <div class="flex items-center">-->
    <!--            <EditOutline size="lg" class="me-1"/>-->
    <!--            <span>Editor</span>-->
    <!--        </div>-->
    <!--    {/snippet}-->

    <!--    <Tabs role="tablist"-->
    <!--          class="justify-center"-->
    <!--          tabStyle="underline">-->
    <Tabs tabStyle="pill"
          class="flex divide-x rounded-lg border border-gray-600
          rtl:divide-x-reverse divide-gray-700 mt-8">

        {#each sections as {label, Icon, Form, open}}
            <TabItem open={open || false}>
                {#snippet titleSlot()}
                    <div class="flex items-center">
                        <Icon size="sm" class="me-1"/>
                        <span class="text-center">{label}</span>
                    </div>
                {/snippet}

                <!--                <div class="min-h-100">-->
                <Form/>
                <!--                </div>-->
            </TabItem>
        {/each}
    </Tabs>

    <!--{#snippet footer()}-->
<!--        <Button>asdf</Button>-->
<!--    {/snippet}-->
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