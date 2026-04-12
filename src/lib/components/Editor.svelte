<script lang="ts">
    import {
        SpeedDialTrigger,
        SpeedDial,
        Listgroup,
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

    import ProfileModal from "./modals/ProfileModal.svelte";
    import SkillsModal from "./modals/SkillsModal.svelte";
    import EducationModal from "./modals/EducationModal.svelte";
    import WorkModal from "./modals/WorkModal.svelte";
    import ProjectsModal from "./modals/ProjectsModal.svelte";
    import CertificationsModal from "./modals/CertificationsModal.svelte";

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


<ProfileModal bind:open={modalStates.profile}/>
<EducationModal bind:open={modalStates.education}/>
<WorkModal bind:open={modalStates.work}/>
<ProjectsModal bind:open={modalStates.projects}/>
<CertificationsModal bind:open={modalStates.certifications}/>
<SkillsModal bind:open={modalStates.skills}/>


<SpeedDialTrigger class="fixed right-6 bottom-6 w-13 h-13">
    {#snippet icon()}
        <EditOutline size="lg"/>
    {/snippet}
</SpeedDialTrigger>
<SpeedDial tooltip="none" placement="top-end">
    <Listgroup active
               items={listgroupItems}/>
</SpeedDial>


<style>
    @import "tailwindcss";

    :global(label) {
        @apply text-sm font-normal mb-0.5;
    }
</style>