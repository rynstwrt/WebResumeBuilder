<!--SECTIONS:-->
<!-- - About-->
<!-- - Education-->
<!-- - Experience-->
<!-- - Projects-->
<!-- - Certifications-->
<!-- - Skills-->
<!-- - Links-->


<script lang="ts">
    import { Drawer, DrawerHandle } from "flowbite-svelte";
    import {
        DrawSquareOutline,
    } from "flowbite-svelte-icons";
    import { data } from "../data.svelte.ts";
    // import AboutSection from "./AboutSection.svelte";
    // import EducationSection from "./EducationSection.svelte";
    // import ExperienceSection from "./ExperienceSection.svelte";

    let open = $state(false);

    import { EnvelopeSolid, PhoneSolid, UsersSolid, MapPinSolid } from "flowbite-svelte-icons";
    //
    // let {
    //     name = $bindable(),
    //     phone = $bindable(),
    //     email = $bindable(),
    //     location = $bindable()
    // } = $props();

    import { Label, Input, Datepicker, Button } from "flowbite-svelte";
    import { BuildingSolid, PlusOutline } from "flowbite-svelte-icons";

    // let {
    //     workExperience = $bindable()
    // } = $props();

    let experienceCount = $state(1);

    function addExperienceClick(e) {
        const form = e.target.parentElement;
        console.log(form);
    }

    setTimeout(() => {
        open = !open
    }, 10);

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



    <div class="mt-16">
        <section id="about">
            <span class="flex">
                <UsersSolid class="mr-1 h-auto"/>
                <h3>About</h3>
            </span>
            <div class="grid gap-2 align-items-end grid-auto-rows grid-cols-1 md:grid-cols-4">
                <Label for="name">
                    Name
                    <Input name="name" placeholder="John Doe" required={true} bind:value={data.name}/>
                </Label>

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
        </section>



        <section id="experience">
            <span class="flex">
                <BuildingSolid class="mr-1 h-auto"/>
                <h3>Experience</h3>
            </span>
            <div class="mt-1">
                <h5 class="text-lg font-lighter">Experience 1</h5>

                <div class="grid gap-x-2 gap-y-1 align-items-end grid-auto-rows grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                    <Label for="company" class="md:col-span-2">
                        Company Name
                        <Input name="company" placeholder="Oracle"/>
                    </Label>

                    <Label for="position" class="md:col-span-2">
                        Position
                        <Input name="position" placeholder="Senior DevOps Engineer"/>
                    </Label>

                    <Label for="start-time" class="md:col-span-2 lg:col-span-1">
                        Start Date
                        <Datepicker/>
                    </Label>

                    <Label for="end-time" class="md:col-span-2 lg:col-span-1">
                        End Date
                        <Datepicker/>
                    </Label>

                    <!--            <Button pill class="p-2 w-min h-min">-->
                    <!--                <PlusOutline class="w-6 h-6"/>-->
                    <!--            </Button>-->
                </div>

                <Button class="w-fit mt-3 justify-center" onclick={addExperienceClick}>Add Experience</Button>
            </div>
        </section>
    </div>
</Drawer>


<style>
    @import "tailwindcss";

    form :global(h3) {
        /*@apply block w-full break-after-auto text-xl font-light mb-1 uppercase tracking-wider underline underline-offset-3 decoration-0;*/
        @apply block text-lg font-light uppercase tracking-wider;
    }

    form :global(section) {
        margin: 30px 0;
    }
</style>