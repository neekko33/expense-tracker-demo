import { globalStyles } from '@/constants/styles'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function Input({ label, style, textInputProps }: { label: string, style?: any, textInputProps?: any }) {
  const inputStyles: any[] = [styles.input]
  if (textInputProps?.multiline) {
    inputStyles.push(styles.inputMultiline)
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput style={inputStyles} {...textInputProps} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  inputLabel: {
    marginBottom: 6,
    color: globalStyles.colors.primary100,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: globalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: globalStyles.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  }
})
