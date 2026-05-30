// Forge Launcher — preload (safe IPC bridge) 🩸
// Web-only surface: open an embedded portal, open the system browser, quit,
// read meta. No local command execution is exposed — by design.
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("forge", {
  openPortal: (payload) => ipcRenderer.invoke("forge:openPortal", payload),
  openExternal: (url) => ipcRenderer.invoke("forge:openExternal", url),
  quit: () => ipcRenderer.invoke("forge:quit"),
  meta: () => ipcRenderer.invoke("forge:meta"),
});
