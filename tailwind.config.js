/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: { main: ["Jost", "sans-serif"] },
		extend: {
			colors: {
				"c-light-blue": "#4661E6",
				"c-dark-blue": "#3A4374",
				"c-gray": "#F2F4FF",
				"c-light-gray": "#F7F8FD",
				"c-dark-gray": "#647196",
				"c-orange": "#F49F85",
				"c-aqua": "#62BCFA",
				"c-magenta": "#AD1FEA",
				"c-red": "#D73737",
				"c-dark-background": "#181D35",
				"c-dark-frame": "#232A4D",
				"c-dark-header": "#13172A",
			},
			container: {
				center: true,
				padding: {
					// DEFAULT: "1rem",
					// sm: "4rem",
					lg: "4rem",
					xl: "16rem",
					// "2xl": "6rem",
				},
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
