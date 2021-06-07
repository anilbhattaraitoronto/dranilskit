<script context="module">
	export async function load({ page, fetch }) {
		const res = await fetch(`/blogs/category/${page.params.category_id}.json`);
		const { category_id, category_slug } = page.params;
		if (res.ok) {
			let categoryBlogs = await res.json();
			return {
				props: {
					categoryBlogs: categoryBlogs,
					category_id,
					category_slug
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
	export let category_id;
	export let category_slug;
</script>

<svelte:head>
	<title>{category_slug.toUpperCase()} | dr-anil.com</title>
</svelte:head>
{#if categoryBlogs.categoryBlogs.length > 0}
	<div class="blogs">
		<h2>Blogs about <b>{category_slug.toUpperCase()}</b></h2>
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
	.blogs {
		padding: 20px;
	}
	.blog {
		padding: 10px 0;
		border-bottom: 1px solid lightgray;
	}
	h2 {
		font-weight: 200;
		font-size: 1.2em;
		text-transform: uppercase;
	}

	a {
		color: var(--main-black, black);
		transition: 250ms all ease-in-out;
	}
	a:hover {
		color: var(--main-blue, darkblue);
	}
	p {
		color: rgb(96, 94, 94);
		font-size: 0.9em;
	}
</style>
