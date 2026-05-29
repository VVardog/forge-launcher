// Forge Launcher — preload (safe IPC bridge) 🩸
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('forge', {
  openPortal: (payload) => ipcRenderer.invoke('forge:openPortal', payload),
  openExternal: (url) => ipcRenderer.invoke('forge:openExternal', url),
  launchLocal: (payload) => ipcRenderer.invoke('forge:launchLocal', payload),
  quit: () => ipcRenderer.invoke('forge:quit'),
  meta: () => ipcRenderer.invoke('forge:meta'),
});
