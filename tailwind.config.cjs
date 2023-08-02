/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      minHeight: {
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
      }
    },
	},
	plugins: [
    require('@tailwindcss/typography'),
  ],
}
