import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
// import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import SavingsScreen from '../screens/SavingsScreen';
import InvestScreen from '../screens/InvestScreen';
import LoanScreen from '../screens/LoanScreen';
// import MoreScreen from '../screens/MoreScreen';

const Tab = createBottomTabNavigator();
function NavButtons() {
    return (
        <Tab.Navigator screenOptions={{ tabBarHideOnKeyboard: true, headerShown: false, tabBarShowLabel: true, tabBarStyle: styles.tabBar }}>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (<Ionicons name="home-outline" size={25} color={focused ? "#7538EC" : "#766B80"} ></Ionicons>),
                    tabBarLabel: ({ focused, color, size }) => (<Text style={{ color: focused ? "#7538EC" : "#766B80" }}>Home</Text>),
                }} />
            <Tab.Screen name="Savings" component={SavingsScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (<Ionicons name="wallet-outline" size={25} color={focused ? "#7538EC" : "#766B80"}></Ionicons>),
                    tabBarLabel: ({ focused, color, size }) => (<Text style={{ color: focused ? "#7538EC" : "#766B80" }}>Savings</Text>),

                }} />
            <Tab.Screen name="Invest" component={InvestScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (<Ionicons name="cash-outline" size={25} color={focused ? "#7538EC" : "#766B80"}></Ionicons>),
                    tabBarLabel: ({ focused, color, size }) => (<Text style={{ color: focused ? "#7538EC" : "#766B80" }}>Invest</Text>),
                }} />
            <Tab.Screen name="Loan" component={LoanScreen} 
            options={{ 
                tabBarIcon: ({ focused, color, size }) => (<Ionicons name="pricetag-outline" size={25} color={focused ? "#7538EC" : "#766B80"}></Ionicons>),
                tabBarLabel: ({ focused, color, size }) => (<Text style={{ color: focused ? "#7538EC" : "#766B80" }}>Loans</Text>),

                }} />
            <Tab.Screen name="More" component={HomeScreen} 
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
        // borderTopColor: '#ddd',
        backgroundColor: '#fff',
    }

});

export default NavButtons;