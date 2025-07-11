/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
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
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Extended ShoreAgents AI Palette
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
      },
      backgroundImage: {
        'gradient-cyber': 'var(--gradient-cyber-primary)',
        'gradient-neural': 'var(--gradient-neural-primary)',
        'gradient-matrix': 'var(--gradient-matrix-primary)',
        'gradient-ai-hero': 'var(--gradient-ai-hero)',
      },
      boxShadow: {
        'cyber-glow': 'var(--shadow-cyber-glow)',
        'neural-glow': 'var(--shadow-neural-glow)',
        'matrix-glow': 'var(--shadow-matrix-glow)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        'cyber-pulse': {
          '0%, 100%': { 
            opacity: '0.5', 
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 hsla(162, 73%, 46%, 0.4)'
          },
          '50%': { 
            opacity: '1', 
            transform: 'scale(1.05)',
            boxShadow: '0 0 20px 10px hsla(162, 73%, 46%, 0.1)'
          },
        },
        'neural-shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'ai-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'cyber-pulse': 'cyber-pulse 3s ease-in-out infinite',
        'neural-shimmer': 'neural-shimmer 2s infinite',
        'ai-float': 'ai-float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 