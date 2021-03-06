module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      padding: '1.5rem',
      center: true,
      screens: {
        xs: '576px',
        sm: '640px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      },
    },
    extend: {},
  },
  plugins: [],
};
