<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(`/index.json`);
		if (res.ok) {
			return {
				props: {
					articles: await res.json()
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
	<div class="cv">
		<img src="/anilbh.jpg" alt="Anil Bhattarai" title="Anil Bhattarai" />
		<div class="bio">
			<header>
				<nav class="links">
					<a href="/cv" class="cv-link">CV</a>
					<a rel="external" href="https://www.linkedin.com/in/anil-bhattarai-5a699b28/"
						>LinkedIn
					</a>
					<a rel="external" href="https://github.com/anilbhattaraitoronto">GitHub</a>
				</nav>
			</header>

			<div class="bio-content">
				<h2>Anil Bhattarai</h2>
				<p>
					A highly diligent, and self-motivated information technology professional who has been
					designing and building full stack web applications since 2018. Intermediate to advanced
					level competence in two human languages (French and Spanish) and two computer languages
					(JavaScript and Python). Key strengths include joyful attitude towards learning, effective
					communication (written and verbal), and able to deliver projects through timely and
					efficient processes and effective planning always with consideration of end users.
				</p>
			</div>
		</div>
	</div>
	<div class="blogs">
		{#if latestArticles.length > 0}
			<h2>Latest Blogs</h2>
			{#each latestArticles as article}
				<div class="article">
					<p class="category-link-container">
						<a href="/blogs/category/{article.category_id}_{article.category}" class="category-link"
							>#{article.category}</a
						>
					</p>
					<h3><a href="/blogs/{article.blog_id}_{article.slug}">{article.title}</a></h3>
					<p>
						{article.summary.replace(/<[^>]*>/g, '')} ...
						<a
							sveltekit:prefetch
							href="/blogs/{article.blog_id}_{article.slug}"
							class="read-full-link">full</a
						>
					</p>
				</div>
			{/each}
		{:else}
			<p>No article yet but they will come soon....</p>
		{/if}
	</div>
</main>

<style>
	main {
		width: 100%;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-column-gap: 20px;
	}
	img {
		display: block;
		width: 100%;
		/* padding: 8px 0; */
	}
	.links {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 8px 0;
	}
	.links > a {
		display: inline-block;
		margin-left: 6px;
		background: rgb(92, 126, 92);
		color: white;
		padding: 0 6px;
		font-size: 0.8em;
		text-align: right;
	}
	.links > .cv-link {
		background: rgb(172, 167, 167);
		color: red;
	}

	.bio-content > p {
		line-height: 1.7;
		padding: 8px 0;
	}

	.article {
		padding: 8px 0;
		border-bottom: 1px solid rgb(238, 232, 232);
		margin: 16px auto;
	}
	h2 {
		text-transform: uppercase;
		word-spacing: 6px;
		/* padding: 4px 0; */
		font-size: 1.2em;
	}

	h3 > a {
		color: rgb(96, 93, 93);
	}
	a {
		text-decoration: none;
		transition: 200ms all ease-in;
	}
	a:hover {
		text-decoration: underline;
	}
	.read-full-link {
		color: green;
		padding: 2px 16px;
		border-radius: 20px;
		border: 1px solid rgba(0, 128, 0, 0.358);
		font-size: 0.8em;
	}
	.read-full-link:hover {
		background: white;
		color: green;
		border-color: rgba(247, 182, 182, 0.269);
	}
	p {
		max-width: 100vw;
		margin: 8px auto;
		line-height: 1.25;
	}
	.category-link-container {
		line-height: 0.2;
		padding: 0;
	}
	.category-link {
		color: rgb(89, 124, 89);
	}
	@media (max-width: 650px) {
		.cv {
			border-bottom: 1px solid rgb(225, 221, 221);
		}
		.blogs {
			padding: 30px 0;
		}
		img {
			padding: 0 32px 16px 0;
			width: 100%;
			margin: auto;
		}
	}
</style>
