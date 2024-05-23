import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landingscreen from './app/screens/Landingscreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Loginscreen from './app/screens/Loginscreen';
import ForgotPasswordScreen from './app/screens/ForgotPasswordScreen';
import SignupScreen from './app/screens/SignUpScreen';
import VerifyForgotPassword from './app/screens/VerifyForgotPassword';
import VerifySignup from './app/screens/VerifySignup';
import ResetPassword from './app/screens/ResetPassword';
import HomeScreen from './app/screens/HomeScreen';
import SavingsScreen from './app/screens/SavingsScreen';

import Text from './app/screens/Text';
import NavButtons from './app/components/NavButtons';
import SavingsInputScreen from './app/screens/SavingsInputScreen';
import SavingsReviewScreen from './app/screens/SavingsReviewScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        {/* <Stack.Screen
          name="Landing"
          component={Landingscreen}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="SignUp"
          component={SignupScreen}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Login"
          component={Loginscreen}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="VerifyForgotPassword"
          component={VerifyForgotPassword}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="VerifySignup"
          component={VerifySignup}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="NavButtons"
          component={NavButtons}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SavingsScreen"
          component={SavingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SavingsInputScreen"
          component={SavingsInputScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SavingsReviewScreen"
          component={SavingsReviewScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
        name='Text'
        component={Text}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
