import IconButton from '@/components/ui/icon-button'
import { globalStyles } from '@/constants/styles'
import { Ionicons } from '@expo/vector-icons'
import { Tabs, useRouter } from 'expo-router'
import React from 'react'

export default function TabLayout() {
  const router = useRouter()

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: globalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: globalStyles.colors.primary500 },
        tabBarActiveTintColor: globalStyles.colors.accent500,
        headerRight: () => (
          <IconButton
            name='add'
            size={24}
            color='white'
            onPress={() => {
              router.navigate('/manage-expenses')
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='hourglass' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='all-expenses'
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

