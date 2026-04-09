<script>
    import {
        Modal,
        Label,
        Input,
        Button,
        Textarea,
        Tabs,
        TabItem
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
       size="md"
       class="w-fit">
    <div id="editor-modal">

        <Tabs tabStyle="underline" class="mt-7">
            <TabItem title="Profile">
                {#snippet titleSlot()}
                    <div class="text-center flex flex-col items-center gap-y-0.5">
                        <UserCircleSolid size="sm"/>
                        Profile
                    </div>
                {/snippet}
                <div class="editor-section">
                    <h3>Profile</h3>
                    <div class="grid grid-cols-2 gap-2">
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
            </TabItem>


            <TabItem title="Work">
                {#snippet titleSlot()}
                    <div class="text-center flex flex-col items-center gap-y-0.5">
                        <BuildingSolid size="sm"/>
                        Work
                    </div>
                {/snippet}
                <div class="editor-section">
                    <h3>Work</h3>
                    <Button size="sm" class="w-fit font-normal">
                        <CirclePlusOutline size="sm" class="mr-1"/>
                        Experience
                    </Button>
                </div>
            </TabItem>


            <TabItem title="Education">
                {#snippet titleSlot()}
                    <div class="text-center flex flex-col items-center gap-y-0.5">
                        <GraduationCapSolid size="sm"/>
                        School
                    </div>
                {/snippet}
                <div class="editor-section">
                    <h3>Education</h3>
                    <Button size="sm" class="w-fit font-normal">
                        <CirclePlusOutline size="sm" class="mr-1"/>
                        Education
                    </Button>
                </div>
            </TabItem>


            <TabItem title="Projects">
                {#snippet titleSlot()}
                    <div class="text-center flex flex-col items-center gap-y-0.5">
                        <PaperPlaneSolid size="sm"/>
                        Projects
                    </div>
                {/snippet}
                <div class="editor-section">
                    <h3>Projects</h3>
                    <Button size="sm" class="w-fit font-normal">
                        <CirclePlusOutline size="sm" class="mr-1"/>
                        Project
                    </Button>
                </div>
            </TabItem>


            <TabItem title="Certifications" open>
                {#snippet titleSlot()}
                    <div class="text-center flex flex-col items-center gap-y-0.5">
                        <FileSolid size="sm"/>
                        Certs
                    </div>
                {/snippet}
                <div class="editor-section">
                    <h3>Certifications</h3>

                    <div class="grid grid-cols-2 gap-2">
                        <div>
                            <Label for="cert-name-input" class="mb-0.5 text-sm">Name</Label>
                            <Input name="cert-name-input" placeholder="CCNA"/>
                        </div>
                        <div>
                            <Label for="cert-dates-input" class="mb-0.5 text-sm">Dates</Label>
                            <Input name="cert-dates-input" placeholder="2025 - Present"/>
                        </div>
                        <div class="w-full col-span-full">
                            <Label for="cert-bullet-input" class="mb-0.5 text-sm">Bulletpoints</Label>
                            <Textarea rows={6}
                                      name="cert-bullet-input"
                                      class="w-full"
                                      placeholder="Type bulletpoints, one per each line..."/>
                        </div>
                        <Button size="sm" class="w-fit font-normal">
                            <CirclePlusOutline size="sm" class="mr-1"/>
                            Add
                        </Button>
                    </div>
                </div>
            </TabItem>


            <TabItem title="Skills">
                {#snippet titleSlot()}
                    <div class="text-center flex flex-col items-center gap-y-0.5">
                        <PenSolid size="sm"/>
                        Skills
                    </div>
                {/snippet}
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
            </TabItem>
        </Tabs>

    </div>

    {#snippet footer()}
        <Button type="submit" color="green" class="w-full">
            <CheckCircleSolid size="md" class="mr-1"/>
            Confirm
        </Button>
        <Button color="secondary">
            <UploadSolid size="md" class="mr-1"/>
            Import
        </Button>
        <Button color="secondary">
            <DownloadSolid size="md" class="mr-1"/>
            Export
        </Button>
    {/snippet}
</Modal>


<Button pill onclick={() => (editorOpen = true)} class="w-10 h-10">
    <AdjustmentsVerticalSolid/>
</Button>


<style>
    @import "tailwindcss";

    #editor-modal :global(ul) {
        /*@apply bg-red-500;*/

        :global(button) {
            @apply px-5 py-1;

        }
    }

    .editor-section h3 {
        @apply text-2xl mb-4 text-white font-light;
    }
</style>