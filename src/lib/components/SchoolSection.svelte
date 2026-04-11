<script lang="ts">
    import { Button, Card, CloseButton, Input, Label, Modal, Textarea } from "flowbite-svelte";
    import { CirclePlusOutline } from "flowbite-svelte-icons";

    let {info} = $props();

    let open = $state(true);
</script>


<Modal bind:open={open} outsideclose={false} form size="xs">
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
</Modal>


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
    <Button size="md" onclick={() => open = true}>
        <CirclePlusOutline size="sm" class="mr-1"/>
        Add Education
    </Button>
    <!--                    <h3>Education</h3>-->
    <!--    <h4 class="text-md text-gray-300 font-normal mb-1">Education:</h4>-->
<!--        <div class="mb-6 flex flex-col gap-y-2">-->
<!--            {#each info.education as school, i}-->
<!--                <Card class="py-2 px-3 flex flex-col relative" size="md">-->
<!--                    <CloseButton size="md"-->
<!--                                 class="self-end absolute top-0 right-0"-->
<!--                                 onclick={() => info.education.splice(i, 1)}/>-->
<!--                    <h4 class="text-md font-normal">{school.school}</h4>-->
<!--                    <h4 class="text-sm font-light">{school.diploma}</h4>-->
<!--                    <p class="text-sm font-thin">{school.dates}</p>-->
<!--                    {#if school.bulletpoints}-->
<!--                        <ul class="list-disc pl-[1.5ch] mt-0.5">-->
<!--                            {#each school.bulletpoints as bulletpoint}-->
<!--                                <li class="text-sm font-normal">{bulletpoint}</li>-->
<!--                            {/each}-->
<!--                        </ul>-->
<!--                    {/if}-->
<!--                </Card>-->
<!--            {/each}-->
<!--        </div>-->

    <!--    <div class="grid grid-cols-2 gap-2">-->
    <!--        <div>-->
    <!--            <Label for="school-name-input">Name</Label>-->
    <!--            <Input name="school-name-input" placeholder="The University of Texas"/>-->
    <!--        </div>-->
    <!--        <div>-->
    <!--            <Label for="school-dates-input">Dates</Label>-->
    <!--            <Input name="school-dates-input" placeholder="Aug. 2019 - Dec. 2025"/>-->
    <!--        </div>-->
    <!--        <div class="col-span-full">-->
    <!--            <Label for="school-major">Major</Label>-->
    <!--            <Input name="school-major" placeholder="B.S. Computer Science"/>-->
    <!--        </div>-->
    <!--        <div class="w-full col-span-full">-->
    <!--            <Label for="school-bullet-input">Bulletpoints</Label>-->
    <!--            <Textarea rows={3}-->
    <!--                      name="school-bullet-input"-->
    <!--                      class="w-full"-->
    <!--                      placeholder="Type bulletpoints, one per line..."/>-->
    <!--        </div>-->
    <!--        <Button size="sm" class="w-fit font-normal">-->
    <!--            <CirclePlusOutline size="sm" class="mr-1"/>-->
    <!--            Add-->
    <!--        </Button>-->
    <!--    </div>-->
</div>