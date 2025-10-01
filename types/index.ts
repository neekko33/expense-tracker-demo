export type Expense = {
  id: string
  description: string
  amount: number
  date: Date
}

export type ExpensesContextType = {
  expenses: Expense[]
  addExpense: (expense: Omit<Expense, 'id'>) => void
  deleteExpense: (id: string) => void
  updateExpense: (id: string, expense: Omit<Expense, 'id'>) => void
}

export type ExpensesAction = {
  type: string,
  id?: string,
  payload?: Omit<Expense, 'id'>
}
