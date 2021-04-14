<div class="page">
	<h2 class="masthead">My CV</h2>

	<main>
		<nav class="cv-menu">
			<a sveltekit:prefetch href="/cv">Profile</a>

			<a sveltekit:prefetch href="/cv/work">Works</a>
			<a sveltekit:prefetch href="/cv/skills">Skills</a>
			<a sveltekit:prefetch href="/cv/education">Education</a>
		</nav>

		<div class="slot">
			<slot />
		</div>
	</main>
</div>

<style>
	.page {
		width: 100%;
		max-width: 700px;
		margin: auto;
	}
	.masthead {
		text-align: center;
		padding: 20px 0;
	}
	main {
		display: grid;
		grid-template-columns: 1fr 3fr;
		align-content: start;
	}

	.cv-menu {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		text-align: right;
		margin-right: 24px;
	}

	a {
		padding-bottom: 24px;
		text-decoration: none;
		text-transform: uppercase;
		font-size: 0.8em;
		color: rgba(3, 48, 3, 0.844);
		font-weight: 600;
	}
	a:hover {
		text-decoration: underline;
	}
	@media (max-width: 600px) {
		main {
			grid-template-columns: 1fr;
		}
		.masthead {
			padding: 3px 0;
		}
		.cv-menu {
			flex-direction: row;
			justify-content: center;
			flex-wrap: wrap;
			padding: 0;
		}
		a {
			display: inline-block;
			padding: 0 4px;
			box-shadow: 1px 0 0 rgb(201, 196, 196);
			border-top-right-radius: 4px;
			margin-left: 2px;
		}
	}
</style>
