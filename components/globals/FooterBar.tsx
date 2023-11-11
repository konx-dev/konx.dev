import Link from 'next/link';

export default function FooterBar() {
  return (
    <footer className="px-4 py-2 bg-teal my-4 lg:my-8 rounded text-xs container mx-auto flex flex-col text-center gap-1 md:flex-row justify-between">
      <span className="font-primary">
        <strong>Built by: </strong>
        <Link className="underline" target="_blank" href="https://github.com/konx-dev">
          konx.dev
        </Link>
      </span>
      <div className="flex font-primary flex-col md:flex-row md:gap-1">
        <strong>Built with: </strong>Next.js | TypeScript | TailwindCSS | Sanity.io
      </div>
    </footer>
  );
}
