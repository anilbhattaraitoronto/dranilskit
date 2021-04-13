<script context="module">
	export async function load({ session }) {
		if (!session.user) {
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
</script>

<svelte:head>
	<title>Welcome {$session.user.fullname}</title>
</svelte:head>

<h2>Welcome {$session.user.fullname}</h2>
