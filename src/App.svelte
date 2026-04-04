<script>
    import "@fontsource/open-sans";

    import EditorDrawer from "./lib/EditorDrawer.svelte";

    import ResumeData from "./lib/ResumeInfo.svelte.ts";

    const info = new ResumeData(true);

</script>


<!--<EditorDrawer bind:info={info}/>-->
<EditorDrawer info={info} />


<main class="w-204 h-264 border border-gray-400 mx-auto p-12">
    <section id="about" class="text-center">
        <h1>{info.name}</h1>
        <p>{info.email} | {info.phone} | {info.location}</p>
    </section>

    <section id="experience" class="mt-7">
        <h2>Experience</h2>
        {#each info.workExperience as entry}
            <div class="experience-entry mb-3 p-2">
                <h3>{entry.title}</h3>
                <h4>{entry.employer}</h4>
                <p>{entry.start} - {entry.end || "Present"}</p>
                <p>{entry.description}</p>
            </div>
        {/each}
    </section>


</main>


<style>
    @import "tailwindcss";

    main {
        @apply bg-white;
    }

    section {
        /*@apply p-5;*/

        h2 {
            @apply text-2xl font-light border-b mb-2;
        }
    }

    section#about {
        h1 {
            @apply text-4xl;
        }

        p {
            @apply font-light;
        }
    }

    section#experience {
        & > div {
            @apply bg-gray-200;
        }
    }
</style>