<script lang="ts">
    import Cart from "./Cart.svelte";
    let { price, img, name, description, buy } = $props();

</script>

<div class="w-36 h-56 flex flex-col overflow-hidden">
    <div class="w-10 h-full self-center place-content-end ">
        <img src={img} alt={name} />
    </div>
    <div class="flex pt-4 items-end justify-between">
        <p class="font-bold text-lg">{price} Δ</p>
        <button onclick={buy}>
            <Cart width={40}/>
        </button>
    </div>
    <hr>
    <div>
        <p>{name}</p>
        <p class="font-bold text-sm text-gray-500">{description}</p>
    </div>

</div>