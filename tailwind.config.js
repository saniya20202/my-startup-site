/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark grey border to match the cards
        border: '#333333', 
        
        // NEW: Neon Lime Scale (Based on #CCFF00)
        // Modern & Tech Vibe ⚡
        primary: {
          50:  '#faffe5',
          100: '#f4ffc1',
          200: '#eaff85',
          300: '#dfff46',
          400: '#d5ff1f',
          500: '#ccff00', // MAIN NEON LIME (Oya illapu color eka)
          600: '#a3cc00', // Hover color for buttons
          700: '#7a9900',
          800: '#526600',
          900: '#293300',
          950: '#141a00',
        },

        // KEPT AS IS: Secondary scale (You can use this for warnings)
        secondary: {
          50:  '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308', 
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },

        // NEW: Ultra Dark Scale (Black & Dark Grey)
        // High Contrast Tech Vibe
        dark: {
          50:  '#ffffff', // Pure White (Text walata)
          100: '#e5e5e5',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#404040',
          800: '#1c1c1c', // Card/Section Background (#1C1C1C)
          900: '#0a0a0a',
          950: '#000000', // Main Background (#000000)
        },
      },

      boxShadow: {
        // Neon Lime Glow (RGB: 204, 255, 0)
        'green-glow': '0 0 30px rgba(204, 255, 0, 0.45)', 
        'green-soft': '0 0 15px rgba(204, 255, 0, 0.25)',
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'], // Tech font
        mono: ['JetBrains Mono', 'monospace'],     // Coding font
      },

      animation: {
        gradient: 'gradient 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
      },

      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}