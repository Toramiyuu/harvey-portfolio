import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-200 hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        <Image
          src={project.thumbnail}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-neutral-300 dark:text-neutral-700">
            {project.name[0]}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            {project.name}
          </h2>
          <span
            className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
              project.platform === 'macOS'
                ? 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
            }`}
          >
            {project.platform}
          </span>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {project.tagline}
        </p>
      </div>
    </Link>
  );
}
