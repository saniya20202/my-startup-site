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
        // Border eka dan Pure Grey (Nil gathiya ain kara)
        border: '#E4E4E7', 
        
        // PRIMARY: Emerald Green (Keep as is - Meka oyaage Main Green eka)
        primary: {
          50:  '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10B981', // Main Green
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },

        // SECONDARY: Teal (Less Blue, More Greenish) 🌊
        // Kalin thibba Blue eka wenuwata meka damma. Meka "Kola" patata godak match wenawa.
        secondary: {
          50:  '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // TEAL (Meka nil nemei, kola-nil mix ekak)
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },

        // DARK SCALE: Zinc/Charcoal (No Blue Tint) 🌑
        // Meka thama Backgrounds saha Text walata enne. 
        // Kalin thibba "Slate" (Nil gathiya) ain karala "Zinc" (Pure Grey) damma.
        dark: {
          50:  '#FAFAFA', // Background (Clean White)
          100: '#F4F4F5',
          200: '#E4E4E7', // Borders
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46', // Charcoal Grey
          800: '#27272A', // Dark Sections
          900: '#18181B', // MAIN TEXT (Neutral Black/Charcoal - No Blue)
          950: '#09090B', // Deepest Black
        },
      },

      boxShadow: {
        'green-glow': '0 0 30px rgba(16, 185, 129, 0.45)',
        'green-soft': '0 0 15px rgba(16, 185, 129, 0.25)',
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
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