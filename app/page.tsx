import { projects } from '@/data/projects';
import ProjectGrid from '@/components/ProjectGrid';

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          Harvey
        </h1>
        <p className="text-lg text-neutral-500 dark:text-neutral-400">
          Indie developer building macOS apps and web tools.
        </p>
      </div>
      <ProjectGrid projects={projects} />
    </div>
  );
}
