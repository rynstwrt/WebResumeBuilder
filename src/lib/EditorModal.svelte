<script lang="ts">
    import { Label, Modal, PhoneInput, Input, Textarea, Button, P, Select, Tabs, TabItem } from "flowbite-svelte";
    import {
        CubesStackedOutline, PaperPlaneSolid, PenSolid, PaperClipOutline, FileSolid, AdjustmentsVerticalSolid,
        GraduationCapSolid, BuildingSolid, UserCircleSolid, CirclePlusOutline,

        CirclePlusSolid

    } from "flowbite-svelte-icons";
    import { onMount } from "svelte";
    import WorkSection from "./WorkSection.svelte";
    import ProfileSection from "./ProfileSection.svelte";

    let open = $state(true);
    let {openOnLoad = false, info} = $props();


    function onaction({action, data}: { action: string, data: FormData }) {
        if (action === "success")
            open = false;
    }

    onMount(() => {
        open = openOnLoad;
    });
</script>


<Modal bind:open
       outsideclose={false}
       form
       {onaction}
       size="sm" id="editor-modal">

    <ProfileSection info={info}/>


    <!--    <div class="flex flex-col space-y-6 text-gray-300 pt-5">-->
    <!--        <h3>Work</h3>-->
    <!--        <Button size="sm" class="w-fit font-normal">-->
    <!--            <CirclePlusOutline size="sm" class="mr-1"/>-->
    <!--            Experience-->
    <!--        </Button>-->
    <!--    </div>-->
    <WorkSection info={info}/>

<!--    <div class="editor-section flex flex-col space-y-6 text-gray-300 pt-5">-->
<!--        <h3>School</h3>-->
<!--        <Button size="sm" class="w-fit font-normal">-->
<!--            <CirclePlusOutline size="sm" class="mr-1"/>-->
<!--            School-->
<!--        </Button>-->
<!--    </div>-->


<!--    <div class="editor-section flex flex-col space-y-6 text-gray-300 pt-5">-->
<!--        <h3>Projects</h3>-->
<!--        <Button size="sm" class="w-fit font-normal">-->
<!--            <CirclePlusOutline size="sm" class="mr-1"/>-->
<!--            Project-->
<!--        </Button>-->
<!--    </div>-->


<!--    <div class="editor-section flex flex-col space-y-6 text-gray-300 pt-5">-->
<!--        <h3>Certifications</h3>-->
<!--        <Button size="sm" class="w-fit font-normal">-->
<!--            <CirclePlusOutline size="sm" class="mr-1"/>-->
<!--            Certification-->
<!--        </Button>-->
<!--    </div>-->


<!--    <div class="editor-section flex flex-col space-y-6 text-gray-300 pt-5">-->
<!--        <h3>Skills</h3>-->
<!--        <Button size="sm" class="w-fit font-normal">-->
<!--            <CirclePlusOutline size="sm" class="mr-1"/>-->
<!--            Skill-->
<!--        </Button>-->
<!--    </div>-->

    {#snippet footer()}
        <Button type="submit" value="success">Confirm</Button>
        <!--        <Button type="submit" value="decline" color="alternative" class="text-primary-100">Decline</Button>-->
    {/snippet}
</Modal>

<Button pill onclick={() => (open = true)} class="w-10 h-10">
    <AdjustmentsVerticalSolid/>
</Button>


<style>
    @import "tailwindcss";


</style>