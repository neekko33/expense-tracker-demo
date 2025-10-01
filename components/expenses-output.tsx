import { globalStyles } from '@/constants/styles'
import type { Expense } from '@/types'
import { StyleSheet, View } from 'react-native'
import ExpensesList from './expenses-list'
import ExpensesSummary from './expenses-summary'

export default function ExpensesOutput({
  expenses,
  periodName,
}: {
  expenses: Expense[]
  periodName?: string
}) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={periodName} />
      <ExpensesList expenses={expenses} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: globalStyles.colors.primary700,
    flex: 1,
  },
})
