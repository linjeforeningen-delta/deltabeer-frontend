<script lang="ts">
	export let title: string = 'Card';
	export let image: string = '/img/cat.jpg';
	export let description: string = 'This is a card component';
	export let link: string = '/card';
	export let button_text: string = 'Click Me';
</script>

<div class="h-96 w-80 overflow-hidden rounded-3xl bg-white transition">
	<div class="h-1/2 overflow-hidden">
		<img src={image} alt="img" />
	</div>
	<div class="flex h-1/2 flex-col justify-between p-4">
		<div class="">
			<h1 class="text-4xl font-bold">{title}</h1>
			<p class="pt-1 text-lg font-thin">{description}</p>
		</div>
		<div class="self-end">
			<a class="bg-primary" href={link}>
				<button
					class="h-12 w-40 rounded-2xl bg-primary-400 px-4 py-2 text-lg font-semibold text-white shadow-md transition hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-75"
				>
					{button_text}
				</button>
			</a>
		</div>
	</div>
</div>
