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
	import { fly } from 'svelte/transition';
	import { postData } from '$lib/utils/postData.js';
	let email;
	let password;
	let errorMessage = null;
	async function login(event) {
		const response = await postData(`/auth/login.json`, { email, password });
		errorMessage = response.errors;
		if (response.user) {
			$session.user = response.user;
			$session.message = response.message;
			goto('/');
		}
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<main in:fly={{ x: 30, duration: 700, opacity: 1 }}>
	<h2>Login</h2>
	<form on:submit|preventDefault={login}>
		<label for="email">Email</label>
		<input type="email" id="email" bind:value={email} required />
		<label for="password">Password </label>
		<input type="password" id="password" bind:value={password} required />
		<input type="submit" value="Login" />
	</form>
</main>

<style>
	main {
		width: 100%;
		max-width: 600px;
		background: var(--main-blue);
		margin: auto;
		padding: 20px;
		/* box-shadow: 1px 1px 0 rgb(244, 238, 238); */
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
