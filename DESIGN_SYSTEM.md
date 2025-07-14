# 🎨 Design System - AI-Powered Color Scheme

## Overview
This design system provides a comprehensive color palette and component library optimized for AI-powered applications. It features three primary color families with full light/dark mode support and shadcn/ui integration.

## 🎯 Core Color Families

### **Cyber Green** (Primary)
- **Purpose**: Primary actions, branding, success states
- **Personality**: Futuristic, tech-forward, confident
- **Use Cases**: CTAs, primary buttons, active states, success indicators

### **Neural Blue** (Secondary) 
- **Purpose**: Secondary actions, information, intelligence
- **Personality**: Intelligent, reliable, processing
- **Use Cases**: Secondary buttons, info states, data visualization

### **Matrix Orange** (Accent)
- **Purpose**: Warnings, energy, highlights
- **Personality**: Energetic, attention-grabbing, dynamic
- **Use Cases**: Warning states, destructive actions, highlights

---

## 🎨 Color Palette

### **Cyber Green Scale**
```css
--cyber-green-50: hsl(162, 76%, 95%);   /* #f0fdf4 */
--cyber-green-100: hsl(162, 73%, 89%);  /* #dcfce7 */
--cyber-green-200: hsl(162, 60%, 85%);  /* #bbf7d0 */
--cyber-green-300: hsl(162, 55%, 75%);  /* #86efac */
--cyber-green-400: hsl(162, 65%, 60%);  /* #4ade80 */
--cyber-green-500: hsl(162, 73%, 46%);  /* #22c55e */ ← Primary
--cyber-green-600: hsl(162, 100%, 30%); /* #16a34a */
--cyber-green-700: hsl(162, 100%, 24%); /* #15803d */
--cyber-green-800: hsl(157, 50%, 25%);  /* #166534 */
--cyber-green-900: hsl(157, 50%, 15%);  /* #14532d */
--cyber-green-950: hsl(157, 50%, 6%);   /* #052e16 */
```

### **Neural Blue Scale**
```css
--neural-blue-50: hsl(214, 100%, 97%);  /* #eff6ff */
--neural-blue-100: hsl(214, 95%, 93%);  /* #dbeafe */
--neural-blue-200: hsl(213, 97%, 87%);  /* #bfdbfe */
--neural-blue-300: hsl(212, 96%, 78%);  /* #93c5fd */
--neural-blue-400: hsl(213, 94%, 68%);  /* #60a5fa */
--neural-blue-500: hsl(217, 91%, 60%);  /* #3b82f6 */
--neural-blue-600: hsl(221, 83%, 53%);  /* #2563eb */
--neural-blue-700: hsl(224, 76%, 48%);  /* #1d4ed8 */
--neural-blue-800: hsl(226, 71%, 40%);  /* #1e40af */
--neural-blue-900: hsl(224, 64%, 33%);  /* #1e3a8a */
--neural-blue-950: hsl(226, 55%, 21%);  /* #172554 */
```

### **Matrix Orange Scale**
```css
--matrix-orange-50: hsl(48, 100%, 96%);  /* #fffbeb */
--matrix-orange-100: hsl(48, 96%, 89%);  /* #fef3c7 */
--matrix-orange-200: hsl(48, 97%, 77%);  /* #fde68a */
--matrix-orange-300: hsl(46, 87%, 65%);  /* #fcd34d */
--matrix-orange-400: hsl(43, 96%, 56%);  /* #fbbf24 */
--matrix-orange-500: hsl(38, 92%, 50%);  /* #f59e0b */
--matrix-orange-600: hsl(32, 95%, 44%);  /* #d97706 */
--matrix-orange-700: hsl(26, 90%, 37%);  /* #b45309 */
--matrix-orange-800: hsl(23, 83%, 31%);  /* #92400e */
--matrix-orange-900: hsl(22, 78%, 26%);  /* #78350f */
--matrix-orange-950: hsl(15, 86%, 14%);  /* #451a03 */
```

---

## 🎭 CSS Variables Setup

