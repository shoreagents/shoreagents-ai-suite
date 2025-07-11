import { cn } from "@/lib/utils"

interface AIBadgeProps {
  children: React.ReactNode
  className?: string
  variant?: "cyber" | "neural" | "matrix" | "ai-badge"
}

const badgeVariants = {
  cyber: "bg-gradient-to-r from-cyber-green-500 to-cyber-green-600 text-white shadow-md",
  neural: "bg-gradient-to-r from-neural-blue-500 to-neural-blue-600 text-white shadow-md",
  matrix: "bg-gradient-to-r from-matrix-orange-500 to-matrix-orange-600 text-white shadow-md",
  "ai-badge": "bg-gradient-to-r from-cyber-green-500 to-neural-blue-500 text-white shadow-md animate-pulse"
}

export function AIBadge({ children, className, variant = "ai-badge" }: AIBadgeProps) {
  return (
    <div className={cn(
      "inline-flex items-center gap-1 rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors",
      badgeVariants[variant],
      className
    )}>
      <div className="w-1.5 h-1.5 bg-current rounded-full animate-pulse opacity-75" />
      {children}
    </div>
  )
} 