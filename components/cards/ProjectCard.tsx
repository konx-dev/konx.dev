import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/Project";

async function checkUrl(url: string) {
	try {
		await fetch(url, { mode: "no-cors" });
		return true;
	} catch {
		return false;
	}
}

export default async function Card({ ctx }: { ctx: Project }) {
	const projectStatus = await checkUrl(ctx.url);

	return (
		<Link href={`/projects/${ctx.slug}`} key={ctx._id}>
			{ctx.image && <Image src={ctx.image} alt={ctx.alt} width={250} height={100} className="object-cover" />}
			<h3>{ctx.name}</h3>
			<div>-{projectStatus ? "green" : "red"}</div>
		</Link>
	);
}

/*
Tasks
- isolate checkUrl into own component
- sort image console.log issue
- CWV tab showcasing lab data
- Archived flag if link & destination fields don't match
*/
