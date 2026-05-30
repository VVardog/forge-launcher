# 🔨🩸 Forge Launcher

**Your fleet, your sites, your games, your tools — one legendary hub. Dark-fantasy themed, data-driven, built on Electron.**

[![Platform](https://img.shields.io/badge/platform-Linux%20%7C%20Windows%20%7C%20macOS-blue)](https://github.com/VVardog/forge-launcher)
[![Built with](https://img.shields.io/badge/built%20with-Electron-47848f)](https://www.electronjs.org/)
[![License](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)

---

## What is this?

A themed desktop launcher that houses everything you reach for — your live websites, the arcade, fleet dashboards, dev tools, and local programs — behind one **Diablo / forge-styled** front door. Steel, fire, and a wall of glowing rune tiles.

It opens two kinds of things:

- **🌀 Portals** — open a site *inside* a framed Forge window (MauriceTech, the arcade).
- **↗️ External** — hand a URL to your system browser (GitHub, Grafana, the Gateway UI, Kai Toolbox).
- _(no local program execution — this build only opens web pages, so it is safe to share with anyone.)_

Built for the fleet: a single window that gathers the whole operation — and one file (`catalog.js`) that defines all of it.

## ✨ Features

- **🃏 Data-driven catalog** — every tile is one line in `src/catalog.js`. Add a site, game, or tool without touching the UI code.
- **🔥 Forge / Diablo theme** — obsidian background, animated ember particles, Cinzel display type, rune-glow tiles that ignite on hover.
- **🪟 Embedded portals** — open web tools in-app instead of scattering browser tabs.
- **🛡️ Secure by default** — `contextIsolation` on, no `nodeIntegration` in the renderer; the UI talks to the system only through a narrow IPC bridge.
- **📊 Live host readout** — footer shows version, hostname, Electron/Node versions.
- **🎮 Easter egg** — the Konami code (`↑↑↓↓←→←→ B A`) ignites **Hellfire Mode**.

## Quick Start (development)

```bash
git clone https://github.com/VVardog/forge-launcher.git
cd forge-launcher
npm install
npm start            # launches the hub
```

> On Linux servers / headless boxes, `npm start` already passes `--no-sandbox`
> (resolves the Electron chrome-sandbox SUID abort). Use `xvfb-run -a npm start`
> if there's no display.

## Build installers

```bash
npm run dist         # current platform
npm run dist:win     # Windows NSIS one-click installer
npm run pack         # unpacked dir (no installer)
```

Output lands in `dist/`. (Binaries are **not** committed — they belong in Releases.)

---

## Adding to the hub

Open **`src/catalog.js`** and add an entry to a section. That's the whole workflow.

```js
{ title: 'My Tool', desc: 'what it does', icon: '🛠️',
  kind: 'portal',   url: 'https://example.com' }       // open in-app
// or
{ kind: 'external', url: 'https://example.com' }        // open in browser
// or
{ kind: 'local',    cmd: 'code "$HOME"' }               // run a program
```

| `kind` | What it does | Needs |
|---|---|---|
| `portal` | Opens the URL in an embedded Forge window | `url` |
| `external` | Opens the URL in the system browser | `url` |
| `local` | Spawns a program / shell command | `cmd` (+ optional `args[]`, `cwd`) |

The menu rebuilds itself from the catalog on launch. No other code to edit.

## What's inside

| File | Responsibility |
|---|---|
| `src/main.js` | Electron main process — window management, IPC handlers, launch logic |
| `src/preload.js` | Secure context-bridge exposing `window.forge.*` to the UI |
| `src/catalog.js` | **The one file you edit** — the tile catalog |
| `src/index.html` | The themed UI — ember canvas, tiles, footer, easter egg |
| `assets/` | App icons |

## Architecture

```
renderer (index.html)  ──window.forge.*──▶  preload (contextBridge)
                                                   │ ipcRenderer.invoke
                                                   ▼
                                          main.js (ipcMain.handle)
                                          ├─ openPortal   → new BrowserWindow(url)
                                          ├─ openExternal → shell.openExternal
                                          └─ launchLocal  → child_process.spawn
```

## Requirements

- **Node 18+** and **npm**
- **Electron 31** (installed via `npm install`)
- Linux: a display, or `xvfb` for headless testing

---

## Roadmap

- [ ] Per-tile thumbnails / custom art
- [ ] Search + keyboard navigation across tiles
- [ ] Favorites / recently-launched row
- [ ] Settings panel (theme toggle, default portal size)
- [ ] Optional plugin manifests for richer tools

## Why?

Every operator ends up with the same sprawl: a dozen bookmarks, a folder of scripts, a couple of dashboards, and a pile of tools you can never find when you need them. The Forge Launcher is the single doorway that gathers all of it — and looks like the inside of a forge while doing it. Build doorways, not black boxes.

## License

MIT — use it, fork it, ship it. See [LICENSE](LICENSE).

## Credits

- **Built by:** [VVardog](https://github.com/VVardog)
- **AI partners:** Cain 🩸 (the smith) & Kai 🕯️🗡️ (the lantern)
- **Stack:** Electron · vanilla JS · Cinzel + JetBrains Mono
- **Sigil:** the lantern and the blade

---

<sub>🔨🩸 For the forge. Teamwork makes the dream work — only as strong as the weakest link.</sub>
