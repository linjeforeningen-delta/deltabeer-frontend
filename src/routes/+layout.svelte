<script lang="ts">
	let { children } = $props();
	import '../app.css';

	import Navbar from '../lib/components/Navbar.svelte';

	let elements = ['deposit', 'login'];
</script>

<div class="">
	<Navbar {elements} />
	<div class="flex justify-center pt-20">
		<div class=" sm:w-full sm:px-4 md:w-3/4 lg:w-2/3 xl:w-7/12">
			{@render children()}
		</div>
	</div>
</div>
