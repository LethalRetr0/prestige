import { useColorScheme } from '@/hooks/use-color-scheme';
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function HomeScreen() {
  const [xp, setXp] = useState(0);
  const colorScheme = useColorScheme()
  const level = Math.floor(xp / 100) + 1;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colorScheme === 'dark' ? '#111111' : '#FFFFFF',
        justifyContent: "center",
        alignItems: "center",
        padding: 24
      }}
    >
      <Text
        style={{
          color: colorScheme === 'light' ? '#111111' : '#FFFFFF',
          fontSize: 88,
          fontWeight: "bold",
        }}
      >
        Prestige
      </Text>

      <Text
        style={{
          color: "#4f4f4f",
          fontSize: 20,
          marginTop: 12,
        }}
      >
        Level {level} • {xp - ((level - 1) * 100)} XP
      </Text>
      <Pressable
        onPress={() => setXp(xp + 25)}
        style={{
          backgroundColor: "#FF00F0",
          paddingVertical: 16,
          paddingHorizontal: 32,
          borderRadius: 12,
          marginTop: 40,
        }}
      >
        <Text style={{
          color: "#134323",
          fontSize: 16,
          fontWeight: "Bold",
        }}>
          Workout
        </Text>
      </Pressable>
    </View>
  );
}