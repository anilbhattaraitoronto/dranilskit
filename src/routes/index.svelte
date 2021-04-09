<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(`/index.json`);
		if (res.ok) {
			return {
				props: {
					articles: await res.json()
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
	export let articles;
	let latestArticles;
	if (articles) {
		latestArticles = articles['articles'];
	}
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>
<main>
	<img src="/anilbh.jpg" alt="Anil Bhattarai" title="Anil Bhattarai" />
	{#if latestArticles.length > 0}
		{#each latestArticles as article}
			<div class="article">
				<h2><a href="/posts/{article.id}-{article.slug}">{article.title}</a></h2>
				<p>
					{article.summary}...<a href="/posts/{article.id}-{article.slug}" class="read-full-link"
						>Read full</a
					>
				</p>
			</div>
		{/each}
	{:else}
		<p>No article yet but they will come soon....</p>
	{/if}
</main>

<style>
	main {
		width: 100%;
		margin: 0 auto;
	}
	.article {
		padding: 20px 0;
		border-bottom: 1px solid rgb(232, 228, 228);
	}
	h2 {
		color: rgb(41, 39, 39);
	}
	a {
		text-decoration: none;
		color: rgb(41, 39, 39);
		transition: 200ms all ease-in;
	}
	a:hover {
		text-decoration: underline;
	}
	.read-full-link {
		color: white;
		background: red;
		padding: 2px 16px;
		border-radius: 20px;
		border: 1px solid transparent;
	}
	.read-full-link:hover {
		background: white;
		color: red;
		border-color: rgba(247, 182, 182, 0.269);
	}
	p {
		max-width: 100vw;
		margin: 2rem auto;
		line-height: 1.35;
	}
</style>
