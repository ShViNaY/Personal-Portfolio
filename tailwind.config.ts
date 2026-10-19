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
        canvas: {
          DEFAULT: "#F7F5F0",
          subtle: "#F0EDE4",
          muted: "#E8E4D9"
        },
        ink: {
          DEFAULT: "#18181B",
          secondary: "#52525B",
          muted: "#71717A",
          faint: "#A1A1AA"
        },
        line: {
          DEFAULT: "rgba(24, 24, 27, 0.12)",
          strong: "rgba(24, 24, 27, 0.24)",
          solid: "#18181B"
        },
        pastel: {
          lavender: "#ECE7F6",
          sage: "#E5ECE0",
          yellow: "#FBF3D5",
          blue: "#E1EBF5",
          peach: "#FDEAE2",
          pink: "#FBE6EE"
        },
        accent: {
          DEFAULT: "#8EA878",
          dark: "#6F8A58",
          soft: "#EAF1E4"
        }
      }
    }
  },
  plugins: []
};

export default config;
