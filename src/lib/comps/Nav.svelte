<script>
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
</script>

<header>
	<a href="/">
		<h2 class="masthead">🏠</h2>
	</a>

	<nav>
		<a href="/cv" class="nav-link cv-link">CV</a>
		<div class="auth-nav-container">
			{#if !$session.user}
				<a href="/accounts/login" class="nav-link">Login</a><a
					href="/accounts/signup"
					class="nav-link">Signup</a
				>
			{/if}
			{#if $session.user}
				<span class="nav-link">Manage ▾</span>
				<nav class="auth-nav">
					<a href="/accounts/resetpassword">Reset PW</a>
					<a href="/accounts/profile">Profile</a>
					<a
						on:click={() => {
							$session.user = null;
							goto('/');
						}}>Logout</a
					>
					<a href="/addpost">AddPost</a>
				</nav>
			{/if}
		</div>
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
		color: green;
		font-weight: 600;
	}
	h2:hover {
		border-color: green;
	}
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.nav-link {
		display: inline-block;

		border: 1px solid #f5d5cbc4;
		color: rgb(4, 65, 4);
		background: white;
		border-radius: 20px;
		text-align: center;
		transition: 200ms all ease-in-out;
		margin-left: 2px;
		cursor: pointer;
		font-size: 0.8em;
		width: 75px;
		text-decoration: none;
		text-transform: uppercase;
	}
	.nav-link:hover {
		border-color: green;
		color: green;
	}
	.auth-nav-container {
		position: relative;
		width: 100%;
	}
	.auth-nav {
		position: absolute;
		z-index: 120;
		top: 24px;
		right: 0;
		display: flex;
		flex-direction: column;
		transition: 200ms all ease-in-out;
		transform: scale(0);
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		min-width: 100px;
		margin: auto;
		background: rgb(250, 249, 249);
		padding: 8px;
	}
	.auth-nav > a {
		display: inline-block;
		margin: 8px auto;
		border-bottom: 1px solid #f0dad2;
		background: whitel;
		color: black;
		width: 80px;
		padding: 4px 0;
		text-align: center;
		transition: 200ms all ease-in-out;
		/* border-radius: 20px; */
		font-size: 0.8em;
		letter-spacing: 1px;
	}
	.auth-nav > a:hover {
		border-color: green;
		color: green;
	}
	.auth-nav-container:hover > .auth-nav {
		transform: scale(1);
	}
</style>
