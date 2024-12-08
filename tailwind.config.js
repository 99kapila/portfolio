/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: "#root",
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'slate-gradient': `linear-gradient(to right, ${theme('colors.light-slate')}, ${theme('colors.dark-slate')})`,
        'button-gradient': `linear-gradient(to right, ${theme('colors.amber')}, ${theme('colors.yellow')})`,
        'button-light-gradient': `linear-gradient(to right, ${theme('colors.amber-light')}, ${theme('colors.yellow-light')})`,
      }),
      
      colors: {
        'light-slate': '#4B5563',
        'dark-slate': '#000000',
        'amber': '#F59E0B',
        'yellow': '#FCD34D',
        'amber-light': '#FFF700',
        'yellow-light': '#FFFA55',
      },
    },
  },
  plugins: [],
}