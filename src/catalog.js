// Forge Launcher — CATALOG 🔨
// This is the one file you edit to add things to the hub.
// Each entry:
//   { title, desc, icon (emoji), kind, ... }
//   kind = "portal"   -> opens url in an embedded Forge window  (needs: url)
//   kind = "external" -> opens url in the system browser         (needs: url)
//   kind = "local"    -> runs a local program / shell command    (needs: cmd, optional args[], cwd)
window.FORGE_CATALOG = [
  {
    section: 'The Surface',
    blurb: 'Your live sites and public face.',
    items: [
      { title: 'MauriceTech', desc: 'The Keep — your tech brand & arcade', icon: '⚔️', kind: 'portal', url: 'https://mauricetech.net/' },
      { title: 'The Keep Arcade', desc: '40+ emulated & original games', icon: '🕹️', kind: 'portal', url: 'https://mauricetech.net/games.html' },
      { title: 'Spiral Interior', desc: "Jacqueline's design studio", icon: '🌀', kind: 'portal', url: 'https://spiralinteriorspaces.com/' },
      { title: 'War Stories', desc: 'The canonical record', icon: '📜', kind: 'portal', url: 'https://mauricetech.net/war-stories.html' },
    ],
  },
  {
    section: 'The Arcade',
    blurb: 'Drop into a game.',
    items: [
      { title: 'DiabloWeb', desc: 'Diablo 1 in the browser', icon: '👹', kind: 'portal', url: 'https://mauricetech.net/diablo.html' },
      { title: 'Void Jump', desc: 'Neon arcade jumper', icon: '🌌', kind: 'portal', url: 'https://mauricetech.net/games/spiral-jump.html' },
      { title: 'Tetris', desc: 'The eternal', icon: '🟦', kind: 'portal', url: 'https://mauricetech.net/games/tetris.html' },
      { title: 'Snake', desc: 'Classic', icon: '🐍', kind: 'portal', url: 'https://mauricetech.net/games/snake.html' },
      { title: 'Breakout', desc: 'Smash the wall', icon: '🧱', kind: 'portal', url: 'https://mauricetech.net/games/breakout.html' },
      { title: 'Space Invaders', desc: 'Defend the line', icon: '👾', kind: 'portal', url: 'https://mauricetech.net/games/invaders.html' },
    ],
  },
  {
    section: 'The Forge',
    blurb: 'Tools and dashboards.',
    items: [
      { title: 'Kai Toolbox', desc: '⚡🗡️ 31-tool Windows repair suite — get latest', icon: '🧰', kind: 'external', url: 'https://github.com/VVardog/virt-kai-tools/releases/latest' },
      { title: 'Kai Toolbox · Repo', desc: 'virt-kai-tools source & README', icon: '🗡️', kind: 'external', url: 'https://github.com/VVardog/virt-kai-tools' },
      { title: 'Forge HQ', desc: 'Fleet dashboard (cain)', icon: '🔥', kind: 'external', url: 'https://cain.tail17d57c.ts.net/' },
      { title: 'Grafana', desc: 'Metrics & graphs', icon: '📊', kind: 'external', url: 'https://cain.tail17d57c.ts.net/grafana/' },
      { title: 'Gateway UI', desc: 'OpenClaw control', icon: '🦞', kind: 'external', url: 'https://cain.tail17d57c.ts.net/better-gateway/' },
      { title: 'GitHub', desc: 'VVardog repos', icon: '🐙', kind: 'external', url: 'https://github.com/VVardog' },
    ],
  },
  {
    section: 'Local Tools',
    blurb: 'Programs on this machine. Edit catalog.js to add your own.',
    items: [
      { title: 'Terminal', desc: 'Open a shell', icon: '🖥️', kind: 'local', cmd: 'x-terminal-emulator || gnome-terminal || xterm' },
      { title: 'Files', desc: 'File manager (home)', icon: '📁', kind: 'local', cmd: 'xdg-open "$HOME"' },
      { title: 'Code', desc: 'VS Code, if installed', icon: '🧩', kind: 'local', cmd: 'code "$HOME" || codium "$HOME"' },
    ],
  },
];
