<script context="module">
	export async function load({ page, fetch, session }) {
		const res = await fetch(`/blogs/${page.params.id}_${page.params.slug}.json`);
		if (res.ok) {
			return {
				props: {
					article: await res.json()
				}
			};
		}
		return {
			status: res.status,
			error: new Error(`Could not load the data url`)
		};
	}
</script>

<script>
	export let article;

	import { goto } from '$app/navigation';
	let post = {
		title: 'My first article'
	};
	function deletePost(id) {
		console.log('article deleted');
		goto('/');
		fetch(`/blogs/delete/${id}.json`, {
			method: `DELETE`
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((data) => {
				console.log(data);
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
		<h2>{article.article.title}</h2>
		<img src={article.article.thumbnail_url} alt="" />

		<div class="content">
			<p>
				{@html article.article.content}
			</p>

			<p><em>Posted:</em> {article.article.posted_date}</p>
			<p><em>Updated:</em> {article.article.updated_date}</p>
		</div>
		<details>
			<summary>Delete the post?</summary>
			<button on:click={() => deletePost(article.article.blog_id)}>Are you sure?</button>
		</details>
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
