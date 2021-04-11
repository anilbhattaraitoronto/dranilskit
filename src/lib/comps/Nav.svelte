<script>
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	export let user;
</script>

<header>
	<a href="/">
		<h2>🏠</h2>
	</a>

	<nav>
		<div class="auth-nav-container">
			<span class="nav-link">Manage ▾</span>
			<nav class="auth-nav">
				{#if !$session.user}
					<a href="/accounts/login">Login</a>
					<a href="/accounts/signup">Signup</a>
				{:else}
					<a href="/accounts/resetpassword">Reset PW</a>
					<a href="/accounts/profile">Profile</a>
					<a
						on:click={() => {
							$session.user = null;
							goto('/');
						}}>Logout</a
					>
					<a href="/addpost">AddPost</a>
				{/if}
				<a href="/cv">CV</a>
			</nav>
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
	h2 {
		color: #250d05;
		text-align: center;
		transition: 200ms all ease-in-out;
		height: 60px;
		width: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		border: 1px solid rgb(245, 216, 205);
		border-radius: 50%;
		font-size: 1em;
	}
	h2::after {
		display: block;
		content: 'dr-anil.com';
		font-size: 0.5em;
		color: green;
		font-weight: 600;
	}
	h2:hover {
		border-color: #f3ab93;
	}
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	a {
		text-decoration: none;
		color: black;
	}
	.nav-link {
		display: inline-block;
		padding: 2px;
		border: 1px solid #f5d5cbc4;
		color: green;
		border-radius: 20px;
		text-align: center;
		transition: 200ms all ease-in-out;
		margin-left: 4px;
		cursor: pointer;
		font-size: 0.9em;
		width: 95px;
	}
	.nav-link:hover {
		/* color: white; */
		border-color: #ff3e00;
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
