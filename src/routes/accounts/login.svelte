<script context="module">
	export async function load({ session }) {
		if (session.user) {
			return {
				status: 302,
				redirect: '/'
			};
		}
		return {};
	}
</script>

<script>
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	let email;
	let password;
	function login() {
		fetch(`/accounts/login.json`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((userInfo) => {
				console.log('User info is: ', userInfo);
				$session.user = userInfo;
				goto('/accounts/profile');
			})
			.catch((err) => console.log('Error: ', err));
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<main>
	<h2>Login</h2>
	<p><a href="/accounts/signup">No account yet?</a></p>
	<form on:submit|preventDefault={login}>
		<label for="email">Email</label>
		<input type="email" id="email" bind:value={email} required />
		<label for="password">Password </label>
		<input type="password" id="password" bind:value={password} required />
		<input type="submit" value="Login" />
		<p>Forgot Password?<a href="/accounts/forgotpassword">Forgot PW</a></p>
	</form>
</main>

<style>
	main {
		width: 100%;
		margin: auto;
		padding: 20px;
		background: rgb(242, 232, 227);
	}
	h2 {
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 2px;
	}
	form {
		width: 100%;
		max-width: 350px;
		margin: auto;
		padding: 20px;
		z-index: 1;
	}
	label {
		display: block;
		padding: 3px 0;
		width: 100%;
		z-index: 1;
	}
	input {
		all: unset;
		margin-bottom: 16px;
		background: white;
		text-align: left;
		display: block;
		border: 1px solid #ff40004f;
		width: 100%;
		padding: 4px;
		border-radius: 20px;
	}
	input:focus {
		border-color: #ff3e00;
	}
	input[type='submit'] {
		border: 1px solid #ff40004d;
		font-size: 1em;
		text-transform: uppercase;
		cursor: pointer;
		transition: 200ms all ease-in-out;
		text-align: center;
	}
	input[type='submit']:hover,
	input[type='submit']:focus {
		background: rgb(242, 232, 227);
		border-color: #ff3e00;
	}
	p {
		text-align: center;
	}
</style>
