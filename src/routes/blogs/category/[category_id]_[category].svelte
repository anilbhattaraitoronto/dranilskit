<script context="module">
	export async function load({ page, fetch }) {
		console.log(page.params);
		const res = await fetch(`/blogs/category/${page.params.category_id}.json`);
		const category = page.params.category;
		if (res.ok) {
			let categoryBlogs = await res.json();
			return {
				props: {
					categoryBlogs: categoryBlogs,
					category
				}
			};
		}
		return {
			status: res.status,
			error: new Error(`Url failed to load`)
		};
	}
</script>

<script>
	export let categoryBlogs;
	export let category;
</script>

<svelte:head>
	<title>{category.toUpperCase()}</title>
</svelte:head>
{#if categoryBlogs.categoryBlogs.length > 0}
	<h2>Blogs about <b>{category.toUpperCase()}</b></h2>
	<div class="blogs">
		{#each categoryBlogs.categoryBlogs as blog}
			<div class="blog">
				<h3>{blog.title}</h3>
			</div>
		{/each}
	</div>
{:else}
	<p>Category Blogs not yet created</p>
{/if}
