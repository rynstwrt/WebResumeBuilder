<script lang="ts">
    import { Button } from "flowbite-svelte";

    import { DownloadOutline, FileImportOutline, FileExportOutline } from "flowbite-svelte-icons";

    let {importConfig, exportConfig, downloadPDF} = $props();
</script>


{#snippet createButton(Icon, text = "", classes = "", size, onclick = () => {
})}
    <Button {size}
            class="flex items-center h-fit {classes}"
            {onclick}>
        <Icon {size} class="me-1"/>
        {text}
    </Button>
{/snippet}


<div class="grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-1">
    {@render createButton(FileImportOutline, "Import Config", "bg-secondary-500!", "md", importConfig)}

    {@render createButton(FileExportOutline, "Export Config", "bg-secondary-500!", "md", exportConfig)}

    {@render createButton(DownloadOutline, "Download", "col-span-full", "lg", downloadPDF)}
</div>


