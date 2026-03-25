<script lang="ts">
    import { Drawer, DrawerHandle, Input, Label, Accordion, AccordionItem, P } from "flowbite-svelte";
    import {
        AdjustmentsVerticalSolid,
        ChartPieSolid,
        ClipboardListSolid,
        GridPlusSolid,
        ReceiptSolid,
        TableRowSolid,
        UsersSolid,
        InfoCircleSolid,
        UserAddOutline,
        CalendarEditSolid,
        PhoneSolid,
        DrawSquareOutline,
        ArrowUpDownOutline
    } from "flowbite-svelte-icons";

    let open = $state(false);
    let widgets = [
        {icon: ChartPieSolid, name: "Chart"},
        {icon: TableRowSolid, name: "Table"},
        {icon: ClipboardListSolid, name: "List"},
        {icon: ReceiptSolid, name: "Ticket"},
        {icon: UsersSolid, name: "Users"},
        {icon: AdjustmentsVerticalSolid, name: "Custom"}
    ];

    setTimeout(() => {
        open = !open
    }, 100);
</script>


<Drawer bind:open offset="52px" placement="bottom" outsideclose={false} class="rounded-t-lg"
        aria-labelledby="drawer-swipe-label">
    <DrawerHandle onclick={() => (open = !open)} class="h-14hover:bg-gray-50 dark:hover:bg-gray-700">
        <h5 id="drawer-swipe-label"
            class="inline-flex items-center gap-2 text-base font-medium text-gray-500 dark:text-gray-400">
            <DrawSquareOutline/>
<!--            <ArrowUpDownOutline />-->
<!--            Edit Info-->
            Editor
        </h5>
    </DrawerHandle>

    <form class="mt-16">
        <section>
            <h3 class="block w-full break-after-auto text-xl font-light mb-1 uppercase tracking-wider underline underline-offset-3 decoration-0">About</h3>
            <div class="">
                <Label for="name" class="my-3">
                    <span class="mb-1">
                        <UsersSolid class="inline align-middle"/>
                        Name
                    </span>
                    <Input name="name" placeholder="John Doe" class=""/>
                </Label>

                <Label for="phone" class="my-3">
                    <span class="mb-1">
                        <PhoneSolid class="inline align-middle"/>
                        Phone Number
                    </span>
                    <Input name="phone" placeholder="000-000-000" class=""/>
                </Label>
            </div>
        </section>

    </form>

    <!--    <div class="mt-16 grid grid-cols-3 gap-4 lg:grid-cols-4">-->
    <!--        {#each widgets as {icon: Icon, name}}-->
    <!--            <div class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">-->
    <!--                <div class="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">-->
    <!--                    <Icon class="inline h-5 w-5 text-gray-500 dark:text-gray-400"/>-->
    <!--                </div>-->

    <!--                <div class="text-center font-medium text-gray-500 dark:text-gray-400">{name}</div>-->
    <!--            </div>-->
    <!--        {/each}-->
    <!--    </div>-->
</Drawer>


<!--<div class="text-center">-->
<!--    <Button onclick={() => (open4 = true)}>Show drawer form</Button>-->
<!--    <CardPlaceholder size="2xl" class="mt-6" />-->
<!--</div>-->
<!--<Drawer form bind:open={open4} classes={{ form: "space-y-6 mb-6" }}>-->
<!--    <h5 class="mb-6 inline-flex items-center text-base font-semibold text-gray-500 uppercase dark:text-gray-400">-->
<!--        <InfoCircleSolid class="me-2.5 h-5 w-5" />New event-->
<!--    </h5>-->
<!--    <Label>-->
<!--        Title-->
<!--        <Input name="title" class="mt-2" required placeholder="Apple Keynote" />-->
<!--    </Label>-->
<!--    <Label>-->
<!--        Description-->
<!--        <Textarea placeholder="Write event description..." rows={4} name="message" class="mt-2 w-full font-normal" />-->
<!--    </Label>-->
<!--    <Input name="date" required type="date" />-->
<!--    <Input placeholder="Add guest email">-->
<!--        {#snippet right()}-->
<!--            <Button size="xs">-->
<!--                <UserAddOutline class="me-1.5 h-4 w-4 text-white" />Add-->
<!--            </Button>-->
<!--        {/snippet}-->
<!--    </Input>-->
<!--    <div class="mb-4 flex">-->
<!--        <Avatar src="/images/profile-picture-1.webp" stacked size="sm" />-->
<!--        <Avatar src="/images/profile-picture-2.webp" stacked size="sm" />-->
<!--        <Avatar src="/images/profile-picture-3.webp" stacked size="sm" />-->
<!--        <Avatar src="/images/profile-picture-4.webp" stacked size="sm" />-->
<!--    </div>-->
<!--    <Button type="submit" class="w-full">-->
<!--        <CalendarEditSolid class="me-2.5 h-3.5 w-3.5 text-white" /> Create event-->
<!--    </Button>-->
<!--</Drawer>-->