"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
  const saved = localStorage.getItem('theme')
  if (saved) setTheme(saved)
}, [])

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`relative cursor-pointer flex h-9 w-16 items-center rounded-full border-[1.5px] transition-colors duration-300 ${
        isDark ? "bg-dark-glass border-dark-accent" : "bg-glass border-accent"
      }`}
    >
      <span
        className={`absolute flex h-7 w-7 items-center justify-center rounded-full bg-bg shadow-md transition-transform duration-300 ${
          isDark ? "translate-x-8" : "translate-x-1"
        }`}
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-neutral-700" />
        ) : (
          <Sun className="h-4 w-4 text-amber-500" />
        )}
      </span>
    </button>
  );
}