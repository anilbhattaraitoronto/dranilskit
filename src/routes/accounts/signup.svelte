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
	let fullname;
	let email;
	let password;
	let confirmPassword;
	let errorMessage = '';
	async function signup() {
		if (fullname && email && password && confirmPassword) {
			if (password === confirmPassword) {
				//check the length of the password
				if (password.length >= 8) {
					await fetch('/auth/signup.json', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							fullname,
							email,
							password,
							confirmPassword
						})
					})
						.then((res) => {
							if (res.ok) {
								return res.json();
							}
						})
						.then((data) => {
							$session.message = data.message;
							goto('/');
						})
						.catch((err) => {
							errorMessage = 'Something went wrong';
						});
				} else {
					errorMessage = 'Password is too short. It has to be at least 8 character long';
				}
				///auth/signup.json
			} else {
				errorMessage = 'Passwords do not match';
			}
		} else {
			errorMessage = 'All fields are required';
		}
	}
</script>

<svelte:head>
	<title>Signup</title>
</svelte:head>

<main in:fly={{ x: 30, duration: 700, opacity: 1 }}>
	<div>
		{#if errorMessage !== ''}
			<p class="error-message">{errorMessage}</p>
		{/if}
		<h2>Signup</h2>
		<p><a href="/accounts/login">Have an account?</a></p>
		<form on:submit|preventDefault={signup}>
			<label for="fullname">Full Name</label>
			<input type="fullname" id="fullname" bind:value={fullname} required />
			<label for="email">Email</label>
			<input type="email" id="email" bind:value={email} required />
			<label for="password">Password </label>
			<input type="password" id="password" bind:value={password} required />
			<label for="confirmPassword">Retype Password</label>
			<input type="password" id="confirmPassword" bind:value={confirmPassword} required />
			<input type="submit" value="SignUp" />
		</form>
	</div>
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
		letter-spacing: 2px;
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
		padding: 1px;
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
