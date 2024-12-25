<script lang="ts">
    import Cart from "./Cart.svelte";

    export let name: string | null = null;
    export let price: number | null = null;
    export let img: string | null = null;
    export let description: string | null = null;
</script>

<div class="w-36 h-56 flex flex-col overflow-hidden">
    <div class="w-10 h-full self-center place-content-end ">
        <img src={img} alt={name} />
    </div>
    <div class="flex pt-4 items-end justify-between">
        <p class="font-bold text-lg">{price} Δ</p>
        <Cart width={40}/>
    </div>
    <hr>
    <div>
        <p>{name}</p>
        <p class="font-bold text-sm text-gray-500">{description}</p>
    </div>

</div>