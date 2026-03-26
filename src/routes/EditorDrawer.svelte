<!--SECTIONS:-->
<!-- - About-->
<!-- - Education-->
<!-- - Experience-->
<!-- - Projects-->
<!-- - Certifications-->
<!-- - Skills-->
<!-- - Links-->


<script lang="ts">
    import { Drawer, DrawerHandle } from "flowbite-svelte";
    import {
        DrawSquareOutline,
    } from "flowbite-svelte-icons";
    import { data } from "./data.svelte.ts";
    import AboutSection from "./AboutSection.svelte";
    import EducationSection from "./EducationSection.svelte";
    import ExperienceSection from "./ExperienceSection.svelte";

    let open = $state(false);

    setTimeout(() => {
        open = !open
    }, 10);

</script>


<Drawer bind:open offset="52px" placement="bottom" outsideclose={false} class="rounded-t-lg"
        aria-labelledby="drawer-swipe-label">
    <DrawerHandle onclick={() => (open = !open)} class="h-14 hover:bg-gray-50">
        <h5 id="drawer-swipe-label"
            class="inline-flex items-center gap-2 text-base font-medium text-gray-500">
            <DrawSquareOutline/>
            Editor
        </h5>
    </DrawerHandle>

    <form class="mt-16">
        <AboutSection bind:name={data.name} bind:phone={data.phone} bind:email={data.email} bind:location={data.location}/>
        <ExperienceSection />
<!--        <EducationSection/>-->
    </form>
</Drawer>


<style>
    @import "tailwindcss";

    form :global(h3) {
        @apply block w-full break-after-auto text-xl font-light mb-1 uppercase tracking-wider underline underline-offset-3 decoration-0;
    }

    form :global(section) {
        margin: 20px 0;
    }
</style>