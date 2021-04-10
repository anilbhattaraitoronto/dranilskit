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
	<div class="cv">
		<img src="/anilbh.jpg" alt="Anil Bhattarai" title="Anil Bhattarai" />
		<div class="bio">
			<h2>Anil Bhattarai</h2>
			<nav class="links">
				<a href="https://www.linkedin.com/in/anil-bhattarai-5a699b28/">LinkedIn</a>
				<a href="https://github.com/anilbhattaraitoronto">GitHub</a>
			</nav>
			<div class="bio-content">
				<p>
					A highly diligent, self-motivated, and fast-learning information technology professional
					who has been designing and building full stack web applications since 2018. Intermediate
					to advanced level competence in two human languages (French and Spanish) and two computer
					languages (JavaScript and Python). Key strengths include joyful attitude towards learning,
					effective communication (written and verbal), and able to deliver projects through timely
					and efficient processes and effective planning always with consideration of end users.
					Keen to leverage information technology and critical analytical and communication skills
					to contribute to sustainable planet with much of social activism, education, and research
					focused on climate change, ecological food systems, and environmental justice.
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
						<a href="/blogs/category/{article.category_id}" class="category-link"
							>#{article.category}</a
						>
					</p>
					<h3><a href="/blogs/{article.blog_id}_{article.slug}">{article.title}</a></h3>
					<p>
						{article.summary}...
						<a href="/blogs/{article.blog_id}_{article.slug}" class="read-full-link">full</a>
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
	.links {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		background: green;
	}
	.links > a {
		display: inline-block;
		margin: 0 16px;
		color: white;
	}
	.bio-content > p {
		line-height: 1.7;
		padding: 20px 0;
	}
	.article {
		padding: 8px 0;
		border-bottom: 1px solid rgb(206, 202, 202);
	}
	h2 {
		color: rgb(91, 88, 88);
		text-transform: uppercase;
		font-weight: 200;
		word-spacing: 12px;
		padding-bottom: 30px;
	}
	h3 {
		color: rgb(169, 163, 163);
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
		font-size: 0.8em;
	}
	.read-full-link:hover {
		background: white;
		color: red;
		border-color: rgba(247, 182, 182, 0.269);
	}
	p {
		max-width: 100vw;
		margin: 1em auto;
		line-height: 1.25;
	}
	.category-link-container {
		line-height: 0.2;
		padding: 0;
	}
	.category-link {
		color: rgb(89, 124, 89);
	}
</style>
