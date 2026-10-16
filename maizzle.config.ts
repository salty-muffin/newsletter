import { defineConfig } from '@maizzle/framework'

// Only rewrite image paths for `maizzle build`, so `maizzle serve` keeps
// previewing the local files in public/ (including ones not pushed yet).
const isBuild = process.argv.includes('build')

export default defineConfig({
	url: {
		base: isBuild
			? {
					url: 'https://cdn.jsdelivr.net/gh/salty-muffin/newsletter@main',
					tags: ['img'],
				}
			: undefined,
	},
})
