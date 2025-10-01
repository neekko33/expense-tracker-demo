import Button from '@/components/ui/button'
import IconButton from '@/components/ui/icon-button'
import { globalStyles } from '@/constants/styles'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { StyleSheet, View } from 'react-native'

export default function ManageExpensesScreen() {
  const { expenseId } = useLocalSearchParams()
  const screenTitle = expenseId ? 'Edit Expense' : 'Add Expense'
  const router = useRouter()

  const deleteExpenseHandler = () => {
    router.back()
  }

  const cancelHandler = () => {
    router.back()
  }

  const confirmHandler = () => {
    router.back()
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: screenTitle }} />
      <View style={styles.buttons}>
        <Button onPress={cancelHandler} mode='flat' style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          {expenseId ? 'Update' : 'Add'}
        </Button>
      </View>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
})
