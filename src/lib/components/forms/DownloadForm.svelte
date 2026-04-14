<script lang="ts">
    import { Button } from "flowbite-svelte";

    import { DownloadOutline, FileImportOutline, FileExportOutline } from "flowbite-svelte-icons";


    function onDownloadBtnClick() {
        alert("Download");
    }

    function onImportBtnClick() {
        alert("Import");
    }

    function onExportBtnClick() {
        alert("Export");
    }
</script>


{#snippet createButton(Icon, text = "", classes = "", size, onclick = () => {})}
    <Button {size}
            class="flex items-center h-fit {classes}"
            {onclick}>
        <Icon {size} class="me-1"/>
        {text}
    </Button>
{/snippet}


<div class="grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-1">
    {@render createButton(FileImportOutline, "Import Config", "bg-secondary-500!", "md", onImportBtnClick)}

    {@render createButton(FileExportOutline, "Export Config", "bg-secondary-500!", "md", onExportBtnClick)}

    {@render createButton(DownloadOutline, "Download", "col-span-full", "lg", onDownloadBtnClick)}
</div>


