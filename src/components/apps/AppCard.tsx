import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/stores/apps'
import { App } from '@/types'
import { 
  Server, 
  Shield, 
  Users, 
  Heart, 
  Play, 
  Loader2,
  CheckCircle,
  XCircle 
} from 'lucide-react'

interface AppCardProps {
  app: App
}

// Icon mapping for each app
const iconMap = {
  server: Server,
  shield: Shield,
  users: Users,
  heart: Heart,
}

// Color scheme mapping for each app
const getAppColorScheme = (appId: string) => {
  switch (appId) {
    case 'admin-app':
      return {
        cardGradient: 'bg-gradient-to-br from-white to-cyber-green-50/30 dark:from-background dark:to-cyber-green-950/30',
        border: 'border-cyber-green-200/50 dark:border-cyber-green-800/50 hover:border-cyber-green-300 dark:hover:border-cyber-green-700',
        iconBg: 'bg-cyber-green-50 dark:bg-cyber-green-900/30 group-hover:bg-cyber-green-100 dark:group-hover:bg-cyber-green-800/50',
        iconColor: 'text-cyber-green-600 dark:text-cyber-green-400 group-hover:text-cyber-green-700 dark:group-hover:text-cyber-green-300',
        buttonGradient: 'bg-gradient-to-r from-cyber-green-500 to-cyber-green-600 hover:from-cyber-green-600 hover:to-cyber-green-700',
        shadow: 'hover:shadow-cyber-glow'
      }
    case 'it-app':
      return {
        cardGradient: 'bg-gradient-to-br from-white to-neural-blue-50/30 dark:from-background dark:to-neural-blue-950/30',
        border: 'border-neural-blue-200/50 dark:border-neural-blue-800/50 hover:border-neural-blue-300 dark:hover:border-neural-blue-700',
        iconBg: 'bg-neural-blue-50 dark:bg-neural-blue-900/30 group-hover:bg-neural-blue-100 dark:group-hover:bg-neural-blue-800/50',
        iconColor: 'text-neural-blue-600 dark:text-neural-blue-400 group-hover:text-neural-blue-700 dark:group-hover:text-neural-blue-300',
        buttonGradient: 'bg-gradient-to-r from-neural-blue-500 to-neural-blue-600 hover:from-neural-blue-600 hover:to-neural-blue-700',
        shadow: 'hover:shadow-neural-glow'
      }
    case 'staff-app':
      return {
        cardGradient: 'bg-gradient-to-br from-white to-matrix-orange-50/30 dark:from-background dark:to-matrix-orange-950/30',
        border: 'border-matrix-orange-200/50 dark:border-matrix-orange-800/50 hover:border-matrix-orange-300 dark:hover:border-matrix-orange-700',
        iconBg: 'bg-matrix-orange-50 dark:bg-matrix-orange-900/30 group-hover:bg-matrix-orange-100 dark:group-hover:bg-matrix-orange-800/50',
        iconColor: 'text-matrix-orange-600 dark:text-matrix-orange-400 group-hover:text-matrix-orange-700 dark:group-hover:text-matrix-orange-300',
        buttonGradient: 'bg-gradient-to-r from-matrix-orange-500 to-matrix-orange-600 hover:from-matrix-orange-600 hover:to-matrix-orange-700',
        shadow: 'hover:shadow-matrix-glow'
      }
    case 'care-app':
      return {
        cardGradient: 'bg-gradient-to-br from-white to-purple-50/30 dark:from-background dark:to-purple-950/30',
        border: 'border-purple-200/50 dark:border-purple-800/50 hover:border-purple-300 dark:hover:border-purple-700',
        iconBg: 'bg-purple-50 dark:bg-purple-900/30 group-hover:bg-purple-100 dark:group-hover:bg-purple-800/50',
        iconColor: 'text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300',
        buttonGradient: 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
        shadow: 'hover:shadow-lg hover:shadow-purple-500/20'
      }
    default:
      // Fallback to cyber green
      return {
        cardGradient: 'bg-gradient-to-br from-white to-cyber-green-50/30 dark:from-background dark:to-cyber-green-950/30',
        border: 'border-cyber-green-200/50 dark:border-cyber-green-800/50 hover:border-cyber-green-300 dark:hover:border-cyber-green-700',
        iconBg: 'bg-cyber-green-50 dark:bg-cyber-green-900/30 group-hover:bg-cyber-green-100 dark:group-hover:bg-cyber-green-800/50',
        iconColor: 'text-cyber-green-600 dark:text-cyber-green-400 group-hover:text-cyber-green-700 dark:group-hover:text-cyber-green-300',
        buttonGradient: 'bg-gradient-to-r from-cyber-green-500 to-cyber-green-600 hover:from-cyber-green-600 hover:to-cyber-green-700',
        shadow: 'hover:shadow-cyber-glow'
      }
  }
}

export function AppCard({ app }: AppCardProps) {
  const { launchApp } = useAppStore()
  
  const IconComponent = iconMap[app.icon as keyof typeof iconMap] || Server
  const colorScheme = getAppColorScheme(app.id)
  
  const handleLaunch = () => {
    launchApp(app.id)
  }
  
  const getStatusColor = () => {
    switch (app.status) {
      case 'running':
        return 'text-neural-blue-500'
      case 'available':
        return 'text-cyber-green-500'
      case 'unavailable':
        return 'text-matrix-orange-500'
      default:
        return 'text-muted-foreground'
    }
  }
  
  const getStatusIcon = () => {
    switch (app.status) {
      case 'running':
        return <Loader2 className="w-4 h-4 animate-spin" />
      case 'available':
        return <CheckCircle className="w-4 h-4" />
      case 'unavailable':
        return <XCircle className="w-4 h-4" />
      default:
        return null
    }
  }
  
  return (
    <Card className={`h-full hover:shadow-xl transition-all duration-300 cursor-pointer group ${colorScheme.border} hover:-translate-y-1 ${colorScheme.cardGradient} ${colorScheme.shadow}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className={`w-12 h-12 ${colorScheme.iconBg} rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105`}>
            <IconComponent className={`w-6 h-6 ${colorScheme.iconColor} transition-colors duration-300`} />
          </div>
          <div className={`flex items-center space-x-1 ${getStatusColor()}`}>
            {getStatusIcon()}
            <span className="text-xs font-medium capitalize">
              {app.status}
            </span>
          </div>
        </div>
        <CardTitle className="text-lg">{app.name}</CardTitle>
        <CardDescription className="text-sm">
          {app.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-col space-y-3">
          <div className="text-xs text-muted-foreground">
            <p>Version: {app.version}</p>
            <p>Updated: {app.lastUpdated?.toLocaleDateString()}</p>
          </div>
          <Button 
            onClick={handleLaunch}
            disabled={app.status === 'running' || app.status === 'unavailable'}
            className={`w-full ${colorScheme.buttonGradient} text-white shadow-md transition-all duration-300 disabled:from-muted disabled:to-muted disabled:text-muted-foreground disabled:shadow-none`}
          >
            {app.status === 'running' ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Starting...
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                Open
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
} 