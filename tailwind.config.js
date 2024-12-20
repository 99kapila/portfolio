/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	important: "#root",
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				"slate-gradient": `linear-gradient(to right, ${theme(
					"colors.light-slate"
				)}, ${theme("colors.dark-slate")})`,
				"button-gradient": `linear-gradient(to right, ${theme(
					"colors.amber"
				)}, ${theme("colors.yellow")})`,
			}),
			colors: {
				"light-slate": "#4B5563",
				"dark-slate": "#000000",
				amber: "#F59E0B",
				yellow: "#FCD34D",
				"amber-light": "#FFF700",
				"yellow-light": "#FFFA55",
				highlighted: "#F59E0B",
			},
			fontFamily: {
				quicksand: ["Quicksand", "sans-serif"],
			},
			textShadow: {
				yellowShadow:
					"0 0 1px #F59E0B, 0 0 2px #F59E0B, 0 0 1px #FCD34D",
			},
			listStyleType: {
				none: "none",
				disc: "disc",
				decimal: "decimal",
				square: "square",
				roman: "upper-roman",
			},
		},
	},
	plugins: [
		require("tailwindcss-textshadow"), // Ensure you have this plugin installed
	],
};
