<script context="module">
	export async function load({ fetch, session }) {
		const res = await fetch(`/categories.json`);
		const user = session.user;
		if (user) {
			if (res.ok) {
				return {
					props: {
						categories: await res.json()
					}
				};
			}
			return {
				status: res.status,
				error: new Error(`Could not load the data url`)
			};
		}
		return {
			status: 302,
			redirect: '/'
		};
	}
</script>

<script>
	import { goto } from '$app/navigation';
	let title;
	let content;
	let category_id;
	let thumbnail_url;
	export let categories;
	if (categories) {
		console.log('Categories in addpost are', categories);
	}

	async function addPost() {
		let formData = new FormData();
		if (title && content) {
			formData.append('title', title);
			formData.append('content', content);
			formData.append('thumbnail_url', thumbnail_url);
			formData.append('category_id', category_id);

			await fetch(`/addpost.json`, {
				method: `POST`,
				body: formData
			})
				.then((res) => {
					if (res.ok) {
						// delete res.headers['Content-Type'];
						return res.json();
					}
				})
				.then((data) => {
					goto('/');
				})
				.catch((err) => console.log('Error', err));
		} else {
			return;
		}
	}
</script>

<svelte:head>
	<title>Add A New Post</title>
</svelte:head>
<main>
	<h2>Add Post</h2>
	<form on:submit|preventDefault={addPost}>
		<label for=""
			>Category:
			<select id="" bind:value={category_id}>
				{#each categories.categories as category}
					<option value={category.category_id}>{category.name}</option>
				{/each}
			</select>
		</label>

		<label for="title">Title</label>
		<input type="text" id="title" name="title" bind:value={title} required />
		<label for="thumbnail_url">Thumbnail Url</label>
		<input
			type="text"
			id="thumbnail_url"
			name="thumbnail_url"
			bind:value={thumbnail_url}
			required
		/>
		<label for="content">Content</label>
		<textarea id="content" cols="30" rows="10" name="content" bind:value={content} required />
		<input type="submit" value="Add Post" />
	</form>
	{category_id}
</main>

<style>
	main {
		width: 100%;
		margin: auto;
		padding: 20px;
		background: rgb(242, 232, 227);
	}
	h2 {
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 2px;
	}
	form {
		width: 100%;
		max-width: 550px;
		margin: auto;
		padding: 20px;
		z-index: 1;
	}
	select {
		border: unset;
		/* appearance: none; */
		border-radius: 20px;
		padding: 4px 8px;
		font-size: 1em;
		color: green;
		text-align: center;
	}
	option {
		width: 150px;
	}
	label,
	textarea {
		display: block;
		padding: 3px 0;
		width: 100%;
		z-index: 1;
	}
	textarea {
		border: unset;
		outline: unset;
		margin-bottom: 16px;
		background: white;
		text-align: left;
		display: block;
		width: 100%;
		min-width: 320px;
		padding: 4px;
		border-radius: 2px;
		margin-bottom: 20px;
		height: 350px;
		font-family: Arial;
		line-height: 1.7;
	}
	input {
		all: unset;
		margin-bottom: 16px;
		background: white;
		text-align: left;
		display: block;
		border: 1px solid #ff40004f;
		width: 100%;
		padding: 4px;
		border-radius: 20px;
	}
	input:focus {
		border-color: #ff3e00;
	}
	input[type='submit'] {
		border: 1px solid #ff40004d;
		font-size: 1em;
		text-transform: uppercase;
		cursor: pointer;
		transition: 200ms all ease-in-out;
		text-align: center;
	}
	input[type='submit']:hover,
	input[type='submit']:focus {
		background: rgb(242, 232, 227);
		border-color: #ff3e00;
	}
</style>
