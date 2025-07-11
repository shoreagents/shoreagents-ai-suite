import { useEffect } from 'react'
import { useAuthStore } from '@/stores/auth'
import { useThemeStore } from '@/stores/theme'
import { LoginPage } from '@/components/auth/LoginPage'
import { Dashboard } from '@/components/dashboard/Dashboard'

function App() {
  const { isAuthenticated } = useAuthStore()
  const { theme } = useThemeStore()

  // Ensure theme is applied on initial load
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="app-container">
      {isAuthenticated ? <Dashboard /> : <LoginPage />}
    </div>
  )
}

export default App 