/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fef7f0",
          100: "#fceee0",
          200: "#f8d4b8",
          300: "#f0b68a",
          400: "#e8945a",
          500: "#d97a3e",
          600: "#c45d3e",
          700: "#a34432",
          800: "#82372e",
          900: "#6a2f28",
        },
        earth: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#d6c3b6",
          400: "#b8977e",
          500: "#9a7460",
          600: "#7d5a48",
          700: "#664838",
          800: "#4d362b",
          900: "#3a2920",
        },
        sage: {
          50: "#f4f7f4",
          100: "#e0ebe0",
          200: "#c1d6c1",
          300: "#97b897",
          400: "#6e976e",
          500: "#527852",
          600: "#3f5f3f",
          700: "#334d33",
          800: "#2a3e2a",
          900: "#233323",
        },
        terracotta: {
          DEFAULT: "#c45d3e",
          light: "#e07a5f",
          dark: "#9e3c22",
        },
        gold: {
          DEFAULT: "#d4a24e",
          light: "#e8c17a",
          dark: "#b8862e",
        },
        plum: {
          DEFAULT: "#7b4a6e",
          light: "#9e6b8f",
          dark: "#5a3350",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        'embroidery': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 Q35 15 30 25 Q25 15 30 5z' fill='none' stroke='%23d4a24e' stroke-width='0.5' opacity='0.15'/%3E%3Cpath d='M5 30 Q15 35 25 30 Q15 25 5 30z' fill='none' stroke='%23c45d3e' stroke-width='0.5' opacity='0.15'/%3E%3Cpath d='M30 35 Q35 45 30 55 Q25 45 30 35z' fill='none' stroke='%23d4a24e' stroke-width='0.5' opacity='0.15'/%3E%3Cpath d='M35 30 Q45 35 55 30 Q45 25 35 30z' fill='none' stroke='%23c45d3e' stroke-width='0.5' opacity='0.15'/%3E%3Ccircle cx='30' cy='30' r='2' fill='none' stroke='%237b4a6e' stroke-width='0.5' opacity='0.12'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
