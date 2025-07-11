import { Header } from '@/components/layout/Header'
import { AppGrid } from '@/components/apps/AppGrid'

export function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyber-green-600 to-neural-blue-600 bg-clip-text text-transparent">
              Welcome to ShoreAgents AI Suite
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose an application to get started
            </p>
          </div>
          <AppGrid />
        </div>
      </main>
    </div>
  )
} 