import { Expense } from '@/types'
import { FlatList } from 'react-native'
import ExpensesItem from './expenses-item'

function renderExpenseItem({ item }: { item: Expense }) {
  return (
    <ExpensesItem expense={item} />
  )
}
export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={renderExpenseItem}
    />
  )
}