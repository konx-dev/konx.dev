import { getProject } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";

type Props = {
	params: { project: string };
};

export default async function Project({ params }: Props) {
	const slug = params.project;

	const project = await getProject(slug);
	return (
		<section>
			<h1>{project.name}</h1>
			<div>
				<PortableText value={project.content} />
			</div>
		</section>
	);
}
