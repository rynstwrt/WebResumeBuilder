<script lang="ts">
    import type { Snapshot } from '@sveltejs/kit';

    import {
        Button,
        Label,
        Input,
        Textarea,
        Helper
    } from "flowbite-svelte";

    import { PlusOutline } from "flowbite-svelte-icons";

    import { projectsData } from "../../ResumeData.svelte.ts";

    let formData = $state({
        name: "",
        links: "",
        bulletpoints: ""
    });

    export const snapshot: Snapshot<typeof formData> = {
        capture: () => ({...formData}),
        restore: (value) => Object.assign(formData, value)
    };
</script>


<div class="grid grid-cols-1 *:col-span-full gap-y-2.5">
    <div>
        <Label for="project-name" class="mb-2 block">Project Name</Label>
        <Input name="project-name"
               placeholder="My Awesome Project"
               bind:value={formData.name}/>
    </div>

    <div>
        <Label for="project-links" class="mb-2 block">Project Links</Label>
        <Textarea name="project-links"
                  rows={2}
                  placeholder="https://example.com"
                  class="w-full"
                  bind:value={formData.links}/>
        <Helper class="leading-2">Add links for your project, one per line.</Helper>
    </div>

    <div>
        <Label for="project-bulletpoints" class="mb-2 block">Project Bulletpoints</Label>
        <Textarea name="project-bulletpoints"
                  rows={4}
                  placeholder="Created with Svelte, TailwindCSS, and Flowbite."
                  class="w-full"
                  bind:value={formData.bulletpoints}/>
        <Helper class="leading-2">Add bulletpoint notes for your project, one per line.</Helper>
    </div>

    <Button class="flex items-center" onclick={() => {
        projectsData.push(formData);
    }}>
        <PlusOutline class="me-1"/>
        Add Project
    </Button>
</div>