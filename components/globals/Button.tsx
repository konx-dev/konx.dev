import Link from "next/link";

export default function Button({ text, link }: { text: string; link: string }) {
	return (
		<Link className="bg-teal text-navy py-2 px-4 rounded" href={link}>
			{text}
		</Link>
	);
}
