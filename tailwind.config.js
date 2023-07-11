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
				primary: ["Marcellus", "serif"],
				secondary: ["Tenor Sans", "sans-serif"],
			},
			colors: {
				background: "#FEF4EA",
				primary: "#C47A5E",
				primaryAccent: "#AD6C53",
				secondary: "#513125",
				innerText: "#FEFAF6",
				textGray: "#FFFFFF66",
			},
			backgroundImage: {
				"about-image": "url('/src/assets/about-image.jpeg')"
			}
		},
	},
	plugins: [],
};
