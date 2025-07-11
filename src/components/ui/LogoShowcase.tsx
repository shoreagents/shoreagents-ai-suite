import { Logo } from "./Logo"
import { cn } from "@/lib/utils"

interface LogoShowcaseProps {
  className?: string
  showTagline?: boolean
}

export function LogoShowcase({ className, showTagline = true }: LogoShowcaseProps) {
  return (
    <div className={cn("text-center space-y-4", className)}>
      <Logo 
        variant="full" 
        size="lg" 
        animated={true}
        className="mx-auto max-w-lg text-slate-700 dark:text-slate-300 hover:text-cyber-green-600 dark:hover:text-cyber-green-400 transition-colors duration-300"
      />
      {showTagline && (
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md mx-auto">
          Your central hub for AI-powered real estate solutions
        </p>
      )}
    </div>
  )
} 