<script lang="ts">
    import { MapPinAltOutline, EnvelopeOutline, PhoneOutline, GlobeOutline } from "flowbite-svelte-icons";

    import { profileData } from "../../ResumeData.svelte.ts";
</script>


<section id="profile"
         class="text-center flex flex-col items-center">
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