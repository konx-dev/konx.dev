// SEO
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "konx.dev | fullstack",
	description: "Fullstack Developer based in the UK",
};

// Fonts
import localFont from "next/font/local";

const openSans = localFont({
	src: [
		{
			path: "../../public/fonts/OpenSans.woff2",
		},
	],
	variable: "--font-opensans",
});

const playfair = localFont({
	src: [
		{
			path: "../../public/fonts/PlayfairDisplay.woff2",
		},
	],
	variable: "--font-playfair",
});

// Styling
import "../globals.css";

// Component Imports
import FooterBar from "@/components/globals/FooterBar";
import NavigationBar from "@/components/globals/NavigationBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${openSans.variable} ${playfair.variable}`}>
			<body className="h-screen flex flex-col bg-navy">
				<NavigationBar />
				<main className="flex flex-1 px-4">{children}</main>
				<section className="px-4">
					<FooterBar />
				</section>
			</body>
		</html>
	);
}
