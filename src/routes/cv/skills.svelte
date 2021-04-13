<script>
	import Item from './_Item.svelte';

	let itemIcon = '🎸';
	let itSkills = [
		{
			title: 'Webdev',
			subtitle: 'Frontend',
			details: ['']
		}
	];
	// research skills
	let resSkills = [];
	let commSkills = [];
</script>

<svelte:head>
	<title>Skills</title>
</svelte:head>

<Item items={itSkills} itemIcon="💻" itemTitle="information technology" />
<Item items={resSkills} itemIcon=" ⛏" itemTitle="research skills" />
<Item items={commSkills} itemIcon="👌🏻" itemTitle="Communication Skills" />
