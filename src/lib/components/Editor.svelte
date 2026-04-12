<script lang="ts">
    import {
        Modal,
        Label,
        Input,
        Button,
        Textarea,
        Tabs,
        TabItem,
        Tooltip,
        ButtonGroup,
        Card,
        CloseButton,
        Drawer,
        DrawerHandle,
        Drawerhead,
        SpeedDialTrigger,
        SpeedDial,
        SpeedDialButton,
        Listgroup,
        ListgroupItem, modal
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

    import ProfileModal from "./ProfileModal.svelte";
    import { onMount } from "svelte";
    import SkillsModal from "./SkillsModal.svelte";

    let {downloadPDF} = $props();

    let profileModalOpen = $state(false);
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
<SkillsModal bind:open={modalStates.skills}/>

<SpeedDialTrigger class="fixed right-6 bottom-6 w-13 h-13">
    {#snippet icon()}
        <EditOutline size="lg"/>
    {/snippet}
</SpeedDialTrigger>
<SpeedDial tooltip="none" placement="top-end">
    <!--    <Listgroup active items={listgroupItems} onclick={(e) => console.log(Object.entries(listgroupItems)?.at(e?.detail! - 1 || 0))}/>-->
    <Listgroup active
               items={listgroupItems}/>
    <!--    <Listgroup active onclick={(e) => alert('asdf')}>-->
    <!--        <ListgroupItem class="flex" name="profile">-->
    <!--            <UserOutline size="xs" class="me-2 h-5 w-5"/>-->
    <!--            Profile-->
    <!--        </ListgroupItem>-->

    <!--        <ListgroupItem class="flex" name="education">-->
    <!--            <GraduationCapOutline size="xs" class="me-2 h-5 w-5"/>-->
    <!--            Education-->
    <!--        </ListgroupItem>-->

    <!--        <ListgroupItem class="flex" name="work">-->
    <!--            <BuildingOutline size="xs" class="me-2 h-5 w-5"/>-->
    <!--            Work Experience-->
    <!--        </ListgroupItem>-->

    <!--        <ListgroupItem class="flex" name="projects">-->
    <!--            <PaperClipOutline size="xs" class="me-2 h-5 w-5"/>-->
    <!--            Projects-->
    <!--        </ListgroupItem>-->

    <!--        <ListgroupItem class="flex" name="certifications">-->
    <!--            <FileOutline size="xs" class="me-2 h-5 w-5"/>-->
    <!--            Certifications-->
    <!--        </ListgroupItem>-->

    <!--        <ListgroupItem class="flex" name="skills">-->
    <!--            <PaperPlaneOutline size="xs" class="me-2 h-5 w-5"/>-->
    <!--            Skills-->
    <!--        </ListgroupItem>-->
    <!--    </Listgroup>-->
</SpeedDial>


<style>
    @import "tailwindcss";

    :global(label) {
        @apply text-sm font-normal mb-0.5;
    }
</style>