import { useColorScheme } from "react-native"

const light = {
  background: "#f6f5f0",
  card: "#ffffff",
  text: "#1d2b22",
  muted: "#5f6b63",
  rule: "#e3e1d8",
  leaf: "#2f7d4f",
  due: "#92600e",
  overdue: "#c2410c",
  track: "#e7ece8",
  onLeaf: "#ffffff",
}

const dark: Theme = {
  background: "#121614",
  card: "#1b211e",
  text: "#e9eee9",
  muted: "#a2ada5",
  rule: "#2a322d",
  leaf: "#5cc08a",
  due: "#e0a84a",
  overdue: "#f08a5d",
  track: "#26302a",
  onLeaf: "#0f1311",
}

export type Theme = typeof light

export const useTheme = (): Theme => (useColorScheme() === "dark" ? dark : light)
