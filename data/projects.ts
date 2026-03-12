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
    slug: 'notchly',
    name: 'Notchly',
    platform: 'macOS',
    tagline: 'A Dynamic Island-style notch panel for macOS',
    description: `Notchly turns your MacBook's notch into a productive hub. When music plays, the notch expands into a Dynamic Island-style live pill — album art on the left, animated spectrograph on the right. Hover to reveal the full panel packed with widgets.

Built natively for macOS using SwiftUI and AppKit. Sits in your menu bar and expands on demand without stealing focus from your current app.

**Features:**
- Live notch pill — expands from the notch when music plays (album art + spectrograph)
- Media widget with Apple Music & Spotify controls and album artwork
- Clipboard history manager with one-click paste and image preview
- Bluetooth device manager with battery levels
- Live weather with manual city override
- Calendar today view via EventKit
- Custom volume & brightness HUD replacing the system overlay
- Global keyboard shortcut (Option+N) to toggle the panel
- Adaptive panel height per widget

---

## How to Install

1. Click **Download** above to get \`Notchly.zip\`
2. Unzip it and drag **Notchly.app** to your Applications folder
3. Open Notchly — macOS may show a security warning on first launch
4. If blocked, go to **System Settings → Privacy & Security** and click **Open Anyway**
5. Grant permissions as prompted:
   - **Accessibility** — required for the custom volume/brightness HUD
   - **Apple Music / Spotify** — for now-playing info and controls
   - **Calendar** — for the calendar widget
   - **Bluetooth** — for the Bluetooth device list

Once running, Notchly lives in your menu bar. Hover over the notch to open the panel, or press **Option+N** from anywhere.

> **Requirements:** macOS 14 Sonoma or later · MacBook with notch recommended`,
    thumbnail: '/projects/notchly/screen-system.png',
    screenshots: [
      '/projects/notchly/screen-system.png',
      '/projects/notchly/screen-context.png',
    ],
    downloadUrl: 'https://github.com/Toramiyuu/Notchly/releases/download/v1.1.0/Notchly.zip',
    githubUrl: 'https://github.com/Toramiyuu/Notchly',
    changelog: [
      {
        version: '1.1.1',
        date: '2026-03-12',
        changes: [
          'Fixed tab click hit area — full padded region now responds to clicks',
          'Improved unselected tab label visibility (larger font, higher opacity)',
          'Restored hover-to-expand and auto-collapse on mouse leave',
        ],
      },
      {
        version: '1.1.0',
        date: '2026-03-12',
        changes: [
          'Live notch pill — notch widens when music plays to show album art and animated spectrograph',
          'Flat-top UnevenRoundedRectangle shape merges seamlessly with the physical notch',
          'Fixed panel buttons requiring two clicks — switched to NSPanel with nonactivatingPanel',
          'Fixed audio loopback/bass-boost caused by AVAudioEngine microphone tap',
          'Fixed Bluetooth widget crash on macOS 15 before permission is granted',
          'Increased default widget panel height for better content layout',
          'Clipboard history now scrolls to fill the full panel height',
          'Panel stays open while the user is actively clicking',
        ],
      },
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
