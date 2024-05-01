import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { FontAwesome5 } from '@expo/vector-icons';

import InputField from '../components/InputField';
import StyledButton from '../components/StyledButton';
import GoogleLogo from "../assets/googleicon.png";

function Loginscreen(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const navigation = useNavigation();

  // const handleLogin = async () => {
  //     try {
  //       // Make API call to authenticate user
  //       const response = await axios.post('your_api_endpoint/login', { email, password });

  //       // Handle success, navigate to home screen
  //       navigation.navigate('Home');
  //     } catch (error) {
  //       // Handle error
  //       setError('Invalid email or password. Please try again.');
  //     }
  //   };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcometext}>Welcome back !</Text>
      <Text style={styles.subtext}>Login to continue</Text>

      <InputField
        label="Email address"
        placeholder="Enter your email adress "
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <InputField
        label="Password"
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Pin?</Text>
      </TouchableOpacity>
      <StyledButton title="Login" />
      <View style={styles.SignUpContainer}>
      <Text style={styles.SignUptext}>
        Don't have an account?{' '}
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.SignUplinkText}>Sign Up</Text>
        </TouchableOpacity>
      </Text>
      </View>
         {/* Google Sign In Button */}
      <TouchableOpacity style={styles.oauthbutton}>
      <Image source={GoogleLogo} style={{ width: 24, height: 24 }} />
        <Text style={styles.oauthtext}>Sign In with Google</Text>
      </TouchableOpacity>
      {/* Apple Sign In Button */}
      <TouchableOpacity style={styles.oauthbutton}>
        <FontAwesome5 name="apple" size={24} color="black" />
        <Text style={styles.oauthtext}>Sign In with Apple</Text>
      </TouchableOpacity>
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 90,
  },
  forgotText: {
    paddingLeft: 20,
    color: '#7538EC',
    fontSize: 13,
  },
  oauthbutton : {
    borderWidth : 1,
    borderColor: '#D0D5DD',
    flexDirection: 'row',
    borderRadius: 8,
    padding: 8,
    justifyContent: 'center',
    width: '90%',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 8,
    textAlign: 'center',
  },
  oauthtext : {
    paddingLeft: 10,
  },
  SignUpContainer : {
    alignItems: 'center',
    padding: 20,
    textAlign: 'center',
  },
  SignUptext : {
    textAlign: 'center',
    justifyContent: 'center',
  },
  SignUplinkText : {
    alignItems: 'center',
    color: '#7538EC',
    textAlign: 'center',
    paddingLeft: 5,
  },
  subtext: {
    fontSize: 16,
    paddingLeft: 20,
    paddingTop: 7,
    paddingBottom: 30,
    color: '#3F4654',
  },
  welcometext: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
});

export default Loginscreen;
