import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { t } from "./src/i18n"
import { Leaf } from "./src/Leaf"
import { PlantCard } from "./src/PlantCard"
import { daysLeft, plants as initialPlants } from "./src/plants"
import { useTheme } from "./src/theme"

const Garden = () => {
  const theme = useTheme()
  const [plants, setPlants] = useState(initialPlants)
  const needWater = plants.filter((plant) => daysLeft(plant) <= 0).length

  const water = (id: string) =>
    setPlants((current) => current.map((plant) => (plant.id === id ? { ...plant, daysSince: 0 } : plant)))

  return (
    <SafeAreaView style={[styles.screen, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Leaf color={theme.leaf} />
          <Text style={[styles.title, { color: theme.text }]}>Pothos</Text>
        </View>
        <Text style={[styles.summary, { color: needWater ? theme.due : theme.leaf }]}>
          {needWater ? t.needWater(needWater) : t.allWatered}
        </Text>
        <View style={styles.list}>
          {plants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} onWatered={() => water(plant.id)} />
          ))}
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
      <Garden />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 8,
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
  },
  summary: {
    fontSize: 17,
    marginTop: 4,
    marginBottom: 20,
  },
  list: {
    gap: 12,
  },
})
