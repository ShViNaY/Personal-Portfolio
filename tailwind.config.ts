import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"]
      },
      colors: {
        accent: {
          DEFAULT: "#4f46e5",
          hover: "#4338ca",
          soft: "#eef2ff"
        },
        ink: {
          DEFAULT: "#0f172a",
          secondary: "#334155",
          muted: "#64748b"
        },
        surface: {
          DEFAULT: "#ffffff",
          subtle: "#f8fafc",
          hover: "#f1f5f9"
        }
      }
    }
  },
  plugins: []
};

export default config;
