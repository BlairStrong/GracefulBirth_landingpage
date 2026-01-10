/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		"**/*.{html, jsx, js}",
		"**/*.js",
		"**/*.html",
		"./*.html",
		"./**/*.html",
		"./js/**/*.js"
	],
	theme: {
		extend: {
			colors: {
				primary: "#BFFE66",
				secondary: "#BDB8FF",
			}
		},
	},
	plugins: [],
}

