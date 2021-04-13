<script>
	import Item from './_Item.svelte';
	let itemTitle = 'education';
	let itemIcon = '📖';
	let items = [
		{
			title: `PhD in Planning (2019)`,
			subtitle: `University of Toronto, Department of Geography and Planning`,
			details: [
				`<em>Dissertation</em>: Seeing Like A Farmer: Socioecological Complexity of Constructing and Maintaining Smallholder Ecological Farms`
			]
		},
		{
			title: `M.A. in Anthropology (2008)`,
			subtitle: `University of North Carolina, Chapel Hill, Department of Anthropology `,
			details: [
				`<em>Thesis</em>: The Nature of Nepali State and Hegemony of Technocentrism and Behaviorism in Health Practices in Nepal`
			]
		},
		{
			title: `M. Phil. In Social Medicine and Community Health (2002)`,
			subtitle: `Jawaharlal Nehru University, Center of Social Medicine and Community Health`,
			details: [
				`<em>Thesis</em>: From Population Control to Reproductive Rights: The Case of Nepal`
			]
		},
		{
			title: `M.A. in Economics (2000)`,
			subtitle: `Tribhuvan University, Department of Economics`,
			details: [`<em>Thesis</em>: Conservation and Erosion of Local Livelihoods`]
		}
	];
</script>

<svelte:head>
	<title>Education</title>
</svelte:head>
<Item {items} {itemTitle} {itemIcon} />
