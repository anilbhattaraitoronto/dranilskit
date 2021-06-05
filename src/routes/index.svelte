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
		'RDBMS (SQL)'
	];
	const humanLanguageList = ['Nepali', 'English', 'Hindi', 'French', 'Bhojpuri', 'Spanish'];
	$: numOfLang = humanLanguageList.length;
</script>

<svelte:head>
	<title>Welcome | dr-anil.com</title>
</svelte:head>

<main>
	<div class="bio">
		<div class="bio-content">
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
					<a
						rel="external"
						target="_blank"
						no-referrer
						href="https://github.com/anilbhattaraitoronto">GitHub</a
					>
				</div>
			</nav>
			<ul class="profile-list">
				<h3 class="profile-list-title">I am,</h3>
				<img src="/anilbh.jpg" alt="Anil Bhattarai" title="Anil Bhattarai" />
				<li>A diligent and self-motivated fullstack developper</li>
				<li>
					Sharp in analytical skills to understand problems and come up with effective and efficient
					solutions
				</li>
				<li>
					Highly competent in:
					<ul class="language-list">
						{#each languageList as language}
							<li>{language}</li>
						{/each}
					</ul>
				</li>
				<li>Competent in fundamentals of component based UI programming</li>
				<li>
					Able to communicate in <strong>{numOfLang} human languages</strong>:
					<ul class="language-list">
						{#each humanLanguageList as language}
							<li>{language}</li>
						{/each}
					</ul>
				</li>

				<li>Always learning</li>
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
		/* background: rgb(111, 74, 199); */
		margin-bottom: 20px;
		position: absolute;
		top: 1px;
		left: 0;
		right: 0;
	}
	.links h2 {
		color: var(--main-blue);
		padding-left: 4px;
		letter-spacing: 0;
		word-spacing: 3px;
	}
	.links a {
		display: inline-block;
		margin-right: 3px;
		box-shadow: 1px 0 0 rgb(105, 103, 103);
		color: var(--main-blue);
		padding: 0 6px;
		font-size: 1em;
		text-align: right;
	}
	.links a:hover {
		color: darkblue;
	}

	.bio-content {
		position: relative;
		display: grid;
		max-width: 630px;
		margin: 0 auto;
		background: rgb(245, 244, 247);
		padding: 30px;
	}

	img {
		display: inline;
		float: left;
		height: 140px;
		width: 140px;
		border-radius: 50%;
		/* clear: left; */
		shape-outside: circle();
		margin: 8px 12px 12px 0;
	}
	h2 {
		text-transform: uppercase;
		word-spacing: 6px;
		font-size: 1em;
		width: max-content;
		padding: 4px 0;
		letter-spacing: 1px;
		font-weight: 600;
		color: var(--main-white, white);
	}

	a {
		text-decoration: none;
		transition: 200ms all ease-in;
	}
	a:hover {
		text-decoration: underline;
	}
	.profile-list {
		list-style: none;
		padding: 20px 4px 60px 8px;
		margin-bottom: 0;
		position: relative;
		border-radius: 8px;
	}
	.profile-list-title {
		font-weight: 700;
		color: rgb(0, 1, 0);
		font-weight: 400;
		text-decoration: underline;
	}

	li {
		padding-bottom: 16px;
		margin-bottom: 8px;
		color: var(--main-dark, black);
		line-height: 1.3;
		font-family: Arial;
		word-spacing: 2px;
	}

	.language-list {
		margin: 8px 0;
		padding: 8px 4px;
		background: rgb(232, 228, 228);
	}
	.language-list > li {
		margin: 2px 8px 2px 0;
		color: var(--main-white, white);
		list-style-type: none;
		cursor: pointer;
		transition: 250ms all ease-in-out;
		display: inline-block;
		background: var(--main-blue);
		padding: 3px 8px;
		font-size: 0.85em;
	}

	.full-cv-link {
		background: var(--main-dark, black);
		padding: 8px 16px;
		border: 1px solid transparent;
		text-align: right;
		position: absolute;
		bottom: -20px;
		right: 0;
		font-size: 0.9em;
		color: limegreen;
	}
	.cv-pdf-link {
		color: limegreen;
		position: absolute;
		bottom: -20px;
		left: 0;
		background: var(--main-dark, black);
		border: 1px solid transparent;
		/* border-radius: 4px; */
		font-size: 0.9em;
		padding: 8px 16px;
	}
	.full-cv-link:hover,
	.cv-pdf-link:hover {
		background: var(--main-blue);
		color: var(--main-white, white);
		border-color: var(--main-yellow, yellow);
	}
	@media (max-width: 600px) {
		.bio-content {
			grid-template-columns: 1fr;
			padding: 30px 8px;
		}
	}
</style>
