import { defineConfig } from '@maizzle/framework'

// Only rewrite image paths for `maizzle build`, so `maizzle serve` keeps
// previewing the local files in public/ (including ones not pushed yet).
const isBuild = process.argv.includes('build')

export default defineConfig({
	css: {
		inline: {
			// Keep explicit height="" attributes on <img>. Otherwise the inliner
			// copies `height: auto` from h-auto over them, and blocked images lose
			// their placeholder size in Thunderbird.
			applyHeightAttributes: false,
		},
	},
	url: {
		base: isBuild
			? {
					url: 'https://cdn.jsdelivr.net/gh/salty-muffin/newsletter@main',
					tags: ['img'],
				}
			: undefined,
	},
})
