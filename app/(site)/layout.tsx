import NavigationBar from "@/components/globals/NavigationBar";
import "../globals.css";
import type { Metadata } from "next";
import FooterBar from "@/components/globals/FooterBar";

export const metadata: Metadata = {
	title: "konx.dev | fullstack",
	description: "Fullstack Developer based in the UK",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="h-screen flex flex-col bg-navy">
				<NavigationBar />
				<main className="flex flex-1 px-4">{children}</main>
				<FooterBar />
			</body>
		</html>
	);
}
