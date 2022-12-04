<script>
	export let data;
	console.log(data);
</script>

<h1 class="text-2xl font-bold">Blog</h1>

<ul>
	{#each data.posts as post}
		<li>
			<h2>
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			Published {post.meta.date}
			<p>Posted in:</p>
			{#each post.meta.categories as category}
				<p>{category}</p>
			{/each}
		</li>
	{/each}
</ul>

<style>
	h2 {
		font-size: large;
		font-weight: 600;
		}
</style>
