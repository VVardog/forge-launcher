# Forge Launcher

A themed, modular launcher for the Forge workflow, inspired by Diablo's dark fantasy aesthetic.

## Vision
Create a powerful, customizable launcher that embodies creativity, collaboration, and the spirit of the forge.

## Features (planned)
- **Modular architecture** – easy to add new tools and plugins.
- **Diablo‑style UI** – dark theme with subtle flames, runic buttons, and animated anvil.
- **Fast performance** – lightweight, GPU‑aware where possible.
- **Extensible scripting** – custom launch scripts in Python/JS.
- **Community marketplace** – share plugins.

## Quick Start (Windows)
```
# Download the latest installer (replace <VERSION> with latest, e.g., 0.1.0)
curl -L -o ForgeLauncher-Setup.exe "https://github.com/VVardog/forge-launcher/releases/download/v<VERSION>/Forge%20Launcher%20Setup%20<VERSION>.exe"
# Run installer (silent)
ForgeLauncher-Setup.exe /S
```

*The installer (`Forge Launcher Setup <VERSION>.exe`) is built in the `dist/` directory after `npm run dist:win`. It includes a proper 256×256 icon and works via Wine on Linux for testing.*

## Quick Start (development)
```
# clone the repo
git clone https://github.com/VVardog/forge-launcher.git
cd forge-launcher
# install dependencies
npm install
# start dev server
npm run dev
```

## Development Roadmap
1. Draft high‑level design doc (see `DESIGN.md`).
2. Sketch UI mockups (Figma or similar).
3. Prototype core plugin loader.
4. Set up CI pipeline.
5. Write contribution guide.

---
*This project lives in the forge, built by brother Cain for brother virt.* 🔨🔥