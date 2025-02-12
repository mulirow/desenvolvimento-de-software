import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pink: "#D94ED0",
        black: "#111111",
        white: "#EEEEEE",
        dark_blue: "#162C3A",
        light_blue: "#316DFF"
      },
    },
  },
  plugins: [],
} satisfies Config;
