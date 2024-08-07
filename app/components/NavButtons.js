import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import FundWallet from '../screens/HomeScreen/FundWallet';
import KycProfile from '../screens/HomeScreen/KycProfile';
import VerifyProfile from '../screens/HomeScreen/VerifyProfile';
import UploadDocument from '../screens/HomeScreen/UploadDocument';
import WithdrawalInput from '../screens/HomeScreen/WithdrawalInput';
import ReviewWithdrawal from '../screens/HomeScreen/ReviewWithdrawal';
import WithdrawalReceipt from '../screens/HomeScreen/WithdrawalReceipt';
import SavingsScreen from '../screens/Savings/SavingsScreen';
import SavingsInputScreen from '../screens/Savings/SavingsInputScreen';
import SavingsReviewScreen from '../screens/Savings/SavingsReviewScreen';
import SavingsDashboardScreen from '../screens/Savings/SavingsDashboardScreen';
import InvestmentHome from '../screens/Investment/InvestmentHome';
import InvestmentReview from '../screens/Investment/Review';
import InvestmentPlans from '../screens/Investment/Plans';
import InvestmentEarnings from '../screens/Investment/Earnings';
import ChangeCards from '../screens/Investment/ChangeCards';
import LoanDashboard from '../screens/Loans/LoanDashboard';
import LoanApplication from '../screens/Loans/LoanApplication';
import LoanApplyPro from '../screens/Loans/LoanApplyPro';
import RepayLoan from '../screens/Loans/RepayLoan';
import LoanPaymentMethod from '../screens/Loans/LoanPaymentMethod';
import RepayLoanByTransfer from '../screens/Loans/RepayLoanByTransfer';
import LoanDetailScreen from '../screens/Loans/LoanDetailsScreen';
import AddBank from '../screens/HomeScreen/AddBank';
import SetupPin from '../screens/HomeScreen/SetupPin';
import ConfirmPin from '../screens/HomeScreen/ConfirmPin';
import MoreScreen from '../screens/More/MoreScreen';
import Profile from '../screens/More/Profile';
import SetNewPassword from '../screens/More/SetNewPassword';
import VerifyNewPassword from '../screens/More/VerifyNewPassword';
import SetUpNewPin from '../screens/More/SetUpNewPin';
import ConfirmNewPin from '../screens/More/ConfirmNewPin';
import NotificationSettings from '../screens/More/NotificationSettings';
import BankAccount from '../screens/More/BankAccount';
import AddBankForm from '../screens/More/AddBankForm';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="AddBank"
        component={AddBank}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SetPin"
        component={SetupPin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PinConfirm"
        component={ConfirmPin}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="FundWallet"
        component={FundWallet}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="KycProfile"
        component={KycProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VerifyProfile"
        component={VerifyProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadDocument"
        component={UploadDocument}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WithdrawalInput"
        component={WithdrawalInput}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReviewWithdrawal"
        component={ReviewWithdrawal}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WithdrawalReceipt"
        component={WithdrawalReceipt}
        options={{ headerShown: false }}
      />

      
      {/* Add more screens for HomeStack here if needed */}
    </Stack.Navigator>
  );
}

function SavingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SavingsDashboard"
        component={SavingsDashboardScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Savings"
        component={SavingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SavingsInput"
        component={SavingsInputScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SavingsReview"
        component={SavingsReviewScreen}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}
function InvestStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="InvestmentHome"
        component={InvestmentHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InvestmentPlans"
        component={InvestmentPlans}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InvestmentReview"
        component={InvestmentReview}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InvestmentEarnings"
        component={InvestmentEarnings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChangeCards"
        component={ChangeCards}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function LoanStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoanDashboard"
        component={LoanDashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoanApplication"
        component={LoanApplication}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoanApplyPro"
        component={LoanApplyPro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RepayLoan"
        component={RepayLoan}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoanPaymentMethod"
        component={LoanPaymentMethod}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RepayLoanByTransfer"
        component={RepayLoanByTransfer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoanDetailScreen"
        component={LoanDetailScreen}
        options={{ headerShown: false }}
      />
      {/* Add more screens for LoanStack here if needed */}
    </Stack.Navigator>
  );
}

  function MoreStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
        name="MoreScreen" 
        component={MoreScreen} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="Profile" 
        component={Profile} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="SetNewPassword" 
        component={SetNewPassword} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="VerifyNewPassword"  
        component={VerifyNewPassword} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="SetUpNewPin"  
        component={SetUpNewPin} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="ConfirmNewPin"  
        component={ConfirmNewPin} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="NotificationSettings"  
        component={NotificationSettings} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="BankAccount"  
        component={BankAccount} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="AddBankForm"  
        component={AddBankForm} 
        options={{ headerShown: false }} 
        />
        
        {/* Add more screens for MoreStack here if needed */}
      </Stack.Navigator>
    );
  }

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
        name="HomeTab"
        component={HomeStack}
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
        name="SavingsTab"
        component={SavingsStack}
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
        name="InvestTab"
        component={InvestStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome6
              name="coins"
              size={25}
              color={focused ? '#7538EC' : '#766B80'}></FontAwesome6>
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <Text style={{ color: focused ? '#7538EC' : '#766B80' }}>
              Invest
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="LoanTab"
        component={LoanStack}
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
        name="MoreTab"
        component={MoreStack}
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
    paddingBottom: 23,
    borderTopWidth: 0,
    backgroundColor: '#fff',
  },
});

export default NavButtons;
