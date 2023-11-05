import { PortableTextBlock } from 'sanity';

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  featured: boolean;
  archived: boolean;
  alt: string;
  url: string;
  content: PortableTextBlock[];
};
