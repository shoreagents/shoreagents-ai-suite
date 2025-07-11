import { Button } from '@/components/ui/button'
import { useThemeStore } from '@/stores/theme'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore()
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="w-9 h-9 rounded-lg hover:bg-accent transition-all duration-300 hover:scale-105"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-matrix-orange-500 transition-all duration-300 hover:text-matrix-orange-400" />
      ) : (
        <Moon className="w-4 h-4 text-neural-blue-600 transition-all duration-300 hover:text-neural-blue-500" />
      )}
    </Button>
  )
} 