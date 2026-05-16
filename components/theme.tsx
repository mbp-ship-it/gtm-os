"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * ThemeProvider
 *
 * Wraps the app and provides theme state via context. Persists choice in
 * localStorage. Default: light. Theme is applied via data-theme attribute
 * on <html> element so CSS variables can swap.
 *
 * Avoids hydration mismatch by reading localStorage in useEffect (not initial state).
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("gtm-os-theme")) as Theme | null;
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("gtm-os-theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    // Graceful fallback when used outside provider (e.g. in standalone artifact rendering)
    return { theme: "light" as Theme, toggleTheme: () => {} };
  }
  return ctx;
}

/**
 * ThemeToggle
 *
 * A subtle pill-shaped toggle with sun (light mode) and moon (dark mode) icons.
 * Active icon is in foreground color; inactive icon is dim. Clicking either
 * icon (or the pill itself) toggles. Smooth slide animation on the indicator.
 *
 * Sized restrained to fit in nav alongside other links. Not flashy.
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="relative inline-flex items-center justify-between w-[54px] h-[26px] rounded-full transition-colors duration-200"
      style={{
        background: "var(--toggle-track)",
        border: "1px solid var(--toggle-border)",
      }}
    >
      {/* Sliding indicator circle */}
      <span
        className="absolute top-[2px] w-[20px] h-[20px] rounded-full transition-all duration-300 ease-out"
        style={{
          background: "var(--toggle-thumb)",
          left: isDark ? "30px" : "2px",
          boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
        }}
      />

      {/* Sun icon - left side */}
      <span className="relative z-10 flex items-center justify-center w-[26px] h-[26px]">
        <SunIcon active={!isDark} />
      </span>

      {/* Moon icon - right side */}
      <span className="relative z-10 flex items-center justify-center w-[26px] h-[26px]">
        <MoonIcon active={isDark} />
      </span>
    </button>
  );
}

function SunIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 16 16"
      fill="none"
      style={{ color: active ? "var(--toggle-icon-active)" : "var(--toggle-icon-inactive)" }}
    >
      <circle cx="8" cy="8" r="3" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <line x1="8" y1="1" x2="8" y2="2.5" />
        <line x1="8" y1="13.5" x2="8" y2="15" />
        <line x1="1" y1="8" x2="2.5" y2="8" />
        <line x1="13.5" y1="8" x2="15" y2="8" />
        <line x1="3.05" y1="3.05" x2="4.1" y2="4.1" />
        <line x1="11.9" y1="11.9" x2="12.95" y2="12.95" />
        <line x1="3.05" y1="12.95" x2="4.1" y2="11.9" />
        <line x1="11.9" y1="4.1" x2="12.95" y2="3.05" />
      </g>
    </svg>
  );
}

function MoonIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 16 16"
      fill="none"
      style={{ color: active ? "var(--toggle-icon-active)" : "var(--toggle-icon-inactive)" }}
    >
      <path
        d="M13.5 9.5A6 6 0 0 1 6.5 2.5a6 6 0 1 0 7 7Z"
        fill="currentColor"
      />
    </svg>
  );
}
