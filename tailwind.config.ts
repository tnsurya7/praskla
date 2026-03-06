import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#050505',
        'neon-purple': '#6d28ff',
        'neon-pink': '#ff2bd6',
        'neon-blue': '#00eaff',
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(135deg, #6d28ff, #ff2bd6, #00eaff)',
        'gradient-dark': 'linear-gradient(135deg, #050505, #1a1a2e)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(109, 40, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(109, 40, 255, 0.8)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config
