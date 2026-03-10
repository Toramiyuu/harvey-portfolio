import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Harvey — Indie Developer',
  description: 'macOS apps and web projects by Harvey',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${inter.className} bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100`}>
        <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-white/80 backdrop-blur dark:border-neutral-800/80 dark:bg-neutral-950/80">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <a href="/" className="font-semibold text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
              Harvey
            </a>
            <nav className="flex items-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
              <a href="/" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                Projects
              </a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-6 py-12">
          {children}
        </main>
        <footer className="mt-24 border-t border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto max-w-5xl px-6 py-8 text-center text-sm text-neutral-400 dark:text-neutral-500">
            Built by Harvey
          </div>
        </footer>
      </body>
    </html>
  );
}
