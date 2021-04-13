<script>
	import Item from './_Item.svelte';
	let itemTitle = 'Writing';
	let itemIcon = '✒️🗒';
	let items = [];
</script>

<svelte:head>
	<title>Writings</title>
</svelte:head>
<Item {items} {itemIcon} {itemTitle} />
