<script>
	import Blogpostcard from "../../lib/components/Blogpostcard.svelte";
	import Sidebar from "../../lib/components/Sidebar.svelte";
	export let data;
</script>

<svelte:head>
	<title>Projects - philipscheidl.com</title>
</svelte:head>

<Sidebar />
<div class="special-spacer special-layer"></div>
<div class="blogcontentcontainer">
	<h1 class="blogheading">Projects</h1>
	<div class="flex blogpostoverview">
		{#each data.projects as project}
		<Blogpostcard posttitle={project.meta.title} postdate={project.meta.date} postlink={project.path} postdescription={project.meta.projectdescription}/>
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
