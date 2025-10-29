import ExpenseForm from '@/components/manage-expense/expense-form'
import IconButton from '@/components/ui/icon-button'
import { globalStyles } from '@/constants/styles'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { ExpensesContext } from '../store/expense-context'
import { ExpenseFormProps } from '../types'

export default function ManageExpensesScreen() {
  const { expenseId } = useLocalSearchParams()
  const screenTitle = expenseId ? 'Edit Expense' : 'Add Expense'
  const submitButtonLabel = expenseId ? 'Update' : 'Add'

  const router = useRouter()
  const expensesCtx = useContext(ExpensesContext)

  const selectedExpense = expensesCtx.expenses.find(expense => expense.id === expenseId)

  const deleteExpenseHandler = () => {
    router.back()
  }

  const submitHandler = (data: ExpenseFormProps) => {
    if (expenseId) {
      expensesCtx.updateExpense(expenseId as string, data)
    } else {
      expensesCtx.addExpense(data)
    }
    router.back()
  }

  const cancelHandler = () => {
    router.back()
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: screenTitle }} />
      <ExpenseForm formData={selectedExpense} submitButtonLabel={submitButtonLabel} onSubmit={submitHandler} onCancel={cancelHandler}/>
      {expenseId && (
        <View style={styles.deleteContainer}>
          <IconButton
            name='trash'
            color={globalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: globalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: globalStyles.colors.primary200,
    alignItems: 'center',
  },
})
