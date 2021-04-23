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
	let fullname;
	let email;
	let password;
	let confirmPassword;
	let errorMessage = '';
	async function signup() {
		if (fullname && email && password && confirmPassword) {
			if (password === confirmPassword) {
				///auth/signup.json
				await fetch('https://meroapi.merohouse.com/api/auth/dranilkit/signup', {
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
						console.log(data);
						$session.message = data.message;
						goto('/');
					})
					.catch((err) => console.log('Error: ', err));
			} else {
				errorMessage = 'Passwords do not match';
				console.log(errorMessage);
			}
		} else {
			errorMessage = 'All fields are required';
			console.log(errorMessage);
		}
	}
</script>

<svelte:head>
	<title>Signup</title>
</svelte:head>

<main>
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
		margin: auto;
		box-shadow: 1px 1px 0 rgb(232, 229, 229);
		border-bottom-right-radius: 8px;
	}
	h2 {
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 2px;
	}
	form {
		width: 100%;
		max-width: 320px;
		margin: auto;
		padding: 20px;
		z-index: 1;
	}
	label {
		display: block;
		width: 100%;
		z-index: 1;
		color: rgb(107, 111, 103);
	}
	input {
		all: unset;
		margin-bottom: 16px;
		background: white;
		text-align: left;
		display: block;
		border: 1px solid #ff400033;
		width: 100%;
		padding: 4px;
		border-radius: 20px;
		z-index: -1;
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
	@media (max-width: 500px) {
		input {
			margin-bottom: 12px;
		}
		label {
			margin: -5px 0;
		}
	}
</style>
