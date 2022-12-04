<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import '$lib/styles/app.css';
	import '$lib/styles/style.scss';
	import { fade } from 'svelte/transition';
	export let data;
</script>

<div class="homepagecontainer">
		<Header />
		{#key data.currentRoute}
			<main in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 200 }}>
				<slot />
			</main>
		{/key}
		<Footer />
</div>

