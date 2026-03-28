<script lang="ts">
    import { data } from "../data.svelte.ts";

    let open = $state(false);

    import {
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
        Tooltip
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
        CloseOutline
    } from "flowbite-svelte-icons";

    function addExperienceClick(e: any) {
        const parent = e.target.parentElement;

        const company = parent.querySelector("input[name='company']")?.value;
        const position = parent.querySelector("input[name='position']")?.value;
        const start = parent.querySelector("*[name='job-start']")?.value;
        const end = parent.querySelector("& [name='job-end']");

        const entry = {
            company: company,
            position: position,
            start: start,
            end: end
        }

        data.workExperience.push(entry);
    }

    setTimeout(() => {
        open = !open
    }, 10);

    function addSkillEntry(e: any) {
        const input = e.currentTarget?.parentElement?.querySelector("input[name='skill']");
        const skill: string = input?.value;
        // data.skills.add(skill);
        data.skills.push(skill);
    }
</script>


<Drawer bind:open offset="52px" placement="bottom" outsideclose={false} class="rounded-t-lg"
        aria-labelledby="drawer-swipe-label">
    <DrawerHandle onclick={() => (open = !open)} class="h-14 hover:bg-gray-50">
        <h5 id="drawer-swipe-label"
            class="inline-flex items-center gap-2 text-base font-medium text-gray-500">
            <DrawSquareOutline/>
            Editor
        </h5>
    </DrawerHandle>


    <Accordion class="mt-10">
        <AccordionItem id="about">
            {#snippet header()}
                <div class="flex items-center gap-2">
                    <UsersSolid/>
                    <span>About</span>
                </div>
            {/snippet}
            <div class="grid gap-2 align-items-end grid-auto-rows grid-cols-1 md:grid-cols-4">
                <Label for="name">
                    Name
                    <Input name="name" placeholder="John Doe" required={true} bind:value={data.name}/>
                </Label>
                <!--{@render aboutInputSection("name", "John Doe", true, data.name)}-->

                <Label for="phone">
                    Phone Number
                    <Input name="phone" type="tel" placeholder="000-000-000" bind:value={data.phone}/>
                </Label>

                <Label for="email">
                    Email
                    <Input name="email" type="email" placeholder="john.doe@gmail.com" bind:value={data.email}/>
                </Label>

                <Label for="location">
                    Location
                    <Input name="location" placeholder="Seattle, WA" bind:value={data.location}/>
                </Label>
            </div>
        </AccordionItem>

        <AccordionItem id="experience" open={false}>
            {#snippet header()}
                <div class="flex items-center gap-2">
                    <BuildingSolid/>
                    <span>Experience</span>
                </div>
            {/snippet}
            <div class="grid gap-1 grid-auto-rows grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                {#each data.workExperience as job, idx}
                    <List tag="dl">
                        <div class="py-2 border-1 border-gray-300 p-2">
                            <DescriptionList tag="dt" class="mb-1">{job.company}</DescriptionList>
                            <DescriptionList tag="dd" class="text-sm font-light">{job.position}<br>{job.start}
                                - {job.end || "Present"}</DescriptionList>
                        </div>
                    </List>
                {/each}
            </div>

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

                <Button class="w-fit mt-3 justify-center" onclick={addExperienceClick}>Add Experience</Button>
            </div>
        </AccordionItem>

        <AccordionItem>
            {#snippet header()}
                <div class="flex items-center gap-2">
                    <GraduationCapSolid/>
                    <span>Education</span>
                </div>
            {/snippet}

            <p>Education content</p>
        </AccordionItem>

        <AccordionItem>
            {#snippet header()}
                <div class="flex items-center gap-2">
                    <PaperPlaneSolid/>
                    <span>Projects</span>
                </div>
            {/snippet}

            <p>Projects content</p>
        </AccordionItem>

        <AccordionItem>
            {#snippet header()}
                <div class="flex items-center gap-2">
                    <PenSolid/>
                    <span>Certifications</span>
                </div>
            {/snippet}

            <p>Cert content</p>
        </AccordionItem>

        <AccordionItem open={true}>
            {#snippet header()}
                <div class="flex items-center gap-2">
                    <StarOutline/>
                    <span>Skills</span>
                </div>
            {/snippet}

            <div id="skill-list" class="grid gap-1 grid-flow-col bg-red-500 grid-cols-[repeat(auto-fit, minmax(100px, 1fr))]">
                {#each data.skills as skill}
                    <p class="bg-gray-300 px-1 rounded-xs text-sm block">{skill}</p>
                    <Tooltip>Click to remove</Tooltip>
                {/each}
            </div>

            <div class="flex items-center mt-3">
                <Input name="skill" placeholder="Enter a skill here"/>
                <Button class="ml-1 h-full p-2" onclick={addSkillEntry}>
                    <PlusOutline/>
                </Button>
            </div>
        </AccordionItem>

        <AccordionItem>
            {#snippet header()}
                <div class="flex items-center gap-2">
                    <LinkOutline/>
                    <span>Links</span>
                </div>
            {/snippet}

            <p>Links Content</p>
        </AccordionItem>
    </Accordion>
</Drawer>


<style>
    @import "tailwindcss";

    h3 {
        @apply block text-lg font-light uppercase tracking-wider;
    }

    section {
        margin: 30px 0;
    }
</style>