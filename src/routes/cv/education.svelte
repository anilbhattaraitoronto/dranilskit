<script>
	let edItems = [
		{
			title: `PhD in Planning (2019)`,
			subtitle: `University of Toronto, Department of Geography and Planning`,
			detail: `<em>Dissertation</em>: Seeing Like A Farmer: Socioecological Complexity of Constructing and Maintaining Smallholder Ecological Farms`
		},
		{
			title: `M.A. in Anthropology (2008)`,
			subtitle: `University of North Carolina, Chapel Hill, Department of Anthropology `,
			detail: `<em>Thesis</em>: The Nature of Nepali State and Hegemony of Technocentrism and Behaviorism in Health Practices in Nepal`
		},
		{
			title: `M. Phil. In Social Medicine and Community Health (2002)`,
			subtitle: `Jawaharlal Nehru University, Center of Social Medicine and Community Health`,
			detail: `<em>Thesis</em>: From Population Control to Reproductive Rights: The Case of Nepal`
		},
		{
			title: `M.A. in Economics (2000)`,
			subtitle: `Tribhuvan University, Department of Economics`,
			detail: `<em>Thesis</em>: Conservation and Erosion of Local Livelihoods`
		}
	];
</script>

<h2>EDUCATION 📖</h2>
<main class="ed-container">
	{#each edItems as item}
		<article class="item">
			<h3>{item.title}</h3>
			<h4>{item.subtitle}</h4>
			<p>{@html item.detail}</p>
		</article>
	{/each}
</main>

<style>
	h2 {
		color: rgb(103, 100, 100);
	}
	.item {
		margin-top: 20px;
		padding-bottom: 20px;
		border-bottom: 1px solid rgb(228, 223, 223);
	}
	h4 {
		color: rgb(121, 116, 116);
	}
</style>
