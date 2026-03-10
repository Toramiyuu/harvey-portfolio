import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';
import ScreenshotGallery from '@/components/ScreenshotGallery';
import Changelog from '@/components/Changelog';
import ReactMarkdown from 'react-markdown';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — Harvey`,
    description: project.tagline,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="flex flex-col gap-12">
      {/* Back */}
      <Link
        href="/"
        className="flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors w-fit"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        All projects
      </Link>

      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            {project.name}
          </h1>
          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              project.platform === 'macOS'
                ? 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
            }`}
          >
            {project.platform}
          </span>
        </div>
        <p className="text-xl text-neutral-500 dark:text-neutral-400">
          {project.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 pt-1">
          {project.downloadUrl && (
            <a
              href={project.downloadUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </a>
          )}
          {project.siteUrl && (
            <a
              href={project.siteUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Visit Site
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-5 py-2.5 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Screenshots */}
      {project.screenshots.length > 0 && (
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Screenshots</h2>
          <ScreenshotGallery screenshots={project.screenshots} projectName={project.name} />
        </section>
      )}

      {/* Description */}
      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">About</h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <ReactMarkdown>{project.description}</ReactMarkdown>
        </div>
      </section>

      {/* Changelog */}
      {project.changelog.length > 0 && (
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Changelog</h2>
          <Changelog changelog={project.changelog} />
        </section>
      )}
    </div>
  );
}
