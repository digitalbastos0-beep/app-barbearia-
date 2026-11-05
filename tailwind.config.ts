import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: "#D4AF37", light: "#F1D77A", dark: "#9B7620" },
        ink: "#080808"
      },
      fontFamily: {
        display: ["Georgia", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
