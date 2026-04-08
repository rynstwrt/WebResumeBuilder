<script lang="ts">
    import { Label, Modal, Input, Textarea, Button, P, Select, Tabs, TabItem } from "flowbite-svelte";
    import { CubesStackedOutline, PaperPlaneSolid, PaperClipOutline, FileSolid, AdjustmentsVerticalSolid, GraduationCapSolid, BuildingSolid, UserCircleSolid } from "flowbite-svelte-icons";

    let open = $state(true);
    let formError = $state("");
    let selectedSection = $state("profile");

    let sections: { name: string, value: string }[] = [
        {name: "Profile", value: "profile"},
        {name: "Experience", value: "experience"},
        {name: "Education", value: "education"},
        {name: "Projects", value: "projects"},
        {name: "Certifications", value: "certifications"},
        {name: "Skills", value: "skills"}
    ];

    function onaction({action, data}: { action: string, data: FormData }) {
        formError = "";

        console.log(action, data);

        if (action !== "save") {
            formError = "Action other than save.";
            return false;
        }
    }
</script>


<Modal title="Editor"
       form
       bind:open
       outsideclose={false}
       {onaction}
       size="lg"
       class="flex flex-col items-center w-min">
    <!--    <Select items={sections} bind:value={selectedSection}/>-->

<!--    {#snippet header()}-->
<!--        asdf-->
<!--        <P>asdf</P>-->
<!--    {/snippet}-->

    <Tabs tabStyle="underline">
        <TabItem title="Profile" open>
            {#snippet titleSlot()}
                <div class="flex items-center gap-2">
                    <UserCircleSolid size="md" />
                    Profile
                </div>
            {/snippet}
            <P>Profile. With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                companies around the world are updating their terms of service agreements to comply.</P>
        </TabItem>

        <TabItem title="Work" open>
            {#snippet titleSlot()}
                <div class="flex items-center gap-2">
                    <BuildingSolid size="md" />
                    Work
                </div>
            {/snippet}
            <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                companies around the world are updating their terms of service agreements to comply.</P>
        </TabItem>

        <TabItem title="School" open>
            {#snippet titleSlot()}
                <div class="flex items-center gap-2">
                    <GraduationCapSolid size="md" />
                    School
                </div>
            {/snippet}
            <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                companies around the world are updating their terms of service agreements to comply.</P>
        </TabItem>

        <TabItem title="Projects" open>
            {#snippet titleSlot()}
                <div class="flex items-center gap-2">
                    <GraduationCapSolid size="md" />
                    Projects
                </div>
            {/snippet}
            <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                companies around the world are updating their terms of service agreements to comply.</P>
        </TabItem>

        <TabItem title="Certs" open>
            {#snippet titleSlot()}
                <div class="flex items-center gap-2">
                    <GraduationCapSolid size="md" />
                    Certs
                </div>
            {/snippet}
            <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                companies around the world are updating their terms of service agreements to comply.</P>
        </TabItem>

        <TabItem title="Skills" open>
            {#snippet titleSlot()}
                <div class="flex items-center gap-2">
                    <GraduationCapSolid size="md" />
                    Skills
                </div>
            {/snippet}
            <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                companies around the world are updating their terms of service agreements to comply.</P>
        </TabItem>
    </Tabs>


    <!--{#snippet footer()}-->
    <!--        <Button type="submit" value="success">I accept</Button>-->
    <!--        <Button type="submit" value="decline" color="alternative" class="text-primary-100">Decline</Button>-->
    <!--    {/snippet}-->
</Modal>

<Button pill onclick={() => (open = true)}>
    <AdjustmentsVerticalSolid/>
</Button>