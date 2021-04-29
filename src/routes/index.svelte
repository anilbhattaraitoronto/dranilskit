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
	import { session } from '$app/stores';
	export let articles = null;
	import { fly, fade } from 'svelte/transition';
	import { browser } from '$app/env';
	if (browser) {
		setTimeout(() => {
			$session.message = null;
		}, 3000);
	}
	const languageList = ['HTML', 'CSS', 'JavaScript', 'Python'];
	const humanLanguageList = ['Nepali', 'English', 'Hindi', 'French', 'Bhojpuri', 'Spanish'];
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>
{#if $session.message}
	<p>{$session.message}</p>
{/if}
<main>
	<div class="cv">
		<!-- <img src="/anilbh.jpg" alt="Anil Bhattarai" title="Anil Bhattarai" /> -->
		<div class="bio">
			<header>
				<nav class="links">
					<a href="/cv" class="cv-link">CV</a>
					<a
						rel="external"
						target="_blank"
						no-referrer
						href="https://www.linkedin.com/in/anil-bhattarai-5a699b28/"
						>LinkedIn
					</a>
					<a
						rel="external"
						target="_blank"
						no-referrer
						href="https://github.com/anilbhattaraitoronto">GitHub</a
					>
				</nav>
			</header>

			<div class="bio-content">
				<h2 in:fly={{ x: -200, duration: 2000 }}>Anil Bhattarai</h2>
				<ul>
					<li>A highly diligent, and self-motivated fullstack developper</li>
					<li>
						High competence in:
						<ul class="language-list">
							{#each languageList as language}
								<li>{language}</li>
							{/each}
						</ul>
					</li>
					<li>High competence in fundamentals of component based UI programming</li>
					<li>
						Intermediate to advanced competency in <strong>6 human languages</strong>:
						<ul class="language-list">
							{#each humanLanguageList as language}
								<li>{language}</li>
							{/each}
						</ul>
					</li>

					<li>Joyful attitude towards learning</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="blogs">
		<div class="jumbo-header">
			<div class="jumbo-content">
				<h2>Welcome</h2>
				<p>Musings on everything: from unfathomably big to incredibly small!</p>
			</div>
		</div>
		{#if articles && articles.articles.length > 0}
			<h2>Latest Blogs</h2>
			{#each articles.articles as article}
				<div class="article">
					<p class="category-link-container">
						<a href="/blogs/category/{article.category_id}_{article.category}" class="category-link"
							>#{article.category}</a
						>
						| <span>{new Date(article.posted_date).toDateString()}</span>
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
		max-width: 1100px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 240px 1fr;
		grid-column-gap: 20px;
		padding: 20px 0;
	}
	.bio {
		padding: 8px;
		background: var(--main-white);
		box-shadow: 1px 1px 0 rgb(239, 235, 244);
	}
	img {
		display: block;
		width: 100%;
		max-height: 200px;
		object-fit: cover;
		margin-bottom: 16px;
	}
	.links {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.links > a {
		display: inline-block;
		margin-right: 3px;
		box-shadow: 0 0 1px var(--main-blue);
		color: var(--main-blue);
		padding: 0 6px;
		font-size: 1em;
		text-align: right;
	}

	.bio-content > p {
		line-height: 1.6;
	}
	.jumbo-header {
		min-height: 350px;
		background: var(--main-blue);
		background-image: url('/jumbo_image.jpg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
	}
	.jumbo-content {
		background: rgba(75, 73, 73, 0.201);
		width: 100%;
		margin: auto;
		padding: 50px 10px;
	}
	.jumbo-content h2 {
		color: var(--main-yellow);
		font-weight: 600;
	}
	.jumbo-content p {
		color: var(--main-white);
		font-style: italic;
	}
	.article {
		padding: 8px 0;
		border-bottom: 1px solid rgb(238, 232, 232);
		margin: 16px auto;
	}
	.category-link-container > span {
		background: black;
		color: white;
		padding: 0 8px;
		font-size: 0.9em;
		font-style: italic;
	}
	h2 {
		text-transform: uppercase;
		word-spacing: 6px;
		font-size: 1.4em;
		width: max-content;
		padding: 4px 0;
		letter-spacing: 1px;
		font-weight: 500;
	}
	.blogs > h2 {
		border-bottom: 1px solid var(--secondary-blue);
		width: 100%;
	}

	h3 > a {
		color: rgb(63, 58, 67);
	}
	a {
		text-decoration: none;
		transition: 200ms all ease-in;
	}
	a:hover {
		text-decoration: underline;
	}
	.read-full-link {
		color: black;
		padding: 2px 16px;
		background: rgb(247, 244, 244);
		border: 1px solid rgb(152, 147, 147);
		font-size: 0.8em;
		letter-spacing: 1px;
	}
	.read-full-link:hover {
		background: white;
		color: black;
		border-color: black;
		font-size: 0.9em;
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
		color: rgb(51, 59, 51);
	}
	ul {
		list-style: none; /* Remove list bullets */
		padding: 0;
		margin: 0;
	}

	li {
		padding-left: 4px;
		margin-bottom: 16px;
		background: white;
		line-height: 1.4;
	}

	li::before {
		content: '✼';
		padding-right: 4px;
		color: var(--main-blue);
		font-weight: 600;
	}
	.language-list {
		font-size: 0.9em;
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 0 6px;
	}
	.language-list > li {
		margin: 2px;
		background: var(--main-white);
		color: var(--main-blue);
		list-style-type: none;
	}
	.language-list > li::before {
		content: '';
		padding: 0;
	}

	@media (max-width: 650px) {
		main {
			grid-template-columns: 1fr;
			padding: 8px 0;
		}
		.cv {
			border-bottom: 1px solid rgb(225, 221, 221);
		}
		.blogs {
			padding: 30px 0;
		}
		img {
			padding-bottom: 16px;
			width: 100%;
			margin: auto;
		}
		.article {
			margin: 8px auto;
		}
		.jumbo-header {
			height: 200px;
		}
	}
</style>
