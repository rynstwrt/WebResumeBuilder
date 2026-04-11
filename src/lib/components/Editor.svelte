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
        Drawerhead
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
    import { onMount } from "svelte";
    import SchoolSection from "./SchoolSection.svelte";

    let editorOpen = $state(false);
    let {info, openOnLoad = false, downloadPDF, isDevMode} = $props();

    let eduModalOpen = $state(false);

    onMount(() => {
        editorOpen = openOnLoad;
    });

    const DRAWER_HANDLE_SIZE = 40;

    const downloadConfig = () => info.downloadConfig();
    const importConfig = () => info.importConfig();

    const workInputFormState = $state({
        employer: "",
        role: "",
        location: "",
        dates: "",
        bulletpoints: ""
    });
    function addWorkExperience() {
        info.workExperience.push({
            employer: workInputFormState.employer,
            role: workInputFormState.role,
            location: workInputFormState.location,
            dates: workInputFormState.dates,
            bulletpoints: workInputFormState.bulletpoints.split("\n")
        });

        Object.assign(workInputFormState, {
            employer: "",
            role: "",
            location: "",
            dates: "",
            bulletpoints: ""
        });
    }

    const educationFormState = $state({
        school: "",
        diploma: "",
        dates: "",
        bulletpoints: ""
    });
    function addEducation() {
        info.education.push({
            school: educationFormState.school,
            diploma: educationFormState.diploma,
            dates: educationFormState.dates,
            bulletpoints: educationFormState.bulletpoints.split("\n")
        });

        Object.assign(educationFormState, {
            school: "",
            diploma: "",
            dates: "",
            bulletpoints: ""
        });
    }
</script>


<!--<Modal bind:open={eduModalOpen} outsideclose={false} form size="xs">-->
<!--    <div class="grid grid-cols-2 gap-3 mt-6">-->
<!--        <div>-->
<!--            <Label for="school">School</Label>-->
<!--            <Input name="school" placeholder="University of Texas"/>-->
<!--        </div>-->
<!--        <div>-->
<!--            <Label for="diploma">Diploma</Label>-->
<!--            <Input name="diploma" placeholder="B.S. Computer Science"/>-->
<!--        </div>-->
<!--        <div>-->
<!--            <Label for="dates">Dates</Label>-->
<!--            <Input name="dates" placeholder="Aug. 2019 - Dec. 2025"/>-->
<!--        </div>-->
<!--        <div>-->
<!--            <Label for="location">Location</Label>-->
<!--            <Input name="location" placeholder="Austin, TX"/>-->
<!--        </div>-->
<!--        <div class="col-span-full">-->
<!--            <Label for="bulletpoints">Bulletpoints</Label>-->
<!--            <Textarea name="bulletpoints"-->
<!--                      placeholder="Type bulletpoints here, one per line..."-->
<!--                      class="w-full"-->
<!--                      rows={3}/>-->
<!--        </div>-->
<!--        <Button class="col-span-full mt-5">Save</Button>-->
<!--    </div>-->
<!--</Modal>-->

