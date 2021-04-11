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

{#if session.user}
	<h2>Welcome {$session.user.fullname}</h2>
{/if}
