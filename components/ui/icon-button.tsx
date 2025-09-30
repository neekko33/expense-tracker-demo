import { Ionicons } from '@expo/vector-icons'
import { Pressable, StyleProp, StyleSheet, View } from 'react-native'

export default function IconButton({
  name,
  size,
  color,
  onPress,
}: {
  name: string
  size: number
  color: string
  style?: StyleProp<any>
  onPress?: () => void
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={name} size={size} color={color} />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginRight: 8,
  },
  pressed: {
    opacity: 0.75,
  },
})