### **Add to your `globals.css`:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Light Theme */
    --background: 0 0% 100%;
    --foreground: 157 50% 15%;
    
    /* Primary (Cyber Green) */
    --primary: 162 73% 46%;
    --primary-foreground: 0 0% 100%;
    
    /* Secondary (Neural Blue) */
    --secondary: 214 95% 93%;
    --secondary-foreground: 214 84% 56%;
    
    /* Destructive (Matrix Orange) */
    --destructive: 25 95% 53%;
    --destructive-foreground: 0 0% 100%;
    
    /* Success (Cyber Green) */
    --success: 162 73% 46%;
    --success-foreground: 0 0% 100%;
    
    /* Muted States */
    --muted: 162 76% 95%;
    --muted-foreground: 157 50% 35%;
    
    /* Accents */
    --accent: 162 76% 95%;
    --accent-foreground: 157 50% 35%;
    
    /* Borders */
    --border: 162 60% 85%;
    --input: 162 60% 85%;
    
    /* Rings */
    --ring: 162 73% 46%;
    
    /* Charts */
    --chart-1: 162 73% 46%;  /* cyber-green-500 */
    --chart-2: 214 84% 56%;  /* neural-blue-500 */
    --chart-3: 25 95% 53%;   /* matrix-orange-500 */
    --chart-4: 162 100% 30%; /* cyber-green-600 */
    --chart-5: 252 83% 57%;  /* purple-500 */
    
    /* Radius */
    --radius: 0.75rem;
  }

  .dark {
    /* Dark Theme */
    --background: 157 50% 6%;
    --foreground: 162 76% 95%;
    
    --primary: 162 73% 46%;
    --primary-foreground: 0 0% 100%;
    
    --secondary: 214 32% 20%;
    --secondary-foreground: 214 95% 93%;
    
    --destructive: 25 95% 53%;
    --destructive-foreground: 0 0% 100%;
    
    --success: 162 73% 46%;
    --success-foreground: 0 0% 100%;
    
    --muted: 157 50% 15%;
    --muted-foreground: 162 40% 65%;
    
    --accent: 157 50% 15%;
    --accent-foreground: 162 76% 95%;
    
    --border: 157 50% 25%;
    --input: 157 50% 25%;
    
    --ring: 162 73% 46%;
  }
}

