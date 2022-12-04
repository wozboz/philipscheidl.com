import { mdsvex } from 'mdsvex'
import sveltePreprocess from 'svelte-preprocess'
import autoprefixer from 'autoprefixer'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or used as pages)
	extensions: ['.svelte', '.md'],

	preprocess: [
		// preprocess({
		// 	scss: {
		// 		// Ensures Sass variables are always available inside component <style> blocks as vars.$variableDefinedInFile
		// 		prependData: `@use 'src/lib/assets/scss/vars';`
		// 	},
		// }),
		sveltePreprocess({
			postcss: {
				plugins: [autoprefixer]
			},
		}),
		mdsvex({
			// The default mdsvex extension is .svx; this overrides that.
			extensions: ['.md'],

			// Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
			],
		}),
	],

	kit: {
		adapter: adapter(),
	}
};

export default config;