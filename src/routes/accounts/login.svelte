<script context="module">
	export async function load({ session }) {
		if (session.user.user_id) {
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
	import { fly } from 'svelte/transition';
	let email;
	let password;
	let errorMessage;
	async function login() {
		await fetch(`/auth/login.json`, {
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
				$session.message = 'Welcome! You have successfully logged in';

				$session.user = userInfo.user;
				goto('/accounts/profile');
			})
			.catch((err) => {
				errorMessage = 'Login failed. Please try again.';
			});
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<main in:fly={{ x: 30, duration: 700, opacity: 1 }}>
	<h2>Login</h2>
	<p><a href="/accounts/signup">Need an account?</a></p>
	<form on:submit|preventDefault={login}>
		<label for="email">Email</label>
		<input type="email" id="email" bind:value={email} required />
		<label for="password">Password </label>
		<input type="password" id="password" bind:value={password} required />
		<input type="submit" value="Login" />
		<p><a href="/accounts/forgotpassword">Forgot PW?</a></p>
	</form>
</main>

<style>
	main {
		width: 100%;
		max-width: 600px;
		background: var(--main-blue);
		margin: auto;
		padding: 20px;
		box-shadow: 1px 1px 0 rgb(244, 238, 238);
		border-bottom-right-radius: 8px;
	}
	h2 {
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 2px;
		color: var(--main-white);
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
		color: var(--main-white);
		letter-spacing: 1px;
		font-size: 0.9em;
	}
	input {
		all: unset;
		margin-bottom: 16px;
		background: white;
		text-align: left;
		display: block;
		border: 1px solid transparent;
		width: 100%;
		padding: 2px;
		border-radius: 4px;
	}
	input:focus {
		border-color: #ff3e00;
	}
	input[type='submit'] {
		border: 1px solid transparent;
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
	a {
		color: rgb(247, 227, 17);
	}
	@media (max-width: 500px) {
		input {
			margin-bottom: 12px;
		}
		label {
			margin: -5px 0;
		}
	}
</style>
