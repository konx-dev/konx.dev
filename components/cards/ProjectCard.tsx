import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/Project";

export default function Card({ ctx }: { ctx: Project }) {
	return (
		<Link href={`/projects/${ctx.slug}`} key={ctx._id}>
			{ctx.image && <Image src={ctx.image} alt={ctx.alt} width={250} height={100} className="object-cover" />}
			<h3>{ctx.name}</h3>
		</Link>
	);
}
