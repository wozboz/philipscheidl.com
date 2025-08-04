import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import tailwindcss from "@tailwindcss/vite";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		enhancedImages(),
		sveltekit(),
		tailwindcss(),
	]
};

export default config;
