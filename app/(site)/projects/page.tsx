import { getProjects } from "@/sanity/queries";
import ProjectCard from "@/components/cards/ProjectCard";

export default async function Home() {
	const projects = await getProjects();

	return (
		<section>
			<div>
				<h1>Projects</h1>
			</div>
			<div className="flex flex-col md:flex-row gap-5">
				{projects.map((project) => (
					<ProjectCard ctx={project} key={project._id} />
				))}
			</div>
		</section>
	);
}
