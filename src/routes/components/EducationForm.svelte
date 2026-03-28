<script lang="ts">
    import { Card } from "flowbite-svelte"
    // import { data } from "../data.svelte.ts";

    // let {institution: String, degree: String, start: String, end: String} = $props();
    let props = $props();
</script>


<!--<Card onclick={() => (open = true)}>-->
<!--    <h3>{}</h3>-->
<!--</Card>-->


<Card>
    <h3>{props?.institution}</h3>
    <h4>{props?.degree}</h4>
    <p>{props?.start} - {props?.end}</p>
</Card>