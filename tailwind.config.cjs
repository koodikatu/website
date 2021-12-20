module.exports = {
	content: ['./src/**/*.{svelte,html}'],
	theme: {
		colors: {
			white: '#FFFFFF',
			beige: '#FDF9F3',
			salmon: '#FFC8B0',
			orange: '#FF9464',
			green: '#163A45',
			black: '#041621'
		}
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
