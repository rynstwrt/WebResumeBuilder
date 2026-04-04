<script lang="ts">
    import { data } from "../data.svelte.ts";

    import EducationCard from "./EducationCard.svelte";

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
        CloseOutline
    } from "flowbite-svelte-icons";

    let open = $state(false);
    setTimeout(() => {
        open = !open
    }, 10);
    let educationModalOpen = $state(false);
    let error = $state("");
    let ongoing = $state(false);

    function onaction() {

    }

    function addExperienceClick(e: any) {
        const parent = e.target.parentElement;

        const company = parent.querySelector("input[name='company']")?.value;
        const position = parent.querySelector("input[name='position']")?.value;
        const start = parent.querySelector("*[name='job-start']")?.value;
        const end = parent.querySelector("& [name='job-end']");

        const entry = {
            company: company,
            position: position,
            startDate: start,
            endDate: end
        }

        data.workExperience.push(entry);
    }

    function addSkillEntry(e: any) {
        const input = e.currentTarget?.parentElement?.querySelector("input[name='skill']");
        const skill: (string | null) = input?.value;
        if (skill && !data.skills.includes(skill))
            data.skills.push(skill);
    }

    function onSkillItemClick(e: any) {
        const skill = e.currentTarget?.textContent.trim();
        data.skills.splice(data.skills.indexOf(skill), 1)
    }

    function addEducation(e: any) {
        data.education.push({});
    }
</script>


<Drawer bind:open offset="52px" placement="bottom" outsideclose={false} class="rounded-t-lg dark:text-gray-300!"
        aria-labelledby="drawer-swipe-label">
    <DrawerHandle onclick={() => (open = !open)} class="h-14 hover:bg-gray-50 dark:hover:bg-gray-900">
        <h5 id="drawer-swipe-label"
            class="inline-flex items-center gap-2 text-base font-medium text-gray-500 dark:text-gray-300">
            <DrawSquareOutline/>
            Editor
        </h5>
    </DrawerHandle>


    <Accordion class="mt-10">
        <!-- ABOUT SECTION -->
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

        <!-- EXPERIENCE SECTION -->
        <AccordionItem id="experience" open={true}>
            {#snippet header()}
                <div class="flex items-center gap-2">
                    <BuildingSolid/>
                    <span>Experience</span>
                </div>
            {/snippet}
            <div class="grid gap-1 grid-auto-rows grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                {#each data.workExperience as job}
                    <Card class="p-2">
                        <h3>{job.position}</h3>
                        <h4 class="text-sm">{job.company}</h4>
                        <P class="text-sm font-thin">{job.startDate} - {job.endDate}</P>
                    </Card>
<!--                    <List tag="dl">-->
<!--                        <div class="py-2 border-1 border-gray-300 p-2">-->
<!--                            <DescriptionList tag="dt" class="mb-1">{job.company}</DescriptionList>-->
<!--                            <DescriptionList tag="dd" class="text-sm font-light">{job.position}<br>{job.startDate}{job.endDate || "Present"}</DescriptionList>-->
<!--                        </div>-->
<!--                    </List>-->
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

        <!-- EDUCATION SECTION -->
        <AccordionItem open={false}>
            {#snippet header()}
                <div class="flex items-center gap-2">
                    <GraduationCapSolid/>
                    <span>Education</span>
                </div>
            {/snippet}

            <!--{#each data.education as educationEntry}-->
            <!--    <EducationCard />-->
            <!--{/each}-->
            <!--            <EducationCard/>-->


<!--            <Modal form bind:open={educationModalOpen} size="xs" {onaction}>-->
<!--                <div class="flex flex-col space-y-3">-->
<!--                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add Education</h3>-->
<!--                    {#if error}-->
<!--                        <Label color="red">{error}</Label>-->
<!--                    {/if}-->
<!--                    <Label>-->
<!--                        <span>Institution</span>-->
<!--                        <Input name="institution" placeholder="University of Fictionville" required/>-->
<!--                    </Label>-->

<!--                    <Label>-->
<!--                        <span>Degree</span>-->
<!--                        <Input name="degree" placeholder="B.A. Graphic Design" required/>-->
<!--                    </Label>-->

<!--                    <div class="grid grid-cols-2 gap-1">-->
<!--                        <Label>-->
<!--                            <span>Start Date</span>-->
<!--                            &lt;!&ndash;                <Select>&ndash;&gt;-->
<!--                            &lt;!&ndash;                    <option>January</option>&ndash;&gt;-->
<!--                            &lt;!&ndash;                    <option>Febuary</option>&ndash;&gt;-->
<!--                            &lt;!&ndash;                    <option>January</option>&ndash;&gt;-->
<!--                            &lt;!&ndash;                    <option>January</option>&ndash;&gt;-->
<!--                            &lt;!&ndash;                    <option>January</option>&ndash;&gt;-->
<!--                            &lt;!&ndash;                </Select>&ndash;&gt;-->
<!--                            <Datepicker required/>-->
<!--                        </Label>-->

<!--                        <div class="gap-2 grid">-->
<!--                            <Label>-->
<!--                                <span>End Date</span>-->
<!--                                <Datepicker disabled={ongoing}/>-->
<!--                            </Label>-->

<!--                            <Checkbox name="ongoing" class="row-3 col-2" bind:checked={ongoing}>Ongoing</Checkbox>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <Button type="submit" value="add-education" class="mt-3">Add Education</Button>-->
<!--                </div>-->
<!--            </Modal>-->

            <div class="flex gap-2">
                <EducationCard
                        institution="The University of Texas at Dallas"
                        degree="B.A. Arts, Technology, and Emerging Communication"
                        start="2019"
                />
            </div>


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
                            <Datepicker disabled={ongoing}/>
                        </Label>

                        <Checkbox name="ongoing" class="row-3 col-2" bind:checked={ongoing}>Ongoing</Checkbox>
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

            <!--            <div id="skill-list" class="grid gap-1 grid-flow-row bg-red-500 grid-cols-[repeat(auto-fit, minmax(100px, 1fr))] auto-rows-auto">-->
            <div class="flex flex-wrap gap-1">
                {#each data.skills as skill}
                    <Button onclick={onSkillItemClick}
                            color="alternative"
                            class="px-2 py-1">{skill}</Button>
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
    </Accordion>
</Drawer>