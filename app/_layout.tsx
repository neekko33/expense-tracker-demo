import { globalStyles } from '@/constants/styles'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'

export default function RootLayout() {
  return (
    <>
      <StatusBar style='auto' />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: globalStyles.colors.primary500 },
          headerTintColor: globalStyles.colors.primary50,
        }}
      >
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen
          name='manage-expenses'
          options={{ presentation: 'modal' }}
        />
      </Stack>
    </>
  )
}
