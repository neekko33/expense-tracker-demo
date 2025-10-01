import ExpensesOutput from '@/components/expenses-output'
import { ExpensesContext } from '@/store/expense-context'
import type { Expense } from '@/types'
import dayjs from 'dayjs'
import { useContext, useEffect, useState } from 'react'
export default function AllExpensesScreen() {
  const [expenses, setExpenses] = useState<Expense[]>([])
  const expensesCtx = useContext(ExpensesContext)

  useEffect(() => {
    const latestExpenses = expensesCtx.expenses
      .filter(expense => {
        return dayjs(expense.date).isAfter(dayjs().subtract(7, 'day'))
      })
      .sort((a, b) => b.date.getTime() - a.date.getTime())
    setExpenses(latestExpenses)
  }, [expensesCtx.expenses])

  return <ExpensesOutput expenses={expenses} periodName='Last 7 Days' />
}
