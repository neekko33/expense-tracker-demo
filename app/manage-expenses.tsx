import { useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

export default function ManageExpensesScreen() {
  const { expenseId } = useLocalSearchParams()

  return (
    <View>
      <Text>Manage Expenses Screen</Text>
      <Text>Editing Expense: {expenseId}</Text>
    </View>
  )
}
