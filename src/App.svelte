<script lang="ts">
    import ResumePreview from "./lib/components/ResumePreview.svelte";

    import EditorModal from "./lib/components/EditorModal.svelte";

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


<EditorModal />

<ResumePreview />

