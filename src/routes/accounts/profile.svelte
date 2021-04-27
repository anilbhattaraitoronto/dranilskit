<script context="module">
	export async function load({ session }) {
		if (!session.user) {
			return {
				status: 302,
				redirect: '/'
			};
		}
		return {
			props: {
				user: session.user,
				message: session.message || ''
			}
		};
	}
</script>

<script>
	export let user;
	export let message;
</script>

<svelte:head>
	{#if user}
		<title>Welcome {user.fullname}</title>
	{/if}
</svelte:head>
{#if user !== null}
	<p>{message}</p>
	<h2>Welcome {user.fullname}</h2>
{/if}
