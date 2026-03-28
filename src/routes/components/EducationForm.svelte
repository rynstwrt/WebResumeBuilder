<!--<script lang="ts">-->
<!--    import { Card, Label, Input, Button, Checkbox } from "flowbite-svelte"-->
<!--</script>-->


<!--<Card>-->
<!--    <form>-->
<!--        <Label>-->
<!--            <span>Institution</span>-->
<!--            <Input name="name" placeholder="University of Fictionville" />-->
<!--        </Label>-->
<!--    </form>-->
<!--</Card>-->

<script lang="ts">
    import { Modal, Datepicker, Card, Label, Input, Button, Checkbox } from "flowbite-svelte"
    import { data } from "../data.svelte.ts";

    // let data.educationModalOpen = $state(false);
    let open = $state(false);
    let error = $state("");

    let institution = $state("");
    let startDate = $state<Date | undefined>(undefined);
    let endDate = $state<Date | undefined>(undefined);
    let ongoing = $state(false);

    function onaction({action, data}: { action: string; data: FormData }) {
        console.log(data.get("institution"));
    }
</script>


<!--<Modal form bind:open={open} size="xs" {onaction}>-->
<!--    <div class="flex flex-col space-y-3">-->
<!--        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add Education</h3>-->
<!--        {#if error}-->
<!--            <Label color="red">{error}</Label>-->
<!--        {/if}-->
<!--        <Label>-->
<!--            <span>Institution</span>-->
<!--            <Input bind:value={institution} name="institution" placeholder="University of Fictionville" required/>-->
<!--        </Label>-->

<!--        <Label>-->
<!--            <span>Degree</span>-->
<!--            <Input name="degree" placeholder="B.A. Graphic Design" required/>-->
<!--        </Label>-->

<!--        <div class="grid grid-cols-2 gap-1">-->
<!--            <Label>-->
<!--                <span>Start Date</span>-->
<!--&lt;!&ndash;                <Select>&ndash;&gt;-->
<!--&lt;!&ndash;                    <option>January</option>&ndash;&gt;-->
<!--&lt;!&ndash;                    <option>Febuary</option>&ndash;&gt;-->
<!--&lt;!&ndash;                    <option>January</option>&ndash;&gt;-->
<!--&lt;!&ndash;                    <option>January</option>&ndash;&gt;-->
<!--&lt;!&ndash;                    <option>January</option>&ndash;&gt;-->
<!--&lt;!&ndash;                </Select>&ndash;&gt;-->
<!--                <Datepicker required bind:value={startDate}/>-->
<!--            </Label>-->

<!--            <div class="gap-2 grid">-->
<!--                <Label>-->
<!--                    <span>End Date</span>-->
<!--                    <Datepicker disabled={ongoing} bind:value={endDate}/>-->
<!--                </Label>-->

<!--                <Checkbox name="ongoing" class="row-3 col-2" bind:checked={ongoing}>Ongoing</Checkbox>-->
<!--            </div>-->
<!--        </div>-->

<!--        <Button type="submit" value="add-education" class="mt-3">Add Education</Button>-->
<!--    </div>-->
<!--</Modal>-->

<Card onclick={() => (open = true)}>
    <h3>{institution}</h3>
</Card>