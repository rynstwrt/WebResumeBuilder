<script>
    import {Label, Input, Datepicker} from "flowbite-svelte";
    import {BuildingSolid} from "flowbite-svelte-icons";
</script>

<section>
    <h3>Experience</h3>
    <form>
        <Label for="institution" class="my-3">
            <span class="mb-1">
                <BuildingSolid class="inline align-middle"/>
                Company Name
            </span>
            <Input name="institution" placeholder="University of Fictionville"/>
        </Label>

        <Label for="start-year" class="my-3">
            <span class="mb-1">
                <BuildingSolid class="inline align-middle"/>
                Start Date
            </span>
            <Datepicker />
        </Label>

        <Label for="end-year" class="my-3">
            <span class="mb-1">
                <BuildingSolid class="inline align-middle"/>
                End Date
            </span>
            <Datepicker />
        </Label>
    </form>
</section>
