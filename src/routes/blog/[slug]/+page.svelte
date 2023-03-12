<script>
    export let data;
  </script>
  
<svelte:head>
  <title>{data.title}</title>
  <meta property="og:title" content={data.title} />
</svelte:head>
<div class="special-spacer special-layer"></div>
  <article class="blogpost">
    <h1>{ data.title }</h1>
    <p class="date">Published: {data.date}</p>
    <svelte:component this={data.content} />
  </article>


<style>
  .blogpost {
    max-width: 66%;
  }
</style>