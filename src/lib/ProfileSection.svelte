<script lang="ts">
    import { CirclePlusOutline } from "flowbite-svelte-icons";
    import { Button, Input, Label } from "flowbite-svelte";

    let {info} = $props();
</script>


<div class="editor-section mt-5">
    <h3>Profile</h3>
    <div class="grid grid-cols-2 gap-3">
        <div>
            <Label for="name" class="mb-0.5 text-sm">Name</Label>
            <Input name="name"
                   size="md"
                   placeholder="John Doe"
                   required
                   bind:value={info.name}/>
        </div>
        <div>
            <Label for="phone" class="mb-0.5 text-sm">Phone Number</Label>
            <Input name="phone"
                   type="tel"
                   placeholder="123-456-7890"
                   required
                   bind:value={info.phone}/>
        </div>
        <div>
            <Label for="email" class="mb-0.5 text-sm">Email</Label>
            <Input name="email"
                   placeholder="john.doe@gmail.com"
                   required
                   bind:value={info.email}/>
        </div>
        <div>
            <Label for="location" class="mb-0.5 text-sm">Location</Label>
            <Input name="location"
                   placeholder="Seattle, WA"
                   required
                   bind:value={info.location}/>
        </div>
    </div>
</div>