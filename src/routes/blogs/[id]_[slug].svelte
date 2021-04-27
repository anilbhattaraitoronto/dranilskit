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

	export let article = null;

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
				console.log('deleted the article');
				goto('/');
			})
			.catch((err) => console.log('Error', err));
	}
</script>

<svelte:head>
	<title>{article.article ? article.article.title : ''}</title>
</svelte:head>

{#if article.article}
	<article>
		<h2 in:fly={{ y: -80, duration: 1000 }}>{article.article.title}</h2>
		<img src={article.article.thumbnail_url} alt="" />

		<div class="content">
			<p>
				{@html article.article.content}
			</p>

			<p><em>Posted:</em> {article.article.posted_date}</p>
			<p><em>Updated:</em> {article.article.updated_date}</p>
		</div>
		{#if $session.user && $session.user.is_admin == 1}
			<details>
				<summary>Delete the post?</summary>
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
		max-width: 550px;
		margin: auto;
	}
	h2 {
		padding: 8px 0;
	}
	img {
		display: block;
		width: 100%;
		max-width: 550px;
		margin: 20px auto;
	}
	p {
		padding-bottom: 16px;
		line-height: 1.6;
	}
	button {
		all: unset;
		cursor: pointer;
		margin-bottom: 16px;
		background: white;
		text-align: center;
		display: block;
		border: 1px solid #ff40004f;
		width: 100%;
		max-width: 150px;
		padding: 4px;
		border-radius: 20px;
		z-index: -1;
		transition: 200ms all ease-in-out;
		margin: 20px auto;
	}
	button:hover {
		background: rgb(242, 232, 227);
		border-color: #ff3e00;
	}
</style>
