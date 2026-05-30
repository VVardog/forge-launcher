// Forge Launcher — main process 🔨🩸
// A themed hub for the MauriceTech arcade and sites. Distributable build:
// it ONLY opens web content (embedded portal or the system browser).
// It deliberately CANNOT run local programs — no arbitrary command execution,
// nothing for antivirus to flag, safe to hand to anyone.
const { app, BrowserWindow, ipcMain, shell, Menu } = require("electron");
const path = require("path");

// Only disable the Chromium sandbox on Linux (headless/dev servers hit a
// chrome-sandbox SUID abort). On Windows/macOS the sandbox stays ON.
if (process.platform === "linux") {
  app.commandLine.appendSwitch("no-sandbox");
}

let mainWindow = null;
const childWindows = new Set();

// Only these origins may be opened as embedded portals. Anything else is
// handed to the system browser instead. Keeps the in-app window on our sites.
const PORTAL_ALLOWLIST = [
  "https://mauricetech.net",
  "https://www.mauricetech.net",
  "https://spiralinteriorspaces.com",
  "https://www.spiralinteriorspaces.com",
];

function isAllowedPortal(url) {
  try {
    const u = new URL(url);
    if (u.protocol !== "https:") return false;
    return PORTAL_ALLOWLIST.some((base) => {
      const b = new URL(base);
      return u.host === b.host;
    });
  } catch {
    return false;
  }
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1180,
    height: 780,
    minWidth: 900,
    minHeight: 620,
    backgroundColor: "#0a0705",
    title: "Forge Launcher",
    icon: path.join(__dirname, "..", "assets", "icon-256.png"),
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  Menu.setApplicationMenu(null);
  mainWindow.loadFile(path.join(__dirname, "index.html"));
  mainWindow.on("closed", () => { mainWindow = null; });
}

// Open an allowlisted web target inside a framed child window (the "portal").
// Non-allowlisted URLs fall back to the system browser for safety.
function openPortal({ url, title }) {
  if (!isAllowedPortal(url)) {
    if (/^https:\/\//.test(url || "")) { shell.openExternal(url); return { ok: true, external: true }; }
    return { ok: false, error: "blocked" };
  }
  const win = new BrowserWindow({
    width: 1280,
    height: 860,
    backgroundColor: "#0a0705",
    title: title || "Forge Portal",
    autoHideMenuBar: true,
    parent: mainWindow || undefined,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });
  // Hard-stop any attempt to navigate the portal to a non-web scheme.
  win.webContents.on("will-navigate", (e, target) => {
    if (!/^https?:\/\//.test(target)) e.preventDefault();
  });
  win.webContents.setWindowOpenHandler(({ url: u }) => {
    if (/^https?:\/\//.test(u)) shell.openExternal(u);
    return { action: "deny" };
  });
  win.loadURL(url);
  childWindows.add(win);
  win.on("closed", () => childWindows.delete(win));
  return { ok: true };
}

app.whenReady().then(() => {
  ipcMain.handle("forge:openPortal", (_e, payload) => openPortal(payload || {}));
  ipcMain.handle("forge:openExternal", (_e, url) => {
    if (/^https?:\/\//.test(url || "")) { shell.openExternal(url); return { ok: true }; }
    return { ok: false, error: "blocked" };
  });
  ipcMain.handle("forge:quit", () => { app.quit(); return { ok: true }; });
  ipcMain.handle("forge:meta", () => ({
    version: app.getVersion(),
    platform: process.platform,
    electron: process.versions.electron,
    node: process.versions.node,
  }));

  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
