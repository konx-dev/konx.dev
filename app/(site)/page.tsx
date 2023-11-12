import { getFeaturedProjects } from '@/sanity/queries';
import ProjectCard from '@/components/cards/ProjectCard';

export default async function Home() {
  const projects = await getFeaturedProjects();

  return (
    <section className="container mx-auto">
      <section>
        <h1>Home</h1>
        {/* 
				
				Introduction section will go here
				
				*/}
      </section>
      <section>
        <div>
          <h2 className="font-secondary text-white text-heading mb-8">Featured Projects</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          {projects.map((project) => (
            <ProjectCard ctx={project} key={project._id} />
          ))}
        </div>
      </section>
    </section>
  );
}
