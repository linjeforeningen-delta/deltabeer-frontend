<script lang="ts">
	let { user, undoPurchase, resetUser } = $props();
	
	let name = user.name;
	let id = user.id;
	let balance = $derived(user.balance);
</script>

<div class="flex h-full w-96 flex-col rounded-3xl p-4 bg-primary-700 text-2xl font-bold text-white">
	<div>
		Name: <span class="font-thin">{name}</span>
		<br />
		ID: <span class="font-thin">{id}</span>
		<br />
		Balance: <span class="font-thin">{balance} Δ</span>
	</div>

	<div class="flex justify-between pt-2">
		<button onclick={undoPurchase} class="but">Undo</button>
		<button onclick={resetUser} class="but">Done</button>
	</div>
</div>


<style>
	.but {
		border: 1px solid white;
		border-radius: 17px;
		padding: 5px 20px;
		transition: background-color 0.1s ease, color 0.1s ease;
	}
	.but:hover{
		background-color: white;
		color: #0B411C;
	}
</style>