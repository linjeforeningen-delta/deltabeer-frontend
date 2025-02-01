<script lang="ts">
	import { admins } from './admins';
	import { onMount } from 'svelte';
  import type { User } from '../types';
	import AddUserCard from '$lib/components/AddUser/AddUserCard.svelte';

	let passcode: number | null = $state(null);
	let cardID: number | null = $state(null);
	let user: User | undefined = $state();

	onMount(async () => {
		try {
			const response = await fetch('http://localhost:8080/api/v1/deposit');
			if (!response.ok) throw new Error('Failed to fetch data.');
			//users = await response.json();
		} catch (err) {
			// error = String(err);
		}
	});

	// hello hackers, this is ofcourse not the real admin data :)
	let definitly_not_admins = admins;

  // get user by cardID
	function findUserById(cardID: number) {
    const user: User = {
      first_name: "Ola",
      cardID: 12345,
      userID: 1,
      last_name: "Nordmann",
      balance: 100,
    }
		if (!user) return;
    return user;
	}

	function tryLogin() {
    console.log("trying to login");
		for (let i = 0; i < definitly_not_admins.length; i++) {
			if (passcode == definitly_not_admins[i][1] && cardID == definitly_not_admins[i][0]) {
				const foundUser = findUserById(cardID);
        if (foundUser) {
          user = foundUser;
        } else {
          user = undefined;
        }
			}
		}
  }
  

</script>

<div class="flex flex-col items-center pt-5">
	{#if user}
  <div class="flex flex-wrap gap-5 ">
    <AddUserCard />
  </div>
	{:else}
		<div
			class="flex flex-col rounded-3xl bg-primary-700 p-14 text-2xl text-white"
		>
    <div class="flex h-full flex-col justify-around items-center gap-5">
        <h1 class="self-center text-4xl">Admin Login</h1>
				<div class="flex flex-col gap-2">
					<input class="w-56 rounded-lg text-black" placeholder="UserID" bind:value={cardID} type="number" />
					<input type="text" class="w-56 rounded-lg text-black" placeholder="Passcode" bind:value={passcode} />
				</div>
				<button class="but h-10 w-56" onclick={tryLogin}>Login</button>
			</div>
		</div>
	{/if}
</div>

<style>
	.but {
		border: 1px solid white;
		border-radius: 8px;
		transition:
			background-color 0.1s ease,
			color 0.1s ease;
	}
	.but:hover {
		background-color: white;
		color: #0b411c;
	}
</style>
