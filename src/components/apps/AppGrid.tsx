import { useAppStore } from '@/stores/apps'
import { AppCard } from './AppCard'

export function AppGrid() {
  const { apps } = useAppStore()
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {apps.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </div>
  )
} 