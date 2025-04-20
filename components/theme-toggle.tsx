"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md transition-all duration-300 
      bg-gray-200 text-gray-500 
      hover:text-gray-700 shadow-md 
      dark:bg-black dark:border dark:border-green-600 dark:text-green-400 
      ring-1 ring-inset ring-gray-300 
      dark:ring-green-500 
      hover:shadow-lg 
      dark:shadow-[0_0_15px_2px_rgba(34,197,94,0.5)]"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}
