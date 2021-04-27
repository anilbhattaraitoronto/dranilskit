<script context="module">
	export async function load({ page, fetch }) {
		const url = `/auth/activate/${page.params.token}.json`;
		const res = await fetch(url);

		if (res.ok) {
			let data = await res.json();
			return {
				props: {
					data
				}
			};
		}
	}
</script>

<script>
	export let data;
</script>

<p>Welcome</p>
<p>{data.message}</p>
