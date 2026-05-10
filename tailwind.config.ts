import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#f8f5ee",
        paper: "#fffdf8",
        forest: "#123d33",
        moss: "#59766a",
        charcoal: "#26302f",
        slateblue: "#587084",
        gold: "#b89458",
        line: "#e5ded1"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(31, 46, 43, 0.09)"
      }
    }
  },
  plugins: []
};

export default config;
