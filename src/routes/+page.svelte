<script lang="ts">
    import AboutSection from "./AboutSection.svelte";
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
        ArrowUpDownOutline,
        EnvelopeOutline, EnvelopeOpenOutline, EnvelopeSolid
    } from "flowbite-svelte-icons";
    import type { Attachment } from "svelte/attachments";
    import EducationSection from "./EducationSection.svelte";
    // import InputArea from "../components/InputArea.svelte";

    let open = $state(false);
    // let widgets = [
    //     {icon: ChartPieSolid, name: "Chart"},
    //     {icon: TableRowSolid, name: "Table"},
    //     {icon: ClipboardListSolid, name: "List"},
    //     {icon: ReceiptSolid, name: "Ticket"},
    //     {icon: UsersSolid, name: "Users"},
    //     {icon: AdjustmentsVerticalSolid, name: "Custom"}
    // ];

    setTimeout(() => {
        open = !open
    }, 100);

    const getIcon: Attachment = (iconEl) => {
        console.log(iconEl);
        return () => {
            // <iconEl />
        }
    }
</script>


<Drawer bind:open offset="52px" placement="bottom" outsideclose={false} class="rounded-t-lg"
        aria-labelledby="drawer-swipe-label">
    <DrawerHandle onclick={() => (open = !open)} class="h-14 hover:bg-gray-50">
        <h5 id="drawer-swipe-label"
            class="inline-flex items-center gap-2 text-base font-medium text-gray-500">
            <DrawSquareOutline/>
            Editor
        </h5>
    </DrawerHandle>

    <form class="mt-16">
        <AboutSection/>
        <EducationSection/>
    </form>
</Drawer>


<style>
    @import "tailwindcss";

    form :global(h3) {
        @apply block w-full break-after-auto text-xl font-light mb-1 uppercase tracking-wider underline underline-offset-3 decoration-0;
    }

    form :global(section) {
        margin: 20px 0;
    }
</style>