export interface ChangelogEntry {
  version: string;
  date: string;
  changes: string[];
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  platform: 'macOS' | 'Web';
  thumbnail: string;
  screenshots: string[];
  downloadUrl?: string;
  siteUrl?: string;
  githubUrl?: string;
  changelog: ChangelogEntry[];
}

export const projects: Project[] = [
  {
    slug: 'nookclone',
    name: 'NookClone',
    platform: 'macOS',
    tagline: 'A notch panel for macOS with widgets',
    description: `NookClone turns your MacBook's notch into a productive hub. Hover over the notch to reveal a sleek panel packed with widgets — media controls, weather, system stats, clipboard history, and more.

Built natively for macOS, NookClone sits in your menu bar and expands on demand. It respects your workflow: collapse it to stay focused, expand it when you need quick access to information without switching apps.

**Features:**
- Media widget with Spotify artwork and playback controls
- Live weather with manual city override
- System monitor (CPU, RAM, network)
- Clipboard history manager
- Todo list widget
- Bluetooth device manager
- Shortcuts launcher
- Mirror display widget
- Global keyboard shortcut (Option+N) to show/hide
- Adaptive panel height per widget
- Persistent tab selection across sessions`,
    thumbnail: '/projects/nookclone/screen-system.png',
    screenshots: [
      '/projects/nookclone/screen-system.png',
      '/projects/nookclone/screen-context.png',
    ],
    downloadUrl: '#',
    changelog: [
      {
        version: '1.0.0',
        date: '2026-03-09',
        changes: [
          'Settings panel wiring — all preferences now save and apply immediately',
          'Weather widget loads city from user settings on startup',
          'Fixed HUD interceptor memory leak using Unmanaged pattern',
          'Spotify album artwork now fetched asynchronously without blocking UI',
          'Redesigned tab bar with cleaner icon layout and active indicator',
          'Adaptive panel height adjusts automatically per active widget',
          'Selected widget tab persists across app restarts',
          'Global keyboard shortcut (Option+N) to toggle the panel from anywhere',
          'Added four new widgets: Todo, Shortcuts, Mirror, and Bluetooth',
        ],
      },
    ],
  },
];
