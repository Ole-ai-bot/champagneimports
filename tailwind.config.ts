import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        gold: {
          50:  "#fdfbf3",
          100: "#f9f3de",
          200: "#f2e4b4",
          300: "#e8ce82",
          400: "#dbb54f",
          500: "#c99a2e",
          600: "#a67a20",
          700: "#7d5a18",
          800: "#523b12",
          900: "#2a1e08",
          950: "#150f04",
        },
      },
    },
  },
  plugins: [],
};

export default config;
