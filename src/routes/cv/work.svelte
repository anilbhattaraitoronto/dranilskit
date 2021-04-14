<script>
	import Item from './_Item.svelte';
	let itemTitle = 'Work';
	let itemIcon = '🚣‍♂️';
	let itProjects = [
		{
			title: 'Kelytas',
			subtitle: 'Web application for a wedding dress shop located in Barrie, Ontario, Canada',
			details: [
				'Django-powered in the backend',
				'Vanilla JS, CSS, and HTML in the frontend',
				`Live in production at <a href='https://kelytas.com' target='_blank' no-referrer >Kelytas</a>`
			]
		},
		{
			title: 'eFaram',
			subtitle:
				'A fullstack farmer-to-farmer web platform for sharing ideas, services, and products',
			details: [
				'Full stack application with Nodejs, Express at the backend and React or Vue in the front end ',
				'Served in Ubuntu Virtual Machine with PM2 as process manager for node application',
				'Postgresql as the database engine',
				'Currently under design phase'
			]
		},
		{
			title: 'Nepal Reviewed',
			subtitle: 'A CRUD application for sharing academic research to wider Nepali citizens',
			details: [
				'Django and Django-Rest_framework powered backend, Sqlite as database engine, and Svelte in the frontend with svelte-spa-router',
				'Bulma CSS for styling the frontend',
				'Live but still in beta phase with some ongoing tweaking of frontend and backend'
			]
		},
		{
			title: 'Profile Site',
			subtitle: 'A fullstack web application for profiling the my works',
			details: [
				'A fullstack application created with Sveltekit compiler/framework',
				'Under active construction'
			]
		}
	];
</script>

<svelte:head>
	<title>Works</title>
</svelte:head>
<Item items={itProjects} {itemIcon} {itemTitle} />
