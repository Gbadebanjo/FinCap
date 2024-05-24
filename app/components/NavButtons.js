import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import SavingsScreen from '../screens/SavingsScreen';
import InvestmentPlans from '../screens/Investment/Plans';
import LoanScreen from '../screens/LoanScreen';

const Tab = createBottomTabNavigator();
function NavButtons() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="home-outline"
              size={25}
              color={focused ? '#7538EC' : '#766B80'}></Ionicons>
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <Text style={{ color: focused ? '#7538EC' : '#766B80' }}>Home</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Savings"
        component={SavingsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="wallet-outline"
              size={25}
              color={focused ? '#7538EC' : '#766B80'}></Ionicons>
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <Text style={{ color: focused ? '#7538EC' : '#766B80' }}>
              Savings
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Invest"
        component={InvestmentPlans}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="cash-outline"
              size={25}
              color={focused ? '#7538EC' : '#766B80'}></Ionicons>
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <Text style={{ color: focused ? '#7538EC' : '#766B80' }}>
              Invest
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Loan"
        component={LoanScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="pricetag-outline"
              size={25}
              color={focused ? '#7538EC' : '#766B80'}></Ionicons>
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <Text style={{ color: focused ? '#7538EC' : '#766B80' }}>
              Loans
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="menu"
              size={25}
              color={focused ? '#7538EC' : '#766B80'}></Ionicons>
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <Text style={{ color: focused ? '#7538EC' : '#766B80' }}>More</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    paddingBottom: 15,
    borderTopWidth: 0,
    backgroundColor: '#fff',
  },
});

export default NavButtons;
