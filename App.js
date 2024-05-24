import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NavButtons from './app/components/NavButtons';
import Review from './app/screens/Investment/Review';
import InvestmentHome from './app/screens/Investment/InvestmentHome';
import Earnings from './app/screens/Investment/Earnings';
import ChangeCard from './app/screens/Investment/ChangeCard';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="NavButtons"
          component={NavButtons}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InvestmentReview"
          component={Review}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InvestmentHome"
          component={InvestmentHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InvestmentEarnings"
          component={Earnings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangeCard"
          component={ChangeCard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
