import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types/Project';
import { FaBoxArchive } from 'react-icons/fa6';

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
    <Link href={`/projects/${ctx.slug}`} key={ctx._id}>
      {ctx.image && <Image src={ctx.image} alt={ctx.alt} width={250} height={100} className="object-cover" />}
      <h3>{ctx.name}</h3>

      {!ctx.archived && <div>-{projectStatus ? 'green' : 'red'}</div>}

      {ctx.archived && (
        <div>
          <FaBoxArchive className="text-teal" />
        </div>
      )}
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
