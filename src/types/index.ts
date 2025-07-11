export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'staff' | 'nurse' | 'it'
  avatar?: string
  username?: string
}

export interface App {
  id: string
  name: string
  description: string
  icon: string
  status: 'available' | 'running' | 'unavailable'
  executable?: string
  version?: string
  lastUpdated?: Date
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
}

export interface AppState {
  apps: App[]
  launchApp: (appId: string) => Promise<void>
  updateAppStatus: (appId: string, status: App['status']) => void
}

// Window API interface for Electron
declare global {
  interface Window {
    electronAPI: {
      launchApp: (appId: string) => Promise<void>
      getVersion: () => Promise<string>
      minimizeWindow: () => Promise<void>
      maximizeWindow: () => Promise<void>
      closeWindow: () => Promise<void>
      showOpenDialog: (options: any) => Promise<any>
      showNotification: (title: string, body: string) => Promise<void>
    }
  }
} 