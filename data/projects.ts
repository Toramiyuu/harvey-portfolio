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
    slug: 'cornerstone',
    name: 'Cornerstone',
    platform: 'macOS',
    tagline: 'Hot corners, reimagined — instant widgets at every edge of your screen',
    description: `Cornerstone puts your most-used tools one mouse flick away. Hover any corner of your screen and a floating panel appears with a widget — clipboard history, a scientific calculator, rich-text notes, or recent files. Move away and it vanishes.

Built natively for macOS using SwiftUI and AppKit. Runs as a menu bar agent with no Dock icon, and integrates with the system at a low level for instant response.

**Features:**
- Four assignable corners — map any widget to any corner
- Per-corner dwell delay — set how long you need to hover before the popup fires
- Global hotkeys — open any corner's widget from the keyboard, no mouse needed
- Resizable panels — drag to resize, size is remembered per widget
- Clipboard history — searchable list of recent copied items, click to paste
- Scientific calculator — Casio FX-570EX style with trig, logs, memory, and constants
- Rich-text notes — bold, italic, underline, strikethrough, text alignment, auto-saved
- Recent files — quick-open documents from any app via macOS recents API
- Corner indicators — subtle bracket UI in each corner shows the assigned widget on hover
- Completely menu-bar driven — no Dock icon, no interruptions`,
    thumbnail: '',
    screenshots: [],
    githubUrl: 'https://github.com/Toramiyuu/Cornerstone',
    changelog: [
      {
        version: '1.2.0',
        date: '2026-03-13',
        changes: [
          'Per-corner dwell delay — each corner can have its own hover duration',
          'Global hotkeys — register a keyboard shortcut to open any corner widget',
          'Resizable panels — drag the bottom-right handle to resize; size persists per widget',
          'Shortcut recorder UI in menu bar settings with modifier symbol display',
        ],
      },
      {
        version: '1.1.0',
        date: '2026-03-12',
        changes: [
          'Rich text formatting toolbar in Notes — bold, italic, underline, strikethrough, alignment',
          'Cmd+B/I/U/Shift+U keyboard shortcuts for formatting in Notes',
          'Casio FX-570EX scientific calculator with trig, log, memory, and physical constants',
          'Corner indicator UI — hover brackets show assigned widget in each screen corner',
          'Fixed keyboard input in popup panel using KeyablePanel subclass',
        ],
      },
      {
        version: '1.0.0',
        date: '2026-03-10',
        changes: [
          'Hot corner detection with configurable dwell timer',
          'Floating borderless panel with fade-in animation',
          'Click-outside and mouse-leave dismiss with 100ms debounce',
          'Clipboard history widget with 20-item rolling history',
          'Notes widget with auto-save to Application Support',
          'Recent Files widget via NSDocumentController',
          'Menu bar settings for corner-to-widget assignments and dwell delay',
        ],
      },
    ],
  },
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
- Bookmarks widget — one-click to open any URL in your browser, with auto-fetched favicons
- News widget — live RSS headlines from BBC, Hacker News, The Verge, TechCrunch and more
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
    downloadUrl: 'https://github.com/Toramiyuu/Notchly/releases/download/v1.4.0/Notchly.zip',
    githubUrl: 'https://github.com/Toramiyuu/Notchly',
    changelog: [
      {
        version: '1.4.0',
        date: '2026-04-07',
        changes: [
          'In-panel settings gear — click ⚙ in the expanded panel to enable/disable widgets without opening Settings',
          'Fixed notch not opening when any app other than Finder was in focus — fullscreen detection was incorrectly hiding the panel for Chrome, Teams, Word, and other apps',
        ],
      },
      {
        version: '1.3.4',
        date: '2026-04-03',
        changes: [
          'Fixed data race on artwork cache in MediaManager — background refresh thread and URLSession completion could concurrently access the cache; now serialised through a dedicated queue',
          'Added 10-second timeout to shortcuts list process — previously had no timeout and could block a background thread indefinitely',
        ],
      },
      {
        version: '1.3.3',
        date: '2026-04-03',
        changes: [
          'Fixed NSAttributedString HTML entity decoding running off main thread — could cause crashes when parsing RSS news headlines',
          'Moved clipboard image PNG conversion and disk write off main thread — prevents UI freezes when copying large images',
        ],
      },
      {
        version: '1.3.2',
        date: '2026-04-03',
        changes: [
          'Fixed NSAppleScript running off main thread — could cause crashes during Music/Spotify playback control',
          'News headlines now properly decode HTML entities (&amp;, &quot;, etc.)',
          'Weather location error now shows a direct link to open Location Settings',
          'Bookmark favicons now fetch with a 5-second timeout instead of blocking indefinitely',
        ],
      },
      {
        version: '1.3.1',
        date: '2026-04-03',
        changes: [
          'Fixed visual artifacts at the bottom corners of the expanded panel',
        ],
      },
      {
        version: '1.3.0',
        date: '2026-04-03',
        changes: [
          'New Bookmarks widget — grid of one-click buttons to open URLs in your browser, with auto-fetched favicons',
          'New News widget — live RSS headlines from BBC, Hacker News, The Verge, TechCrunch, Reuters, and Ars Technica',
          'Fixed weather location permission — macOS was silently ignoring the request due to a missing plist key',
        ],
      },
      {
        version: '1.2.0',
        date: '2026-03-30',
        changes: [
          'Fixed panel not opening when any app is in foreground on macOS 15+ — replaced AXFullScreen with CGWindowList-based fullscreen detection',
          'CGEventTap crash recovery — automatic re-enable on timeout plus 5-second watchdog timer prevents silent HUD death',
          'Drop area items now persist to disk across app restarts',
          'Clipboard images stored as individual PNG files instead of inline data — prevents JSON bloat',
          'Shortcuts execution now has a 30-second timeout to prevent hung processes',
          'HUD overlay no longer appears simultaneously in both notch pill and floating window',
          'Added Bluetooth device icons for Imaging, Wearable, and Toy device classes',
          'About view now displays the actual app icon instead of a generic placeholder',
          'Removed dead code (NotchHoverController) and duplicate Xcode project file',
          'Fixed stale CPU usage readings after host_processor_info failures',
        ],
      },
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
