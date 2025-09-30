import { globalStyles } from '@/constants/styles'
import { Expense } from '@/types'
import dayjs from 'dayjs'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function ExpensesItem({ expense }: { expense: Expense }) {
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={[styles.textBase, styles.description]}>
            {expense.description}
          </Text>
          <Text style={[styles.textBase, styles.date]}>
            {dayjs(expense.date).format('MMMM D, YYYY')}
          </Text>
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
    elevation: 3,
    shadowColor: globalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: globalStyles.colors.primary50,
  },
  innerContainer: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  date: {
    fontSize: 12,
  },
  amountContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 16,
    color: globalStyles.colors.primary500,
  },
})
