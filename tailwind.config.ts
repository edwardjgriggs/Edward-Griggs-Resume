import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep navy/dark blue palette
        navy: {
          950: '#020617',
          900: '#0a1628',
          800: '#0f1f3d',
          700: '#162a52',
          600: '#1e3a6d',
          500: '#2a4a82',
        },
        // Cyan/teal accent
        accent: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          glow: 'rgba(34, 211, 238, 0.5)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh':
          'linear-gradient(to right, rgba(34, 211, 238, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 211, 238, 0.03) 1px, transparent 1px)',
        'hero-gradient':
          'radial-gradient(ellipse at 50% 0%, rgba(34, 211, 238, 0.15) 0%, transparent 50%)',
      },
      backgroundSize: {
        'mesh': '60px 60px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(34, 211, 238, 0.3)',
        'glow-sm': '0 0 10px rgba(34, 211, 238, 0.2)',
        'glow-lg': '0 0 40px rgba(34, 211, 238, 0.4)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
