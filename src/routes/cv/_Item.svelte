<script>
	export let items;
	export let itemTitle;
	export let itemIcon;
	import { fly, fade } from 'svelte/transition';
</script>

<main in:fly={{ x: 5, duration: 500, opacity: 1 }}>
	<h2>{itemTitle} {itemIcon}</h2>
	{#each items as item}
		<article class="item">
			<h3>{item.title}</h3>
			<h4>{item.subtitle}</h4>
			<ul>
				{#each item.details as detail}
					<li>{@html detail}</li>
				{/each}
			</ul>
			{#if item.link}
				<p><a href={item.link} target="_blank" class="work-link">Live Link</a></p>
			{/if}
		</article>
	{/each}
</main>

<style>
	main {
		border-bottom: 1px solid lightgray;
	}
	h2 {
		text-transform: uppercase;
		color: rgb(255, 255, 255);
		font-size: 1.1em;
		letter-spacing: 1px;
	}
	.item {
		margin: 12px auto;
		line-height: 1.5;
		padding: 4px;
		color: white;
	}

	h3 {
		letter-spacing: 1px;
		/* color: rgb(7, 114, 19); */
		color: var(--main-yellow);
		font-size: 1.1em;
	}
	h4 {
		color: rgb(211, 209, 209);
		font-size: 1em;
	}
	ul {
		list-style: square;
		padding: 0 16px;
		font-size: 0.9em;
	}
	p a {
		color: limegreen;
	}
	p a:hover {
		color: rgb(198, 236, 120);
	}
</style>
