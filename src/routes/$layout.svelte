<script context="module">
	export async function load({ session }) {
		if (session.categories) {
			return {
				props: {
					categories: session.categories
				}
			};
		}
	}
</script>

<script>
	import '../app.css';
	import Nav from '$lib/comps/Nav.svelte';

	import { session } from '$app/stores';
	export let categories;
	if ($session.categories) {
		categories = $session.categories;
	}
</script>

<header>
	<Nav />
</header>

<div class="app-wrapper">
	<div class="category-container">
		{#if categories}
			<nav class="category-nav">
				<span class="topic-link topic-link-title">Topics:</span>
				{#each categories as category}
					<a href="/blogs/category/{category.category_id}_{category.name}" class="topic-link"
						>{category.name}</a
					>
				{/each}
			</nav>
		{/if}
	</div>
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
	}
	.category-nav {
		padding: 4px 0;
		background: lightgray;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-starg;
		align-items: center;
	}
	.topic-link.topic-link-title {
		color: rgb(131, 74, 4);
		text-transform: uppercase;
	}
	.topic-link:nth-child(odd) {
		text-decoration: none;
		color: var(--main-blue);
		padding: 0 2px;
		margin-right: 8px;
		margin-bottom: 4px;
		font-size: 0.9em;
		border-right: 1px solid white;
		border-top-right-radius: 4px;
	}
	.topic-link:nth-child(even) {
		text-decoration: none;
		color: var(--main-black);
		padding: 0 2px;
		margin-right: 8px;
		margin-bottom: 4px;
		font-size: 0.9em;
		border-right: 1px solid white;
		border-top-right-radius: 4px;
	}
	.topic-link:hover {
		text-decoration: underline;
	}

	header {
		background: var(--main-blue);
		padding: 0 4px;
		position: sticky;
		top: 0;
		z-index: 100;
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
