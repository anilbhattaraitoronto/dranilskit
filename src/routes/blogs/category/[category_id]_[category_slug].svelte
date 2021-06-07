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
	<p>Blogs on <span>{category_slug.toUpperCase()} </span> are coming soon ...</p>
{/if}

<style>
	.blogs {
		padding: 20px 0;
	}
	.blog {
		padding: 8px 0;
		/* border-bottom: 1px solid rgb(109, 108, 108); */
		margin-bottom: 10px;
		box-shadow: 0 1px 0 rgba(150, 150, 150, 0.146);
	}
	h2 {
		font-weight: 200;
		font-size: 1.2em;
		text-transform: uppercase;
		color: white;
	}

	a {
		color: var(--main-yellow, yellow);
		transition: 250ms all ease-in-out;
		text-decoration: none;
	}
	a:hover {
		color: rgb(204, 200, 200);
		text-decoration: underline;
	}
	p {
		color: rgb(157, 152, 152);
		font-size: 0.9em;
	}
	p > span {
		color: var(--main-yellow, yellow);
	}
</style>
