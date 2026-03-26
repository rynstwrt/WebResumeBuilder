<script lang="ts">
    import EditorDrawer from "./EditorDrawer.svelte";

    import { data } from "./data.svelte.ts";
</script>


<EditorDrawer />


<h1>{data.name}</h1>
<p>{data.email} | {data.phone} | {data.location}</p>



<style>
</style>