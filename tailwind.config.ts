import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "#5B5CE2",
        ink: "#151923",
        muted: "#667085"
      }
    }
  },
  plugins: []
};

export default config;
