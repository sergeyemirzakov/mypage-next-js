module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '650px',
      },
    },
    fontFamily: {
      serif: ['Source Serif Pro', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
