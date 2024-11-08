<script lang="ts">
	export let name: string | null = null;
	export let id: number | null = null;
	export let balance: number | null = null;
</script>

<div class="bg-primary-700 flex h-full w-96 flex-col rounded-3xl p-4 text-2xl font-bold text-white">
	<div>
		Name: <span class="font-thin">{name}</span>
		<br />
		ID: <span class="font-thin">{id}</span>
		<br />
		Balance: <span class="font-thin">{balance}</span>
	</div>
</div>
