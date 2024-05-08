import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import InputField from '../components/InputField';
import StyledButton from '../components/StyledButton';
import GoogleLogo from '../assets/googleicon.png';
import ErrorAlert from '../components/ErrorAlert';
import ResponseModal from '../components/ResponseModal';
// import Api from '../config/Api';

// Validation schema with Yup
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().label('Password'),
});

function Loginscreen(props) {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(`http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/auth/login`, values);
      if (response.data) {
        navigation.navigate('Dashboard');
      } else {
        setIsSuccess(false);
        setModalVisible(true);
      }
    } catch (error) {
      // Handle error
      console.log(error)
      setError('Invalid email or password. Please try again.');
      setLoading(false);
    }
  };



  return (
    <SafeAreaView style={styles.container}>
      <>
        <Text style={styles.welcometext}>Welcome back !</Text>
        <Text style={styles.subtext}>Login to continue</Text>
        <ErrorAlert error={error} showIcon />
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

            <View>
              <InputField
                label="Email address"
                placeholder="Enter your email adress "
                onChangeText={handleChange('email')}
                value={values.email}
                error={errors.email}
              />
              <ErrorAlert error={errors.email} />

              <View style={styles.passwordContainer}>
                <InputField
                  label="Password"
                  placeholder="Password"
                  secureTextEntry={!showPassword}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  width="100%"
                  marginLeft="22px"
                  error={errors.email}
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
              <TouchableOpacity>
                <Text style={styles.forgotText} onPress={() => navigation.navigate('ForgotPassword')}>Forgot Pin?</Text>
              </TouchableOpacity>
              <StyledButton title={loading ? <ActivityIndicator color="#fff" /> : "Login"} onPress={handleSubmit} />
            </View>
          )}
        </Formik>
        <View style={styles.SignUpContainer}>
          <Text style={styles.SignUptext}>
            Don't have an account?{' '}
            <Text
              style={styles.SignUplinkText}
              onPress={() => navigation.navigate('SignUp')}>
              Sign Up
            </Text>
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
      </>
      {/* <ResponseModal
        visible={isModalVisible}
        title={isSuccess ? 'Success' : 'Error'}
        message={error || 'Signup successful!'}
        isSuccess={isSuccess}
        onDismiss={() => {
          setModalVisible(false);
          if (isSuccess) {
            // Navigate to next screen if signup was successful
            navigation.navigate('Dashboard');
          }
        }}
        buttonTitle="OK"
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 60,
  },
  forgotText: {
    paddingLeft: 20,
    color: '#7538EC',
    fontSize: 13,
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
  SignUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    textAlign: 'center',
    justifyContent: 'space-around',
  },
  SignUptext: {
    textAlign: 'center',
  },
  SignUplinkText: {
    color: '#7538EC',
    paddingLeft: 20,
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
    paddingTop: 30,
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
});

export default Loginscreen;
