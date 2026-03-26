<script>
    import {Label, Input, Datepicker} from "flowbite-svelte";
    import {GraduationCapSolid} from "flowbite-svelte-icons";
</script>

<section>
    <h3>Education</h3>
    <form>
        <Label for="institution" class="my-3">
            <span class="mb-1">
                <GraduationCapSolid class="inline align-middle"/>
                Institution Name
            </span>
            <Input name="institution" placeholder="University of Fictionville"/>
        </Label>

        <Label for="start-year" class="my-3">
            <span class="mb-1">
                <GraduationCapSolid class="inline align-middle"/>
                Start Date
            </span>
            <Datepicker id="start-year" dateFormat={'month-year'} />
        </Label>

        <Label for="end-year" class="my-3">
            <span class="mb-1">
                <GraduationCapSolid class="inline align-middle"/>
                Graduation Date
            </span>
            <Datepicker id="end-year"/>
        </Label>
    </form>
</section>
