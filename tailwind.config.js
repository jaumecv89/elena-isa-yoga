/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			padding: {
				DEFAULT: "15px",
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},
		extend: {
			fontFamily: {
				josefin: ["Josefin Sans", "sans-serif"],
				yeseva: ["Yeseva One", "cursive"],
			},
			colors: {
				background: "#F2D5B7",
				primary: "#B57158",
				secondary: "#55342B",
			},
		},
	},
	plugins: [],
};
