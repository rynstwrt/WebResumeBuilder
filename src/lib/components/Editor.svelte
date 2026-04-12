<script lang="ts">
    import {
        SpeedDialTrigger,
        SpeedDial,
        Listgroup,
        Modal
    } from "flowbite-svelte";

    import {
        EditOutline,
        UserOutline,
        BuildingOutline,
        GraduationCapOutline,
        PaperClipOutline,
        FileOutline,
        PaperPlaneOutline
    } from "flowbite-svelte-icons";

    import EditorModal from "./EditorModal.svelte";
    import ProfileForm from "./forms/ProfileForm.svelte";
    import SkillsForm from "./forms/SkillsForm.svelte";
    import EducationForm from "./forms/EducationForm.svelte";
    import WorkForm from "./forms/WorkForm.svelte";
    import ProjectsForm from "./forms/ProjectsForm.svelte";
    import CertificationsForm from "./forms/CertificationsForm.svelte";

    let modalStates = $state({
        profile: false,
        education: false,
        work: false,
        projects: false,
        certifications: false,
        skills: false
    });

    let listgroupItems = [
        {name: "Profile", Icon: UserOutline, onclick: () => modalStates.profile = true},
        {name: "Education", Icon: GraduationCapOutline, onclick: () => modalStates.education = true},
        {name: "Work Experience", Icon: BuildingOutline, onclick: () => modalStates.work = true},
        {name: "Projects", Icon: PaperPlaneOutline, onclick: () => modalStates.projects = true},
        {name: "Certifications", Icon: FileOutline, onclick: () => modalStates.certifications = true},
        {name: "Skills", Icon: PaperClipOutline, onclick: () => modalStates.skills = true}
    ];
</script>


<EditorModal title="Profile"
             Icon={UserOutline}
             bind:open={modalStates.profile}>
    <ProfileForm/>
</EditorModal>

<EditorModal title="Education"
             Icon={GraduationCapOutline}
             bind:open={modalStates.education}>
    <EducationForm/>
</EditorModal>

<EditorModal title="Work Experience"
             Icon={BuildingOutline}
             bind:open={modalStates.work}>
    <WorkForm/>
</EditorModal>

<EditorModal title="Projects"
             Icon={PaperPlaneOutline}
             bind:open={modalStates.projects}>
    <ProjectsForm/>
</EditorModal>

<EditorModal title="Certifications"
             Icon={FileOutline}
             bind:open={modalStates.certifications}>
    <CertificationsForm/>
</EditorModal>

<EditorModal title="Skills"
             Icon={PaperClipOutline}
             bind:open={modalStates.skills}>
    <SkillsForm/>
</EditorModal>


<SpeedDialTrigger class="fixed right-6 bottom-6 w-13 h-13">
    {#snippet icon()}
        <EditOutline size="lg"/>
    {/snippet}
</SpeedDialTrigger>
<SpeedDial tooltip="none" placement="top-end" trigger="click">
    <Listgroup active
               items={listgroupItems}
               class="select-none"/>
</SpeedDial>


<style>
    @import "tailwindcss";

    :global(label) {
        @apply text-sm font-normal mb-0.5;
    }

    :global(Input) {
        /*@apply bg-gray-600 text-white;*/
    }
</style>