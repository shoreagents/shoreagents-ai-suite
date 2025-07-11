import { Logo } from "@/components/ui/Logo"
import { LoginForm } from "@/components/login-form"
import { ThemeToggle } from "@/components/ui/ThemeToggle"

export function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 font-medium">
            <Logo 
              variant="icon" 
              size="sm" 
              animated={true} 
              className="drop-shadow-lg"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-cyber-green-400 to-neural-blue-500 bg-clip-text text-transparent">
              ShoreAgents AI
            </span>
          </div>
          <ThemeToggle />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative hidden lg:block overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-green-500/50 via-transparent to-neural-blue-500/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(16,185,129,0.5),transparent)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.5),transparent)] animate-pulse animation-delay-1000"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-6 px-8">
            <div className="mx-auto w-24 h-24 bg-gradient-to-br from-white to-cyber-green-50 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyber-green-500/25 animate-ai-float border border-cyber-green-200/50 backdrop-blur-sm">
              <Logo 
                variant="icon" 
                size="lg" 
                animated={true}
                className="w-16 h-16"
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-white">
                AI-Powered Real Estate Solutions
              </h2>
              <p className="text-slate-300 text-lg">
                Your central hub for managing all BPO applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 