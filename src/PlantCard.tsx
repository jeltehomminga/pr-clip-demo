import { Pressable, StyleSheet, Text, View } from "react-native"
import { t } from "./i18n"
import { daysLeft, type Plant } from "./plants"
import { useTheme, type Theme } from "./theme"
import { WaterRing } from "./WaterRing"

type PlantCardProps = {
  plant: Plant
  onWatered: () => void
}

const statusText = (plant: Plant) => {
  const left = daysLeft(plant)
  if (plant.daysSince === 0) return t.wateredToday
  if (left < 0) return t.overdue(-left)
  if (left === 0) return t.waterToday
  return t.waterIn(left)
}

const statusColor = (left: number, theme: Theme) => {
  if (left < 0) return theme.overdue
  if (left === 0) return theme.due
  return theme.leaf
}

export const PlantCard = ({ plant, onWatered }: PlantCardProps) => {
  const theme = useTheme()
  const left = daysLeft(plant)
  const color = statusColor(left, theme)
  const isQuiet = left > 0 && plant.daysSince > 0 // nothing to do, nothing just done

  return (
    <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.rule }]}>
      <WaterRing fraction={Math.max(0, left) / plant.everyDays} color={color} track={theme.track} />
      <View style={styles.text}>
        <Text style={[styles.name, { color: theme.text }]}>{t.plantNames[plant.id]}</Text>
        <Text style={[styles.status, { color: isQuiet ? theme.muted : color }]}>{statusText(plant)}</Text>
        <Text style={[styles.meta, { color: theme.muted }]}>{t.everyDays(plant.everyDays)}</Text>
      </View>
      {left <= 0 && (
        <Pressable
          onPress={onWatered}
          accessibilityRole="button"
          style={({ pressed }) => [styles.button, { backgroundColor: theme.leaf, opacity: pressed ? 0.8 : 1 }]}
        >
          <Text style={[styles.buttonText, { color: theme.onLeaf }]}>{t.watered}</Text>
        </Pressable>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  text: {
    flex: 1,
    gap: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  status: {
    fontSize: 15,
    fontWeight: "600",
  },
  meta: {
    fontSize: 14,
  },
  button: {
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "600",
  },
})
