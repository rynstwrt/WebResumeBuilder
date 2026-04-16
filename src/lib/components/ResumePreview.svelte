<script lang="ts">
    import {
        Li,
        P
    } from "flowbite-svelte";

    import {
        EnvelopeOutline,
        GlobeOutline,
        MapPinAltOutline,
        PhoneOutline
    } from "flowbite-svelte-icons";

    import {
        certificationsData,
        educationData,
        profileData,
        projectsData,
        skillsData,
        workData
    } from "../ResumeData.svelte.ts";

    import { projects } from "../DataHandler.svelte.ts";

    import ResumeSection from "../components/ResumeSection.svelte";
</script>


<main class="w-204 min-h-264 bg-white mx-auto p-12 mt-4 mb-12">
    <section id="profile" class="text-center flex flex-col items-center">
        <h1 class="text-3xl font-semibold mb-1">{profileData.name}</h1>
        <div class="text-xs font-light flex gap-2">
            {#if profileData.location}
            <span>
				<MapPinAltOutline size="sm" class="inline"/>
                {profileData.location}
			</span>
                {#if profileData.phone || profileData.email}
                    |
                {/if}
            {/if}
            {#if profileData.phone}
            <span>
                <PhoneOutline size="sm" class="inline"/>
                {profileData.phone}
            </span>
                {#if profileData.email}
                    |
                {/if}
            {/if}
            {#if profileData.email}
            <span>
                <EnvelopeOutline size="sm" class="inline"/>
                {profileData.email}
            </span>
            {/if}
        </div>
        {#if profileData?.links?.length}
            <div class="flex gap-2 text-xs font-light">
                {#each profileData.links as link, idx}
                    <span>
                        <GlobeOutline size="sm" class="inline"/>
                        <a href={link}>{link}</a>
                    </span>
                    {#if idx !== profileData.links.length - 1}
                        |
                    {/if}
                {/each}
            </div>
        {/if}
    </section>

    {#if workData.length}
        <ResumeSection title="Experience">
            {#each workData as entry}
                <div class="entry">
                    <div class="flex justify-between">
                        <div>
                            <h3 class="header">{entry.company}</h3>
                            <h4 class="subheader">{entry.position}</h4>
                        </div>
                        <div>
                            <P class="detail">{entry.city}</P>
                            <P class="detail">{entry.dates}</P>
                        </div>
                    </div>
                    {#if entry.bulletpoints?.length}
                        <ul class="list-disc pl-[1.5ch] mt-0.5">
                            {#each entry.bulletpoints as bulletpoint}
                                <Li class="text-sm font-light">{bulletpoint}</Li>
                            {/each}
                        </ul>
                    {/if}
                </div>
            {/each}
        </ResumeSection>
    {/if}

    {#if educationData.length}
        <ResumeSection title="Education">
            {#each educationData as entry}
                <div class="entry flex justify-between">
                    <div class="w-full flex justify-between">
                        <div>
                            <h3 class="header">{entry.school}</h3>
                            <h4 class="subheader">{entry.degree}</h4>
                        </div>
                        <div class="text-right tracking-tight">
                            <P class="detail">{entry.city}</P>
                            <P class="detail">{entry.date}</P>
                        </div>
                    </div>
                </div>
            {/each}
        </ResumeSection>
    {/if}

    {#if projects.length}
        <ResumeSection title="Projects">
            {#each projects as entry}
                <div class="entry">
                    <h3 class="header">{entry.name}</h3>
                    <!--                    <a class="subheader" href={entry.link}>{entry.link}</a>-->
                    {#if entry.links?.length}
                        {#each entry.links as link, idx}
                            <!--{#if idx === entry.links.length - 1}-->
                            <!--    <a class="text-xs text-left place-self-start block mb-1" href={link}>{link}</a>-->
                            <!--{:else}-->
                            <!--    <a class="text-xs text-left place-self-start block" href={link}>{link}</a>-->
                            <!--{/if}-->
                            <a class="text-sm text-left place-self-start block {(idx === entry.links.length - 1) && 'mb-0.5'}"
                               href={link}>{link}</a>
                        {/each}
                    {/if}
                    {#if entry.bulletpoints?.length}
                        <ul class="list-disc pl-[1.5ch] mt-0.5">
                            {#each entry.bulletpoints as bulletpoint}
                                <Li class="text-sm font-light">{bulletpoint}</Li>
                            {/each}
                        </ul>
                    {/if}
                </div>
            {/each}
        </ResumeSection>
    {/if}
    <!--{#if projectsData.length}-->
    <!--    <ResumeSection title="Projects">-->
    <!--        {#each projectsData as entry}-->
    <!--            <div class="entry">-->
    <!--                <h3 class="header">{entry.name}</h3>-->
    <!--                &lt;!&ndash;                    <a class="subheader" href={entry.link}>{entry.link}</a>&ndash;&gt;-->
    <!--                {#if entry.links?.length}-->
    <!--                    {#each entry.links.split("\n") as link, idx}-->
    <!--                        &lt;!&ndash;{#if idx === entry.links.length - 1}&ndash;&gt;-->
    <!--                        &lt;!&ndash;    <a class="text-xs text-left place-self-start block mb-1" href={link}>{link}</a>&ndash;&gt;-->
    <!--                        &lt;!&ndash;{:else}&ndash;&gt;-->
    <!--                        &lt;!&ndash;    <a class="text-xs text-left place-self-start block" href={link}>{link}</a>&ndash;&gt;-->
    <!--                        &lt;!&ndash;{/if}&ndash;&gt;-->
    <!--                        <a class="text-sm text-left place-self-start block {(idx === entry.links.length - 1) && 'mb-0.5'}"-->
    <!--                           href={link}>{link}</a>-->
    <!--                    {/each}-->
    <!--                {/if}-->
    <!--                {#if entry.bulletpoints?.length}-->
    <!--                    <ul class="list-disc pl-[1.5ch] mt-0.5">-->
    <!--                        {#each entry.bulletpoints.split("\n") as bulletpoint}-->
    <!--                            <Li class="text-sm font-light">{bulletpoint}</Li>-->
    <!--                        {/each}-->
    <!--                    </ul>-->
    <!--                {/if}-->
    <!--            </div>-->
    <!--        {/each}-->
    <!--    </ResumeSection>-->
    <!--{/if}-->

    {#if certificationsData.length}
        <ResumeSection title="Certifications">
            {#each certificationsData as entry}
                <div class="entry flex justify-between">
                    <div class="">
                        <h3 class="header">{entry.name}</h3>
                        <h4 class="subheader">{entry.from}</h4>
                    </div>

                    <P class="detail">{entry.date}</P>
                </div>
            {/each}
        </ResumeSection>
    {/if}
    {#if skillsData.skills.length}
        <ResumeSection title="Skills">
            <P class="detail text-left!">{skillsData.skills.join(", ")}.</P>
        </ResumeSection>
    {/if}
</main>