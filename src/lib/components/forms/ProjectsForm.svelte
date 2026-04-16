<script lang="ts">
    import {
        Button,
        Label,
        Input,
        Textarea,
        Helper
    } from "flowbite-svelte";

    import { PlusOutline } from "flowbite-svelte-icons";

    import { projects } from "../../DataHandler.svelte.ts";

    let name = $state("");
    let links = $state("");
    let bulletpoints = $state("");

    function addProject() {
        projects.push({
            name: name,
            links: links.trim().split("\n"),
            bulletpoints: bulletpoints.trim().replaceAll(/^-\s/gm, "").split("\n")
        });
    }
</script>

<div class="grid md:grid-cols-2 gap-1">
    {#each projects as project}
        <div class="bg-gray-700 p-2 rounded-sm">
            <h3 class="text-base uppercase">{project.name}</h3>

            {#each project.links as link}
                <a class="leading-4 text-sm block underline" href={link}>{link}</a>
            {/each}
            {#if project.bulletpoints.length}
                <ul class="mt-0.5 text-xs list-disc pl-[2ch]">
                    {#each project.bulletpoints as bp}
                        <li>{bp}</li>
                    {/each}
                </ul>
            {/if}
        </div>
    {/each}
</div>


<div class="grid grid-cols-1 *:col-span-full gap-y-2">
    <div>
        <Label for="project-name" class="mb-2 block">Project Name</Label>
        <Input name="project-name"
               placeholder="My Awesome Project"
               bind:value={name}/>
    </div>

    <div>
        <Label for="project-links" class="mb-2 block">Project Links</Label>
        <Textarea name="project-links"
                  rows={2}
                  placeholder="https://example.com"
                  class="w-full"
                  bind:value={links}/>
<!--        <Helper class="leading-1">Add links for your project, one per line.</Helper>-->
    </div>

    <div>
        <Label for="project-bulletpoints" class="mb-2 block">Project Bulletpoints</Label>
        <Textarea name="project-bulletpoints"
                  rows={4}
                  placeholder="- Example bulletpoint."
                  class="w-full"
                  bind:value={bulletpoints}/>
<!--        <Helper class="leading-1">Add bulletpoint notes for your project, one per line.</Helper>-->
    </div>

    <Button class="flex items-center" onclick={addProject}>
        <PlusOutline class="me-1"/>
        Add Project
    </Button>
</div>