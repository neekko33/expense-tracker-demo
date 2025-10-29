import { useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { ExpenseFormProps } from '../../types'
import Button from '../ui/button'
import Input from './input'

export default function ExpenseForm({
  formData,
  onSubmit,
  onCancel,
  submitButtonLabel,
}: {
  formData: ExpenseFormProps | undefined
  onSubmit: (data: ExpenseFormProps) => void
  onCancel: () => void
  submitButtonLabel: string
}) {
  const [formValues, setFormValues] = useState({
    amount: formData ? formData.amount.toString() : '',
    date: formData ? formData.date.toISOString().slice(0, 10) : '',
    description: formData ? formData.description : '',
  })

  const confirmHandler = () => {
    const expenseData = {
      amount: +formValues.amount,
      date: new Date(formValues.date),
      description: formValues.description,
    }

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date'
    const descriptionIsValid = expenseData.description.trim().length > 0

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      Alert.alert('Invalid input', 'Please check your entered data.')
      return
    }

    onSubmit(expenseData)
  }

  const formChangedHandler = (
    inputIdentifier: string,
    enteredValue: string
  ) => {
    setFormValues(currentValues => {
      return {
        ...currentValues,
        [inputIdentifier]: enteredValue,
      }
    })
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          label='Amount'
          style={styles.rowInput}
          textInputProps={{
            keyboardType: 'decimal-pad',
            value: formValues.amount,
            onChangeText: (value: string) =>
              formChangedHandler('amount', value),
          }}
        />
        <Input
          label='Date'
          style={styles.rowInput}
          textInputProps={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            value: formValues.date,
            onChangeText: (value: string) => formChangedHandler('date', value),
          }}
        />
      </View>
      <Input
        label='Description'
        textInputProps={{
          multiline: true,
          value: formValues.description,
          onChangeText: (value: string) =>
            formChangedHandler('description', value),
        }}
      />
      <View style={styles.buttons}>
        <Button onPress={onCancel} mode='flat' style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
    marginBottom: 16,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
  },
  buttons: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
})
