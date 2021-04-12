<script>
	export let items;
	export let itemTitle;
	export let itemIcon;
</script>

<main>
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
		font-size: 1.2em;
		letter-spacing: 1px;
	}
	.item {
		margin-top: 20px;
		padding-bottom: 20px;
		line-height: 1.4;
	}
	h4 {
		color: rgb(121, 116, 116);
	}
	ul {
		list-style: square;
		padding: 0 16px;
	}
</style>
