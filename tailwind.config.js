/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '16px'
		},
		extend: {
			colors: {
				primary: '#fbbf24',
				secondary: '#64748b',
				dark: '#0f172a',
			},
			screens: {
				'2xl': '1320px'
			}
		},
	},
	plugins: [],
}