<header>
	<a href="/">
		<h2>🏠</h2>
	</a>

	<nav>
		<div class="auth-nav-container">
			<span class="nav-link">Manage ▾</span>
			<nav class="auth-nav">
				<a href="/accounts/login">Login</a>
				<a href="/accounts/signup">Signup</a>
				<a href="/addpost">AddPost</a>
				<a href="/about">About</a>
			</nav>
		</div>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1100px;
		margin: auto;
	}
	h2 {
		color: #250d05;
		text-align: center;
		transition: 200ms all ease-in-out;
		height: 60px;
		width: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		border: 1px solid rgb(245, 216, 205);
		border-radius: 50%;
		font-size: 1em;
	}
	h2::after {
		display: block;
		content: 'dr-anil.com';
		font-size: 0.5em;
		color: #ff3e00;
		font-weight: 600;
	}
	h2:hover {
		border-color: #f3ab93;
	}
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	a {
		text-decoration: none;
		color: black;
	}
	.nav-link {
		display: inline-block;
		padding: 4px 12px;
		border: 1px solid #f5d5cbc4;
		color: black;
		border-radius: 20px;
		text-align: center;
		transition: 200ms all ease-in-out;
		margin-left: 4px;
		cursor: pointer;
		font-size: 0.9em;
		width: 95px;
	}
	.nav-link:hover {
		/* color: white; */
		border-color: #ff3e00;
	}
	.auth-nav-container {
		position: relative;
		width: 100%;
	}
	.auth-nav {
		position: absolute;
		z-index: 120;
		top: 28px;
		right: 0;
		display: flex;
		flex-direction: column;
		transition: 200ms all ease-in-out;
		transform: scale(0);
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		min-width: 100px;
		margin: auto;
		background: rgb(250, 249, 249);
		padding: 8px;
	}
	.auth-nav > a {
		display: inline-block;
		margin: 8px auto;
		border: 1px solid #f4d7cd;
		background: whitel;
		color: black;
		width: 80px;
		padding: 4px 0;
		text-align: center;
		transition: 200ms all ease-in-out;
		border-radius: 20px;
		font-size: 0.8em;
		letter-spacing: 1px;
	}
	.auth-nav > a:hover {
		background: white;
		border-color: #f5d5cbc4;
		color: #ff3e00;
	}
	.auth-nav-container:hover > .auth-nav {
		transform: scale(1);
	}
</style>