/* Extended Color Palette CSS Variables */
:root {
  /* Cyber Green Palette */
  --cyber-green-50: hsl(162, 76%, 95%);
  --cyber-green-100: hsl(162, 73%, 89%);
  --cyber-green-200: hsl(162, 60%, 85%);
  --cyber-green-300: hsl(162, 55%, 75%);
  --cyber-green-400: hsl(162, 65%, 60%);
  --cyber-green-500: hsl(162, 73%, 46%);
  --cyber-green-600: hsl(162, 100%, 30%);
  --cyber-green-700: hsl(162, 100%, 24%);
  --cyber-green-800: hsl(157, 50%, 25%);
  --cyber-green-900: hsl(157, 50%, 15%);
  --cyber-green-950: hsl(157, 50%, 6%);

  /* Neural Blue Palette */
  --neural-blue-50: hsl(214, 100%, 97%);
  --neural-blue-100: hsl(214, 95%, 93%);
  --neural-blue-200: hsl(213, 97%, 87%);
  --neural-blue-300: hsl(212, 96%, 78%);
  --neural-blue-400: hsl(213, 94%, 68%);
  --neural-blue-500: hsl(217, 91%, 60%);
  --neural-blue-600: hsl(221, 83%, 53%);
  --neural-blue-700: hsl(224, 76%, 48%);
  --neural-blue-800: hsl(226, 71%, 40%);
  --neural-blue-900: hsl(224, 64%, 33%);
  --neural-blue-950: hsl(226, 55%, 21%);

  /* Matrix Orange Palette */
  --matrix-orange-50: hsl(48, 100%, 96%);
  --matrix-orange-100: hsl(48, 96%, 89%);
  --matrix-orange-200: hsl(48, 97%, 77%);
  --matrix-orange-300: hsl(46, 87%, 65%);
  --matrix-orange-400: hsl(43, 96%, 56%);
  --matrix-orange-500: hsl(38, 92%, 50%);
  --matrix-orange-600: hsl(32, 95%, 44%);
  --matrix-orange-700: hsl(26, 90%, 37%);
  --matrix-orange-800: hsl(23, 83%, 31%);
  --matrix-orange-900: hsl(22, 78%, 26%);
  --matrix-orange-950: hsl(15, 86%, 14%);

  /* AI Gradients */
  --gradient-cyber-primary: linear-gradient(135deg, var(--cyber-green-500), var(--cyber-green-600));
  --gradient-neural-primary: linear-gradient(135deg, var(--neural-blue-500), var(--neural-blue-600));
  --gradient-matrix-primary: linear-gradient(135deg, var(--matrix-orange-500), var(--matrix-orange-600));
  --gradient-ai-hero: linear-gradient(135deg, var(--cyber-green-500), var(--neural-blue-500), var(--matrix-orange-500));
  
  /* AI Glows */
  --glow-cyber: 0 0 20px hsla(162, 73%, 46%, 0.3);
  --glow-neural: 0 0 20px hsla(217, 91%, 60%, 0.3);
  --glow-matrix: 0 0 20px hsla(38, 92%, 50%, 0.3);
}
```

---

## 🎯 Tailwind CSS Configuration

### **Add to your `tailwind.config.js`:**
```javascript
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        'cyber-green': {
          50: 'hsl(162, 76%, 95%)',
          100: 'hsl(162, 73%, 89%)',
          200: 'hsl(162, 60%, 85%)',
          300: 'hsl(162, 55%, 75%)',
          400: 'hsl(162, 65%, 60%)',
          500: 'hsl(162, 73%, 46%)',
          600: 'hsl(162, 100%, 30%)',
          700: 'hsl(162, 100%, 24%)',
          800: 'hsl(157, 50%, 25%)',
          900: 'hsl(157, 50%, 15%)',
          950: 'hsl(157, 50%, 6%)',
        },
        'neural-blue': {
          50: 'hsl(214, 100%, 97%)',
          100: 'hsl(214, 95%, 93%)',
          200: 'hsl(213, 97%, 87%)',
          300: 'hsl(212, 96%, 78%)',
          400: 'hsl(213, 94%, 68%)',
          500: 'hsl(217, 91%, 60%)',
          600: 'hsl(221, 83%, 53%)',
          700: 'hsl(224, 76%, 48%)',
          800: 'hsl(226, 71%, 40%)',
          900: 'hsl(224, 64%, 33%)',
          950: 'hsl(226, 55%, 21%)',
        },
        'matrix-orange': {
          50: 'hsl(48, 100%, 96%)',
          100: 'hsl(48, 96%, 89%)',
          200: 'hsl(48, 97%, 77%)',
          300: 'hsl(46, 87%, 65%)',
          400: 'hsl(43, 96%, 56%)',
          500: 'hsl(38, 92%, 50%)',
          600: 'hsl(32, 95%, 44%)',
          700: 'hsl(26, 90%, 37%)',
          800: 'hsl(23, 83%, 31%)',
          900: 'hsl(22, 78%, 26%)',
          950: 'hsl(15, 86%, 14%)',
        },
        
        // shadcn/ui semantic colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        
        // Chart colors
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      
      backgroundImage: {
        'gradient-cyber': 'var(--gradient-cyber-primary)',
        'gradient-neural': 'var(--gradient-neural-primary)',
        'gradient-matrix': 'var(--gradient-matrix-primary)',
        'gradient-ai-hero': 'var(--gradient-ai-hero)',
      },
      
      boxShadow: {
        'glow-cyber': 'var(--glow-cyber)',
        'glow-neural': 'var(--glow-neural)',
        'glow-matrix': 'var(--glow-matrix)',
      },
      
      keyframes: {
        'ai-pulse': {
          '0%, 100%': { 
            opacity: '0.5', 
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 hsla(162, 73%, 46%, 0.4)'
          },
          '50%': { 
            opacity: '1', 
            transform: 'scale(1.02)',
            boxShadow: '0 0 20px 10px hsla(162, 73%, 46%, 0.1)'
          },
        },
        'ai-shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'ai-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      
      animation: {
        'ai-pulse': 'ai-pulse 3s ease-in-out infinite',
        'ai-shimmer': 'ai-shimmer 2s infinite',
        'ai-float': 'ai-float 6s ease-in-out infinite',
      },
      
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

---

## 🧩 shadcn/ui Component Extensions

### **Button Variants**
```tsx
// components/ui/button.tsx
import { cva } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        
        // AI-Enhanced Variants
        cyber: "bg-gradient-to-r from-cyber-green-500 to-cyber-green-600 text-white shadow-lg hover:shadow-glow-cyber transition-all duration-300",
        neural: "bg-gradient-to-r from-neural-blue-500 to-neural-blue-600 text-white shadow-lg hover:shadow-glow-neural transition-all duration-300",
        matrix: "bg-gradient-to-r from-matrix-orange-500 to-matrix-orange-600 text-white shadow-lg hover:shadow-glow-matrix transition-all duration-300",
        "cyber-outline": "border-2 border-cyber-green-500 text-cyber-green-500 hover:bg-cyber-green-50 hover:border-cyber-green-600",
        "neural-outline": "border-2 border-neural-blue-500 text-neural-blue-500 hover:bg-neural-blue-50 hover:border-neural-blue-600",
        "matrix-outline": "border-2 border-matrix-orange-500 text-matrix-orange-500 hover:bg-matrix-orange-50 hover:border-matrix-orange-600",
        "cyber-ghost": "text-cyber-green-500 hover:bg-cyber-green-50",
        "neural-ghost": "text-neural-blue-500 hover:bg-neural-blue-50",
        "matrix-ghost": "text-matrix-orange-500 hover:bg-matrix-orange-50",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

### **Card Variants**
```tsx
// components/ui/card.tsx
import { cva } from "class-variance-authority"

const cardVariants = cva(
  "rounded-xl border bg-card text-card-foreground shadow transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border-border",
        elevated: "border-border shadow-lg hover:shadow-xl hover:-translate-y-1",
        cyber: "border-cyber-green-200 bg-gradient-to-br from-cyber-green-50 to-white hover:shadow-glow-cyber",
        neural: "border-neural-blue-200 bg-gradient-to-br from-neural-blue-50 to-white hover:shadow-glow-neural",
        matrix: "border-matrix-orange-200 bg-gradient-to-br from-matrix-orange-50 to-white hover:shadow-glow-matrix",
        glass: "bg-white/80 backdrop-blur-lg border-white/20 shadow-xl",
        gradient: "bg-gradient-to-br from-cyber-green-500 via-neural-blue-500 to-matrix-orange-500 text-white border-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
```

### **Input Variants**
```tsx
// components/ui/input.tsx
import { cva } from "class-variance-authority"

const inputVariants = cva(
  "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input focus-visible:ring-ring",
        cyber: "border-cyber-green-200 focus-visible:border-cyber-green-500 focus-visible:ring-cyber-green-500/20",
        neural: "border-neural-blue-200 focus-visible:border-neural-blue-500 focus-visible:ring-neural-blue-500/20",
        matrix: "border-matrix-orange-200 focus-visible:border-matrix-orange-500 focus-visible:ring-matrix-orange-500/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
```

### **Badge Variants**
```tsx
// components/ui/badge.tsx
import { cva } from "class-variance-authority"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        
        // AI-Enhanced Variants
        cyber: "border-transparent bg-gradient-to-r from-cyber-green-500 to-cyber-green-600 text-white shadow",
        neural: "border-transparent bg-gradient-to-r from-neural-blue-500 to-neural-blue-600 text-white shadow",
        matrix: "border-transparent bg-gradient-to-r from-matrix-orange-500 to-matrix-orange-600 text-white shadow",
        "ai-active": "border-transparent bg-gradient-to-r from-cyber-green-500 to-neural-blue-500 text-white shadow animate-ai-pulse",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
```

### **Alert Variants**
```tsx
// components/ui/alert.tsx
import { cva } from "class-variance-authority"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        
        // AI-Enhanced Variants
        cyber: "border-cyber-green-200 bg-cyber-green-50 text-cyber-green-800 [&>svg]:text-cyber-green-600",
        neural: "border-neural-blue-200 bg-neural-blue-50 text-neural-blue-800 [&>svg]:text-neural-blue-600",
        matrix: "border-matrix-orange-200 bg-matrix-orange-50 text-matrix-orange-800 [&>svg]:text-matrix-orange-600",
        success: "border-cyber-green-200 bg-cyber-green-50 text-cyber-green-800 [&>svg]:text-cyber-green-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
```

---

## 🚀 Implementation Quick Start

### **1. Install Dependencies**
```bash
npm install tailwindcss-animate class-variance-authority clsx tailwind-merge
```

### **2. Setup shadcn/ui**
```bash
npx shadcn-ui@latest init
```

### **3. Copy CSS Variables**
Add the CSS variables to your `globals.css` file.

### **4. Update Tailwind Config**
Update your `tailwind.config.js` with the extended configuration.

### **5. Update Component Files**
Update your shadcn/ui components with the new variants.

---

## 🎨 Usage Examples

### **Basic Button Usage**
```tsx
import { Button } from "@/components/ui/button"

function MyComponent() {
  return (
    <div className="space-x-4">
      <Button variant="cyber">Primary Action</Button>
      <Button variant="neural">Secondary Action</Button>
      <Button variant="matrix">Warning Action</Button>
      <Button variant="cyber-outline">Outline Action</Button>
    </div>
  )
}
```

### **Card with AI Theme**
```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

function AICard() {
  return (
    <Card variant="cyber">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          AI Dashboard
          <Badge variant="ai-active">Live</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>AI-powered content goes here...</p>
      </CardContent>
    </Card>
  )
}
```

### **Form with Themed Inputs**
```tsx
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

function ThemedForm() {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" variant="cyber" placeholder="Enter your name" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" variant="neural" placeholder="Enter your email" />
      </div>
      <Button variant="cyber" type="submit">
        Submit
      </Button>
    </form>
  )
}
```

### **Alert Messages**
```tsx
import { Alert, AlertDescription } from "@/components/ui/alert"

function AlertExamples() {
  return (
    <div className="space-y-4">
      <Alert variant="success">
        <AlertDescription>Success! Operation completed.</AlertDescription>
      </Alert>
      <Alert variant="matrix">
        <AlertDescription>Warning: High energy levels detected.</AlertDescription>
      </Alert>
      <Alert variant="neural">
        <AlertDescription>Info: AI processing in progress.</AlertDescription>
      </Alert>
    </div>
  )
}
```

---

## 🌙 Dark Mode Support

The design system automatically handles dark mode transitions. Add the dark mode toggle to your project:

```tsx
// components/theme-toggle.tsx
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
```

---

## 🎯 Best Practices

### **Color Usage Guidelines**
- **Cyber Green**: Use for primary actions, success states, and brand elements
- **Neural Blue**: Use for secondary actions, informational content, and data
- **Matrix Orange**: Use for warnings, destructive actions, and energy indicators

### **Accessibility**
- All colors meet WCAG 2.1 AA contrast standards
- Always test with screen readers
- Provide alternative text for color-coded information

### **Performance**
- CSS variables enable efficient color switching
- Tailwind's purge removes unused styles
- Gradients and animations are optimized for performance

### **Consistency**
- Use semantic color names (primary, secondary, destructive)
- Maintain consistent spacing and typography
- Follow established patterns for new components

---

## 🔧 Customization

### **Creating New Color Variants**
To add new color variants, extend the CSS variables and Tailwind config:

```css
/* Add to globals.css */
:root {
  --new-color-50: hsl(180, 50%, 95%);
  --new-color-500: hsl(180, 50%, 50%);
  --new-color-900: hsl(180, 50%, 10%);
}
```

```javascript
// Add to tailwind.config.js
colors: {
  'new-color': {
    50: 'hsl(180, 50%, 95%)',
    500: 'hsl(180, 50%, 50%)',
    900: 'hsl(180, 50%, 10%)',
  },
}
```

### **Component Customization**
Extend existing components with new variants:

```tsx
const customVariants = cva(
  // base styles
  "...",
  {
    variants: {
      variant: {
        // existing variants
        ...existingVariants,
        // new variant
        "new-variant": "bg-new-color-500 text-white",
      },
    },
  }
)
```

---

## 📦 Export Package

This design system can be packaged as an npm package for reuse across projects:

```json
{
  "name": "@yourorg/ai-design-system",
  "version": "1.0.0",
  "description": "AI-powered design system with shadcn/ui integration",
  "main": "index.js",
  "files": [
    "styles/",
    "components/",
    "config/"
  ],
  "peerDependencies": {
    "react": "^18.0.0",
    "tailwindcss": "^3.0.0"
  }
}
```

---

**🚀 Ready to build amazing AI-powered interfaces!**

*For questions or contributions, please refer to the project documentation or create an issue.* 