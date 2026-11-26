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
  needWater: (n: number) => days(n, "1 plant needs water", "{n} plants need water"),
  allWatered: "All plants are watered",
  everyDays: (n: number) => days(n, "Water every day", "Water every {n} days"),
  overdue: (n: number) => days(n, "1 day overdue", "{n} days overdue"),
  waterToday: "Water today",
  waterIn: (n: number) => days(n, "Water tomorrow", "Water in {n} days"),
  wateredToday: "Watered today",
  watered: "Watered",
}

const nl: typeof en = {
  plantNames: {
    monstera: "Monstera",
    pothos: "Pothos",
    fern: "Boston-varen",
    snake: "Vrouwentong",
    fig: "Vioolbladplant",
  },
  needWater: (n) => days(n, "1 plant heeft water nodig", "{n} planten hebben water nodig"),
  allWatered: "Alle planten hebben water gehad",
  everyDays: (n) => days(n, "Elke dag water", "Elke {n} dagen water"),
  overdue: (n) => days(n, "1 dag te laat", "{n} dagen te laat"),
  waterToday: "Vandaag water geven",
  waterIn: (n) => days(n, "Morgen water geven", "Over {n} dagen water geven"),
  wateredToday: "Vandaag water gegeven",
  watered: "Water gegeven",
}

export type PlantId = keyof typeof en.plantNames

// The simulator's language decides: `xcrun simctl launch <udid> <bundleId> -AppleLanguages "(nl)"`.
export const t = getLocales()[0]?.languageCode === "nl" ? nl : en
