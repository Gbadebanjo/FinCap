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
import DashboardScreen from './app/screens/Auth/DashboardScreen';
import FundingSourceModal from './app/components/FundingSourceModal';
import Plans from './app/screens/Investment/Plans';
import Review from './app/screens/Investment/Review';
import InvestmentHome from './app/screens/Investment/InvestmentHome';
import InvestmentSummary from './app/screens/Investment/Earnings';
import ChangeCard from './app/screens/Investment/ChangeCard';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        {/* <Stack.Screen
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
        {/* <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />  */}
        {/* <Stack.Screen
          name="FundingSource"
          component={FundingSourceModal}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="InvestmentPlans"
          component={Plans}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="InvestmentReview"
          component={Review}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="InvestmentHome"
          component={InvestmentHome}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Earnings"
          component={Earnings}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="ChangeCard"
          component={ChangeCard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
