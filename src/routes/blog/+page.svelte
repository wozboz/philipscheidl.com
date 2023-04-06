<script>
	import Blogpostcard from "../../lib/components/Blogpostcard.svelte";
	import Sidebar from "../../lib/components/Sidebar.svelte";
	export let data;
</script>

<svelte:head>
	<title>Blog - philipscheidl.com</title>
	<meta name="description" content="An overview of all the blog posts available on philipscheidl.com.">
</svelte:head>

<Sidebar />
<div class="special-spacer special-layer"></div>
<div class="blogcontentcontainer">
	<h1 class="blogheading">Blog</h1>

	<div class="flex blogpostoverview">
		{#each data.posts as post}
		<Blogpostcard posttitle={post.meta.title} postdate={post.meta.date} postlink={post.path} postdescription={post.meta.postdescription}/>
		{/each}
	</div>
</div>

<style>
	.blogheading {
		margin-bottom: 40px;
		color: var(--grey);
		text-align: center;
	}
</style>
