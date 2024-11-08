<script lang="ts">
    import SetUser from "../../components/SetUser.svelte";
    import ItemCard from "../../components/ItemCard.svelte";
    import User from "../../components/User.svelte";
    import type { Item } from "./types";

    let user = true;

    let store_items: Item[] = [
        {name: "Dahls Sommerøl", price: 40, description: "0,5l boks", img: "/img/dahls_sommer.jpeg"},
        {name: "Dahls", price: 34, description: "0,5l boks", img: "/img/dahls.png"},
        {name: "Brooklyn Lager", price: 45, description: "0,5l boks", img: "/img/brooklyn.jpg"},
        {name: "Dahls", price: 30, description: "0,33l boks", img: "/img/dahls_33.jpeg"},
        {name: "Schous", price: 35, description: "0,5l boks", img: "/img/schous.jpg"},
        {name: "Grevens", price: 40, description: "0,5l boks", img: "/img/grevens.jpg"},
        {name: "Munkholm", price: 15, description: "0,33l boks", img: "/img/munkholm.jpg"},
        {name: "Radler", price: 20, description: "0,33l boks", img: "/img/radler.png"},
        {name: "Juicy Ipa", price: 45, description: "0,5l boks", img: "/img/frydenlund_juicy.png"},
        {name: "Austmann Blanc", price: 50, description: "0,5l boks", img: "/img/austmann_blanc.jpg"},
        {name: "Smirnoff Ice", price: 40, description: "0,33l glass", img: "/img/smirnoff.jpg"},
        {name: "Crabbies", price: 53, description: "0,33l glass", img: "/img/crabbies.png"},
        {name: "Grans Seltzer", price: 30, description: "0,5l boks", img: "/img/grans_seltzer.png"},
    ];

    let name = "John Doe";
    let id = 129845712;
    let balance = 1000;

</script>

<div>
    <h1 class="text-4xl font-bold">
        Shop
    </h1>
    <div class="flex justify-center pt-5">
        {#if user}
            <User name={name} id={id} balance={balance} />
        {:else}
            <SetUser  />
        {/if}
    </div>

    {#if user}
        <div class="pt-10 grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-8">
            {#each store_items as item}
                <ItemCard name={item.name} price={item.price} description={item.description} img={item.img}/>
            {/each}
        </div>
    {/if}

</div>