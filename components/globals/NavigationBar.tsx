import Link from "next/link";
import Button from "@/components/globals/Button";

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
					<li>
						<Button text="Contact Me" link="mailto:hello@konx.dev" />
					</li>
				</ul>
			</nav>
		</header>
	);
}
