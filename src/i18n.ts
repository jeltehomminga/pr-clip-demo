import { getLocales } from "expo-localization"

const days = (n: number, one: string, other: string) => (n === 1 ? one : other.replace("{n}", String(n)))

const en = {
  plantNames: {
    monstera: "Monstera",
    pothos: "Pothos",
    fern: "Boston fern",
    snake: "Snake plant",
    fig: "Fiddle-leaf fig",
  },
  plantCount: (n: number) => days(n, "1 plant", "{n} plants"),
  everyDays: (n: number) => days(n, "Water every day", "Water every {n} days"),
  lastWatered: (n: number) => days(n, "last watered yesterday", "last watered {n} days ago"),
}

const nl: typeof en = {
  plantNames: {
    monstera: "Monstera",
    pothos: "Pothos",
    fern: "Boston-varen",
    snake: "Vrouwentong",
    fig: "Vioolbladplant",
  },
  plantCount: (n) => days(n, "1 plant", "{n} planten"),
  everyDays: (n) => days(n, "Elke dag water", "Elke {n} dagen water"),
  lastWatered: (n) => days(n, "gisteren water gehad", "{n} dagen geleden water gehad"),
}

export type PlantId = keyof typeof en.plantNames

// The simulator's language decides: `xcrun simctl launch <udid> <bundleId> -AppleLanguages "(nl)"`.
export const t = getLocales()[0]?.languageCode === "nl" ? nl : en
