<script>
	import '../app.css';
	import Nav from '$lib/comps/Nav.svelte';
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import { postData } from '$lib/utils/postData.js';

	let errorMessage;
	async function logout() {
		try {
			const response = await postData('/auth/logout.json', { hello: 'world' });
			errorMessage = response.errors || '';
			if (response.ok) {
				$session.user = null;
				$session.message = 'You have successfully logged out';
				goto('/');
			}
		} catch (err) {
			errorMessage = 'Something happened';
		}
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
							<div class="blog-link-container">
								<a href="/blogs/{blog.blog_id}_{blog.slug}" class="blog-link">{blog.title}</a>
							</div>
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
				<h2>Contact</h2>
				<a href="mailto:anilbhattarai@gmail.com" class="category-link">anilbhattarai@gmail.com</a>
			</aside>
			<aside class="sidebar-box">
				<ul class="auth-nav">
					{#if !$session.user}
						<li><a href="/accounts/login" class="login-link">Login</a></li>
					{:else}
						<!-- <li><a href="/accounts/resetpassword">Reset Password</a></li> -->
						<li><button on:click|preventDefault={logout} class="logout-button">Logout</button></li>
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
			<aside>
				<ul>
					<li>
						<a href="/cv">CV</a>
					</li>
				</ul>
			</aside>
		</article>
	</main>

	<footer>
		<p>&copy; Dr Anil Bhattarai. 2021 - Present. All Rights Reserved.</p>
	</footer>
</div>

<style>
	.app-wrapper {
		min-height: 90vh;
		position: relative;
		padding: 0 20px;
		max-width: 900px;
		margin: auto;
		background: var(--main-blue);
	}

	header {
		background: var(--main-blue);
		padding: 10px 4px;
		z-index: 100;
		position: relative;
		width: 100%;
		margin: auto;
		max-height: 15vh;
	}
	main {
		display: grid;
		grid-template-columns: 1fr 300px;
		grid-column-gap: 12px;
		margin-top: 5vh;
	}

	h2 {
		text-transform: uppercase;
		letter-spacing: 2px;
		color: var(--main-white);
		font-size: 1em;
		font-weight: 600;
		margin-bottom: 12px;
	}
	.page {
		background: var(--main-blue, darkblue);
	}
	.sidebar {
		padding: 0 20px;
		/* background: rgb(98, 57, 193); */
		box-shadow: -1px 0 0 rgba(120, 118, 118, 0.351);
	}
	.sidebar-box {
		padding-bottom: 20px;
		margin-bottom: 30px;
		border-bottom: 1px solid rgb(34, 25, 135);
	}
	.sidebar-nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: flex-start;
	}
	li {
		position: relative;
		list-style-type: none;
		margin: 2px 0;
		transition: var(--main-transition);
	}
	a {
		text-decoration: none;
	}
	.category-link {
		text-decoration: none;
		color: var(--main-yellow);
		transition: var(--main-transition);
		margin-right: 16px;
	}
	.sidebar .blog-link {
		color: var(--main-yellow, yellow);
		font-weight: 300;
		transition: var(--main-transition);
	}
	.sidebar .blog-link:hover {
		color: yellow;
	}
	.sidebar a:hover {
		color: var(--main-white, white);
	}
	li .login-link {
		color: rgb(110, 107, 107);
	}
	.blog-link-container {
		border-bottom: 1px solid rgba(255, 255, 255, 0.461);
		margin-bottom: 8px;
		line-height: 1.5;
	}
	.logout-button {
		all: unset;
		text-align: right;
		/* position: absolute;
		bottom: 3px;
		right: 3px; */
		cursor: pointer;
		background: var(--main-dark);
		padding: 0 6px;
		color: var(--main-white, white);
		border-radius: 4px;
		border: 1px solid transparent;
		transition: 250ms all ease-in-out;
	}
	.logout-button:hover {
		background: var(--main-white, white);
		border-color: var(--main-white, white);
		color: var(--main-dark, black);
	}

	footer {
		text-align: center;
		font-size: 0.9em;
		padding: 30px 0;
		min-height: 3vh;
		box-shadow: 0 -1px 0 rgba(215, 211, 211, 0.173);
		margin-top: 20px;
		color: white;
	}
	@media (max-width: 780px) {
		.app-wrapper {
			padding: 0 8px;
		}
		main {
			grid-template-columns: 1fr;
			margin-top: 30px;
		}
		.sidebar {
			box-shadow: none;
			padding-left: 0;
		}
	}
	@media (min-width: 1220px) {
		.app-wrapper {
			padding: 0;
		}
	}
</style>
