import ExpensesOutput from '@/components/expenses-output'
export default function RecentExpensesScreen() {
  return (
    <ExpensesOutput expenses={[]} periodName='Last 7 Days'/>
  )
}