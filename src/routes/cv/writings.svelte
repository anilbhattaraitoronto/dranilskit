<script>
	import Item from './_Item.svelte';
	let itemTitle = 'Writing';
	let itemIcon = '✒️🗒';
	let items = [];
</script>

<Item {items} {itemIcon} {itemTitle} />
