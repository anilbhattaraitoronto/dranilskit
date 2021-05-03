<script>
	import '../app.css';
	import Nav from '$lib/comps/Nav.svelte';
</script>

<header>
	<Nav />
</header>

<div class="app-wrapper">
	<slot />

	<footer>
		<p>&copy; Dr Anil Bhattarai. 2021 - Present. All Rights Reserved.</p>
	</footer>
</div>

<style>
	.app-wrapper {
		min-height: 100vh;
		position: relative;
		padding: 0 20px;
		max-width: 1100px;
		margin: auto;
		background: var(--main-blue);
	}

	header {
		background: var(--main-blue);
		padding: 0 4px;
		z-index: 100;
		position: relative;
		width: 100%;
		margin: auto;
	}

	footer {
		text-align: center;
		font-size: 0.9em;
		padding: 8px 0;
		min-height: 3vh;
		box-shadow: 0 -1px 0 rgb(215, 211, 211);
		margin-top: 20px;
	}
	@media (max-width: 650px) {
		.app-wrapper {
			padding: 0 8px;
		}
	}
	@media (min-width: 1220px) {
		.app-wrapper {
			padding: 0;
		}
	}
</style>
