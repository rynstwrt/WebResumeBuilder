<script>
    import {
        Modal,
        Label,
        Input,
        Button,
        Textarea
    } from "flowbite-svelte";

    import {
        CubesStackedOutline,
        PaperPlaneSolid,
        PenSolid,
        PaperClipOutline,
        FileSolid,
        AdjustmentsVerticalSolid,
        GraduationCapSolid,
        BuildingSolid,
        UserCircleSolid,
        CirclePlusOutline,
        UploadSolid,
        DownloadSolid,
        CheckCircleSolid
    } from "flowbite-svelte-icons";
    import {onMount} from "svelte";

    let editorOpen = $state(true);
    let {info, openOnLoad = false} = $props();
</script>

<Modal bind:open={editorOpen}
       outsideclose={false}
       form
       size="sm">
    <div id="editor-modal">

        <div class="editor-section mt-5">
            <h3>Profile</h3>
            <div class="grid grid-cols-2 gap-3">
                <div>
                    <Label for="name" class="mb-0.5 text-sm">Name</Label>
                    <Input name="name"
                           size="md"
                           placeholder="John Doe"
                           required
                           bind:value={info.name}/>
                </div>
                <div>
                    <Label for="phone" class="mb-0.5 text-sm">Phone Number</Label>
                    <Input name="phone"
                           type="tel"
                           placeholder="123-456-7890"
                           required
                           bind:value={info.phone}/>
                </div>
                <div>
                    <Label for="email" class="mb-0.5 text-sm">Email</Label>
                    <Input name="email"
                           placeholder="john.doe@gmail.com"
                           required
                           bind:value={info.email}/>
                </div>
                <div>
                    <Label for="location" class="mb-0.5 text-sm">Location</Label>
                    <Input name="location"
                           placeholder="Seattle, WA"
                           required
                           bind:value={info.location}/>
                </div>
            </div>
        </div>


        <div class="editor-section">
            <h3>Work</h3>
            <Button size="sm" class="w-fit font-normal">
                <CirclePlusOutline size="sm" class="mr-1"/>
                Experience
            </Button>
        </div>


        <div class="editor-section">
            <h3>Skills</h3>

            <Textarea rows={6}
                      class="w-full"
                      placeholder="Type skills separated by commas..."
                      bind:value={info.skills}/>


            <!--            <div class="flex flex-wrap items-center text-nowrap gap-2">-->
            <!--                {#each info.skills as skill}-->
            <!--                    <Button size="xs" class="w-min">{skill}</Button>-->
            <!--                {/each}-->
            <!--            </div>-->

            <!--            <Button size="sm" class="w-fit font-normal">-->
            <!--                <CirclePlusOutline size="sm" class="mr-1"/>-->
            <!--                Skill-->
            <!--            </Button>-->
        </div>

        <div class="editor-section">
            <h3>School</h3>
            <Button size="sm" class="w-fit font-normal">
                <CirclePlusOutline size="sm" class="mr-1"/>
                School
            </Button>
        </div>


        <div class="editor-section">
            <h3>Projects</h3>
            <Button size="sm" class="w-fit font-normal">
                <CirclePlusOutline size="sm" class="mr-1"/>
                Project
            </Button>
        </div>


        <div class="editor-section">
            <h3>Certifications</h3>
            <Button size="sm" class="w-fit font-normal">
                <CirclePlusOutline size="sm" class="mr-1"/>
                Certification
            </Button>
        </div>


    </div>

    {#snippet footer()}
        <Button type="submit" color="green" class="w-full">
            <CheckCircleSolid size="md" class="mr-1" />
            Confirm
        </Button>
        <Button color="secondary">
            <UploadSolid size="md" class="mr-1" />
            Import
        </Button>
        <Button color="secondary">
            <DownloadSolid size="md" class="mr-1" />
            Export
        </Button>
    {/snippet}
</Modal>


<Button pill onclick={() => (editorOpen = true)} class="w-10 h-10">
    <AdjustmentsVerticalSolid/>
</Button>