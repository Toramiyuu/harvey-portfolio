'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

interface Props {
  screenshots: string[];
  projectName: string;
}

export default function ScreenshotGallery({ screenshots, projectName }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeSrc, setActiveSrc] = useState<string>('');

  function openLightbox(src: string) {
    setActiveSrc(src);
    dialogRef.current?.showModal();
  }

  function closeLightbox() {
    dialogRef.current?.close();
  }

  if (screenshots.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {screenshots.map((src, i) => (
          <button
            key={src}
            onClick={() => openLightbox(src)}
            className="group relative aspect-video overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <Image
              src={src}
              alt={`${projectName} screenshot ${i + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/10">
              <svg
                className="h-8 w-8 text-white opacity-0 drop-shadow transition-opacity group-hover:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClick={(e) => e.target === dialogRef.current && closeLightbox()}
        className="max-w-5xl w-full rounded-2xl bg-transparent p-0 backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        <div className="relative">
          <button
            onClick={closeLightbox}
            className="absolute -top-10 right-0 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {activeSrc && (
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <Image
                src={activeSrc}
                alt={`${projectName} screenshot`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
