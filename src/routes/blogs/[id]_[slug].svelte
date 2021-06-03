<script context="module">
	export async function load({ page, fetch, session }) {
		const res = await fetch(`/blogs/${page.params.id}_${page.params.slug}.json`);
		if (res.ok) {
			return {
				props: {
					article: await res.json()
				},
				maxage: 3600
			};
		}
		return {
			status: res.status,
			error: new Error(`Could not load the data url`)
		};
	}
</script>

<script>
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';
	import { fly, fade } from 'svelte/transition';

	//toolbars
	let selectedSize;
	let selectedHeading;

	export let article;

	let title = article.article.title;
	let content = article.article.content;
	let category_id;
	let thumbnail_url = article.article.thumbnail_url;
	let id = article.article.blog_id;
	//update blog
	async function updateBlog() {
		if ($session.user && $session.user.is_admin === 1) {
			if (title && content && thumbnail_url && category_id) {
				await fetch(`/blogs/update/updateblog.json`, {
					method: `POST`,
					headers: {
						'x-access-token': JSON.stringify($session.user) || {},
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ title, content, category_id, thumbnail_url, id })
				})
					.then((res) => {
						if (res.ok) {
							return res.json();
						}
					})
					.then((data) => {
						$session.message = data.message;
						$session.latestBlogs = data.latestBlogs;
						goto(`/`);
					})
					.catch((err) => console.log('Error', err));
			} else {
				return;
			}
		} else {
			return console.log('You are not admin');
		}
	}
	//delete blog
	async function deletePost(id) {
		await fetch(`/blogs/delete/${id}.json`, {
			method: `DELETE`
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((data) => {
				$session.message = data.message;
				$session.latestBlogs = data.latestBlogs;
				console.log('deleted the article');
				goto('/');
			})
			.catch((err) => console.log('Error', err));
	}
</script>

<svelte:head>
	<title>{article.article ? article.article.title : ''}</title>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	/>
</svelte:head>

{#if article.article}
	<article>
		<h2 in:fly={{ y: -80, duration: 1000 }}>{article.article.title}</h2>
		<img src={article.article.thumbnail_url} alt={article.article.title} />

		<div class="content">
			<p>
				{@html article.article.content}
			</p>

			<p><em>Posted:</em> {article.article.posted_date}</p>
			<p><em>Updated:</em> {article.article.updated_date}</p>
		</div>
		{#if $session.user && $session.user.is_admin == 1}
			<details>
				<summary>Update Post?</summary>
				<main>
					<h2>Update Post</h2>

					<label for=""
						>Category:
						<select id="" bind:value={category_id} required>
							{#each $session.categories as category}
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
						<button on:click={() => document.execCommand('cut')} title="cut"
							><i class="fa fa-cut" /></button
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
						<button
							on:click={() => document.execCommand('insertOrderedList')}
							title="Insert Ordered List"><i class="fa fa-list-ol" /></button
						>
						<button
							on:click={() => document.execCommand('formatBlock', false, 'p')}
							title="Paragraph"><i class="fa fa-paragraph" /></button
						>
						<button on:click={() => document.execCommand('insertHorizontalRule')} title="bold"
							>HR</button
						>
						<button
							on:click={() =>
								document.execCommand('createLink', false, prompt('Enter a URL ', 'https://'))}
							title="Add Link"><i class="fa fa-link" /></button
						>
						<button on:click={() => document.execCommand('unlink')} title="Remove Link"
							><i class="fa fa-unlink" /></button
						>
						<button
							on:click={() =>
								document.execCommand(
									'insertImage',
									false,
									prompt('Enter the image url: ', 'https://')
								)}
							title="image"><i class="fa fa-file-image-o" /></button
						>
					</div>
					<!-- Toolbar ends -->
					<div contenteditable="true" id="editor" bind:innerHTML={content} />
					<button on:click|preventDefault={updateBlog}>Update Blog</button>
					<p>title is: {title}</p>
				</main>
			</details>

			<details>
				<summary>Delete this blog?</summary>
				<form on:submit|preventDefault={() => deletePost(article.article.blog_id)}>
					<button>Are you sure?</button>
				</form>
			</details>
		{/if}
	</article>
{/if}

<style>
	article {
		font-family: Arial;
		width: 100%;
		max-width: 650px;
		margin: auto;
		background: white;
		padding: 20px;
	}
	h2 {
		text-align: center;
		font-weight: 600;
	}
	img {
		display: block;
		width: 100%;
		max-width: 400px;
		margin: 20px auto;
	}
	p {
		padding-bottom: 16px;
		line-height: 1.7;
	}

	main {
		width: 100%;
		max-width: 700px;
		margin: 20px auto;
		padding: 20px;
		box-shadow: 0 0 1px gray;
		color: white;
	}
	.tool-bar {
		display: flex;
		flex-wrap: wrap;
		gap: 1px;
	}
	.tool-bar button {
		height: 30px;
		width: 30px;
		border-radius: 2px;
		cursor: pointer;
		margin-right: 2px;
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
		margin-right: 2px;
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
