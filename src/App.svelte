<script lang="ts">
    // import ResumePreview from "./lib/components/ResumePreview.svelte";
    // import EditorModal from "./lib/components/EditorModal.svelte";

    import EditDialog from "./lib/components/EditDialog.svelte";

    // function importConfig() {
    //     alert("Import");
    // }
    //
    // function exportConfig() {
    //     alert("Export");
    // }
    //
    // function downloadPDF() {
    //     const el: HTMLElement = document.querySelector("main")!;
    //     html2canvas(el).then(canvas => {
    //         console.log(canvas);
    //         document.body.append(canvas);
    //         html2pdf(canvas, {
    //             filename: "Resume.pdf",
    //             jsPDF: {
    //                 unit: "in",
    //                 format: "letter",
    //                 orientation: "portrait"
    //             }
    //         });
    //     });
    // }

    import { Tabs } from "bits-ui";
    import { Airplane } from "phosphor-svelte";
</script>


<EditDialog />


<!--<EditorModal />-->
<!--<ResumePreview/>-->


<!--<div class="pt-6">-->
<!--    <Tabs.Root value="profile"-->
<!--               class="rounded-card border-muted bg-background shadow-card w-100 border p-3">-->
<!--        <Tabs.List-->
<!--                class="rounded-9px bg-dark-10 shadow-mini-inset dark:bg-background grid w-full grid-cols-2 gap-1 p-1 text-sm font-semibold leading-[0.01em] dark:border dark:border-neutral-600/30"-->
<!--        >-->
<!--            <Tabs.Trigger value="profile"-->
<!--                          class="data-[state=active]:shadow-mini dark:data-[state=active]:bg-muted h-8 rounded-[7px] bg-transparent py-2 data-[state=active]:bg-white"-->
<!--            >Profile-->
<!--            </Tabs.Trigger>-->
<!--            <Tabs.Trigger value="work"-->
<!--                          class="data-[state=active]:shadow-mini dark:data-[state=active]:bg-muted h-8 rounded-[7px] bg-transparent py-2 data-[state=active]:bg-white"-->
<!--            >Work-->
<!--            </Tabs.Trigger>-->
<!--            <Tabs.Trigger value="education"-->
<!--                          class="data-[state=active]:shadow-mini dark:data-[state=active]:bg-muted h-8 rounded-[7px] bg-transparent py-2 data-[state=active]:bg-white"-->
<!--            >Education-->
<!--            </Tabs.Trigger>-->
<!--        </Tabs.List>-->

<!--        <Tabs.Content-->
<!--                value="profile"-->
<!--                class="select-none pt-3">-->
<!--            <h4>Profile</h4>-->
<!--        </Tabs.Content>-->
<!--        <Tabs.Content-->
<!--                value="work"-->
<!--                class="select-none pt-3">-->
<!--            <h4>Work Experience</h4>-->
<!--        </Tabs.Content>-->
<!--        <Tabs.Content-->
<!--                value="education"-->
<!--                class="select-none pt-3">-->
<!--            <h4>Education</h4>-->
<!--        </Tabs.Content>-->
<!--    </Tabs.Root>-->
<!--</div>-->


