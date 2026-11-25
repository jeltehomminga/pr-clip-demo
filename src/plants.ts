import type { PlantId } from "./i18n"

export type Plant = {
  id: PlantId
  everyDays: number
  daysSince: number
}

// Made-up data: days since the last watering, so the app looks the same on any date.
export const plants: Plant[] = [
  { id: "fern", everyDays: 3, daysSince: 5 },
  { id: "pothos", everyDays: 5, daysSince: 5 },
  { id: "fig", everyDays: 7, daysSince: 6 },
  { id: "monstera", everyDays: 7, daysSince: 3 },
  { id: "snake", everyDays: 14, daysSince: 6 },
]
