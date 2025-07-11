const { contextBridge, ipcRenderer } = require('electron')

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  // App launching functionality
  launchApp: (appId) => ipcRenderer.invoke('launch-app', appId),
  
  // System information
  getVersion: () => ipcRenderer.invoke('get-version'),
  
  // Window controls
  minimizeWindow: () => ipcRenderer.invoke('minimize-window'),
  maximizeWindow: () => ipcRenderer.invoke('maximize-window'),
  closeWindow: () => ipcRenderer.invoke('close-window'),
  
  // File system operations (if needed)
  showOpenDialog: (options) => ipcRenderer.invoke('show-open-dialog', options),
  
  // Notifications
  showNotification: (title, body) => ipcRenderer.invoke('show-notification', title, body)
})

// DOM Ready
window.addEventListener('DOMContentLoaded', () => {
  // Any initialization code that needs to run when the DOM is ready
  console.log('ShoreAgents AI Suite - Preload script loaded')
}) 