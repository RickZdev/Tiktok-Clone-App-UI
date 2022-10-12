/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FE2C55',
        secondary: 'rgba(255, 255, 255, 0.75)',
        background: '#0E0E0E',
        gray: '#8A8B8F'
      },
      fontFamily: {
        // fonts that are installed on assets/fonts folder
        ProximaNovaBold: 'Proxima-Nova-Bold',
        ProximaNovaSemiBold: 'Proxima-Nova-SemiBold',
        ProximaNovaRegular: 'Proxima-Nova-Regular',
      }
    },
  },
  plugins: [],
}
