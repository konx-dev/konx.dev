import Link from "next/link";

export default function FooterBar() {
	return (
		<footer className="px-4 py-2 bg-teal">
			<div className="text-xs container mx-auto flex flex-col text-center gap-1 md:flex-row justify-between">
				<span>
					Built by{" "}
					<Link className="underline" target="_blank" href="https://github.com/konx-dev">
						konx.dev
					</Link>
				</span>
				<span> </span>
				<div className="flex flex-col md:flex-row md:gap-1">
					<span>
						<strong>Built with:</strong>
					</span>
					<span>Next.js | TypeScript | TailwindCSS | Sanity.io</span>
				</div>
			</div>
		</footer>
	);
}