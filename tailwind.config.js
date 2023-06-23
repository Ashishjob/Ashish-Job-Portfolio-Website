/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'lightgreen': '#cde2b8',
      'white': '#B4D394',
      'black': '#000000',
      'green': '#0f3d24',
      'green-hover': '#bed3a8',
      'green-button': '#A9BC95',
      'textbox-green': '#bed3a8',
      'offwhite': '#E2E2B8',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  
}
