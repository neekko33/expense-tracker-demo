import { globalStyles } from '@/constants/styles'
import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: globalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: globalStyles.colors.primary500 },
        tabBarActiveTintColor: globalStyles.colors.accent500,
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
