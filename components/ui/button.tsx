import { globalStyles } from '@/constants/styles'
import { Pressable, StyleSheet, Text, View } from 'react-native'
export default function Button({
  children,
  onPress,
  mode,
  style,
}: {
  children: string
  onPress: () => void
  mode?: string
  style?: object
}) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View
          style={[
            styles.buttonContainer,
            mode === 'flat' && styles.flatContainer,
          ]}
        >
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: globalStyles.colors.primary500,
  },
  flatContainer: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  flatText: {
    color: globalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: globalStyles.colors.primary100,
    borderRadius: 4,
  },
})
