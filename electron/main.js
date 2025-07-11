const { app, BrowserWindow, Menu, ipcMain, shell, dialog, Notification } = require('electron')
const path = require('path')
const { spawn } = require('child_process')

const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged

console.log('Environment:', {
  NODE_ENV: process.env.NODE_ENV,
  isDev,
  isPackaged: app.isPackaged
})

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    titleBarStyle: 'hiddenInset',
    show: false,
    icon: path.join(__dirname, '../public/shoreagents-icon.svg'),
    backgroundColor: '#0a0a0a'
  })

  // Load the app
  if (isDev) {
    console.log('Loading development URL: http://localhost:3000')
    mainWindow.loadURL('http://localhost:3000')
    mainWindow.webContents.openDevTools()
  } else {
    const distPath = path.join(__dirname, '../dist/index.html')
    console.log('Loading production file:', distPath)
    mainWindow.loadFile(distPath)
  }

  // Show window when ready
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  // Set up menu
  const menuTemplate = require('./menu')
  const menu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(menu)

  return mainWindow
}

// This method will be called when Electron has finished initialization
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Security: Prevent new window creation
app.on('web-contents-created', (event, contents) => {
  contents.on('new-window', (event, url) => {
    event.preventDefault()
  })
})

// IPC Handlers
ipcMain.handle('launch-app', async (event, appId) => {
  try {
    console.log(`Launching app: ${appId}`)
    
    // For now, just log the app launch
    // In a real implementation, you would launch the actual executable
    // Example: spawn('path/to/app.exe', [], { detached: true })
    
    // Show notification
    if (Notification.isSupported()) {
      const notification = new Notification({
        title: 'App Launched',
        body: `Successfully launched ${appId}`,
        icon: path.join(__dirname, '../public/shoreagents-icon.svg')
      })
      notification.show()
    }
    
    return { success: true, appId }
  } catch (error) {
    console.error('Failed to launch app:', error)
    return { success: false, error: error.message }
  }
})

ipcMain.handle('get-version', () => {
  return app.getVersion()
})

ipcMain.handle('minimize-window', () => {
  const focusedWindow = BrowserWindow.getFocusedWindow()
  if (focusedWindow) {
    focusedWindow.minimize()
  }
})

ipcMain.handle('maximize-window', () => {
  const focusedWindow = BrowserWindow.getFocusedWindow()
  if (focusedWindow) {
    if (focusedWindow.isMaximized()) {
      focusedWindow.unmaximize()
    } else {
      focusedWindow.maximize()
    }
  }
})

ipcMain.handle('close-window', () => {
  const focusedWindow = BrowserWindow.getFocusedWindow()
  if (focusedWindow) {
    focusedWindow.close()
  }
})

ipcMain.handle('show-open-dialog', async (event, options) => {
  const result = await dialog.showOpenDialog(options)
  return result
})

ipcMain.handle('show-notification', (event, title, body) => {
  if (Notification.isSupported()) {
    const notification = new Notification({
      title,
      body,
      icon: path.join(__dirname, '../public/shoreagents-icon.svg')
    })
    notification.show()
  }
}) 