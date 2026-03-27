<script lang="ts">
    import favicon from '$lib/assets/favicon.svg';

    let {children} = $props();
    import "@fontsource/open-sans";

</script>

<svelte:head>
    <link rel="icon" href={favicon}/>
    <title>Resume Web Builder</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script>
        html2pdf(document.querySelector("main")).save();
    </script>
</svelte:head>

{@render children()}

<style>
    @import "tailwindcss"; /*@import "@tailwindcss/forms";*/

    @plugin 'flowbite/plugin';
    @custom-variant dark (&:where(.dark, .dark *));

    @theme {
        --color-primary-50: #fff5f2;
        --color-primary-100: #fff1ee;
        --color-primary-200: #ffe4de;
        --color-primary-300: #ffd5cc;
        --color-primary-400: #ffbcad;
        --color-primary-500: #fe795d;
        --color-primary-600: #ef562f;
        --color-primary-700: #eb4f27;
        --color-primary-800: #cc4522;
        --color-primary-900: #a5371b;

        --color-secondary-50: #f0f9ff;
        --color-secondary-100: #e0f2fe;
        --color-secondary-200: #bae6fd;
        --color-secondary-300: #7dd3fc;
        --color-secondary-400: #38bdf8;
        --color-secondary-500: #0ea5e9;
        --color-secondary-600: #0284c7;
        --color-secondary-700: #0369a1;
        --color-secondary-800: #075985;
        --color-secondary-900: #0c4a6e;
    }

    @source "../../node_modules/flowbite-svelte/dist";
    @source "../../node_modules/flowbite-svelte-icons/dist";

    @layer base {
        /* disable chrome cancel button */
        input[type="search"]::-webkit-search-cancel-button {
            display: none;
        }
    }
</style>