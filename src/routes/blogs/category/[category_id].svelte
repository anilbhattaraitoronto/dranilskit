<script context="module">
	export async function load({ page, fetch }) {
		const res = await fetch(`/blogs/category/${page.params.category_id}.json`);
		if (res.ok) {
			return {
				props: {
					categoryBlogs: await res.json()
				}
			};
		}
		return {
			status: res.status,
			error: new Error(`Url failed to load`)
		};
	}
</script>

<h2>Category Posts</h2>
