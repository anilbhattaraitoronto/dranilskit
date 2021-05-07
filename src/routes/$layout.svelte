<script>
	import '../app.css';
	import Nav from '$lib/comps/Nav.svelte';
	import { session } from '$app/stores';
	function logout() {
		fetch('/auth/logout.json', {
			method: 'POST'
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((data) => {
				$session.user = null;
				$session.message = 'You have logged out';
				goto('/');
			});
	}
</script>

<header>
	<Nav />
</header>

<div class="app-wrapper">
	<main>
		<article class="page">
			<slot />
		</article>
		<article class="sidebar">
			<aside class="sidebar-box">
				<h2>Latest Blogs</h2>
				{#if $session.latestBlogs.length > 0}
					{#each $session.latestBlogs as blog}
						<div class="article">
							<h3>{blog.title}</h3>
						</div>
					{/each}
				{/if}
			</aside>
			<aside class="sidebar-box">
				<h2>Topics</h2>
				{#if $session.categories.length > 0}
					<ul class="sidebar-nav">
						{#each $session.categories as category}
							<li>
								<a
									href="/blogs/category/{category.category_id}_{category.slug}"
									class="category-link">{category.name}</a
								>
							</li>
						{/each}
					</ul>
				{/if}
			</aside>
			<aside class="sidebar-box">
				<ul class="auth-nav">
					{#if !$session.user}
						<li><a href="/accounts/login">Login</a></li>
					{:else}
						<li><a href="/accounts/resetpassword">Reset Password</a></li>
						<li><button on:click|preventDefault={logout}>Logout</button></li>
					{/if}
				</ul>
			</aside>
			{#if $session.user && $session.user.is_admin === 1}
				<aside class="sidebar-box admin-box">
					<h2>Admin</h2>
					<ul class="admin-nav">
						<li><a href="/accounts/addpost" class="admin-link">Add Post</a></li>
					</ul>
				</aside>
			{/if}
		</article>
	</main>

	<footer>
		<p>&copy; Dr Anil Bhattarai. 2021 - Present. All Rights Reserved.</p>
	</footer>
</div>

<style>
	.app-wrapper {
		min-height: 100vh;
		position: relative;
		padding: 0 20px;
		max-width: 1200px;
		margin: auto;
		background: var(--main-blue);
	}

	header {
		background: var(--main-blue);
		padding: 0 4px;
		z-index: 100;
		position: relative;
		width: 100%;
		margin: auto;
	}
	main {
		display: grid;
		grid-template-columns: 1fr 230px;
		grid-column-gap: 12px;
		margin-top: 150px;
	}

	h2 {
		text-transform: uppercase;
		letter-spacing: 2px;
		color: var(--main-white);
		font-size: 1.2em;
		font-weight: 200;
	}
	.sidebar-box {
		padding-bottom: 20px;
		margin-bottom: 20px;
		border-bottom: 1px solid rgb(34, 25, 135);
	}
	.sidebar-nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
	}
	li {
		list-style-type: none;
		margin: 2px 0;
		transition: var(--main-transition);
	}
	.sidebar a {
		text-decoration: none;
		color: var(--main-yellow);
		transition: var(--main-transition);
		padding: 0;
		margin-right: 8px;
	}
	.sidebar a:hover {
		color: var(--main-white, white);
	}

	footer {
		text-align: center;
		font-size: 0.9em;
		padding: 8px 0;
		min-height: 3vh;
		box-shadow: 0 -1px 0 rgb(215, 211, 211);
		margin-top: 20px;
	}
	@media (max-width: 650px) {
		.app-wrapper {
			padding: 0 8px;
		}
	}
	@media (min-width: 1220px) {
		.app-wrapper {
			padding: 0;
		}
	}
	@media (max-width: 650px) {
		main {
			grid-template-columns: 1fr;
		}
	}
</style>
