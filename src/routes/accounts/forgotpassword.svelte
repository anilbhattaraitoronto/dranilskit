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

<svelte:head>
	<title>Forgot Password</title>
</svelte:head>
<h2>Forgot Password</h2>
