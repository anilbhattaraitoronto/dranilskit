<script>
	import Item from './_Item.svelte';

	let itemIcon = '🎸';
	let itSkills = [
		{
			title: 'Problem Solving',
			subtitle: 'Concept-Design-Deploy-Update cycle',
			details: [
				'Generate ideas based on indepth analysis of problems',
				'Efficient design at all levels of application development',
				'Incorporation of feedbacks',
				'Constant improvement'
			]
		},
		{
			title: 'Webdev',
			subtitle: 'Frontend',
			details: [
				'HTML, CSS, JavaScript',
				'Component-based frameworks: React, Vue, Svelte',
				'Progressive Web Application',
				'Figma design'
			]
		},
		{
			title: 'Webdev',
			subtitle: 'Backend',
			details: ['Nodejs, Express', 'Python, Django']
		},
		{
			title: 'Webdev',
			subtitle: 'Database Management',
			details: [
				'Relational Database Management Systems: Sqlite, Postgresql, MySql',
				'Efficient data models and design'
			]
		},
		{
			title: 'Webdev',
			subtitle: 'Server set up',
			details: [
				'Setting up and securing Ubuntu VM',
				'Nginx as proxy server',
				'Gunicorn for python web application deployment'
			]
		},
		{
			title: 'Process Automation',
			subtitle: 'Scripting',
			details: ['Bash scripts for deploying and updating web application remotely']
		},
		{
			title: 'System Management',
			subtitle: 'Windows, MacOS, and Linux',
			details: [
				'Creating users with varying levels of privileges',
				'Trouble shooting',
				'Using online and natively available documentations for routine tasks and problems'
			]
		}
	];
	// research skills
	// let resSkills = [];
	// let commSkills = [];
</script>

<svelte:head>
	<title>Skills</title>
</svelte:head>

<Item items={itSkills} itemIcon="💻" itemTitle="information technology" />
<!-- <Item items={resSkills} itemIcon=" ⛏" itemTitle="research skills" />
<Item items={commSkills} itemIcon="👌🏻" itemTitle="Communication Skills" /> -->
