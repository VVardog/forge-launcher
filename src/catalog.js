// Forge Launcher — CATALOG 🔨
// This is the one file you edit to add things to the hub.
// Each entry:
//   { title, desc, icon (emoji), kind, url }
//   kind = "portal"   -> opens url in an embedded Forge window (mauricetech.net / spiral only)
//   kind = "external" -> opens url in the system browser
// NOTE: there is no "local" kind. This build never runs programs on your
// computer — it only opens web pages. Safe to share with anyone.
window.FORGE_CATALOG = [
  {
    section: "The Arcade",
    blurb: "Drop into a game. No install, no account — just play.",
    items: [
      { title: "The Keep Arcade", desc: "Every game in one place", icon: "🕹️", kind: "portal", url: "https://mauricetech.net/games.html" },
      { title: "DiabloWeb", desc: "Diablo 1 in your browser", icon: "👹", kind: "portal", url: "https://mauricetech.net/diablo.html" },
      { title: "Void Jump", desc: "Neon arcade jumper", icon: "🌌", kind: "portal", url: "https://mauricetech.net/games/spiral-jump.html" },
      { title: "Tetris", desc: "The eternal", icon: "🟦", kind: "portal", url: "https://mauricetech.net/games/tetris.html" },
      { title: "Snake", desc: "Classic", icon: "🐍", kind: "portal", url: "https://mauricetech.net/games/snake.html" },
      { title: "Breakout", desc: "Smash the wall", icon: "🧱", kind: "portal", url: "https://mauricetech.net/games/breakout.html" },
      { title: "Space Invaders", desc: "Defend the line", icon: "👾", kind: "portal", url: "https://mauricetech.net/games/invaders.html" },
    ],
  },
  {
    section: "The Surface",
    blurb: "Sites worth visiting.",
    items: [
      { title: "MauriceTech", desc: "The Keep — games & tech", icon: "⚔️", kind: "portal", url: "https://mauricetech.net/" },
      { title: "War Stories", desc: "The canonical record", icon: "📜", kind: "portal", url: "https://mauricetech.net/war-stories.html" },
      { title: "Spiral Interior", desc: "Interior design studio", icon: "🌀", kind: "portal", url: "https://spiralinteriorspaces.com/" },
    ],
  },
];
