import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			navy: "#0A192F",
			teal: "#5BE8C9",
			grey: "#8892B0",
			white: "#CCD6F6",
		},
	},
	plugins: [],
};
export default config;
