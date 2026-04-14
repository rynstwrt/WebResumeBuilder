<script lang="ts">
	import "./layout.css";
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	// import "@fontsource/open-sans";
	// import '@fontsource/inter/standard.css'; // Supports weights 100-900
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Web Resume Builder</title>
</svelte:head>

{@render children()}
<!--<svelte:body />-->
