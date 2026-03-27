<script lang="ts">
    import EditorDrawer from "./components/EditorDrawer.svelte";

    import { data } from "./data.svelte.ts";

    // html2pdf(document.querySelector("main")).save();
    // const worker = html2pdf().from(document.querySEle)
</script>


<EditorDrawer/>

<main>
    <h1>{data.name}</h1>
    <p>{data.email} | {data.phone} | {data.location}</p>
</main>


<style>
</style>