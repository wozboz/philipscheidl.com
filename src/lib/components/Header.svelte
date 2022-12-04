<header>
	<nav>
		<div class="flexheader">
			<a href="/">
				<img class="round small" alt="logo of philipscheidl.com" src="/logo.jpg" />
			</a>
		</div>

		<ul>
			<li>
				<a href="/blog">Blog</a>
			</li>
			<li>
				<a href="/about">Projects</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	.flexheader {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	
	.small {
		height: 70px;
		width: 70px;
		transition: transform .7s ease-in-out;
	}

	.small:hover {
		transform: rotate(360deg);
	}

	header {
		padding: 2rem;
		background: var(--primary-color);
		position: relative;
		width: 100%;
	}

	ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	nav {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
</style>
