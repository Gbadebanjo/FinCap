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
import { useNavigation } from '@react-navigation/native';
import ResponseModal from '../components/ResponseModal';
import { FontAwesome5 } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import GoogleLogo from '../assets/googleicon.png';
import StyledButton from '../components/StyledButton';
import InputField from '../components/InputField';
import Api from '../config/Api';
import ErrorAlert from '../components/ErrorAlert';

const validationSchema = Yup.object().shape({
  userName: Yup.string().required().label('Username'),
  email: Yup.string().required().email().label('Email'),
  firstName: Yup.string().required().label('First Name'),
  lastName: Yup.string().required().label('Last Name'),
  password: Yup.string().required().min(6).label('Password'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required().label('Confirm Password'),
});

const SignupScreen = props => {
  const [signupError, setSignupError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);

  // const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmShowPassword(!showConfirmPassword);
  };

  const handleSignup = async (values) => {
    console.log(values)
    try {
      const response = await axios.post(`http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/auth/register`, values,
      { headers: { 'Content-Type': 'application/json' } }

      );
      console.log(`response: ${response}`)
      if (response.data) {
        setIsSuccess(true);
      setModalVisible(true);
        // navigation.navigate('Verify')
      }
    } catch (error) {
      // Handle error
      console.log(`error: ${error}`)
      console.log(`error.response.data: ${JSON.stringify(error.response.data, null, 2)}`)

      if (error.response && error.response.data && error.response.data.message) {
        setSignupError(error.response.data.message);
      } else {
        setSignupError('An error occurred. Please try again.');
      }
      setIsSuccess(false);
    setModalVisible(true);
    }
  };



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={styles.anleleft}
          onPress={() => navigation.navigate('Welcome')}>
          <FontAwesome5 name="angle-left" size={19} color="#808080" />
        </TouchableOpacity>

        <Text style={styles.welcometext}>Welcome to Suba!</Text>
        <Text style={styles.subtext}>
          Enter your details to create an account
        </Text>
        <ErrorAlert error={signupError} />
        <Formik
          initialValues={{ userName: '', email: '', firstName: '', lastName: '', password: '', confirmPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSignup}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View>
              <InputField
                label="Username"
                style={styles.input}
                placeholder="Enter your username"
                value={values.userName}
                onChangeText={handleChange('userName')}
                width="100%"
                marginLeft="22px"
                error={errors.userName}
              />
              <ErrorAlert error={errors.userName} />

              <InputField
                label="Email Address"
                style={styles.input}
                placeholder="Enter your email address"
                value={values.email}
                onChangeText={handleChange('email')}
                width="100%"
                marginLeft="22px"
                error={errors.email}
              />
              <ErrorAlert error={errors.email} />
              <View style={styles.names}>
                <InputField
                  label="First Name"
                  placeholder="First Name"
                  value={values.firstName}
                  onChangeText={handleChange('firstName')}
                  width="47.5%"
                  marginLeft="10px"
                  error={errors.firstName}
                />
                <InputField
                  label="Last Name"
                  placeholder="Last Name"
                  value={values.lastName}
                  onChangeText={handleChange('lastName')}
                  width="47.5%"
                  marginLeft="10px"
                  error={errors.lastName}
                />
              </View>
              <View style={styles.passwordContainer}>
                <InputField
                  label="Password"
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={!showPassword}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  width="100%"
                  marginLeft="22px"
                  error={errors.password}
                />
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
              <ErrorAlert error={errors.password} />

              <View style={styles.passwordContainer}>
                <InputField
                  label="Confirm Password"
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={!showConfirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  width="100%"
                  marginLeft="22px"
                  error={errors.confirmPassword}
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
              </View>
              <ErrorAlert error={errors.confirmPassword} />
              <StyledButton title="Create Account" onPress={handleSubmit} />
            </View>
          )}
        </Formik>
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

      <ResponseModal
      visible={isModalVisible}
      title={isSuccess ? 'Success' : 'Error'}
      message={signupError || 'Signup successful!'}
      isSuccess={isSuccess}
      onDismiss={() => {
        setModalVisible(false);
        if (isSuccess) {
          // Navigate to next screen if signup was successful
          navigation.navigate('Verify');
        }
      }}
      buttonTitle="OK"
    />
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
    marginTop: 40,
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
    paddingLeft: 20,
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
