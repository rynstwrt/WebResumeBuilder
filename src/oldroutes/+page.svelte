<script lang="ts">
    import EditorDrawer from "./components/EditorDrawer.svelte";

    import { resumeInfoState as info } from "./data.svelte";

    // async function createPDF

    // import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
    // async function createPDF() {
    //     const doc = await PDFDocument.create();
    //     const helvetica = await doc.embedFont(StandardFonts.Helvetica);
    //
    //     const page = doc.addPage();
    //     const {width, height} = page.getSize();
    //     const fontSize = 30;
    //
    //     page.drawText("Creating pdfs!!!", {
    //         x: 40,
    //         y: height - 4 * fontSize,
    //         size: fontSize,
    //         font: helvetica,
    //         color: rgb(1, 0.5, 0.5)
    //     })
    //
    //     // const pdfBytes: Uint8Array = await doc.save({});
    //     const pdfBytes = await doc.saveAsBase64();
    //     console.log(pdfBytes);
    //
    //     // const file = new Blob([pdfBytes], {type: "application/pdf"});
    //     // const fileURL = URL.createObjectURL(file);
    //     console.log(`data:application/pdf;base64,${pdfBytes.toString()}`);
    // }
    //
    // createPDF();
</script>


<EditorDrawer />


<main>
    <h1>{info.name}</h1>
    <p>{info.email} | {info.phone} | {info.location}</p>
</main>


<style>
</style>