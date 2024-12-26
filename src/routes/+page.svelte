<script lang=ts>
	import SetUser from "$lib/components/SetUser.svelte";
	import { createEventDispatcher } from "svelte";
	import UserCard from "$lib/components/UserCard.svelte";
	import type { User, Item } from "./types";
	import ItemCard from "$lib/components/ItemCard.svelte";
	import { onMount } from "svelte";

	let error: string | null = null;
	let users: any[] = [];
	onMount(async () => {
		try {
			const response = await fetch('http://localhost:8080/api/v1/users');
			if (!response.ok) throw new Error('Failed to fetch data.');
			//users = await response.json();
		} catch (err) {
			error = String(err);
		}
	});

	let store_items: Item[] = [
		{ name: 'Dahls Sommerøl', price: 40, description: '0,5l boks', img: '/img/dahls_sommer.jpeg' },
		{ name: 'Dahls', price: 34, description: '0,5l boks', img: '/img/dahls.png' },
		{ name: 'Brooklyn Lager', price: 45, description: '0,5l boks', img: '/img/brooklyn.jpg' },
		{ name: 'Dahls', price: 30, description: '0,33l boks', img: '/img/dahls_33.jpeg' },
		{ name: 'Schous', price: 35, description: '0,5l boks', img: '/img/schous.jpg' },
		{ name: 'Grevens', price: 40, description: '0,5l boks', img: '/img/grevens.jpg' },
		{ name: 'Munkholm', price: 15, description: '0,33l boks', img: '/img/munkholm.jpg' },
		{ name: 'Radler', price: 20, description: '0,33l boks', img: '/img/radler.png' },
		{ name: 'Juicy Ipa', price: 45, description: '0,5l boks', img: '/img/frydenlund_juicy.png' },
		{ name: 'Austmann Blanc', price: 50, description: '0,5l boks', img: '/img/austmann_blanc.jpg' },
		{ name: 'Smirnoff Ice', price: 40, description: '0,33l glass', img: '/img/smirnoff.jpg' },
		{ name: 'Crabbies', price: 53, description: '0,33l glass', img: '/img/crabbies.png' },
		{ name: 'Grans Seltzer', price: 30, description: '0,5l boks', img: '/img/grans_seltzer.png' }
	];

	// tests
	users = [
		{
			cardId: 12346,
			firstName: 'Kari',
			lastName: 'Nordmann',
			email: 'karnor@stud.ntnu.no',
			birthday: '1994-04-06T14:00:00+02:00',
			title: null,
			comments: [],
			userGroup: 'BMAT',
			isMember: true,
			creditRating: 1
		},
		{
			cardId: 12345,
			firstName: 'Ola',
			lastName: 'Nordmann',
			email: 'olanor@stud.ntnu.no',
			birthday: '1990-04-23T14:00:00+02:00',
			title: null,
			comments: ['Fyllesvin'],
			userGroup: 'BFY',
			isMember: true,
			creditRating: 5
		}
	];

	let user: User | null = $state(null);
	let input_id: number | null = $state(null);

	function findUserById() {
		const user_object = users.find(user => user.cardId === input_id) || null;
		if (user_object) {
			user = {
				name: user_object.firstName + " " + user_object.lastName,
				balance: user_object.creditRating,
				id: user_object.cardId,
			}
		}
	}

	function resetUser() {
		user = null
	}

	let cart = $state();
	console.log(cart);

</script>

<div>
	<h1 class="text-4xl font-bold">Shop</h1>
	<div class="flex flex-col items-center pt-5">
		{#if user}
			<UserCard {user} />
			<button onclick={resetUser} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 my-2 rounded-l">Quit</button>
		{:else}
			<input class="rounded-lg" placeholder="UserID" bind:value={input_id} onchange={findUserById} type="number"/>
		{/if}
	</div>

	{#if user}
		<div class="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-8 pt-10">
			{#each store_items as item}
				<ItemCard
					name={item.name}
					price={item.price}
					description={item.description}
					img={item.img}
					buy={() => cart.push(item.name) // TODO:}
				/>
			{/each}
		</div>
	{/if}
</div>
