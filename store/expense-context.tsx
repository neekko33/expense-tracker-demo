import { Expense, ExpensesContextType } from '@/types'
import { createContext, useReducer } from 'react'

const DUMMY_EXPENSES: Expense[] = [
  {
    id: 'e1',
    description: 'Groceries',
    amount: 45.99,
    date: new Date('2025-10-20'),
  },
  {
    id: 'e2',
    description: 'Movie Tickets',
    amount: 28.5,
    date: new Date('2025-10-22'),
  },
  {
    id: 'e3',
    description: 'Bus Pass',
    amount: 15.0,
    date: new Date('2025-10-23'),
  },
  {
    id: 'e4',
    description: 'Coffee',
    amount: 4.75,
    date: new Date('2025-10-25'),
  },
  {
    id: 'e5',
    description: 'Book',
    amount: 22.0,
    date: new Date('2025-10-29'),
  },
]

export const ExpensesContext = createContext<ExpensesContextType>({
  expenses: [],
  addExpense: (expense: Omit<Expense, 'id'>) => {},
  deleteExpense: (id: string) => {},
  updateExpense: (id: string, expense: Omit<Expense, 'id'>) => {},
})

const expensesReducer = (state: ExpensesState, action: Action) => {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString()
      return [{ ...action.payload, id }, ...state]
    case 'UPDATE':
      const updateExpenseIndex = state.findIndex(
        expense => expense.id === action.id
      )
      if (updateExpenseIndex === -1) {
        state[updateExpenseIndex] = { id: action.id, ...action.payload }
      }
      return [...state]
    case 'DELETE':
      return state.filter(expense => expense.id !== action.id)
    default:
      return state
  }
}

const ExpensesProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES)

  const addExpense = (expense: Omit<Expense, 'id'>) => {
    dispatch({ type: 'ADD', payload: expense })
  }

  const updateExpense = (id: string, expense: Omit<Expense, 'id'>) => {
    dispatch({ type: 'UPDATE', id, payload: expense })
  }

  const deleteExpense = (id: string) => {
    dispatch({ type: 'DELETE', id })
  }

  return (
    <ExpensesContext.Provider
      value={{
        expenses: expensesState,
        addExpense,
        updateExpense,
        deleteExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesProvider
