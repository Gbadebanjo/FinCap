import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StyledButton from './app/components/StyledButton';
import Landingscreen from './app/screens/Landingscreen';
import InputField from './app/components/InputField';
import Loginscreen from './app/screens/Loginscreen';
import ForgotPasswordScreen from './app/screens/ForgotPasswordScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      {/* <StyledButton title="Click Me" /> */}
      {/* <InputField /> */}
      {/* <Landingscreen /> */}
      {/* <Loginscreen /> */}
      <ForgotPasswordScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'tomato',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
