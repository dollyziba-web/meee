/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#08070D',
        midnight: '#211039',
        'electric-violet': '#8B5CF6',
        lavender: '#C4A7FF',
        'off-white': '#F5F3FA',
        'cool-silver': '#B9B7C6',
        background: {
          DEFAULT: '#08070D',
          secondary: '#211039',
          elevated: '#171026',
        },
        accent: {
          DEFAULT: '#8B5CF6',
          secondary: '#C4A7FF',
          glow: 'rgba(139, 92, 246, 0.35)',
        },
        typography: {
          main: '#F5F3FA',
          secondary: '#B9B7C6',
          muted: '#7A7589',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.1)',
          metallic: 'rgba(185, 183, 198, 0.25)',
          accent: 'rgba(139, 92, 246, 0.35)',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'line-draw': 'lineDraw 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(14px) rotate(-1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.08)' },
        },
        lineDraw: {
          '0%': { strokeDashoffset: '300' },
          '100%': { strokeDashoffset: '0' },
        }
      }
    },
  },
  plugins: [],
}
