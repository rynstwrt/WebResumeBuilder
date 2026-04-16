<script lang="ts">
    import { Dialog, Label, Separator } from "bits-ui";
</script>


<Dialog.Root>
    <Dialog.Trigger>Open Editor</Dialog.Trigger>
    <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
            <Dialog.Title>
                Editor
            </Dialog.Title>
        </Dialog.Content>
    </Dialog.Portal>
</Dialog.Root>