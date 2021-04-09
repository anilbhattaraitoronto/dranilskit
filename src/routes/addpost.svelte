<script>
	import { goto } from '$app/navigation';
	let title;
	let content;

	async function addPost() {
		let formData = new FormData();
		if (title && content) {
			formData.append('title', title);
			formData.append('content', content);

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
		<label for="title">Title</label>
		<input type="text" id="title" name="title" bind:value={title} required />
		<label for="content">Content</label>
		<textarea id="content" cols="30" rows="10" name="content" bind:value={content} required />
		<input type="submit" value="Add Post" />
	</form>
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
