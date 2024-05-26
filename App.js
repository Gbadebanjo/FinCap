import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

import NavButtons from './app/components/NavButtons';
import SavingsInputScreen from './app/screens/SavingsInputScreen';
import SavingsReviewScreen from './app/screens/SavingsReviewScreen';
import SavingsDashboardScreen from './app/screens/SavingsDashboardScreen';

const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Landing">
//         <Stack.Screen
//           name="Landing"
//           component={Landingscreen}
//           options={{ headerShown: false }}
//         /> 
//          <Stack.Screen
//           name="Welcome"
//           component={WelcomeScreen}
//           options={{ headerShown: false }}
//         /> 
//          <Stack.Screen
//           name="SignUp"
//           component={SignupScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Login"
//           component={Loginscreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="ForgotPassword"
//           component={ForgotPasswordScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="VerifyForgotPassword"
//           component={VerifyForgotPassword}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="VerifySignup"
//           component={VerifySignup}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="ResetPassword"
//           component={ResetPassword}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="NavButtons"
//           component={NavButtons}
//           options={{ headerShown: false}}
//         />
//         <Stack.Screen
//           name="HomeScreen"
//           component={HomeScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="SavingsScreen"
//           component={SavingsScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="SavingsInputScreen"
//           component={SavingsInputScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="SavingsReviewScreen"
//           component={SavingsReviewScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="SavingsDashboardScreen"
//           component={SavingsDashboardScreen}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



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