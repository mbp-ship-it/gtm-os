/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // gtm-os palette — locked in handoff v2
        background: "#0A0A0A",
        foreground: "#EDEDED",
        muted: "#A0A0A0",
        dim: "#6B6B6B",
        "very-dim": "#4A4A4A",
        border: "#1C1C1C",
        "border-hover": "#3A3A3A",
        surface: "#141414",
        amber: {
          DEFAULT: "#E8B44C",
          dim: "#8A6B2E",
        },
      },
      fontFamily: {
        serif: ["Instrument Serif", "Georgia", "serif"],
        sans: ["Geist", "-apple-system", "sans-serif"],
        mono: ["Geist Mono", "JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        display: "-0.01em",
        tight: "-0.02em",
        widest: "0.2em",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out backwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
