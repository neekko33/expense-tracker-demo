import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'

export default function RootLayout() {
  return (
    <>
      <StatusBar style='auto' />
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen
          name='manage-expenses'
          options={{ presentation: 'modal', headerShown: false }}
        />
      </Stack>
    </>
  )
}
