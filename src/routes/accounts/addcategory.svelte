<script context="module">
	export async function load({ session, fetch }) {
		if (session.user.is_admin !== 1) {
			return {
				status: 302,
				redirect: '/'
			};
		}
		return {};
	}
</script>

<script>
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';

	let name;
	let errorMessage = '';

	async function addCategory() {
		await fetch('/addcategory.json', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name })
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((data) => {
				$session.message = data.message;
				$session.categories = data.categories;
				goto('/accounts/addpost');
			})
			.catch((err) => {
				errorMessage = 'Problem adding category';
			});
	}
</script>

<main>
	<h2>Add new category</h2>

	{#if errorMessage !== ''}
		<p>{errorMessage}</p>
	{/if}

	<form on:submit|preventDefault={addCategory}>
		<label for="categoryname">
			New Category
			<input type="text" id="categoryname" bind:value={name} required />
			<input type="submit" value="Add New Category" />
		</label>
	</form>
</main>

<style>
	main {
		width: 100%;
		max-width: 350px;
		margin: auto;
		padding: 20px;
		color: white;
	}

	label {
		color: var(--main-yellow, yellow);
		padding-top: 40px;
		letter-spacing: 2px;
	}
	label,
	input {
		display: block;
	}
	input {
		all: unset;
		display: block;
		background: white;
		margin-bottom: 20px;
		color: black;
		padding: 0 4px;
	}
	input[type='submit'] {
		color: var(--main-dark, black);
		padding: 0 16px;
		cursor: pointer;
		border: 1px solid transparent;
		transition: 250ms all ease-in-out;
	}
	input[type='submit']:hover {
		border-color: var(--main-yellow, yellow);
	}
</style>
