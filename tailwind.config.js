module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        amaranth: ['Amaranth', '"Open Sans"', 'sans-serif'],
      },
      gridTemplateColumns: {
        'auto-fill-260': 'repeat(auto-fill, minmax(260px, 1fr))',
        'auto-fit-260': 'repeat(auto-fit, minmax(260px, 1fr))',
      },
    },
  },
  plugins: [],
};
