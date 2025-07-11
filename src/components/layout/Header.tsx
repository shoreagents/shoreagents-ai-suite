import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { useAuthStore } from '@/stores/auth'
import { LogOut } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export function Header() {
  const { user, logout } = useAuthStore()
  
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Logo 
              variant="icon" 
              size="sm" 
              animated={true}
              className="w-8 h-8 drop-shadow-md hover:drop-shadow-lg transition-all duration-300"
            />
            <div>
              <h1 className="text-lg font-semibold bg-gradient-to-r from-cyber-green-600 to-neural-blue-600 bg-clip-text text-transparent">ShoreAgents AI Suite</h1>
              <p className="text-sm text-muted-foreground">Central Hub</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <div className="flex items-center space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="text-sm">
                  {user?.avatar || user?.name?.charAt(0) || 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">{user?.name}</p>
                <p className="text-xs text-muted-foreground capitalize">{user?.role}</p>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={logout}
              className="flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
} 