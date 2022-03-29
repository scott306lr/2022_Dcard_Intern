module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: { // https://www.tailwindshades.com/
        bg_color: { DEFAULT: '#00324e' },
        pri_color: { DEFAULT: '#006aa6' },
        sec_color: { DEFAULT: '#00588a' },
        sel_color: { DEFAULT: '#4d7083' },
        hov_color: { DEFAULT: '#002133' },
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}
