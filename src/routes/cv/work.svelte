<script>
	import Item from './_Item.svelte';
	let itemTitle = 'Work';
	let itemIcon = '🚣‍♂️';
	let items = [];
</script>

<svelte:head>
	<title>Works</title>
</svelte:head>
<Item {items} {itemIcon} {itemTitle} />
