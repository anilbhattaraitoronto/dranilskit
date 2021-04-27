<script>
	import { fade, fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>CV</title>
</svelte:head>
<main>
	<h2>profile 😀</h2>
	<img
		src="/anilbh.jpg"
		alt="Anil Bhattarai"
		title="Anil Bhattarai"
		in:fly={{ y: -40, duration: 700 }}
	/>
	<p>
		A highly diligent, and self-motivated information technology professional who has been designing
		and building full stack web applications since 2018. Intermediate to advanced level competence
		in two human languages (French and Spanish) and two computer languages (JavaScript and Python).
		Key strengths include joyful attitude towards learning, effective communication (written and
		verbal), and able to deliver projects through timely and efficient processes and effective
		planning always with consideration of end users.
	</p>
</main>

<style>
	img {
		display: block;
		width: 100%;
		max-width: 400px;
		margin: auto;
	}
	h2 {
		color: rgb(120, 117, 117);
		text-transform: uppercase;
		font-size: 1.2em;
		letter-spacing: 1px;
		text-align: center;
	}
	@media (max-width: 600px) {
		img {
			display: block;
			width: 100%;
			margin: auto;
			padding: 16px 16px 16px 0;
		}
	}
</style>
