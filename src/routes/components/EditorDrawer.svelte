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
    import { data } from "../data.svelte.ts";

    let open = $state(false);

    import { Label, Input, Datepicker, Button } from "flowbite-svelte";
    import { DrawSquareOutline, EnvelopeSolid, PhoneSolid, UsersSolid, MapPinSolid, BuildingSolid, PlusOutline } from "flowbite-svelte-icons";

    let experienceCount = $state(1);

    function addExperienceClick(e) {
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
        console.log(entry, entry?.value);

        data.workExperience.push(entry);
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
            <span class="flex mb-1">
                <BuildingSolid class="mr-1 h-auto"/>
                <h3>Experience</h3>
            </span>
            <div class="grid gap-1 grid-auto-rows grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                {#each data.workExperience as job, idx}
<!--                    <h4 class="text-lg font-light tracking-wide">Experience #{idx + 1}</h4>-->
                    <div class="border-1 border-gray-300 p-2 ">
                        <h5>{job.company}</h5>
                        <h6>{job.position}</h6>
                        <p>{job.start} - {job.end}</p>
                    </div>
                {/each}
            </div>

            <div>
                <div class="mt-4 grid gap-x-2 gap-y-1 align-items-end grid-auto-rows grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                    <Label for="company" class="md:col-span-2">
                        Company Name
                        <Input name="company" placeholder="Company Name"}/>
                    </Label>

                    <Label for="position" class="md:col-span-2">
                        Position
                        <Input name="position" placeholder="Job Position"}/>
                    </Label>

                    <Label for="job-start" class="md:col-span-2 lg:col-span-1">
                        Start Date
                        <Datepicker name="job-start"/>
                    </Label>

                    <Label for="job-end" class="md:col-span-2 lg:col-span-1">
                        End Date
                        <Datepicker name="job-end"/>
                    </Label>
                </div>

                <Button class="w-fit mt-3 justify-center" onclick={addExperienceClick}>Add Experience</Button>
            </div>
        </section>
    </div>
</Drawer>


<style>
    @import "tailwindcss";

    h3 {
        /*@apply block w-full break-after-auto text-xl font-light mb-1 uppercase tracking-wider underline underline-offset-3 decoration-0;*/
        @apply block text-lg font-light uppercase tracking-wider;
    }

    section {
        margin: 30px 0;
    }
</style>