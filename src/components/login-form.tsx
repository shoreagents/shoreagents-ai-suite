import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { useAuthStore } from "@/stores/auth"
import { Loader2, User, Lock, ArrowLeft, Mail, CheckCircle } from "lucide-react"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [currentView, setCurrentView] = useState<'login' | 'forgot-password' | 'email-sent'>('login')
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("")
  
  const { login } = useAuthStore()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    const success = login(username, password)
    
    if (!success) {
      setError("Invalid username or password")
    }
    
    setIsLoading(false)
  }

  const demoAccounts = [
    { username: "admin", password: "admin123", role: "Administrator" },
    { username: "itstaff", password: "it123", role: "IT Staff" },
    { username: "staff", password: "staff123", role: "Staff Member" },
    { username: "nurse", password: "nurse123", role: "Nurse" }
  ]

  const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsLoading(false)
    setCurrentView('email-sent')
  }

  if (currentView === 'forgot-password') {
    return (
      <div className="space-y-6">
        <form className={cn("flex flex-col gap-6", className)} onSubmit={handleForgotPasswordSubmit} {...props}>
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyber-green-400 to-neural-blue-500 bg-clip-text text-transparent">
              Reset Your Password
            </h1>
            <p className="text-muted-foreground text-sm text-balance">
              Enter your email address and we'll send you a link to reset your password
            </p>
          </div>
          
          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400 rounded-lg border border-red-200 dark:border-red-800">
              {error}
            </div>
          )}

          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="forgot-email" className="text-sm font-medium">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  id="forgot-email" 
                  type="email" 
                  placeholder="Enter your email address"
                  value={forgotPasswordEmail}
                  onChange={(e) => setForgotPasswordEmail(e.target.value)}
                  className="pl-9 border-2 focus:border-cyber-green-500 transition-colors"
                  required 
                />
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-cyber-green-500 to-cyber-green-600 hover:from-cyber-green-600 hover:to-cyber-green-700 text-white shadow-lg shadow-cyber-green-500/25 hover:shadow-cyber-green-500/40 transition-all duration-200"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending Reset Link...
                </>
              ) : (
                "Send Reset Link"
              )}
            </Button>
            
            <Button 
              type="button" 
              variant="outline"
              onClick={() => setCurrentView('login')}
              className="w-full border-2 border-cyber-green-200 hover:border-cyber-green-300 text-cyber-green-600 hover:text-cyber-green-700 hover:bg-cyber-green-50 transition-all duration-200"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Login
            </Button>
          </div>
        </form>
      </div>
    )
  }

  if (currentView === 'email-sent') {
    return (
      <div className="space-y-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-cyber-green-50 to-cyber-green-100 dark:from-cyber-green-900/30 dark:to-cyber-green-800/30 rounded-full flex items-center justify-center border-2 border-cyber-green-200 dark:border-cyber-green-700">
            <CheckCircle className="w-8 h-8 text-cyber-green-600 dark:text-cyber-green-400" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyber-green-400 to-neural-blue-500 bg-clip-text text-transparent">
              Check Your Email
            </h1>
            <p className="text-muted-foreground text-sm text-balance max-w-sm">
              We've sent password reset instructions to
            </p>
            <p className="text-sm font-medium text-cyber-green-600 dark:text-cyber-green-400">
              {forgotPasswordEmail}
            </p>
          </div>
          
          <div className="space-y-3 text-sm text-muted-foreground text-center">
            <p>Didn't receive the email? Check your spam folder.</p>
            <p>Still can't find it?</p>
          </div>
          
          <div className="flex flex-col w-full gap-3">
            <Button 
              type="button" 
              onClick={() => {
                setCurrentView('forgot-password')
                setForgotPasswordEmail("")
              }}
              className="w-full bg-gradient-to-r from-cyber-green-500 to-cyber-green-600 hover:from-cyber-green-600 hover:to-cyber-green-700 text-white shadow-lg shadow-cyber-green-500/25 hover:shadow-cyber-green-500/40 transition-all duration-200"
            >
              <Mail className="mr-2 h-4 w-4" />
              Resend Email
            </Button>
            
            <Button 
              type="button" 
              variant="outline"
              onClick={() => {
                setCurrentView('login')
                setForgotPasswordEmail("")
                setError("")
              }}
              className="w-full border-2 border-cyber-green-200 hover:border-cyber-green-300 text-cyber-green-600 hover:text-cyber-green-700 hover:bg-cyber-green-50 transition-all duration-200"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Login
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <form className={cn("flex flex-col gap-6", className)} onSubmit={handleSubmit} {...props}>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyber-green-400 to-neural-blue-500 bg-clip-text text-transparent">
            Login to ShoreAgents AI
          </h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your credentials to access the AI suite
          </p>
        </div>
        
        {error && (
          <div className="p-3 text-sm text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400 rounded-lg border border-red-200 dark:border-red-800">
            {error}
          </div>
        )}

        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username" className="text-sm font-medium">Username</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                id="username" 
                type="text" 
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-9 border-2 focus:border-cyber-green-500 transition-colors"
                required 
              />
            </div>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                              <a
                  href="#"
                  className="text-sm text-cyber-green-600 hover:text-cyber-green-700 dark:text-cyber-green-400 dark:hover:text-cyber-green-300 underline-offset-4 hover:underline transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentView('forgot-password')
                  }}
                >
                  Forgot your password?
                </a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                id="password" 
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-9 border-2 focus:border-cyber-green-500 transition-colors"
                required 
              />
            </div>
          </div>
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-cyber-green-500 to-cyber-green-600 hover:from-cyber-green-600 hover:to-cyber-green-700 text-white shadow-lg shadow-cyber-green-500/25 hover:shadow-cyber-green-500/40 transition-all duration-200"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Authenticating...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </div>
      </form>

      {/* Demo Accounts */}
      <Card className="border-2 border-dashed border-cyber-green-500/30 bg-gradient-to-br from-cyber-green-50/50 to-neural-blue-50/50 dark:from-cyber-green-950/20 dark:to-neural-blue-950/20">
        <CardContent className="p-4">
          <h3 className="text-sm font-semibold text-cyber-green-700 dark:text-cyber-green-300 mb-3">
            Demo Accounts
          </h3>
          <div className="grid gap-2">
            {demoAccounts.map((account) => (
              <div 
                key={account.username}
                className="flex items-center justify-between p-2 rounded-md bg-white/50 dark:bg-slate-800/50 border border-cyber-green-200/50 dark:border-cyber-green-700/50 cursor-pointer hover:bg-cyber-green-50 dark:hover:bg-cyber-green-900/30 transition-colors"
                onClick={() => {
                  setUsername(account.username)
                  setPassword(account.password)
                }}
              >
                <div className="text-xs">
                  <div className="font-medium text-slate-900 dark:text-slate-100">
                    {account.username}
                  </div>
                  <div className="text-muted-foreground">
                    {account.role}
                  </div>
                </div>
                <div className="text-xs text-cyber-green-600 dark:text-cyber-green-400 font-mono">
                  {account.password}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Click any account to auto-fill credentials
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
