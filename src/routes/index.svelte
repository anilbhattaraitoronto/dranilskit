<script>
	const languageList = [
		'HTML',
		'CSS',
		'JavaScript',
		'Python',
		'Nodejs',
		'Expressjs',
		'Django',
		'Svelte',
		'Sveltekit',
		'RDMS (SQL)'
	];
	const humanLanguageList = ['Nepali', 'English', 'Hindi', 'French', 'Bhojpuri', 'Spanish'];
	$: numOfLang = humanLanguageList.length;
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
			<ul class="profile-list">
				<img src="/anilbh.jpg" alt="Anil Bhattarai" title="Anil Bhattarai" />
				<li>A diligent and self-motivated fullstack developper</li>
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
					Intermediate to advanced competency in <strong>{numOfLang} human languages</strong>:
					<ul class="language-list">
						{#each humanLanguageList as language}
							<li>{language}</li>
						{/each}
					</ul>
				</li>

				<li>Joyful attitude towards learning</li>
				<a href="/cv" class="full-cv-link">Full CV</a>

				<a href="/ab_resume_main.pdf" class="cv-pdf-link" noreferrer target="_blank">CV in PDF</a>
			</ul>
		</div>
	</div>
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
		justify-content: space-between;
		align-items: center;
		background: #4219a2;
		margin-bottom: 2px;
	}
	.links a {
		display: inline-block;
		margin-right: 3px;
		box-shadow: 1px 0 0 rgb(105, 103, 103);
		color: rgb(41, 213, 41);
		padding: 0 6px;
		font-size: 1em;
		text-align: right;
	}
	.links a:hover {
		color: var(--main-white, white);
	}

	.bio-content {
		line-height: 1.6;
		display: grid;
		/* grid-template-columns: 220px 1fr; */
		gap: 8px;
		/* background: #4219a2; */
		margin-bottom: 20px;
	}
	.bio-content .bio-image-container {
		order: 1;
		width: 100%;
		max-width: 300px;
	}
	.bio-content ul {
		order: 2;
		flex-grow: 2;
	}
	img {
		display: inline;
		float: left;
		height: 140px;
		width: 140px;
		border-radius: 50%;
		/* clear: left; */
		shape-outside: polygon(
			34.48% 7.46%,
			60.9% 13px,
			82.42% 27.15%,
			87.63% 54.15%,
			67.31% 81.71%,
			30.01% 104.73%,
			7.85% 69.86%,
			8.36% 30.98%
		);
		margin: 8px 16px 16px 0;
	}
	h2 {
		text-transform: uppercase;
		word-spacing: 6px;
		font-size: 1em;
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
	.profile-list {
		list-style: none;
		padding: 40px 20px 60px 20px;
		margin-bottom: 0;
		position: relative;
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
	}
	.language-list {
		margin: 20px;
		padding: 20px;
		box-shadow: 0 0 1px rgba(255, 255, 255, 0.146);
	}
	.language-list > li {
		margin: 2px 12px 2px 0;
		color: var(--main-white, white);
		list-style-type: none;
		cursor: pointer;
		transition: 250ms all ease-in-out;
		display: inline-block;
		background: var(--main-dark);
		padding: 3px 8px;
		border-radius: 8px;
		font-size: 0.85em;
	}
	.language-list > li:hover {
		color: limegreen;
	}
	.language-list > li::before {
		content: '';
		padding: 0;
	}
	.full-cv-link {
		background: var(--main-dark, yellow);
		padding: 0 16px;
		border: 1px solid transparent;
		border-radius: 4px;
		text-align: right;
		position: absolute;
		bottom: 0;
		right: 0;
		font-size: 0.8em;
		color: limegreen;
	}
	.cv-pdf-link {
		color: limegreen;
		position: absolute;
		bottom: 0;
		left: 0;
		background: var(--main-dark, black);
		border: 1px solid transparent;
		border-radius: 4px;
		font-size: 0.8em;
		padding: 0 16px;
	}
	.full-cv-link:hover,
	.cv-pdf-link:hover {
		background: var(--main-blue);
		color: var(--main-white, white);
		border-color: var(--main-yellow, yellow);
	}
	@media (max-width: 850px) {
		.bio-content {
			grid-template-columns: 1fr;
		}
		img {
			display: inline;
			float: left;
			clear: both;
			shape-outside: circle();
		}
	}
</style>
