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

<h2>Add new category</h2>

{#if errorMessage !== ''}
	<p>{errorMessage}</p>
{/if}

<form on:submit|preventDefault={addCategory}>
	<label for="categoryname">
		<input type="text" id="categoryname" bind:value={name} required />
		<input type="submit" value="Add New Category" />
	</label>
</form>
