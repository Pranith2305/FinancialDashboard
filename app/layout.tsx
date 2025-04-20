import "./globals.css"
import "../styles/scrollbar-hide.css" // Import the scrollbar-hide styles
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Sidebar } from "@/components/sidebar"
import { TopNav } from "@/components/top-nav"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SettingsProvider } from "@/contexts/settings-context"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dashboard",
  description: "A modern, responsive financial dashboard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
  <body className={`${inter.className} scrollbar-hide`}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SettingsProvider>
        <TooltipProvider delayDuration={0}>
          {/* Full screen layout wrapper */}
          <div className="h-screen flex overflow-hidden">
            {/* Sidebar - full height, no scroll */}
            <div className="h-full overflow-hidden">
              <Sidebar />
            </div>

            {/* Main Content Area - scrollable if needed */}
            <div className="flex-1 overflow-y-auto">
              <TopNav />
              <div className="container mx-auto p-6 max-w-7xl">
                <main className="w-full">{children}</main>
              </div>
            </div>
          </div>
        </TooltipProvider>
      </SettingsProvider>
    </ThemeProvider>
  </body>
</html>
  )
}
