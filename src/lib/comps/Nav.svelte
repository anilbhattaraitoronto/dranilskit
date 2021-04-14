<script>
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';
	export let user;
</script>

<header>
	<a href="/">
		<h2 class="masthead">🏠</h2>
	</a>

	<nav>
		<a href="/cv" class="nav-link cv-link">CV</a>
		<a href="/accounts" class="nav-link">Account</a>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1100px;
		margin: auto;
	}
	.masthead {
		color: #250d05;
		background: white;
		text-align: center;
		transition: 200ms all ease-in-out;
		height: 60px;
		width: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		border: 1px solid rgb(240, 234, 231);
		border-radius: 50%;
		font-size: 1em;
	}
	.masthead::after {
		display: block;
		content: 'dr-anil.com';
		font-size: 0.5em;
		color: black;
		font-weight: 600;
	}
	h2:hover {
		border-color: rgb(255, 196, 0);
	}
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.nav-link {
		display: inline-block;
		border: 1px solid transparent;
		color: black;
		background: rgb(255, 196, 0);
		text-align: center;
		transition: 200ms all ease-in-out;
		margin-left: 2px;
		cursor: pointer;
		font-size: 0.8em;
		width: 85px;
		text-decoration: none;
		text-transform: uppercase;
	}
	.nav-link:hover {
		background: white;
		border-color: rgb(255, 196, 0);
	}
</style>
