<script>
	import { session, page } from '$app/stores';
	import { goto } from '$app/navigation';

	function logout() {
		fetch('/auth/logout.json', {
			method: 'POST'
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((data) => {
				$session.user = {};
				$session.message = 'You have logged out';
				goto('/accounts/login');
			});
	}
</script>

<h2>Account</h2>
<nav>
	<!-- <a href="/accounts">Account 🏠</a> -->
	{#if $session.user !== {} && $session.user.user_id}
		<a href="/accounts/resetpassword" class:active={$page.path === '/accounts/resetpassword'}
			>Reset PW</a
		>
		<a href="/accounts/profile" class:active={$page.path === '/accounts/profile'}>Profile</a>

		<span on:click={logout}>Logout</span>
	{:else}
		<a href="/accounts/login" class:active={$page.path === '/accounts/login'}>Login</a>
		<a href="/accounts/signup" class:active={$page.path === '/accounts/signup'}>Signup</a>
		<a href="/accounts/forgotpassword" class:active={$page.path === '/accounts/forgotpassword'}
			>ForgotPW</a
		>
	{/if}
	{#if $session.user !== {} && $session.user.is_admin == 1}
		<a href="/accounts/addpost" class:active={$page.path === '/accounts/addpost'}>AddPost</a>
	{/if}
</nav>
<slot />

<style>
	h2 {
		text-align: center;
	}
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 16px auto;
	}

	a,
	span {
		padding: 0 3px;
		text-decoration: none;
		margin: 0 2px;
		cursor: pointer;
		font-size: 0.8em;
		letter-spacing: 1px;
		color: var(--main-blue);
		text-transform: uppercase;
		transition: 200ms all ease-in-out;
		border-bottom: 1px solid transparent;
	}
	a:hover,
	span:hover {
		background: rgb(255, 196, 0);
	}
	a.active {
		border-bottom-color: var(--main-blue);
	}
</style>
