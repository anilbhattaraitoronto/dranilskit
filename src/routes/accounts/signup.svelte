<script>
	import { goto } from '$app/navigation';
	let email;
	let password;
	let confirmPassword;
	let errorMessage = '';
	async function signup() {
		if (email && password && confirmPassword) {
			if (password === confirmPassword) {
				await fetch('/accounts/signup.json', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
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
		<form on:submit|preventDefault={signup}>
			<label for="email">Email</label>
			<input type="email" id="email" bind:value={email} required />
			<label for="password">Password </label>
			<input type="password" id="password" bind:value={password} required />
			<label for="confirmPassword">Retype Password</label>
			<input type="password" id="confirmPassword" bind:value={confirmPassword} required />
			<input type="submit" value="SignUp" />
		</form>
		<p>Already have an account? Please <a href="/accounts/login">Login</a></p>
	</div>
</main>

<style>
	main {
		width: 100%;
		margin: auto;

		background: rgb(242, 232, 227);
		/* min-height: 66vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center; */
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
</style>
