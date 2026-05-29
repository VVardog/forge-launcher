# Forge Launcher Progress

- Fixed icon issue for Linux builds by generating a proper 256 px PNG and using it in `package.json`.

**Current Status (2026-05-26)**
- Repository initialized with a basic README.
- Ideas and next steps captured in `memory/forge_launcher_ideas.md`.
- No code scaffold yet; core modules are pending.

**Next Steps**
1. **Create project scaffold** – set up directories `src/`, `assets/`, and basic build config (e.g., `package.json`, `vite.config.js`).
2. **Review and address TODO comments** in the future codebase (UI panels, sound effects, controller logic).
3. **Implement missing sound effect** for `star.js` location.
4. **Refine intercom panel text handling** (replace placeholder text).
5. **Optimize `bp3djs.js` performance hotspots** (profiling, lazy‑load heavy assets).
6. **Add Diablo‑themed visual flair** – rune borders, dark UI palette, optional character avatars, hellfire sound cue.

**Upcoming Milestones**
- **May 28**: Draft UI mockups and finalize repo structure.
- **June 2**: First functional prototype with basic launcher UI.
- **June 7**: Community feedback loop (share prototype, gather suggestions).

*All steps are logged in `memory/forge_launcher_ideas.md` and tracked via cron reminders.*

2026-05-26 11:55 AM EDT – Heartbeat check: progress on track, next steps unchanged.
- **2026-05-29 (Kai cleanup + fix)** — Consolidated to single sandbox location `~/forge-box/launcher/`. Fixed Electron launch: chrome-sandbox SUID error (was misdiagnosed as a Wine issue) resolved with `--no-sandbox` flag in `npm start`. **Verified: app launches headless under xvfb, window loads index.html, title="Forge Launcher".** Windows/Wine installer path PARKED — Linux/Electron first. Next: build out the Diablo-themed UI per FORGE-LAUNCHER.md.

- **2026-05-29 (Kai — legendary rebuild)** — Replaced the Hello-World skeleton with a real themed hub. Architecture: data-driven `src/catalog.js` (edit ONE file to add tiles), `main.js` with secure IPC (contextIsolation:true) for 3 launch kinds: `portal` (embedded Electron window), `external` (system browser), `local` (spawn a program/shell cmd). UI: Diablo/forge theme — Cinzel display font, animated ember canvas backdrop, rune-glow tiles grouped by section (The Surface / The Arcade / The Forge / Local Tools), hover hellfire glow, footer with host meta + reload/quit, Konami-code → hellfire easter egg. Houses mauricetech.net, the arcade games, Spiral, Forge HQ/Grafana/Gateway/GitHub, and local tools. Verified: launches + renders headless (screenshot confirmed). **To add anything: edit src/catalog.js.**
