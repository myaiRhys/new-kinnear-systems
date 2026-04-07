import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm light theme
        "ks-bg": "#F5F4F0",
        "ks-bg-alt": "#ECEAE4",
        "ks-text": "#1A1A1A",
        "ks-text-muted": "rgba(26,26,26,0.55)",
        "ks-border": "rgba(26,26,26,0.1)",
        "ks-accent": "#2D2D2D",
        // Legacy aliases for gradual migration
        "shader-black": "#F5F4F0",
        "shader-dark": "#ECEAE4",
        "shader-text": "#1A1A1A",
        "shader-muted": "rgba(26,26,26,0.4)",
        "shader-border": "rgba(26,26,26,0.1)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      animation: {
        "fade-up":   "fadeUp 0.6s ease forwards",
        "fade-in":   "fadeIn 0.5s ease forwards",
        "slide-in":  "slideIn 0.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%":   { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
