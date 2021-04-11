<script context="module">
	export async function load({ session }) {
		const user = session.user;
		if (user) {
			return {
				props: {
					user
				}
			};
		}
		return {};
	}
</script>

<script>
	import '../app.css';
	import Nav from '$lib/comps/Nav.svelte';
	export let user;
</script>

<div class="app-wrapper">
	<header>
		<Nav {user} />
	</header>

	<main class="main-content">
		<div class="page">
			<slot />
		</div>
	</main>
	<footer>
		<p>&copy; Dr Anil Bhattarai. 2021 - Present. All Rights Reserved.</p>
	</footer>
</div>

<style>
	.app-wrapper {
		min-height: 100vh;
		position: relative;
	}
	header {
		background: rgb(250, 249, 249);
		box-shadow: 0 1px 0 rgb(242, 236, 236);
		padding: 0 4px;
		position: sticky;
		top: 0;
	}
	main {
		min-height: 86vh;
		overflow: auto;
		width: 100%;
		max-width: 1100px;
		margin: auto;
		padding: 0.7em 1em;
	}
	footer {
		text-align: center;
		font-size: 0.9em;
		padding: 8px 0;
		min-height: 3vh;
		background: rgb(249, 241, 238);
		box-shadow: 0 -1px 0 rgb(215, 211, 211);
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		margin: auto;
	}
</style>