<Drawer bind:open={editorOpen} offset="{DRAWER_HANDLE_SIZE}px" placement="left" width="full" class="text-gray-400 pr-8">
    <DrawerHandle onclick={() => editorOpen = !editorOpen} class="h-14 my-auto" />
    <!--    class="max-h-9/12">-->
    <!--    <div id="editor-modal">-->
    <Tabs tabStyle="underline" class="max-w-fit">
        <TabItem title="Profile">
            {#snippet titleSlot()}
                <div class="title-slot">
                    <UserCircleSolid size="sm"/>
                    Profile
                </div>
            {/snippet}
            <div class="editor-section">
                <!--                    <h3>Profile</h3>-->
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <Label for="name">Name</Label>
                        <Input name="name"
                               size="md"
                               placeholder="John Doe"
                               required
                               bind:value={info.name}/>
                    </div>
                    <div>
                        <Label for="phone">Phone Number</Label>
                        <Input name="phone"
                               type="tel"
                               placeholder="123-456-7890"
                               required
                               bind:value={info.phone}/>
                    </div>
                    <div>
                        <Label for="email">Email</Label>
                        <Input name="email"
                               placeholder="john.doe@gmail.com"
                               required
                               bind:value={info.email}/>
                    </div>
                    <div>
                        <Label for="location">Location</Label>
                        <Input name="location"
                               placeholder="Seattle, WA"
                               required
                               bind:value={info.location}/>
                    </div>
                    <div class="col-span-full">
                        <Label for="links">Links</Label>
                        <Textarea name="links"
                                  placeholder="Type links here, one per line..."
                                  bind:value={info.links}
                                  rows={3}
                                  class="w-full"/>
                    </div>
                </div>
            </div>
        </TabItem>


        <TabItem title="Work" open={isDevMode && false}>
            {#snippet titleSlot()}
                <div class="title-slot">
                    <BuildingSolid size="sm"/>
                    Work
                </div>
            {/snippet}
            <div class="mb-8 grid grid-cols-2 gap-2">
                {#each info.workExperience as work, i}
                    <Card class="py-2 px-3 flex flex-col relative" size="md">
                        <CloseButton size="md"
                                     class="self-end absolute top-0 right-0"
                                     onclick={() => info.workExperience.splice(i, 1)}/>
                        <h4 class="text-md font-normal">{work.role}</h4>
                        <h4 class="text-md font-light">{work.employer}</h4>
                        <p class="text-sm font-thin">{work.dates}</p>
                        {#if work.bulletpoints.length}
                            <ul class="list-disc pl-[1.5ch] mt-0.5">
                                {#each work.bulletpoints as bulletpoint}
                                    <li class="text-sm font-light">{bulletpoint}</li>
                                {/each}
                            </ul>
                        {/if}
                    </Card>
                {/each}
            </div>
            <div class="editor-section">
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <Label for="work-name-input">Employer</Label>
                        <Input name="work-name-input" placeholder="IBM" bind:value={workInputFormState.employer}/>
                    </div>
                    <div class="">
                        <Label for="work-role">Role</Label>
                        <Input name="work-role" placeholder="Data Center Specialist"
                               bind:value={workInputFormState.role}/>
                    </div>
                    <div>
                        <Label for="work-location-input">Location</Label>
                        <Input name="work-location-input" placeholder="Seattle, WA"
                               bind:value={workInputFormState.location}/>
                    </div>
                    <div>
                        <Label for="work-dates-input">Dates</Label>
                        <Input name="work-dates-input" placeholder="Dec. 2022 - Jul. 2024"
                               bind:value={workInputFormState.dates}/>
                    </div>
                    <div class="w-full col-span-full">
                        <Label for="work-bullet-input">Bulletpoints</Label>
                        <Textarea rows={6}
                                  name="work-bullet-input"
                                  class="w-full"
                                  placeholder="Type bulletpoints, one per line..."
                                  bind:value={workInputFormState.bulletpoints}/>
                    </div>
                    <Button size="sm" class="w-fit font-normal" onclick={addWorkExperience}>
                        <CirclePlusOutline size="sm" class="mr-1"/>
                        Add
                    </Button>
                </div>
            </div>

        </TabItem>


        <TabItem title="Education" open={isDevMode && true}>
            {#snippet titleSlot()}
                <div class="title-slot">
                    <GraduationCapSolid size="sm"/>
                    School
                </div>
            {/snippet}
<!--            <SchoolSection {info}/>-->
            <div class="editor-section">
                <div class="mb-6 flex flex-col gap-y-2">
                    {#each info.education as school, i}
                        <Card class="py-2 px-3 flex flex-col relative" size="md">
                            <CloseButton size="md"
                                         class="self-end absolute top-0 right-0"
                                         onclick={() => info.education.splice(i, 1)}/>
                            <h4 class="text-md font-normal">{school.school}</h4>
                            <h4 class="text-sm font-light">{school.diploma}</h4>
                            <p class="text-sm font-thin">{school.dates}</p>
                            {#if school.bulletpoints}
                                <ul class="list-disc pl-[1.5ch] mt-0.5">
                                    {#each school.bulletpoints as bulletpoint}
                                        <li class="text-sm font-normal">{bulletpoint}</li>
                                    {/each}
                                </ul>
                            {/if}
                        </Card>
                    {/each}
                </div>
                <div class="grid grid-cols-2 gap-3 mt-6">
                    <div>
                        <Label for="school">School</Label>
                        <Input name="school" placeholder="University of Texas"/>
                    </div>
                    <div>
                        <Label for="diploma">Diploma</Label>
                        <Input name="diploma" placeholder="B.S. Computer Science"/>
                    </div>
                    <div>
                        <Label for="dates">Dates</Label>
                        <Input name="dates" placeholder="Aug. 2019 - Dec. 2025"/>
                    </div>
                    <div>
                        <Label for="location">Location</Label>
                        <Input name="location" placeholder="Austin, TX"/>
                    </div>
                    <div class="col-span-full">
                        <Label for="bulletpoints">Bulletpoints</Label>
                        <Textarea name="bulletpoints"
                                  placeholder="Type bulletpoints here, one per line..."
                                  class="w-full"
                                  rows={3}/>
                    </div>
                    <Button class="col-span-full mt-5">Save</Button>
                </div>
            </div>
        </TabItem>


        <TabItem title="Projects">
            {#snippet titleSlot()}
                <div class="title-slot">
                    <PaperPlaneSolid size="sm"/>
                    Projects
                </div>
            {/snippet}
            <div class="editor-section">
                <h4 class="text-md text-gray-300 font-normal mb-1">Education:</h4>
                <div class="mb-6 flex flex-col gap-y-2">
                    {#each info.projects as project, i}
                        <Card class="py-2 px-3 flex flex-col relative" size="md">
                            <CloseButton size="md"
                                         class="self-end absolute top-0 right-0"
                                         onclick={() => info.projects.splice(i, 1)}/>
                            <h4 class="text-md font-normal">{project.title}</h4>
                            <p class="text-sm font-thin">{project.dates}</p>
                            {#if project.bulletpoints}
                                <ul class="list-disc pl-[1.5ch] mt-0.5">
                                    {#each project.bulletpoints as bulletpoint}
                                        <li class="text-sm font-thin">{bulletpoint}</li>
                                    {/each}
                                </ul>
                            {/if}
                        </Card>
                    {/each}
                </div>

                <div class="grid grid-cols-2 gap-2">
                    <div>
                        <Label for="project-name-input">Name</Label>
                        <Input name="project-name-input" placeholder="Project 01"/>
                    </div>
                    <div>
                        <Label for="project-dates-input">Dates</Label>
                        <Input name="project-dates-input" placeholder="2023 - 2025"/>
                    </div>
                    <div class="w-full col-span-full">
                        <Label for="project-bullet-input">Bulletpoints</Label>
                        <Textarea rows={3}
                                  name="project-bullet-input"
                                  class="w-full"
                                  placeholder="Type bulletpoints, one per line..."/>
                    </div>
                    <div class="w-full col-span-full">
                        <Label for="project-bullet-input">Links</Label>
                        <Textarea rows={2}
                                  name="project-bullet-input"
                                  class="w-full"
                                  placeholder="Type links, one per line..."/>
                    </div>
                    <Button size="sm" class="w-fit font-normal">
                        <CirclePlusOutline size="sm" class="mr-1"/>
                        Add
                    </Button>
                </div>
            </div>
        </TabItem>


        <TabItem title="Certifications">
            {#snippet titleSlot()}
                <div class="title-slot">
                    <FileSolid size="sm"/>
                    Certs
                </div>
            {/snippet}
            <div class="editor-section">
                <!--                    <h3>Certifications</h3>-->

                <h4 class="text-md text-gray-300 font-normal mb-1">Certifications:</h4>
                <div class="mb-6 flex flex-col gap-y-2">
                    {#each info.certifications as cert, i}
                        <Card class="py-2 px-3 flex flex-col relative" size="md">
                            <CloseButton size="md"
                                         class="self-end absolute top-0 right-0"
                                         onclick={() => info.certifications.splice(i, 1)}/>
                            <h4 class="text-md font-normal">{cert.title}</h4>
                            <p class="text-sm font-thin">{cert.dates}</p>
                            {#if cert.bulletpoints.length}
                                <ul class="list-disc pl-[1.5ch] mt-0.5">
                                    {#each cert.bulletpoints as bulletpoint}
                                        <li class="text-sm font-thin">{bulletpoint}</li>
                                    {/each}
                                </ul>
                            {/if}
                        </Card>
                    {/each}
                </div>

                <div class="grid grid-cols-2 gap-2">
                    <div>
                        <Label for="cert-name-input">Name</Label>
                        <Input name="cert-name-input" placeholder="CCNA"/>
                    </div>
                    <div>
                        <Label for="cert-dates-input">Dates</Label>
                        <Input name="cert-dates-input" placeholder="2025 - Present"/>
                    </div>
                    <div class="w-full col-span-full">
                        <Label for="cert-bullet-input">Bulletpoints</Label>
                        <Textarea rows={2}
                                  name="cert-bullet-input"
                                  class="w-full"
                                  placeholder="Type bulletpoints, one per line..."/>
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
                <div class="title-slot">
                    <PenSolid size="sm"/>
                    Skills
                </div>
            {/snippet}
            <div class="editor-section">
                <!--                    <h3>Skills</h3>-->

                <Textarea rows={6}
                          class="w-full"
                          placeholder="Type skills separated by commas..."
                          bind:value={info.skills}/>

                {#if info.skills}
                    <div class="flex flex-wrap items-center gap-x-2 gap-y-1 mt-6">
                        <Label class="text-sm font-bold">Skills:</Label>
                        {#each info.skills.split(",") as skill}
                            <p class="text-sm font-light text-white py-0.5 px-1 rounded-sm border-gray-600 border">{skill.trim()}</p>
                        {/each}
                    </div>
                {/if}
            </div>
        </TabItem>
    </Tabs>

    <!--    </div>-->

    <!--{#snippet footer()}-->
    <!--    <ButtonGroup>-->
    <!--        <Button id="download-config-btn" onclick={downloadConfig}>-->
    <!--            <DownloadSolid size="md"/>-->
    <!--        </Button>-->

    <!--        <Button id="upload-config-btn" onclick={importConfig}>-->
    <!--            <UploadSolid size="md"/>-->
    <!--        </Button>-->

    <!--        <Button id="download-pdf-btn" class="text-nowrap" onclick={() => downloadPDF()}>-->
    <!--            <DownloadSolid size="sm" class="mr-1"/>-->
    <!--            PDF-->
    <!--        </Button>-->
    <!--    </ButtonGroup>-->
    <!--    <Tooltip triggeredBy="#download-config-btn">Download Config</Tooltip>-->
    <!--    <Tooltip triggeredBy="#upload-config-btn">Upload Config</Tooltip>-->
    <!--    <Tooltip triggeredBy="#download-pdf-btn">Download Resume PDF</Tooltip>-->

    <!--    <Button disabled type="submit" color="primary" class="w-full">-->
    <!--        &lt;!&ndash;            <CheckCircleSolid size="sm" class="mr-1"/>&ndash;&gt;-->
    <!--        Confirm-->
    <!--    </Button>-->
    <!--{/snippet}-->
</Drawer>


<Button
        pill
        onclick={() => (editorOpen = true)}
        class="fixed bottom-0 right-0 m-5 w-12 h-12">
    <AdjustmentsVerticalSolid/>
</Button>


<style>
    @import "tailwindcss";

    .title-slot {
        @apply text-center flex items-center gap-x-1;
        /*@apply text-center flex flex-col items-center gap--1;*/
    }

    :global(label) {
        /*color: red !important;*/
        @apply text-sm font-normal mb-0.5;
    }

    /*#editor-modal :global(ul) {*/
    /*    !*@apply bg-red-500;*!*/

    /*    :global(button) {*/
    /*        @apply px-5 py-1;*/

    /*    }*/
    /*}*/
</style>