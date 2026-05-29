module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fra: ['Fraunces', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        indigo: '#4F46E5',
        coral: '#F97316'
      }
    },
  },
  plugins: [],
}
