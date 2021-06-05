<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
</script>

<div class="nav-container">
	<div class="nav">
		<a sveltekit:prefetch href="/">
			<h2 class="masthead">🏠</h2>
		</a>
		<div>
			<a href="/"><h1>Anil Bhattarai</h1></a>
		</div>
	</div>
</div>

<header />

<style>
	header {
		max-width: 900px;
		margin: auto;
		padding: 20px;
	}
	.nav-container {
		background: var(--main-blue);
		width: 100%;
		margin: auto;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		padding: 10px 0;
	}
	.nav {
		width: 100%;
		max-width: 900px;
		margin: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;

		background: var(--main-blue);
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

	h1 {
		color: var(--main-yellow);
		font-weight: 200;
		padding-right: 12px;
		font-size: 1.6em;
	}
	h1::after {
		content: 'Learning never stops';
		display: block;
		font-size: 0.5em;
		letter-spacing: 1px;
		text-align: right;
		color: var(--main-white, white);
		font-style: italic;
		margin-top: -6px;
		transition: var(--main-transition);
	}
	h1:hover {
		color: yellow;
	}
</style>
