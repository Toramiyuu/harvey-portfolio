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
    slug: 'collabwhiteboard',
    name: 'CollabWhiteboard',
    platform: 'Web',
    tagline: 'Real-time collaborative drawing — no account needed',
    description: `CollabWhiteboard is a multiplayer whiteboard where anyone can draw together in real time. Share a room link and collaborators join instantly — no sign-up, no friction.

Built with React 19, Socket.io, and HTML Canvas using a two-layer rendering architecture for smooth, flicker-free drawing.

**Features:**
- Freehand pen, rectangle, circle, line, and text tools
- Real-time remote cursors with per-user colors
- Live pen stroke previews as others draw
- Eraser with client-side hit testing
- Per-user undo/redo (Cmd+Z / Cmd+Shift+Z)
- Anonymous rooms — unique URL, anyone with the link can join
- Optimistic updates for zero-latency local drawing
- In-memory board state synced via Socket.io`,
    thumbnail: '',
    screenshots: [],
    siteUrl: 'https://collab-whiteboard-client-mmv5.vercel.app',
    githubUrl: 'https://github.com/Toramiyuu/CollabWhiteboard',
    changelog: [
      {
        version: '1.0.0',
        date: '2026-03-10',
        changes: [
          'Freehand pen tool with perfect-freehand pressure simulation',
          'Rectangle, circle, and line shape tools',
          'Text tool with DOM textarea overlay for full IME support',
          'Eraser with client-side hit testing',
          'Real-time remote cursors broadcast at 30fps',
          'Live pen stroke previews at 60fps throttle',
          'Per-user undo/redo synced across all room clients',
          'Optimistic local updates with server reconciliation',
          'Anonymous rooms with shareable URL',
        ],
      },
    ],
  },
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
    downloadUrl: 'https://github.com/Toramiyuu/NookClone/releases/download/v1.0.0/NookClone.zip',
    githubUrl: 'https://github.com/Toramiyuu/NookClone',
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
