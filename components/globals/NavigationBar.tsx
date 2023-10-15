import Link from "next/link";

export default function NavigationBar() {
	return (
		<header>
			<nav className="flex flex-col items-center gap-4 md:flex-row justify-between p-4 text-sm container mx-auto">
				<div>
					<Link className="text-white" href="/">
						Logo
					</Link>
				</div>
				<ul className="flex flex-row items-center gap-4">
					<li className="text-white">
						<Link href="/projects">Projects</Link>
					</li>
					<li className="text-white">
						<Link href="https://cv.konx.dev/" target="_blank">
							CV
						</Link>
					</li>
					<li className="bg-teal text-navy py-1 px-2">
						<Link className="" href="mailto:hello@konx.dev">
							Contact Me
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
