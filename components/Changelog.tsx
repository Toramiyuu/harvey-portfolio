import { ChangelogEntry } from '@/data/projects';

interface Props {
  changelog: ChangelogEntry[];
}

export default function Changelog({ changelog }: Props) {
  if (changelog.length === 0) return null;

  return (
    <div className="flex flex-col gap-6">
      {changelog.map((entry) => (
        <div key={entry.version} className="flex gap-6">
          <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-neutral-200 bg-white text-xs font-bold text-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400">
              v
            </div>
            <div className="mt-2 w-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          </div>
          <div className="pb-6 pt-1">
            <div className="flex items-baseline gap-3">
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                v{entry.version}
              </span>
              <time className="text-sm text-neutral-400 dark:text-neutral-500">
                {new Date(entry.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <ul className="mt-3 flex flex-col gap-1.5">
              {entry.changes.map((change, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                  {change}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
