<!--<script>-->
<!--    import {Label, Input, Datepicker, Button} from "flowbite-svelte";-->
<!--    import {BuildingSolid, PlusOutline} from "flowbite-svelte-icons";-->

<!--    let {-->
<!--        workExperience = $bindable()-->
<!--    } = $props();-->

<!--    let experienceCount = $state(1);-->

<!--    function addExperienceClick(e) {-->
<!--        const form = e.target.parentElement;-->
<!--        console.log(form);-->
<!--    }-->
<!--</script>-->

<!--<section>-->
<!--    <span class="flex">-->
<!--        <BuildingSolid class="mr-1 h-auto" />-->
<!--        <h3>Experience</h3>-->
<!--    </span>-->
<!--    <form class="mt-1">-->
<!--        <h5 class="text-lg font-lighter">Experience 1</h5>-->

<!--        <div class="grid gap-x-2 gap-y-1 align-items-end grid-auto-rows grid-cols-1 md:grid-cols-4 lg:grid-cols-6">-->
<!--            <Label for="company" class="md:col-span-2">-->
<!--                Company Name-->
<!--                <Input name="company" placeholder="Oracle"/>-->
<!--            </Label>-->

<!--            <Label for="position" class="md:col-span-2">-->
<!--                Position-->
<!--                <Input name="position" placeholder="Senior DevOps Engineer"/>-->
<!--            </Label>-->

<!--            <Label for="start-time" class="md:col-span-2 lg:col-span-1">-->
<!--                Start Date-->
<!--                <Datepicker/>-->
<!--            </Label>-->

<!--            <Label for="end-time" class="md:col-span-2 lg:col-span-1">-->
<!--                End Date-->
<!--                <Datepicker/>-->
<!--            </Label>-->

<!--&lt;!&ndash;            <Button pill class="p-2 w-min h-min">&ndash;&gt;-->
<!--&lt;!&ndash;                <PlusOutline class="w-6 h-6"/>&ndash;&gt;-->
<!--&lt;!&ndash;            </Button>&ndash;&gt;-->
<!--        </div>-->

<!--        <Button class="w-fit mt-3 justify-center" onclick={addExperienceClick}>Add Experience</Button>-->
<!--    </form>-->

<!--</section>-->
