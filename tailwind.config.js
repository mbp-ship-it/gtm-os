/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Colors map to CSS variables so they swap with theme automatically
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        "surface-hover": "var(--surface-hover)",
        fg: "var(--fg)",
        "fg-muted": "var(--fg-muted)",
        "fg-dim": "var(--fg-dim)",
        "fg-very-dim": "var(--fg-very-dim)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-soft": "var(--accent-soft)",
        "accent-border": "var(--accent-border)",
        ok: "var(--ok)",
        warn: "var(--warn)",
        err: "var(--err)",
      },
      fontFamily: {
        sans: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
        display: ["'Inter'", "sans-serif"],
      },
      fontWeight: {
        // Anduril uses display weights heavily — 700 / 800 / 900 for headlines
        display: "700",
        "display-heavy": "800",
        "display-black": "900",
      },
      letterSpacing: {
        // Tight tracking for display-weight headings
        "tighter-2": "-0.03em",
        "tighter-3": "-0.04em",
      },
      animation: {
        "fade-up": "fadeUp 0.5s backwards ease-out",
        "fade-in": "fadeIn 0.6s backwards ease-out",
        "spin-slow": "spinSlow 2s linear infinite",
        "cursor-blink": "cursorBlink 1s steps(2) infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
