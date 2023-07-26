import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg';

export default defineConfig({
	plugins: [
		sveltekit(),
		svg({
			includePaths: ['./src/lib/graphics/'],
			svgoOptions: {
				multipass: true,
				plugins: ['preset-default']
			}
		})
	]
});