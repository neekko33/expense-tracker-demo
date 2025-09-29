import { globalStyles } from '@/constants/styles'
import { Expense } from '@/types'
import dayjs from 'dayjs'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function ExpensesItem({ expense }: { expense: Expense }) {
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.description}>{expense.description}</Text>
          <Text style={styles.date}>{dayjs(expense.date).format('MMMM D, YYYY')}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${expense.amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: globalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    borderRadius: 6,
  },
  innerContainer: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    color: globalStyles.colors.primary50,
  },
  date: {
    fontSize: 12,
    color: globalStyles.colors.primary200,
  },
  amountContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 16,
    color: globalStyles.colors.primary50,
  },
})
