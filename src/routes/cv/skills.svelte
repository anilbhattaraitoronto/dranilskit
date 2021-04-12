<script>
	import Item from './_Item.svelte';

	let itemIcon = '🎸';
	let devSkills = [
		{
			title: 'Webdev',
			subtitle: 'Frontend',
			details: ['']
		}
	];
	// research skills
</script>

<Item items={devSkills} itemIcon="💻" itemTitle="webdev skills" />
<Item items={devSkills} itemIcon=" ⛏" itemTitle="research skills" />
<Item items={devSkills} itemIcon="👌🏻" itemTitle="Communication Skills" />
