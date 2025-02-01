<script lang="ts">
	import SetUser from '$lib/components/SetUser.svelte';
	import UserCard from '$lib/components/UserCard.svelte';
	import type { User, Item } from './types';
	import ItemCard from '$lib/components/ItemCard.svelte';
	import { onMount } from 'svelte';

	const LENGTH_OF_CARD_ID = 5;
	let focusId: HTMLInputElement | undefined = $state();
	let error: string | null = null;
	let users: User[] = [];
	onMount(async () => {
		focusId?.focus();
		try {
			const response = await fetch('http://localhost:8080/api/v1/users');
			if (!response.ok) throw new Error('Failed to fetch data.');
			//users = await response.json();
		} catch (err) {
			error = String(err);
		}
		// insanly cursed code, don't worry about it ;)
		setInterval(() => {
				handleLogin();
			}, 50);
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
			userID: 1,
			cardID: 12345,
			first_name: 'Ola',
			last_name: 'Nordmann',
			balance: 100
		},
		{
			userID: 2,
			cardID: 12346,
			first_name: 'Kari',
			last_name: 'Nordmann',
			balance: 200
		}
	];

	let user: User | undefined = $state();
	let input_id: number | null = $state(null);

	function findUserById() {
		const user_object = users.find((user) => user.cardID === input_id) || null;
		if (!user_object) return;
		if (user_object) {
			user = {
				userID: 1, // TODO: error here
				cardID: user_object.cardID,
				first_name: user_object.first_name,
				last_name: user_object.last_name,
				balance: user_object.balance
			};
		}
	}

	let history: number[] = $state([]);

	function resetUser() {
		user = undefined;
		input_id = null;
	}
	function undoPurchase() {
		if (!user) return;
		const last_purchase = history.pop();
		if (last_purchase !== undefined) {
			user = { ...user, balance: user.balance + last_purchase };
		}
	}

	// THIS DOSN'T WORK
	async function loadUsers() {
		// note: runs the get() function in the api/users.ts file
    const res = await fetch('/api/users');
    const data = await res.json();
    users = data.users;
  }
	

	function buyItem(item: Item) {
		if (!user) return;
		user = { ...user, balance: user.balance - item.price };
		history.push(item.price);
	}

	function handleLogin() {
		if (String(input_id).length === LENGTH_OF_CARD_ID) {
			findUserById();
			const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
			window.dispatchEvent(enterEvent);
		}
	}
</script>

<div>
	<h1 class="text-4xl font-bold">Shop</h1>
	<div class="flex flex-col items-center pt-5">
		{#if user}
			<UserCard {user} {undoPurchase} {resetUser} />
		{:else}
			<input
				class="rounded-lg"
				placeholder="UserID"
				bind:this={focusId}
				bind:value={input_id}
				onchange={findUserById}
				type="number"
			/>
		{/if}
	</div>

	{#if user}
		<div class="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-8 pt-10">
			{#each store_items as item}
				<ItemCard {...item} buy={() => buyItem(item)} />
			{/each}
		</div>
	{/if}
</div>
