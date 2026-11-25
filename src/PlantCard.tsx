import { StyleSheet, Text, View } from "react-native"
import { t } from "./i18n"
import type { Plant } from "./plants"
import { useTheme } from "./theme"

type PlantCardProps = {
  plant: Plant
}

export const PlantCard = ({ plant }: PlantCardProps) => {
  const theme = useTheme()

  return (
    <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.rule }]}>
      <Text style={[styles.name, { color: theme.text }]}>{t.plantNames[plant.id]}</Text>
      <Text style={[styles.meta, { color: theme.muted }]}>
        {t.everyDays(plant.everyDays)}, {t.lastWatered(plant.daysSince)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 16,
    gap: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  meta: {
    fontSize: 15,
  },
})
