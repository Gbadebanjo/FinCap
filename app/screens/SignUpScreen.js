import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import InputField from '../components/InputField';
import { useNavigation } from '@react-navigation/native';
import StyledButton from '../components/StyledButton';
import ResponseModal from '../components/Modal';
import { FontAwesome5 } from '@expo/vector-icons';
import GoogleLogo from '../assets/googleicon.png';

const SignupScreen = props => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleSignup = () => {
    // setUsernameError('');
    // setEmailError('');
    // setPasswordError('');
    // setConfirmPasswordError('');

    // if (username === '') {
    //   setUsernameError('Please enter a username');
    //   return;
    // }

    // if (email === '') {
    //   setEmailError('Please enter an email address');
    //   return;
    // }

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //   setEmailError('Please enter a valid email address');
    //   return;
    // }

    // if (password === '') {
    //   setPasswordError('Please enter a password');
    //   return;
    // }

    // if (confirmPassword === '') {
    //   setConfirmPasswordError('Please confirm your password');
    //   return;
    // }

    // if (password !== confirmPassword) {
    //   setConfirmPasswordError('Passwords do not match');
    //   return;
    // }
    setModalVisible(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmShowPassword(!showConfirmPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={styles.anleleft}
          onPress={() => navigation.navigate('Login')}>
          <FontAwesome5 name="angle-left" size={19} color="#808080" />
        </TouchableOpacity>

        <Text style={styles.welcometext}>Welcome to Suba!</Text>
        <Text style={styles.subtext}>
          Enter your details to create an account
        </Text>

        <InputField
          label="Username"
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
          width="100%"
          marginLeft="22px"
        />
        {usernameError ? (
          <Text style={styles.errorText}>{usernameError}</Text>
        ) : null}

        <InputField
          label="Email Address"
          style={styles.input}
          placeholder="Enter your email address"
          value={email}
          onChangeText={setEmail}
          width="100%"
          marginLeft="22px"
        />

        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        <View style={styles.names}>
          <InputField
            label="First Name"
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            width="47.5%"
            marginLeft="10px"
          />
          <InputField
            label="Last Name"
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            width="47.5%"
            marginLeft="10px"
          />
        </View>

        <View style={styles.passwordContainer}>
          <InputField
            label="Password"
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!showPassword}
            onChangeText={text => setPassword(text)}
            value={password}
            width="100%"
            marginLeft="22px"
          />

          {passwordError ? (
            <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}

          <TouchableOpacity
            style={styles.eyeIconContainer}
            onPress={togglePasswordVisibility}>
            <FontAwesome5
              name={showPassword ? 'eye' : 'eye-slash'}
              size={15}
              color="#808080"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.passwordContainer}>
          <InputField
            label="Confirm Password"
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!showConfirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            value={confirmPassword}
            width="100%"
            marginLeft="22px"
          />
          <TouchableOpacity
            style={styles.eyeIconContainer}
            onPress={toggleConfirmPasswordVisibility}>
            <FontAwesome5
              name={showConfirmPassword ? 'eye' : 'eye-slash'}
              size={15}
              color="#808080"
            />
          </TouchableOpacity>

          {confirmPasswordError ? (
            <Text style={styles.errorText}>{confirmPasswordError}</Text>
          ) : null}
        </View>

        <StyledButton title="Create Account" onPress={handleSignup} />

        <ResponseModal
          visible={modalVisible}
          title="Success"
          message="Your account has been created successfully."
          onDismiss={() => setModalVisible(false)}
          iconName="check"
          buttonTitle="Okay, Got It"
        />

        <View style={styles.LoginContainer}>
          <Text style={styles.Logintext}>
            Already have an account?
            <Text
              style={styles.LoginlinkText}
              onPress={() => navigation.navigate('Login')}>
              Login
            </Text>
          </Text>
        </View>

        {/* Google Sign In Button  */}
        <TouchableOpacity style={styles.oauthbutton}>
          <Image source={GoogleLogo} style={{ width: 24, height: 24 }} />
          <Text style={styles.oauthtext}>Sign In with Google</Text>
        </TouchableOpacity>

        {/* Apple Sign In Button */}
        <TouchableOpacity style={styles.oauthbutton}>
          <FontAwesome5 name="apple" size={24} color="black" />
          <Text style={styles.oauthtext}>Sign In with Apple</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100vh',
    // marginTop: 90,
  },
  anleleft: {
    marginTop: 50,
    marginLeft: 30,
    marginBottom: 30,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    color: '#d2d2d4',
  },
  subtext: {
    fontSize: 16,
    paddingLeft: 20,
    paddingTop: 7,
    paddingBottom: 30,
    color: '#3F4654',
  },
  welcometext: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  names: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 30,
    bottom: 23,
  },
  LoginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    textAlign: 'center',
    justifyContent: 'space-around',
  },
  Logintext: {
    textAlign: 'center',
  },
  LoginlinkText: {
    color: '#7538EC',
    paddingLeft: 10,
  },
  oauthbutton: {
    borderWidth: 1,
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
  oauthtext: {
    paddingLeft: 10,
  },
  errorText: {
    color: 'red',
    marginLeft: 22,
  },
});

export default SignupScreen;
