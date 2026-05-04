import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        night: "#0b1020",
        ink: "#dbeafe",
        comet: "#38bdf8",
        orbit: "#facc15",
        coral: "#fb7185",
      },
      boxShadow: {
        glow: "0 0 40px rgba(56, 189, 248, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
