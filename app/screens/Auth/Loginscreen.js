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
import { FontAwesome } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import InputField from '../../components/InputField';
import StyledButton from '../../components/StyledButton';
import GoogleLogo from '../../assets/googleicon.png';
import ErrorAlert from '../../components/ErrorAlert';

// Validation schema with Yup
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().label('Password'),
});

function Loginscreen(props) {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async values => {
    setLoading(true);
    try {
      const response = await axios.post(`http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/auth/login`, values);
      if (response.data && response.data.data.token) {
        // Save token in AsyncStorage
        await AsyncStorage.setItem('userToken', response.data.data.token);
        navigation.navigate('HomeScreen');
        setLoading(false);
      } else {
        setIsSuccess(false);
        setModalVisible(true);
      }
    } catch (error) {
      setError('Invalid email or password. Please try again.');
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <>
        <Text style={styles.welcometext}>Welcome back !</Text>
        <Text style={styles.subtext}>Login to continue</Text>
        <ErrorAlert error={error} showIcon justifyContent="center" />
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View >
              <View> 
              <InputField
                label="Email address"
                placeholder="Enter your email adress"
                onChangeText={handleChange('email')}
                value={values.email}
                error={errors.email}
                width='100%'
                style={styles.input}
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
                  style={styles.input}
                  error={errors.email}
                />
                <TouchableOpacity
                  style={styles.eyeIconContainer}
                  onPress={togglePasswordVisibility}>
                  <FontAwesome
                    name={showPassword ? 'eye' : 'eye-slash'}
                    size={18}
                    color="#808080"
                  />
                </TouchableOpacity>
              </View>
              <ErrorAlert error={errors.password} />

              </View>
              <TouchableOpacity>
                <Text
                  style={styles.forgotText}
                  onPress={() => navigation.navigate('ForgotPassword')}>
                  Forgot Pin?
                </Text>
              </TouchableOpacity>
              <StyledButton
                title={loading ? <ActivityIndicator color="#fff" /> : 'Login'}
                onPress={handleSubmit}
                width='100%'
                margin= '0px'
              />
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
          <FontAwesome name="apple" size={24} color="black" />
          <Text style={styles.oauthtext}>Sign In with Apple</Text>
        </TouchableOpacity>
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '100%',
    marginLeft: '5%',
    paddingTop: 60,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    color: '#d2d2d4',
  },
  forgotText: {
    // paddingLeft: 20,
    color: '#7538EC',
    fontSize: 13,
    marginBottom: 20
  },
  oauthbutton: {
    borderWidth: 1,
    borderColor: '#D0D5DD',
    flexDirection: 'row',
    borderRadius: 8,
    padding: 8,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    // marginHorizontal: 20,
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
    // paddingLeft: 20,
    paddingTop: 7,
    paddingBottom: 30,
    color: '#3F4654',
  },
  welcometext: {
    fontSize: 24,
    fontWeight: 'bold',
    // paddingLeft: 20,
    paddingTop: 30,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 70,
  },
  eyeIconContainer: {
    right: 30,
    top: 2,
  },
});

export default Loginscreen;
