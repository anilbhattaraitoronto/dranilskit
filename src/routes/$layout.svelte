<!-- <script context="module" ✂prettier:content✂="CglleHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZCh7IHNlc3Npb24gfSkgewoJCWNvbnN0IHVzZXIgPSBzZXNzaW9uLnVzZXI7CgkJaWYgKHVzZXIpIHsKCQkJcmV0dXJuIHsKCQkJCXByb3BzOiB7CgkJCQkJdXNlcgoJCQkJfQoJCQl9OwoJCX0KCQlyZXR1cm4ge307Cgl9Cg==" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=">{}</script> -->
<script>
	import '../app.css';
	import Nav from '$lib/comps/Nav.svelte';
	// export let user;
</script>

<header>
	<Nav />
</header>
<div class="app-wrapper">
	<slot />

	<footer>
		<p>&copy; Dr Anil Bhattarai. 2021 - Present. All Rights Reserved.</p>
	</footer>
</div>

<style>
	.app-wrapper {
		min-height: 100vh;
		position: relative;
		padding: 0 20px;
		max-width: 1100px;
		margin: auto;
	}

	header {
		background: white;
		box-shadow: 0 1px 0 rgb(242, 236, 236);
		padding: 0 4px;
		position: sticky;
		top: 0;
		z-index: 100;
	}

	footer {
		text-align: center;
		font-size: 0.9em;
		padding: 8px 0;
		min-height: 3vh;
		box-shadow: 0 -1px 0 rgb(215, 211, 211);
	}
</style>
