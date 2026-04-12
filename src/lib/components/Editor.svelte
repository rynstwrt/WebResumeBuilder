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
    } from "flowbite-svelte-icons";

    import SkillsSection from "./SkillsSection.svelte";
    import ProfileModal from "./ProfileModal.svelte";
    import { onMount } from "svelte";

    let {info, downloadPDF} = $props();
</script>


<ProfileModal info2={info}/>


<SpeedDialTrigger class="fixed right-6 bottom-6 w-13 h-13">
    {#snippet icon()}
        <EditOutline size="lg"/>
    {/snippet}
</SpeedDialTrigger>
<SpeedDial tooltip="none" placement="top-end">
    <Listgroup active>
        <ListgroupItem class="flex">
            <UserOutline size="xs" class="me-2 h-5 w-5"/>
            Profile
        </ListgroupItem>

        <ListgroupItem class="flex">
            <GraduationCapOutline size="xs" class="me-2 h-5 w-5"/>
            Education
        </ListgroupItem>

        <ListgroupItem class="flex">
            <BuildingOutline size="xs" class="me-2 h-5 w-5"/>
            Work Experience
        </ListgroupItem>

        <ListgroupItem class="flex">
            <PaperClipOutline size="xs" class="me-2 h-5 w-5"/>
            Projects
        </ListgroupItem>

        <ListgroupItem class="flex">
            <FileOutline size="xs" class="me-2 h-5 w-5"/>
            Certifications
        </ListgroupItem>

        <ListgroupItem class="flex">
            <PaperPlaneOutline size="xs" class="me-2 h-5 w-5"/>
            Skills
        </ListgroupItem>
    </Listgroup>
</SpeedDial>


<style>
    @import "tailwindcss";

    :global(label) {
        @apply text-sm font-normal mb-0.5;
    }
</style>