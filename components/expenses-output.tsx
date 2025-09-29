import { globalStyles } from '@/constants/styles'
import type { Expense } from '@/types'
import { StyleSheet, View } from 'react-native'
import ExpensesList from './expenses-list'
import ExpensesSummary from './expenses-summary'

const DUMMY_EXPENSES: Expense[] = [
  {
    id: 'e1',
    description: 'Groceries',
    amount: 45.99,
    date: new Date('2024-06-01'),
  },
  {
    id: 'e2',
    description: 'Movie Tickets',
    amount: 28.5,
    date: new Date('2024-06-03'),
  },
  {
    id: 'e3',
    description: 'Bus Pass',
    amount: 15.0,
    date: new Date('2024-06-05'),
  },
  {
    id: 'e4',
    description: 'Coffee',
    amount: 4.75,
    date: new Date('2024-06-06'),
  },
  {
    id: 'e5',
    description: 'Book',
    amount: 22.0,
    date: new Date('2024-06-07'),
  },
]

export default function ExpensesOutput({
  expenses,
  periodName,
}: {
  expenses: Expense[]
  periodName?: string
}) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: globalStyles.colors.primary700,
    flex: 1,
  }
})
