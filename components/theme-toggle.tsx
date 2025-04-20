"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md transition-all duration-300
      bg-gray-200 text-blue-500 
      hover:text-blue-700 
      border border-blue-400 
      ring-1 ring-inset ring-blue-300 
      hover:shadow-lg 
      shadow-[0_0_10px_2px_rgba(59,130,246,0.2)] 
      dark:bg-black dark:text-green-600 
      dark:hover:text-white 
      dark:border dark:border-green-600 
      dark:ring-green-500 
      dark:shadow-[0_0_15px_2px_rgba(34,197,94,0.4)]"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}
