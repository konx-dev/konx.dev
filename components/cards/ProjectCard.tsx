import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types/Project';
import { FaBoxArchive } from 'react-icons/fa6';
import { PortableText } from '@portabletext/react';

async function checkUrl(url: string) {
  try {
    await fetch(url, { mode: 'no-cors' });
    return true;
  } catch {
    return false;
  }
}

export default async function Card({ ctx }: { ctx: Project }) {
  const projectStatus = await checkUrl(ctx.url);

  return (
    <Link href={`/projects/${ctx.slug}`} key={ctx._id} className="bg-white rounded-lg lg:max-w-[400px]">
      {ctx.image && (
        <Image src={ctx.image} alt={ctx.alt} width={250} height={100} className="object-cover w-full rounded-t-lg" />
      )}
      <div className="p-4">
        <h3 className="text-subheading text-navy font-secondary mb-2">{ctx.name}</h3>
        <div className="font-primary text-navy text-body mb-2">
          <PortableText value={ctx.content} />
          <div className="flex mt-4">
            <button className="bg-navy text-body font-primary text-white py-3 px-6 rounded-full">View Project</button>
          </div>
        </div>

        {/* {!ctx.archived && <div>{projectStatus ? 'green' : 'red'}</div>}
        {ctx.archived && (
          <div>
            <FaBoxArchive className="text-teal" />
          </div>
        )} */}
      </div>
    </Link>
  );
}

/*
Tasks
- sort image console.log issue
- CWV tab showcasing lab data
- Archived boolean when a project is no longer live
- isolate checkUrl into own component
*/
