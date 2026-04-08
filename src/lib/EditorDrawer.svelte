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
        ButtonGroup,
        Modal,
        Checkbox,
        P,
        Span,
        Alert,
        Textarea, Tabs, TabItem,
        Sidebar, SidebarGroup, SidebarItem, SidebarButton, uiHelpers
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
        UserCircleSolid,
        DownloadOutline,
        MapPinOutline
    } from "flowbite-svelte-icons";

    let {openOnLoad = false, info, addToast} = $props();
    let open = $state(false);


    import { on } from "svelte/events";

    on(document, "keydown", e => {
        // if ([" ", "Enter"].includes(e.key)) {
        // if (e.key === " ") {
        //     e.preventDefault();
            // open = !open;
            // addToast("green", "Successfully added new experience!")
        // }
    });

    on(window, "load", () => {
        if (openOnLoad)
            open = true;
    });


    function addExperience() {
        open = false;
        addToast("green", "Successfully added work experience!");
    }

    const demoSidebarUi = uiHelpers();
    let sidebarOpen = $state(false);
</script>



<Drawer bind:open offset="52px" placement="top" outsideclose={false}
        class="rounded-t-lg dark:text-gray-300 pt-5 pb-14"
        aria-labelledby="drawer-swipe-label">
    <DrawerHandle
            onclick={() => (open = !open)}
            class="h-14 hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-900">

        <h5 id="drawer-swipe-label"
            class="inline-flex items-center gap-2 text-base font-medium text-gray-500 dark:text-gray-300!">
            <DrawSquareOutline/>
            Editor
        </h5>
    </DrawerHandle>

<!--    <Button color="cyan" size="sm" class="w-fit mt-13">-->
<!--        <DownloadOutline/>-->
<!--        Download-->
<!--    </Button>-->


    <Tabs>
        <TabItem title="About" >
            {#snippet titleSlot()}
                <div class="flex items-center gap-2">
                    <UserCircleSolid size="md" />
                    Profile
                </div>
            {/snippet}
            <div class="grid gap-2 align-items-end grid-auto-rows grid-cols-1 md:grid-cols-4">
                <Label for="name">
                    Name
                    <Input name="name" placeholder="John Doe" required={true} bind:value={info.name}/>
                </Label>

                <Label for="phone">
                    Phone Number
                    <Input name="phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="000-000-000"
                           bind:value={info.phone}/>
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
        </TabItem>


        <TabItem title="Work">
            {#snippet titleSlot()}
                <div class="flex items-center gap-2">
                    <BuildingSolid size="md" />
                    Experience
                </div>
            {/snippet}
            <div>
                <div class="mt-4 grid gap-x-3 gap-y-2 align-items-end grid-auto-rows grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                    <Label for="company" class="md:col-span-2">
                        Company
                        <Input name="company" placeholder="Company Name"/>
                    </Label>

                    <Label for="position" class="md:col-span-2">
                        Position
                        <Input name="position" placeholder="Job Position"/>
                    </Label>

                    <Label for="job-start" class="md:col-span-2 lg:col-span-1">
                        Start Date
                        <Input name="job-start" placeholder="Jan. 2026"/>
                        <!--                        <Datepicker id="job-start"/>-->
                    </Label>

                    <Label for="job-end" class="md:col-span-2 lg:col-span-1">
                        End Date
                        <Input name="job-end" placeholder="Present"/>
                        <!--                        <Datepicker id="job-end"/>-->
                    </Label>

                    <Label for="job-desc" class="col-span-full">
                        Description
                        <Textarea name="job-desc" placeholder="Bulletpoints here."
                                  class="w-full min-h-40"/>
                        <!--                        <Input name="position" placeholder="Job Position"/>-->
                    </Label>
                </div>

                <Button class="w-fit mt-3 justify-center" onclick={addExperience}>Add Experience</Button>
            </div>
        </TabItem>


        <TabItem title="Education">
            {#snippet titleSlot()}
                <div class="flex items-center gap-2">
                    <GraduationCapSolid size="md" />
                    Education
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
        </TabItem>


        <TabItem title="Projects">
            {#snippet titleSlot()}
                <div class="flex items-center gap-2">
                    <PaperPlaneSolid size="md" />
                    Projects
                </div>
            {/snippet}
        </TabItem>


        <TabItem title="Certifications">
            {#snippet titleSlot()}
                <div class="flex items-center gap-2">
                    <StarOutline size="md" />
                    Certifications
                </div>
            {/snippet}
        </TabItem>


        <TabItem title="Skills">
            {#snippet titleSlot()}
                <div class="flex items-center gap-2">
                    <PenSolid size="md" />
                    Skills
                </div>
            {/snippet}
        </TabItem>
    </Tabs>
</Drawer>


