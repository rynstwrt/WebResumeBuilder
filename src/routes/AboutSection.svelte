<script>
    import {Input, Label} from "flowbite-svelte";
    import {EnvelopeSolid, PhoneSolid, UsersSolid, MapPinSolid} from "flowbite-svelte-icons";

    let {name = $bindable(), phone = $bindable(), email = $bindable(), location = $bindable()} = $props();
</script>


<section>
    <h3>About</h3>
    <Label for="name" class="my-3">
                <span class="mb-1">
                    <UsersSolid class="inline align-middle"/>
                    Name
                </span>
        <Input name="name" placeholder="John Doe" required={true} bind:value={name}/>
    </Label>

    <Label for="phone" class="my-3">
                <span class="mb-1">
                    <PhoneSolid class="inline align-middle"/>
                    Phone Number
                </span>
        <Input name="phone" type="tel" placeholder="000-000-000" bind:value={phone}/>
    </Label>

    <Label for="email" class="my-3">
                <span class="mb-1">
                    <EnvelopeSolid class="inline align-middle"/>
                    Email
                </span>
        <Input name="email" type="email" placeholder="john.doe@gmail.com" bind:value={email}/>
    </Label>

    <Label for="location" class="my-3">
                <span class="mb-1">
                    <MapPinSolid class="inline align-middle"/>
                    Location
                </span>
        <Input name="location" placeholder="Seattle, WA" bind:value={location}/>
    </Label>

</section>