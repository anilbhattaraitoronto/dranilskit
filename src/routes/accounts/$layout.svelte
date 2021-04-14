<script>
	import { session } from '$app/stores';
</script>

<nav>
	<a href="/accounts">Accounts</a>
	{#if $session.user}
		<a href="/accounts/resetpassword">Reset PW</a>
		<a href="/accounts/profile">Profile</a>

		<a
			on:click={() => {
				$session.user = null;

				goto('.');
			}}>Logout</a
		>
	{:else}
		<a href="/accounts/login">Login</a>
		<a href="/accounts/signup">Signup</a>
		<a href="/accounts/forgotpassword">ForgotPW</a>
	{/if}
	{#if $session.user && $session.user.is_admin}
		<a href="/accounts/addpost">AddPost</a>
	{/if}
</nav>
<slot />

<style>
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 16px auto;
	}
	a {
		padding: 0 6px;
		text-decoration: none;
		margin: 0 4px;

		font-size: 0.9em;
		letter-spacing: 1px;
		color: black;
		transition: 200ms all ease-in-out;
		border: 1px solid rgb(255, 196, 0);
	}
	a:hover {
		background: rgb(255, 196, 0);
	}
</style>
