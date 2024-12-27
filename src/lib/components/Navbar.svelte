<script lang="ts">
	import Logo from './Logo.svelte';
	export let elements: string[] = [];
</script>

<div class="flex items-center justify-between bg-[#093517] px-10">
	<div>
		<a href="/">
			<Logo color="white" width={80} />
		</a>
	</div>
	<div class="">
		{#each elements as element}
			<a href="/{element}" class="pl-20 text-white">{element.toUpperCase()}</a>
		{/each}
	</div>
</div>
