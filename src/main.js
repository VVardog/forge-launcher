// Forge Launcher — main process 🔨🩸
// A themed hub that houses the MauriceTech site, web tools, the arcade, and local tools.
const { app, BrowserWindow, ipcMain, shell, Menu } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

app.commandLine.appendSwitch('no-sandbox'); // Linux headless / sandbox-perm safety

let mainWindow = null;
const childWindows = new Set();

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1180,
    height: 780,
    minWidth: 900,
    minHeight: 620,
    backgroundColor: '#0a0705',
    title: 'Forge Launcher',
    icon: path.join(__dirname, '..', 'assets', 'icon-256.png'),
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  Menu.setApplicationMenu(null);
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.on('closed', () => { mainWindow = null; });
}

// Open a web target inside a framed child window (the "portal").
function openPortal({ url, title }) {
  const win = new BrowserWindow({
    width: 1280,
    height: 860,
    backgroundColor: '#0a0705',
    title: title || 'Forge Portal',
    autoHideMenuBar: true,
    parent: mainWindow || undefined,
    webPreferences: { contextIsolation: true, nodeIntegration: false },
  });
  win.loadURL(url);
  childWindows.add(win);
  win.on('closed', () => childWindows.delete(win));
  return { ok: true };
}

// Launch a local program / shell command (a "tool").
function launchLocal({ cmd, args, cwd }) {
  try {
    const child = spawn(cmd, args || [], {
      cwd: cwd || process.env.HOME,
      detached: true,
      stdio: 'ignore',
      shell: !args, // if no args array given, treat cmd as a shell line
    });
    child.unref();
    return { ok: true, pid: child.pid };
  } catch (e) {
    return { ok: false, error: String(e.message || e) };
  }
}

app.whenReady().then(() => {
  // IPC handlers — the renderer asks, the main process acts.
  ipcMain.handle('forge:openPortal', (_e, payload) => openPortal(payload || {}));
  ipcMain.handle('forge:openExternal', (_e, url) => { shell.openExternal(url); return { ok: true }; });
  ipcMain.handle('forge:launchLocal', (_e, payload) => launchLocal(payload || {}));
  ipcMain.handle('forge:quit', () => { app.quit(); return { ok: true }; });
  ipcMain.handle('forge:meta', () => ({
    version: app.getVersion(),
    platform: process.platform,
    electron: process.versions.electron,
    node: process.versions.node,
    host: require('os').hostname(),
  }));

  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
