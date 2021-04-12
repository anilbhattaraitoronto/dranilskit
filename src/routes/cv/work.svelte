<script>
	import Item from './_Item.svelte';
	let itemTitle = 'Work';
	let itemIcon = '🚣‍♂️';
	let items = [];
</script>

<Item {items} {itemIcon} {itemTitle} />
