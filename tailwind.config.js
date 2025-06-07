/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{jsx,js,tsx,ts}',
  ],
  theme: {
    colors: {
      green: '#495e57',
      yellow: '#f4ce14',
      skin: '#ee9972',
      oatmilk: '#fbdabb',
      gray: '#edefee',
      black: '#333333'
    },
    fontFamily: {
      markazi: ['Markazi Text', 'serif'],
      karla: ['Karla', 'sans-serif']
    },
    fontSize: {
      // Markazi Text 
      displayTitle: '85px',
      subbTitle: '52px',
      // Karla
      leadText: '24px',
      sectionTitle: '27px',
      sectionCategory: '21px',
      cardTitle: '24px',
      paragraph: '21px', // line height 1.5
      hightlight: '21px'
    },
    extend: {},
  },
  plugins: [],
}

