/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0a0a0a',
          50: '#111111',
          100: '#1a1a1a',
          200: '#222222',
        },
        accent: {
          DEFAULT: '#00d4ee',
          dim: 'rgba(0,212,238,0.15)',
          glow: 'rgba(0,212,238,0.35)',
        },
        muted: '#666666',
        subtle: '#888888',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      letterSpacing: {
        widest: '0.2em',
        ultra: '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'ekg': 'ekgDash 3.5s cubic-bezier(0.4,0,0.2,1) infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 4px rgba(0,212,238,0.12))' },
          '50%': { filter: 'drop-shadow(0 0 18px rgba(0,212,238,0.35))' },
        },
        ekgDash: {
          '0%': { strokeDashoffset: '280' },
          '50%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-280' },
        },
      },
    },
  },
  plugins: [],
}
