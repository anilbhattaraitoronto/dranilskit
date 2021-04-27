<script>
	export let items;
	export let itemTitle;
	export let itemIcon;
	import { fly } from 'svelte/transition';
</script>

<main>
	<h2 in:fly={{ y: -40, duration: 1000 }}>{itemTitle} {itemIcon}</h2>
	{#each items as item}
		<article class="item">
			<h3>{item.title}</h3>
			<h4>{item.subtitle}</h4>
			<ul>
				{#each item.details as detail}
					<li>{@html detail}</li>
				{/each}
			</ul>
		</article>
	{/each}
</main>

<style>
	main {
		border-bottom: 1px solid lightgray;
	}
	h2 {
		text-transform: uppercase;
		color: rgb(118, 114, 114);
		font-size: 1.1em;
		letter-spacing: 1px;
	}
	.item {
		margin: 12px auto;
		line-height: 1.2;
		padding: 4px;
	}
	.item:nth-child(even) {
		background: rgb(241, 247, 242);
		box-shadow: 1px 1px rgb(240, 235, 235);
	}
	h3 {
		letter-spacing: 1px;
		color: rgb(61, 58, 58);
		font-size: 1.1em;
	}
	h4 {
		color: rgb(84, 81, 81);
		font-size: 1em;
	}
	ul {
		list-style: square;
		padding: 0 16px;
		font-size: 0.9em;
	}
</style>
