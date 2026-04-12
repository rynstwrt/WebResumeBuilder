<script lang="ts">
    import type { Snapshot } from "@sveltejs/kit";
    import { Label, Input, Textarea, Modal, Button } from "flowbite-svelte";
    import { UserOutline } from "flowbite-svelte-icons";

    let open = $state(true);

    let linksText = $state("");

    import {profileData} from "../ResumeData.svelte.ts";

    $effect(() => {
        profileData.links = linksText.split("\n");
    });

    export const snapshot: Snapshot<typeof profileData> = {
        capture: () => ({...profileData}),
        restore: (value) => Object.assign(profileData, value)
    }
</script>

<Modal bind:open>
    {#snippet header()}
        <span class="flex items-center">
            <UserOutline size="xl" class="me-0.5"/>
            Profile
        </span>
    {/snippet}

    <form class="grid grid-cols-2 gap-3">
        <div>
            <Label for="name">Name</Label>
            <Input name="name"
                   size="md"
                   placeholder="John Doe"
                   required
                   bind:value={profileData.name}/>
        </div>

        <div>
            <Label for="location">Location</Label>
            <Input name="location"
                   placeholder="Seattle, WA"
                   required
                   bind:value={profileData.location}/>
        </div>

        <div>
            <Label for="phone">Phone Number</Label>
            <Input name="phone"
                   type="tel"
                   placeholder="123-456-7890"
                   required
                   bind:value={profileData.phone}/>
        </div>

        <div>
            <Label for="email">Email</Label>
            <Input name="email"
                   placeholder="john.doe@gmail.com"
                   required
                   bind:value={profileData.email}/>
        </div>

        <div class="col-span-full">
            <Label for="links">Links</Label>
            <Textarea name="links"
                      placeholder="Type links here, one per line..."
                      bind:value={linksText}
                      rows={3}
                      class="w-full"/>
        </div>
    </form>
</Modal>

