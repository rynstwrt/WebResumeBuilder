<script lang="ts">
    import {
        Card,
        Drawer,
        DrawerHandle,
        Label,
        Input,
        Datepicker,
        Button,
        Accordion,
        AccordionItem,
        DescriptionList,
        List,
        Tooltip,
        Modal,
        Checkbox,
        P,
        Span
    } from "flowbite-svelte";

    import {
        DrawSquareOutline,
        UsersSolid,
        BuildingSolid,
        PlusOutline,
        GraduationCapSolid,
        PaperPlaneSolid,
        PenSolid,
        StarOutline,
        LinkOutline,
        CloseOutline,
        DownloadOutline
    } from "flowbite-svelte-icons";

    let open = $state(false);
    setTimeout(() => {
        // open = !open
    }, 10);

    // let {name = $bindable()} = $props();
    // import { resumeInfoState as info } from "../data.svelte";

    // let {info = $bindable()} = $props();
    let {info} = $props();

    // const input = this.querySelectorAll("input");
    // console.log(input);
</script>


<Drawer bind:open offset="52px" placement="bottom" outsideclose={false} class="rounded-t-lg dark:text-gray-300!"
        aria-labelledby="drawer-swipe-label">
    <DrawerHandle
            onclick={() => (open = !open)}
            class="h-14 hover:bg-gray-50 dark:hover:bg-gray-900">

        <h5 id="drawer-swipe-label"
            class="inline-flex items-center gap-2 text-base font-medium text-gray-500 dark:text-gray-300">
            <DrawSquareOutline/>
            Editor
        </h5>


    </DrawerHandle>

    <Button color="cyan" size="sm" class="w-fit mt-13">
        <DownloadOutline/>
        Download
    </Button>

    <Accordion class="mt-5">
        <!-- ABOUT SECTION -->
        <AccordionItem id="about" open={true}>
            {#snippet header()}
                <div class="flex items-center gap-2">
                    <UsersSolid/>
                    <span>About</span>
                </div>
            {/snippet}
            <div class="grid gap-2 align-items-end grid-auto-rows grid-cols-1 md:grid-cols-4">
                <Label for="name">
                    Name
                    <Input name="name" placeholder="John Doe" required={true} bind:value={info.name}/>
                </Label>

                <Label for="phone">
                    Phone Number
                    <Input name="phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="000-000-000" bind:value={info.phone}/>
                </Label>

                <Label for="email">
                    Email
                    <Input name="email" type="email" placeholder="john.doe@gmail.com" bind:value={info.email}/>
                </Label>

                <Label for="location">
                    Location
                    <Input name="location" placeholder="Seattle, WA" bind:value={info.location}/>
                </Label>
            </div>
        </AccordionItem>

        <!-- EXPERIENCE SECTION -->
        <AccordionItem id="experience">
            {#snippet header()}
                <div class="flex items-center gap-2">
                    <BuildingSolid/>
                    <span>Experience</span>
                </div>
            {/snippet}
            <div>
                <div class="mt-4 grid gap-x-2 gap-y-1 align-items-end grid-auto-rows grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                    <Label for="company" class="md:col-span-2">
                        Company Name
                        <Input name="company" placeholder="Company Name"/>
                    </Label>

                    <Label for="position" class="md:col-span-2">
                        Position
                        <Input name="position" placeholder="Job Position"/>
                    </Label>

                    <Label for="job-start" class="md:col-span-2 lg:col-span-1">
                        Start Date
                        <Datepicker id="job-start"/>
                    </Label>

                    <Label for="job-end" class="md:col-span-2 lg:col-span-1">
                        End Date
                        <Datepicker id="job-end"/>
                    </Label>
                </div>

                <Button class="w-fit mt-3 justify-center" onclick={() => {}}>Add Experience</Button>
            </div>
        </AccordionItem>

        <!-- EDUCATION SECTION -->
        <AccordionItem open={false}>
            {#snippet header()}
                <div class="flex items-center gap-2">
                    <GraduationCapSolid/>
                    <span>Education</span>
                </div>
            {/snippet}

            <div class="flex flex-col space-y-3">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add Education</h3>
                <Label>
                    <span>Institution</span>
                    <Input name="institution" placeholder="University of Fictionville" required/>
                </Label>

                <Label>
                    <span>Degree</span>
                    <Input name="degree" placeholder="B.A. Graphic Design" required/>
                </Label>

                <div class="grid grid-cols-2 gap-1">
                    <Label>
                        <span>Start Date</span>
                        <Datepicker required/>
                    </Label>

                    <div class="gap-2 grid">
                        <Label>
                            <span>End Date</span>
                            <Datepicker/>
                        </Label>

                        <!--                        <Checkbox name="ongoing" class="row-3 col-2" bind:checked={ongoing}>Ongoing</Checkbox>-->
                    </div>
                </div>

                <Button type="submit" value="add-education" class="mt-3">Add Education</Button>
            </div>

            <!--            <Button onclick={addEducation}>Add Education</Button>-->
            <!--            <Button onclick={() => (educationModalOpen=true)}>Add Education</Button>-->
        </AccordionItem>

        <!-- PROJECTS SECTION -->
        <AccordionItem>
            {#snippet header()}
                <div class="flex items-center gap-2">
                    <PaperPlaneSolid/>
                    <span>Projects</span>
                </div>
            {/snippet}

            <p>Projects content</p>
        </AccordionItem>

        <!-- CERTIFICATIONS SECTION -->
        <AccordionItem>
            {#snippet header()}
                <div class="flex items-center gap-2">
                    <PenSolid/>
                    <span>Certifications</span>
                </div>
            {/snippet}

            <p>Cert content</p>
        </AccordionItem>

        <!-- SKILLS SECTION -->
        <AccordionItem open={false}>
            {#snippet header()}
                <div class="flex items-center gap-2">
                    <StarOutline/>
                    <span>Skills</span>
                </div>
            {/snippet}
            <p>Skills content</p>
            <!--&lt;!&ndash;            <div id="skill-list" class="grid gap-1 grid-flow-row bg-red-500 grid-cols-[repeat(auto-fit, minmax(100px, 1fr))] auto-rows-auto">&ndash;&gt;-->
            <!--<div class="flex flex-wrap gap-1">-->
            <!--    {#each data.skills as skill}-->
            <!--        <Button onclick={onSkillItemClick}-->
            <!--                color="alternative"-->
            <!--                class="px-2 py-1">{skill}</Button>-->
            <!--        <Tooltip>Click to remove</Tooltip>-->
            <!--    {/each}-->
            <!--</div>-->

            <!--<div class="flex items-center mt-3">-->
            <!--    <Input name="skill" placeholder="Enter a skill here"/>-->
            <!--    <Button class="ml-1 h-full p-2" onclick={addSkillEntry}>-->
            <!--        <PlusOutline/>-->
            <!--    </Button>-->
            <!--</div>-->
        </AccordionItem>
    </Accordion>
</Drawer>


