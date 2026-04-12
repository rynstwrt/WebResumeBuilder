<script lang="ts">
    import { projectsHTML } from "../../ResumeData.svelte.ts";
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

    const content = `<p>Flowbite-Svelte is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p>
    <p>Here is an example of a js block:</p><pre><code class="language-javascript">for (var i=1; i <= 20; i++)
{
  if (i % 15 == 0)
    console.log("FizzBuzz");
  else if (i % 3 == 0)
    console.log("Fizz");
  else if (i % 5 == 0)
    console.log("Buzz");
  else
    console.log(i);
}</code></pre><p>Learn more about all components from the <a href="https://flowbite-svelte.com/docs/pages/quickstart">Flowbite-Svelte Docs</a>.</p>`;


    let editorInstance = $state<Editor | null>(null);

    function getEditorContent() {
        return editorInstance?.getHTML() ?? "";
    }

    function setEditorContent(content: string) {
        editorInstance?.commands.setContent(content);
    }

    $effect(() => {
        projectsHTML.html = getEditorContent();
    })
</script>


<TextEditor bind:editor={editorInstance} {content}>
    <ToolbarRowWrapper>
        <FormatButtonGroup editor={editorInstance}
                           code={false}
                           highlight={false}
                           strike={false}
                           subscript={false}
                           superscript={false}
                           br={false}/>
        <Divider/>
        <AlignmentButtonGroup editor={editorInstance}
                              justify={false}/>
        <Divider />
        <HeadingButtonGroup editor={editorInstance}
                            fontFamily={false}/>
        <Divider/>
        <ListButtonGroup editor={editorInstance}
                         ordered={false}/>
    </ToolbarRowWrapper>
</TextEditor>


<div class="mt-4">
    <Button onclick={() => console.log(getEditorContent())}>Log Content</Button>
    <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
