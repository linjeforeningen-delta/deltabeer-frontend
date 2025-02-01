<script lang="ts">
	import { addUser } from '../../../routes/api/users';
	import type { User } from '../../../routes/types';

	let userID: number | undefined = $state();
	let cardID: number | undefined = $state();
	let first_name: string | undefined = $state();
	let last_name: string | undefined = $state();
	let balance: number | undefined = $state();
  let phone_nr: string | undefined = $state();

	async function handleAddUser() {
    if (balance !== undefined) { 
      let user: User = {
        userID: userID,
        cardID: cardID,
        first_name: first_name,
        last_name: last_name,
        phone_nr: phone_nr,
        balance: balance
      };
      const result = await addUser(user);
      console.log(result);
    }
	}
</script>

<div class="flex flex-col rounded-3xl w-80 bg-primary-700 p-8 gap-4 text-2xl text-white">
	<h1 class="text-3xl">Add new user</h1>
  <div class="flex flex-col gap-2 text-black">
    <input class="rounded-md" type="number" bind:value={userID} placeholder="UserID" />
    <input class="rounded-md" type="number" bind:value={cardID} placeholder="CardID" />
    <input class="rounded-md" type="text" bind:value={first_name} placeholder="Name" />
    <input class="rounded-md" type="text" bind:value={last_name} placeholder="Last Name" />
    <input class="rounded-md" type="text" bind:value={phone_nr} placeholder="Phone number" />
    <input class="rounded-md" type="number" bind:value={balance} placeholder="Balance" />
  </div>
	<button class="but" onclick={handleAddUser}>Add</button>
</div>

<style>
	.but {
		border: 1px solid white;
		border-radius: 8px;
    height: 40px;
		transition:
			background-color 0.1s ease,
			color 0.1s ease;
	}
	.but:hover {
		background-color: white;
		color: #0b411c;
	}
</style>

