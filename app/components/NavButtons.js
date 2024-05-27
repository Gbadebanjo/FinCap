import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import SavingsScreen from '../screens/SavingsScreen';
import InvestmentPlans from '../screens/Investment/Plans';
import LoanScreen from '../screens/LoanScreen';

// Import SavingsInputScreen and others
import SavingsInputScreen from '../screens/SavingsInputScreen';
import SavingsReviewScreen from '../screens/SavingsReviewScreen';
import SavingsDashboardScreen from '../screens/SavingsDashboardScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        {/* Add more screens for HomeStack here if needed */}
      </Stack.Navigator>
    );
  }
  
  function SavingsStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Savings" component={SavingsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SavingsInput" component={SavingsInputScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SavingsReview" component={SavingsReviewScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SavingsDashboard" component={SavingsDashboardScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }
  
  function InvestStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Invest" component={InvestScreen} options={{ headerShown: false }} />
        {/* Add more screens for InvestStack here if needed */}
      </Stack.Navigator>
    );
  }
  
  function LoanStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Loan" component={LoanScreen} options={{ headerShown: false }} />
        {/* Add more screens for LoanStack here if needed */}
      </Stack.Navigator>
    );
  }
  
//   function MoreStack() {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen name="More" component={MoreScreen} options={{ headerShown: false }} />
//         {/* Add more screens for MoreStack here if needed */}
//       </Stack.Navigator>
//     );
//   }

function NavButtons() {
    return (
        <Tab.Navigator screenOptions={{ tabBarHideOnKeyboard: true, headerShown: false, tabBarShowLabel: true, tabBarStyle: styles.tabBar }}>
            <Tab.Screen name="HomeTab" component={HomeStack}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (<Ionicons name="home-outline" size={25} color={focused ? "#7538EC" : "#766B80"} ></Ionicons>),
                    tabBarLabel: ({ focused, color, size }) => (<Text style={{ color: focused ? "#7538EC" : "#766B80" }}>Home</Text>),
                }} />
            <Tab.Screen name="SavingsTab" component={SavingsStack}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (<Ionicons name="wallet-outline" size={25} color={focused ? "#7538EC" : "#766B80"}></Ionicons>),
                    tabBarLabel: ({ focused, color, size }) => (<Text style={{ color: focused ? "#7538EC" : "#766B80" }}>Savings</Text>),

                }} />
            <Tab.Screen name="InvestTab" component={InvestStack}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (<Ionicons name="cash-outline" size={25} color={focused ? "#7538EC" : "#766B80"}></Ionicons>),
                    tabBarLabel: ({ focused, color, size }) => (<Text style={{ color: focused ? "#7538EC" : "#766B80" }}>Invest</Text>),
                }} />
            <Tab.Screen name="LoanTab" component={LoanStack} 
            options={{ 
                tabBarIcon: ({ focused, color, size }) => (<Ionicons name="pricetag-outline" size={25} color={focused ? "#7538EC" : "#766B80"}></Ionicons>),
                tabBarLabel: ({ focused, color, size }) => (<Text style={{ color: focused ? "#7538EC" : "#766B80" }}>Loans</Text>),

                }} />
            <Tab.Screen name="MoreTab" component={HomeStack} 
            options={{ 
                tabBarIcon: ({ focused, color, size }) => (<Ionicons name="menu" size={25} color={focused ? "#7538EC" : "#766B80"}></Ionicons>),
                tabBarLabel: ({ focused, color, size }) => (<Text style={{ color: focused ? "#7538EC" : "#766B80" }}>More</Text>),

                }} />
        </Tab.Navigator>

    );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    paddingBottom: 15,
    borderTopWidth: 0,
    backgroundColor: '#fff',
  },
});

export default NavButtons;
