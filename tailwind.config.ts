import flowbitePlugin from 'flowbite/plugin';

import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					50: '#d3f8df',
					100: '#7ce99f',
					200: '#3bde6e',
					300: '#21c455',
					400: '#168339',
					500: '#126d2f',
					600: '#0f5726',
					700: '#0b411c',
					800: '#093517',
					900: '#072c13'
				}
			}
		}
	},

	plugins: [flowbitePlugin]
} as Config;
