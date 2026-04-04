<script>
    import "@fontsource/open-sans";

    import Counter from './lib/Counter.svelte'
    // import {resumeInfoState as info} from "./lib/data.svelte";
    import EditorDrawer from "./lib/EditorDrawer.svelte";

    let info = $state({
        name: "",
        phone: "",
        email: "",
        location: "",
        workExperience: [],
        skills: [],
        education: []
    });

    // import favicon from './assets/favicon.svg';


</script>

<section id="center">
    <Counter/>
</section>


<EditorDrawer bind:info={info}/>


<main>
    <h1>{info.name}</h1>
    <p>{info.email} | {info.phone} | {info.location}</p>
</main>