import ExpensesOutput from '@/components/expenses-output'
import { ExpensesContext } from '@/store/expense-context'
import type { Expense } from '@/types'
import { useContext, useEffect, useState } from 'react'
export default function AllExpensesScreen() {
  const [expenses, setExpenses] = useState<Expense[]>([])
  const expensesCtx = useContext(ExpensesContext)

  useEffect(() => {
    const sortedExpenses = expensesCtx.expenses.sort((a, b) => {
      return b.date.getTime() - a.date.getTime()
    })
    setExpenses(sortedExpenses)
  }, [expensesCtx.expenses])

  return <ExpensesOutput expenses={expenses} periodName='Total' />
}
