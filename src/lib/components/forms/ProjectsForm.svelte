<script lang="ts">
    let {open = $bindable()} = $props();

    import {
        TextEditor,
        ToolbarRowWrapper,
        AlignmentButtonGroup,
        CharacterCount,
        DetailsButtonGroup,
        Divider,
        EditableButton,
        ExportButtonGroup,
        FormatButtonGroup,
        HeadingButtonGroup,
        ImageButtonGroup,
        InvisibleButtonGroup,
        LayoutButtonGroup,
        ListButtonGroup,
        SourceButtonGroup,
        TableButtonGroup1,
        TableButtonGroup2,
        TaskListButtonGroup,
        UndoRedoButtonGroup,
        YoutubeButtonGroup
    } from "@flowbite-svelte-plugins/texteditor";

    import { Button } from "flowbite-svelte";

    import type { Editor } from "@tiptap/core";
</script>