<script lang="ts">
    import Logo from "./Logo.svelte";
    export let elements: string[] = [];
    
</script>

<div class="bg-[#093517] flex justify-between px-10 items-center">
    <div>
        <a href="/">
            <Logo color="white" width={80} />
        </a>
    </div>
    <div class="">
        {#each elements as element}
            <a href="/{element}" class="text-white pl-20">{element.toUpperCase()}</a>
        {/each}
    </div>
</div>