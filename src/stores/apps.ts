import { create } from 'zustand'
import { AppState, App } from '@/types'

// Mock apps data
const mockApps: App[] = [
  {
    id: 'it-app',
    name: 'IT App',
    description: 'System management and infrastructure tools',
    icon: 'server',
    status: 'available',
    version: '1.0.0',
    lastUpdated: new Date('2024-01-15')
  },
  {
    id: 'admin-app',
    name: 'Admin App',
    description: 'Administrative control and management center',
    icon: 'shield',
    status: 'available',
    version: '1.2.1',
    lastUpdated: new Date('2024-01-20')
  },
  {
    id: 'staff-app',
    name: 'Staff App',
    description: 'Staff management and scheduling platform with workflow automation',
    icon: 'users',
    status: 'available',
    version: '2.0.0',
    lastUpdated: new Date('2024-01-18')
  },
  {
    id: 'nurse-app',
    name: 'Nurse App',
    description: 'Client care and support management system',
    icon: 'heart',
    status: 'available',
    version: '1.5.3',
    lastUpdated: new Date('2024-01-22')
  }
]

export const useAppStore = create<AppState>((set, get) => ({
  apps: mockApps,
  
  launchApp: async (appId: string) => {
    const { apps } = get()
    const app = apps.find(a => a.id === appId)
    
    if (!app) {
      console.error(`App with id ${appId} not found`)
      return
    }
    
    try {
      // Update app status to running
      set({
        apps: apps.map(a => 
          a.id === appId 
            ? { ...a, status: 'running' as const }
            : a
        )
      })
      
      // Try to use Electron API if available
      if (window.electronAPI) {
        await window.electronAPI.launchApp(appId)
      } else {
        // Fallback for browser testing
        console.log(`Launching app: ${app.name}`)
        
        // Show notification
        if (window.electronAPI) {
          await window.electronAPI.showNotification(
            'App Launched',
            `${app.name} has been launched successfully`
          )
        }
      }
      
      // Reset status after a delay (simulating app startup)
      setTimeout(() => {
        set({
          apps: get().apps.map(a => 
            a.id === appId 
              ? { ...a, status: 'available' as const }
              : a
          )
        })
      }, 3000)
      
    } catch (error) {
      console.error(`Failed to launch app ${appId}:`, error)
      
      // Reset status on error
      set({
        apps: apps.map(a => 
          a.id === appId 
            ? { ...a, status: 'unavailable' as const }
            : a
        )
      })
    }
  },
  
  updateAppStatus: (appId: string, status: App['status']) => {
    const { apps } = get()
    set({
      apps: apps.map(a => 
        a.id === appId 
          ? { ...a, status }
          : a
      )
    })
  }
})) 