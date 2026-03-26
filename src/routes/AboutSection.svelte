<script>
    import {Input, Label} from "flowbite-svelte";
    import {EnvelopeSolid, PhoneSolid, UsersSolid} from "flowbite-svelte-icons";
</script>

<section>
    <h3>About</h3>
    <Label for="name" class="my-3">
                <span class="mb-1">
                    <UsersSolid class="inline align-middle"/>
                    Name
                </span>
        <Input name="name" placeholder="John Doe" required={true}/>
    </Label>

    <Label for="phone" class="my-3">
                <span class="mb-1">
                    <PhoneSolid class="inline align-middle"/>
                    Phone Number
                </span>
        <Input name="phone" type="tel" placeholder="000-000-000"/>
    </Label>

    <Label for="email" class="my-3">
                <span class="mb-1">
                    <EnvelopeSolid class="inline align-middle"/>
                    Email
                </span>
        <Input name="email" type="email" placeholder="john.doe@gmail.com"/>
    </Label>

</section>