<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import '$lib/styles/app.css';
	import '$lib/styles/style.scss';
	import '$lib/styles/codehighlighting.css';
	import { fade } from 'svelte/transition';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });
	import "@fontsource/roboto/400.css";
	import "@fontsource/roboto/700.css"
	import "@fontsource/lato";
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

