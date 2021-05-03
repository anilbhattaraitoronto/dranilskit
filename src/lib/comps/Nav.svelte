<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
</script>

<div class="nav-container">
	<div class="nav">
		<a sveltekit:prefetch href="/">
			<h2 class="masthead">🏠</h2>
		</a>

		<nav>
			<a href="/cv" class="nav-link cv-link" class:active={$page.path === '/cv'}>CV</a>
			<a href="/accounts" class="nav-link" class:active={$page.path === '/accounts'}>Account</a>
		</nav>
	</div>
</div>

<header>
	<div class="masthead-container">
		<h1>Anil Bhattarai</h1>
		<p>Perennially learning</p>
	</div>
</header>

<style>
	header {
		max-width: 1100px;
		margin: auto;
	}
	.nav-container {
		background: var(--main-blue);
		width: 100%;
		margin: auto;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}
	.nav {
		width: 100%;
		max-width: 1200px;
		margin: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;

		background: var(--main-blue);
	}
	nav a.active {
		background: white;
		color: var(--main-blue);
		border-color: var(--main-blue);
	}
	.masthead {
		color: #250d05;
		background: white;
		text-align: center;
		transition: 200ms all ease-in-out;
		height: 60px;
		width: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		border: 1px solid rgb(240, 234, 231);
		border-radius: 50%;
		font-size: 1em;
	}
	.masthead::after {
		display: block;
		content: 'dr-anil.com';
		font-size: 0.5em;
		color: black;
		font-weight: 600;
	}
	h2:hover {
		border-color: rgb(255, 196, 0);
	}
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.nav-link {
		display: inline-block;
		border: 1px solid var(--main-white);
		background: var(--main-dark);
		color: var(--main-white);
		text-align: center;
		transition: 200ms all ease-in-out;
		margin-left: 2px;
		cursor: pointer;
		font-size: 0.8em;
		width: 85px;
		text-decoration: none;
		text-transform: uppercase;
	}
	.nav-link:hover,
	nav a.active {
		background: white;
		color: var(--main-blue);
	}
	.masthead-container {
		max-width: 750px;
		margin: auto;
		padding: 60px 0;
	}
	.masthead-container h1 {
		color: var(--main-yellow);
		font-weight: 200;
	}
	.masthead-container p {
		color: var(--main-white);
	}
	.category-nav {
		padding: 4px 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	.topic-link.topic-link-title {
		color: white;
		text-transform: uppercase;
	}
	.topic-link:nth-child(odd) {
		text-decoration: none;
		color: var(--main-white);
		padding: 0 8px;
		margin-right: 8px;
		margin-bottom: 4px;
		font-size: 0.9em;
		border-right: 1px solid white;
		border-top-right-radius: 4px;
	}
	.topic-link:nth-child(even) {
		text-decoration: none;
		color: var(--main-yellow);
		padding: 0 8px;
		margin-right: 8px;
		margin-bottom: 4px;
		font-size: 0.9em;
		border-right: 1px solid white;
		border-top-right-radius: 4px;
	}
	.topic-link:hover {
		text-decoration: underline;
	}
</style>
