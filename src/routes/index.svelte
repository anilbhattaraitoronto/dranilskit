<script>
	const languageList = ['HTML', 'CSS', 'JavaScript', 'Python'];
	const humanLanguageList = ['Nepali', 'English', 'Hindi', 'French', 'Bhojpuri', 'Spanish'];
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>

<main>
	<div class="bio">
		<nav class="links">
			<h2>About Me</h2>
			<div>
				<a href="/cv" class="cv-link">CV</a>
				<a
					rel="external"
					target="_blank"
					no-referrer
					href="https://www.linkedin.com/in/anil-bhattarai-5a699b28/"
					>LinkedIn
				</a>
				<a rel="external" target="_blank" no-referrer href="https://github.com/anilbhattaraitoronto"
					>GitHub</a
				>
			</div>
		</nav>
		<div class="bio-content">
			<ul>
				<li>A diligent, and self-motivated fullstack developper</li>
				<li>
					High competence in:
					<ul class="language-list">
						{#each languageList as language}
							<li>{language}</li>
						{/each}
					</ul>
				</li>
				<li>Good competence in fundamentals of component based UI programming</li>
				<li>
					Intermediate to advanced competency in <strong>6 human languages</strong>:
					<ul class="language-list">
						{#each humanLanguageList as language}
							<li>{language}</li>
						{/each}
					</ul>
				</li>

				<li>Joyful attitude towards learning</li>
				<a href="/cv" class="full-cv-link">Full CV</a>
			</ul>
			<div>
				<img src="/anilbh.jpg" alt="Anil Bhattarai" title="Anil Bhattarai" />
			</div>
		</div>
	</div>

	<!-- <div class="article-container">
		<h2>Latest Blogs</h2>
		{#if articles.articles.length > 0}
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
	</div> -->
</main>

<style>
	main {
		width: 100%;

		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr;
		padding: 0;
		color: white;
	}
	.bio {
		padding: 0 8px;
	}

	.links {
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: #4219a2;
		margin-bottom: 16px;
	}
	.links a {
		display: inline-block;
		margin-right: 3px;
		box-shadow: 1px 0 0 rgb(105, 103, 103);
		color: var(--main-white, yellow);
		padding: 0 6px;
		font-size: 1em;
		text-align: right;
	}
	.links a:hover {
		color: var(--main-yellow, yellow);
	}

	.bio-content {
		line-height: 1.6;
		display: grid;
		grid-template-columns: 3fr 1fr;
		grid-column-gap: 20px;
	}

	h2 {
		text-transform: uppercase;
		word-spacing: 6px;
		font-size: 1.2em;
		width: max-content;
		padding: 4px 0;
		letter-spacing: 1px;
		font-weight: 500;
		color: var(--main-white, white);
	}

	a {
		text-decoration: none;
		transition: 200ms all ease-in;
	}
	a:hover {
		text-decoration: underline;
	}

	p {
		max-width: 100vw;
		margin: 8px auto;
		line-height: 1.25;
	}
	ul {
		list-style: none; /* Remove list bullets */
		padding: 0;
		margin: 0;
	}

	li {
		padding-left: 4px;
		margin-bottom: 16px;
		color: var(--main-yellow, yellow);

		line-height: 1.4;
	}

	li::before {
		content: '✼';
		padding-right: 4px;
		color: var(--main-yellow, yellow);
		/* font-weight: 600; */
	}
	.language-list {
		font-size: 0.9em;
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 0 6px;
	}
	.language-list > li {
		margin: 2px 2px 2px 0;
		color: var(--main-white, white);
		list-style-type: none;
		cursor: pointer;
		transition: 250ms all ease-in-out;
	}
	.language-list > li:hover {
		color: var(--main-dark);
	}
	.language-list > li::before {
		content: '';
		padding: 0;
	}
	.full-cv-link {
		background: var(--main-yellow, yellow);
		color: black;
		padding: 2px 16px;
		border: 1px solid transparent;
		border-radius: 4px;
	}
	.full-cv-link:hover {
		background: var(--main-blue);
		color: var(--main-white, white);
		border-color: var(--main-yellow, yellow);
	}
	@media (max-width: 850px) {
		.bio-content {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 550px) {
		img {
			padding: 16px 0;
			width: 100%;
			margin: auto;
		}
	}
</style>
