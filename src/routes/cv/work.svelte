<script>
	import Item from './_Item.svelte';
	let itemTitle = 'Work';
	let itemIcon = '🚣‍♂️';
	let itProjects = [
		{
			title: 'Kelytas',
			subtitle: 'Web application for a wedding dress shop located in Barrie, Ontario, Canada',
			details: ['Django-powered in the backend', 'Vanilla JS, CSS, and HTML in the frontend'],
			link: 'https://kelytas.com'
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
			],
			link: 'https://efaram.com'
		},
		{
			title: 'Nepal Reviewed',
			subtitle: 'A CRUD application for sharing academic research to wider Nepali citizens',
			details: [
				'Django and Django-Rest_framework powered backend, Sqlite as database engine, and Svelte in the frontend with svelte-spa-router',
				'Bulma CSS for styling the frontend',
				'Live but still in beta phase with some ongoing tweaking of frontend and backend'
			],
			link: 'https://nepalreviewed.com'
		},
		{
			title: 'Profile Site',
			subtitle: 'A fullstack web application for profiling the my works',
			details: ['A fullstack application created with Sveltekit compiler/framework'],
			link: 'https://dr-anil.com'
		}
	];
</script>

<svelte:head>
	<title>Works</title>
</svelte:head>
<Item items={itProjects} {itemIcon} {itemTitle} />
