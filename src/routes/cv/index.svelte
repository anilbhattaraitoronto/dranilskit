<script>
	import { fade, fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>CV</title>
</svelte:head>
<main>
	<h2>profile</h2>

	<p>
		<img
			src="/anilbh.jpg"
			alt="Anil Bhattarai"
			title="Anil Bhattarai"
			in:fly={{ y: -40, duration: 700 }}
		/>
		A highly diligent, and self-motivated information technology professional who has been designing
		and building full stack web applications since 2018. Key strengths include joyful attitude towards
		learning, effective communication (written and verbal), and able to deliver projects through timely
		and efficient processes and effective planning, always with consideration of end users.
		<a href="/ab_resume_main.pdf" class="cv-pdf-link" noreferrer target="_blank">CV in PDF</a>
	</p>
</main>

<style>
	main {
		margin-bottom: 40px;
	}
	img {
		height: 140px;
		width: 140px;
		border-radius: 50%;
		float: left;
		shape-outside: circle();
		margin: 24px 16px 16px 0;
	}
	h2 {
		color: var(--main-white, white);
		text-transform: uppercase;
		font-size: 1.2em;
		letter-spacing: 1px;
		text-align: center;
		margin-bottom: 20px;
	}
	p {
		color: var(--main-white, white);
	}
	.cv-pdf-link,
	.contact-link {
		color: limegreen;
	}
</style>
