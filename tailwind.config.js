/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			padding: {
				DEFAULT: "16px",
			},
		},
		screens: {
			tablet: "960px",
			desktop: "1248px",
		},
		colors: {
			white: "#FFFFFF",
			black: "#000000",
			gray: "#FFFFFF66",
			background: "#FEF4EA",
			primary: "#C47A5E",
			secondary: "#513125",
			alternative: "#edc8a6",
			smooth: "#F6E4D8",
			smoother: "#f2d5c2",
			paragraph: "#FEFAF6",
			accent: "#AD6C53",
			text: "#807673",
			green: "#428959",
			red: "#C73E1D",
		},
		boxShadow: {
			sm: "0px 2px 4px 0px rgba(11, 10, 55, 0.15)",
			lg: "0px 8px 20px 0px rgba(18, 16, 99, 0.06)",
		},
		fontFamily: {
			primary: ["Marcellus", "serif"],
			secondary: ["Tenor Sans", "sans-serif"],
		},
		fontSize: {
			xs: "13px",
			sm: "14px",
			md: "16px",
			lg: "17px",
			xl: "19px",
			"2xl": "26px",
			"3xl": "36px",
			"4xl": "52px",
			"5xl": "76px",
			"6xl": "96px",
			"7xl": "116px",
		},
		backgroundImage: {
			"about-image": "url('/src/assets/about-image-1.jpeg')",
		},
	},
	plugins: [],
};
