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

<svelte:head>
	<title>Reset Password</title>
</svelte:head>
<h2>Reset Password</h2>
