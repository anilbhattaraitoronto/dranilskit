<script context="module">
	export async function load({ page, fetch }) {
		const res = await fetch(`/blogs/category/${page.params.category_id}.json`);
		const category = page.params.category_slug;
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
	<title>{category.toUpperCase()} | dr-anil.com</title>
</svelte:head>
{#if categoryBlogs.categoryBlogs.length > 0}
	<h2>Blogs about <b>{category.toUpperCase()}</b></h2>
	<div class="blogs">
		{#each categoryBlogs.categoryBlogs as blog}
			<div class="blog">
				<h3><a href="/blogs/{blog.blog_id}_{blog.slug}">{blog.title}</a></h3>
				<p>
					<em>Posted: </em>
					{new Date(blog.posted_date).toDateString()}
					<br />
					<em>Updated:</em>
					{new Date(blog.updated_date).toDateString()}
				</p>
			</div>
		{/each}
	</div>
{:else}
	<p>Category Blogs not yet created</p>
{/if}

<style>
	h2 {
		color: var(--main-white, white);
		font-weight: 200;
		font-size: 1.2em;
		text-transform: uppercase;
	}
	a {
		color: var(--main-yellow, yellow);
		transition: 250ms all ease-in-out;
	}
	a:hover {
		color: var(--main-white, white);
	}
	p {
		color: rgb(155, 153, 153);
		font-size: 0.9em;
	}
</style>
