/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#FFD140',
        'gray': '#888888',
        'pink' : '#FEE9E1',
        'pinkAbout' : '#FFDCCD',
        'BlackYellow' : '#16130A',
        'grayIcon' : '#2C2C2C',
        'blue' : '#07005D',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        poppins1: ['Poppins1', 'sans-serif'],
        poppins2: ['Poppins2', 'sans-serif'],
      },
      keyframes: {
        moveRight: {  
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        moveLeft: {
          from: { transform: 'translateX(0)' },
          to: { transform:'translateX(300%)' }
        },
        scaleIn: {
          from: { transform: 'scale(0)' }, 
          to: { transform: 'scale(100%)' }
        },
        move: {
          '0%': { transform: 'translateY(5%)' },
          '25%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(5%)' },
          '75%': { transform: 'translateY(-5%)' },
          '100%': { transform: 'translateY(5%)' },
        },
        scroll: {
          '0%': { transform: 'translateX(150%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
          moveRight: 'moveRight 1s ease-in-out forwards',
          moveLeft: 'moveLeft 1s ease-in-out forwards',
          move: 'move 10s infinite',
          scaleIn: 'scaleIn 2s ease-in-out forwards',
          scroll: 'scroll infinite 40s linear',
      },
      backgroundImage: {
        'pink': 'linear-gradient(175deg, rgba(255,254,251,1) 0%, rgb(250, 251, 254) 100%)',
        'blackGray': 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(102,102,102,1) 100%)',
      },
    },
  },
  plugins: [],
}