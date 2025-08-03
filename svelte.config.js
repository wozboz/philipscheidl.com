import { mdsvex } from 'mdsvex'
import {sveltePreprocess} from 'svelte-preprocess'
import autoprefixer from 'autoprefixer'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import adapter from '@sveltejs/adapter-auto'
import { imagePreprocessor } from 'svimg'


const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		sveltePreprocess({
			postcss: {
				plugins: [autoprefixer]
			},
		}),
		mdsvex({
			extensions: ['.md'],

			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
			],
		}),
		imagePreprocessor({
			inputDir: "static/blog",
			outputDir: "static/blog/optimized",
			webp: true,
			avif: true,
		}),
	],
	kit: {
		adapter: adapter(),
	},
};

export default config;