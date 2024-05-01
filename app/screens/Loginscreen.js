import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { FontAwesome5 } from '@expo/vector-icons';

import InputField from '../components/InputField';
import StyledButton from '../components/StyledButton';

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
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <InputField
            label="Password"
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Pin?</Text>
      </TouchableOpacity>
          <StyledButton title="Login" />
          {/* Google Sign In Button */}
      <TouchableOpacity >
        <FontAwesome5 name="google" size={24} color="white" />
        <Text>Sign In with Google</Text>
      </TouchableOpacity>
      {/* Apple Sign In Button */}
      <TouchableOpacity >
        <FontAwesome5 name="apple" size={24} color="white" />
        <Text >Sign In with Apple</Text>
      </TouchableOpacity>
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        width: "100%",
        height: "100%",
        paddingTop: 90,
    },
    forgotText : {
        paddingLeft: 20,
        color: '#7538EC',
        fontSize: 14
    },
    subtext: {
        fontSize: 16,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 30,
        color: "#3F4654"
    
    },
    welcometext: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingLeft: 20,
    },
})

export default Loginscreen;