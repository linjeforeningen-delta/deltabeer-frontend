<script lang="ts">
	let name: string | null = null;
	let id: number | null = null;
	let balance: number | null = null;

	// TODO: Implement setUser function
	function setUser(event: MouseEvent) {
		name = 'John Doe';
		id = 123456;
		balance = 1000;
	}
</script>

<div class="self-end">
	<button
		on:click={setUser}
		class="h-12 w-40 rounded-2xl bg-primary-400 px-4 py-2 text-lg font-semibold text-white shadow-md transition hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-75"
	>
		Set user
	</button>
</div>
