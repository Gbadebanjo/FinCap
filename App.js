import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landingscreen from './app/screens/Auth/Landingscreen';
import WelcomeScreen from './app/screens/Auth/WelcomeScreen';
import Loginscreen from './app/screens/Auth/Loginscreen';
import ForgotPasswordScreen from './app/screens/Auth/ForgotPasswordScreen';
import SignupScreen from './app/screens/Auth/SignUpScreen';
import VerifyForgotPassword from './app/screens/Auth/VerifyForgotPassword';
import VerifySignup from './app/screens/Auth/VerifySignup';
import ResetPassword from './app/screens/Auth/ResetPassword';
import Selfie from './app/screens/HomeScreen/Selfie';
import AddMoney from './app/screens/HomeScreen/AddMoney';

import NavButtons from './app/components/NavButtons';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={Landingscreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Loginscreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerifyForgotPassword"
          component={VerifyForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerifySignup"
          component={VerifySignup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={NavButtons}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Selfie"
        component={Selfie}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="AddMoney"
        component={AddMoney}
        options={{ headerShown: false }}
      />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Example navigation from a button press
const navigateToSavingsInput = (navigation) => {
  navigation.navigate('SavingsTab', {
    screen: 'SavingsInput',
    params: { title: 'Flex save', interest: '10% intrest p.a', amount: '₦ 0' }
  });
};