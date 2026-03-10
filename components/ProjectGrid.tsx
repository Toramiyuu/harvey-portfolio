'use client';

import { useState } from 'react';
import { Project } from '@/data/projects';
import ProjectCard from './ProjectCard';

type Filter = 'All' | 'macOS' | 'Web';

const FILTERS: Filter[] = ['All', 'macOS', 'Web'];

interface Props {
  projects: Project[];
}

export default function ProjectGrid({ projects }: Props) {
  const [filter, setFilter] = useState<Filter>('All');

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.platform === filter);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-1 rounded-xl border border-neutral-200 bg-neutral-100 p-1 self-start dark:border-neutral-800 dark:bg-neutral-900">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-all duration-150 ${
              filter === f
                ? 'bg-white text-neutral-900 shadow-sm dark:bg-neutral-800 dark:text-neutral-100'
                : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-neutral-400 dark:text-neutral-500">
          No projects in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
