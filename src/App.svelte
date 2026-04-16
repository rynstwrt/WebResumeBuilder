<script lang="ts">
    import ResumePreview from "./lib/components/ResumePreview.svelte";
    // import EditorBottomNavModal from "./lib/components/EditorBottomNavModal.svelte";
    // import EditorModal from "./lib/components/EditorModal.svelte";
    // import EditorAccordionModal from "./lib/components/EditorAccordionModal.svelte";
    import EditorTabsModal from "./lib/components/EditorTabsModal.svelte";
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
</script>


<!--<EditorModal />-->
<!--<EditorAccordionModal />-->
<EditorTabsModal/>
<!--<EditorBottomNavModal />-->
<ResumePreview/>