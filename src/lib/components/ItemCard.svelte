<script lang="ts">
	import Cart from './Cart.svelte';
	let { price, img, name, description, buy } = $props();
</script>

<div class="flex h-56 w-36 flex-col overflow-hidden">
	<div class="h-full w-10 place-content-end self-center">
		<img src={img} alt={name} />
	</div>
	<div class="flex items-end justify-between pt-4">
		<p class="text-lg font-bold">{price} Δ</p>
		<button onclick={buy}>
			<Cart width={40} />
		</button>
	</div>
	<hr />
	<div>
		<p>{name}</p>
		<p class="text-sm font-bold text-gray-500">{description}</p>
	</div>
</div>
