<script lang="ts">
    import {Card} from "flowbite-svelte";
    let {institution, degree, start, end="Present"} = $props();
</script>


<Card class="gap-2 p-2">
    <h4 class="text-md">{institution}</h4>
    <h3 class="text-lg">{degree}</h3>
    <p class="text-sm">{start} - {end}</p>
</Card>