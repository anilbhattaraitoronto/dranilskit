<script>
	import { page } from '$app/stores';
</script>

<div class="page">
	<h2 class="masthead">My CV</h2>

	<main>
		<nav class="cv-menu">
			<a href="/cv" class:active={$page.path === '/cv'}>Profile</a>

			<a href="/cv/work" class:active={$page.path === '/cv/work'}>Works</a>
			<a href="/cv/skills" class:active={$page.path === '/cv/skills'}>Skills</a>
			<a href="/cv/education" class:active={$page.path === '/cv/education'}>Education</a>
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
		justify-content: baseline;
		align-items: flex-end;
		text-align: right;
		margin-right: 24px;
		background: var(--main-white);
	}

	a {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		max-width: 100px;
		padding: 4px;
		text-decoration: none;
		text-transform: uppercase;
		font-size: 0.8em;
		color: var(--main-blue);
		font-weight: 600;
		border-bottom: 1px solid transparent;
		transition: 250ms all ease-in-out;
		letter-spacing: 1px;
		margin-bottom: 24px;
	}
	a:hover {
		color: purple;
	}
	a.active {
		border-bottom-color: var(--main-blue);
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
