"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Laptop } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const nextTheme = {
    light: "dark",
    dark: "system",
    system: "light"
  } as const

  const ThemeIcon = {
    light: Moon,
    dark: Sun,
    system: Laptop
  } as const

  const themeCaption = {
    light: "Light",
    dark: "Dark",
    system: "System"
  } as const

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(nextTheme[theme as keyof typeof nextTheme])}
        className="w-9 px-0"
      >
        {theme && ThemeIcon[theme as keyof typeof ThemeIcon] && (
          <ThemeIcon[theme as keyof typeof ThemeIcon] className="h-[1.2rem] w-[1.2rem]" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
      <span className="text-sm text-muted-foreground">
        {theme && themeCaption[theme as keyof typeof themeCaption]}
      </span>
    </div>
  )
}

