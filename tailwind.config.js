/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
      preflight: false,
  },
  important: '#root',
  content: ['./src/**/*.{ts,js,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
