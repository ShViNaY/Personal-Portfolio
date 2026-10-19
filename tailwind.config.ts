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
          DEFAULT: "#faf9f5",
          subtle: "#f2f1ec",
          muted: "#eceae3"
        },
        ink: {
          DEFAULT: "#121316",
          secondary: "#4a505c",
          muted: "#717784",
          faint: "#9ba1af"
        },
        line: {
          DEFAULT: "#e5e3dc",
          subtle: "#eeece6"
        },
        accent: {
          DEFAULT: "#1d4ed8",
          hover: "#1e40af",
          soft: "#eff4fe"
        }
      }
    }
  },
  plugins: []
};

export default config;
