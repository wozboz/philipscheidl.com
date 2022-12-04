<script>
	import Blogpostcard from "../lib/components/Blogpostcard.svelte";
	import Projectcard from "../lib/components/Projectcard.svelte";
	import Sidebar from "../lib/components/Sidebar.svelte";
	export let data;
	let y;
</script>

<svelte:head>
	<title>Home - philipscheidl.com</title>
</svelte:head>

<div bind:clientHeight={y}>
	<div class="flex welcomediv">
		<Sidebar y={y}/>
		<h1>Hi, I'm <span class="nameanimation">Philip.</span></h1>
		<br />
		<img class="round drawing" alt="drawing of philip" src="philip_large.jpg" />
		<br />
		<p>I like to program in my spare time, tinker around with electronics and home automation.</p>
	</div>
	<div class="spacer layer"></div>
	<div class="flex claim">
		<h1 class="flexboxtitle">This is my personal website, where I write about my projects and anything else I feel like writing about</h1>
	</div>
	<h1 class="hpheadline">Blogposts</h1>
	<div class="flex blogpostoverview">
		{#each data.posts as post}
				<Blogpostcard posttitle={post.meta.title} postdate={post.meta.date} postlink={post.path}/>
		{/each}
	</div>
	<h1 class="hpheadline">Projects</h1>
	<div class="flex blogpostoverview">
		{#each data.projects as project}
			<Projectcard projecttitle={project.meta.title} projectdate={project.meta.date} projectlink={project.path} />
		{/each}
	</div>
</div>