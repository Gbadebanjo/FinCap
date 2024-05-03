import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Landingscreen from './app/screens/Landingscreen';
import Loginscreen from './app/screens/Loginscreen';
import ForgotPasswordScreen from './app/screens/ForgotPasswordScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        {/* <Stack.Screen name="Landing" component={Landingscreen} /> */}
        <Stack.Screen name="Login" component={Loginscreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}