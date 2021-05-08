<script context="module">
	export async function load({ fetch, session }) {
		if (session.user.is_admin === 1) {
			const res = await fetch(`/categories.json`);

			if (res.ok) {
				let categories = await res.json();
				if (!categories.message) {
					return {
						props: {
							categories: categories
						}
					};
				}
				return {
					props: {
						categories: {
							categories: []
						}
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
	import { session } from '$app/stores';
	let title;
	let content;
	let category_id;
	let thumbnail_url;
	//toolbars
	let selectedSize;
	let selectedHeading;

	export let categories;
	console.log(categories);

	async function addPost() {
		if ($session.user && $session.user.is_admin) {
			let formData = new FormData();
			if (title && content) {
				formData.append('title', title);
				formData.append('content', content);
				formData.append('thumbnail_url', thumbnail_url);
				formData.append('category_id', category_id);

				await fetch(`/addpost.json`, {
					method: `POST`,
					headers: {
						'x-access-token': JSON.stringify($session.user) || {}
					},
					body: formData
				})
					.then((res) => {
						if (res.ok) {
							// delete res.headers['Content-Type'];
							return res.json();
						}
					})
					.then((data) => {
						$session.message = data.message;
						$session.latestBlogs = data.latestBlogs;
						console.log(data);
						goto(`/blogs/${data.post_id}_${data.slug}`);
					})
					.catch((err) => console.log('Error', err));
			} else {
				return;
			}
		} else {
			return console.log('You are not admin');
		}
	}
</script>

<svelte:head>
	<title>Add A New Post</title>
</svelte:head>
<main>
	<h2>Add Post</h2>

	<label for=""
		>Category:
		<select id="" bind:value={category_id} required>
			{#each categories.categories as category}
				<option value={category.category_id}>{category.name}</option>
			{/each}
		</select>
		no category? <a href="/accounts/addcategory">Add category</a>
	</label>

	<label for="title">Title</label>
	<input type="text" id="title" name="title" bind:value={title} required />
	<label for="thumbnail_url">Thumbnail Url</label>
	<input type="text" id="thumbnail_url" name="thumbnail_url" bind:value={thumbnail_url} required />
	<label for="content">Content</label>
	<!-- Toolbar begins -->
	<div class="tool-bar">
		<select
			bind:value={selectedHeading}
			on:change={() => {
				document.execCommand('heading', false, selectedHeading);
			}}
		>
			<option value="H1" selected>h1</option>
			<option value="H2">h2</option>
			<option value="H3">h3</option>
			<option value="H4">h4</option>
			<option value="H5">h5</option>
			<option value="H6">h6</option>
		</select>
		<select
			bind:value={selectedSize}
			on:change={() => {
				document.execCommand('fontSize', false, selectedSize);
			}}
		>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			<option value="6">6</option>
			<option value="7" selected>7</option>
		</select>
		<button
			on:click={(e) => {
				document.execCommand('bold');
			}}
			title="bold"
		>
			<b>B</b>
		</button>
		<button
			on:click={(e) => {
				document.execCommand('italic');
			}}
			title="italic"
		>
			<i>I</i>
		</button>
		<button on:click={() => document.execCommand('underline')} title="bold"
			><i class="fa fa-underline" /></button
		>
		<button on:click={() => document.execCommand('strikeThrough')} title="bold"
			><i class="fa fa-strikethrough" /></button
		>
		<button on:click={() => document.execCommand('justifyLeft')} title="justifyLeft"
			><i class="fa fa-align-left" /></button
		>
		<button on:click={() => document.execCommand('justifyCenter')} title="justifyCentre"
			><i class="fa fa-align-center" /></button
		>
		<button on:click={() => document.execCommand('justifyRight')} title="justifyRight"
			><i class="fa fa-align-right" /></button
		>

		<button on:click={() => document.execCommand('justifyFull')} title="justifyFull"
			><i class="fa fa-align-justify" /></button
		>
		<button on:click={() => document.execCommand('cut')} title="cut"><i class="fa fa-cut" /></button
		>
		<button on:click={() => document.execCommand('copy')} title="copy"
			><i class="fa fa-copy" /></button
		>
		<button on:click={() => document.execCommand('indent')} title="indent"
			><i class="fa fa-indent" /></button
		>
		<button on:click={() => document.execCommand('outdent')} title="outdent"
			><i class="fa fa-dedent" /></button
		>
		<button on:click={() => document.execCommand('subscript')} title="subscript"
			><i class="fa fa-subscript" /></button
		>
		<button on:click={() => document.execCommand('superscript')} title="superscript"
			><i class="fa fa-superscript" /></button
		>
		<button on:click={() => document.execCommand('redo')} title="redo"
			><i class="fa fa-repeat" /></button
		>
		<button on:click={() => document.execCommand('undo')} title="undo"
			><i class="fa fa-undo" /></button
		>
		<button
			on:click={() => document.execCommand('insertUnorderedList')}
			title="Insert Unordered List"><i class="fa fa-list-ul" /></button
		>
		<button on:click={() => document.execCommand('insertOrderedList')} title="Insert Ordered List"
			><i class="fa fa-list-ol" /></button
		>
		<button on:click={() => document.execCommand('formatBlock', false, 'p')} title="Paragraph"
			><i class="fa fa-paragraph" /></button
		>
		<button on:click={() => document.execCommand('insertHorizontalRule')} title="bold">HR</button>
		<button
			on:click={() => document.execCommand('createLink', false, prompt('Enter a URL ', 'https://'))}
			title="Add Link"><i class="fa fa-link" /></button
		>
		<button on:click={() => document.execCommand('unlink')} title="Remove Link"
			><i class="fa fa-unlink" /></button
		>
		<button
			on:click={() =>
				document.execCommand('insertImage', false, prompt('Enter the image url: ', 'https://'))}
			title="image"><i class="fa fa-file-image-o" /></button
		>
	</div>
	<!-- Toolbar ends -->
	<div contenteditable="true" id="editor" bind:innerHTML={content} />
	<input type="submit" value="Add Post" on:click|preventDefault={addPost} />
</main>

<style>
	main {
		width: 100%;
		max-width: 700px;
		margin: 20px auto;
		padding: 20px;
		box-shadow: 0 0 1px gray;
		color: white;
	}
	h2 {
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 2px;
	}

	#editor {
		border: 1px solid rgb(242, 237, 237);
		min-height: 350px;
		width: 100%;
		margin: 30px auto 20px auto;
		padding: 8px;
		background: white;
		color: black;
	}
	#editor:focus {
		border-color: rgb(255, 196, 0);
		outline: none;
	}
	select {
		border: unset;
		/* appearance: none; */
		border-radius: 2px;
		border: 1px solid lightgray;
		padding: 4px 8px;
		font-size: 1em;
		color: green;
		text-align: center;
		width: 80px;
	}
	option {
		width: 150px;
	}
	label {
		display: block;
		padding: 3px 0;
		width: 100%;
		z-index: 1;
	}

	input {
		all: unset;
		margin-bottom: 16px;
		background: white;
		text-align: left;
		display: block;
		border: 1px solid lightgray;
		width: 100%;
		padding: 4px;
		border-radius: 2px;
		color: black;
	}
	input:focus {
		border-color: rgb(255, 196, 0);
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
		border-color: rgb(255, 196, 0);
	}
	label a {
		color: var(--main-yellow, yellow);
	}
</style>
