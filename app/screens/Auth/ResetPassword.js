import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useState } from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import InputField from '../../components/InputField';
import StyledButton from '../../components/StyledButton';
import { FontAwesome5 } from '@expo/vector-icons';
import ErrorAlert from '../../components/ErrorAlert';
import ResponseModal from '../../components/ResponseModal';

const validationSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required()
    .min(6)
    .test('uppercase', 'Password must contain a Uppercase', value =>
      /^(?=.*[A-Z]).+$/.test(value),
    )
    .test('lowercase', 'Password must contain a Lowercase', value =>
      /^(?=.*[a-z]).+$/.test(value),
    )
    .test('number', 'Password must contain a Number', value =>
      /^(?=.*\d).+$/.test(value),
    )
    .test(
      'non-alphabet',
      'Password must contain a Non-alphabet character',
      value => /^(?=.*[^a-zA-Z0-9]).+$/.test(value),
    )
    .label('Password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required()
    .label('Confirm Password'),
});

function ResetPassword(props) {
  const data = props.route.params.data;

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, isSuccess] = useState(false);
  const [modal, setModalVisible] = useState(false);
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordSubmit = async values => {
    setLoading(true);
    const payload = {
      email: data.email,
      verificationCode: data.verificationCode,
      password: values.newPassword,
      confirmPassword: values.confirmPassword,
    };
    try {
      const response = await axios.post(
        `http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/auth/ResetPassword`,
        payload,
      );
      if (response.status === 200) {
        isSuccess(true);
        setModalVisible(true);
      } else {
        setError(
          'An error occurred while verifying the code. Please try again.',
        );
      }
    } catch (error) {
      let errorMessage =
        'An error occurred while verifying the code. Please try again.';
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }
      setError(errorMessage);
      isSuccess(false);
      setModalVisible(true);
      console.log(
        'Server response data:',
        error.response && error.response.data,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.Container}>
      <>
        <Text style={styles.Heading}>Reset password</Text>
        <Text style={styles.SubHeading}>Enter your new password </Text>
        <Text style={styles.TextInstruct}>
          Password must have at least 8 characters, 1 letter, 1 number and
          include both uppercase and lowercase characters{' '}
        </Text>
        <Formik
          initialValues={{ code: '' }}
          onSubmit={handlePasswordSubmit}
          validationSchema={validationSchema}>
          {({ handleChange, handleSubmit, values, errors }) => (
            <>
              <View style={styles.passwordContainer}>
                <InputField
                  label="New Password"
                  placeholder="Password"
                  secureTextEntry={!showPassword}
                  onChangeText={handleChange('newPassword')}
                  value={values.newPassword}
                  width="100%"
                  marginLeft="22px"
                  error={errors.newPassword}
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
              <ErrorAlert
                error={errors.newPassword}
                justifyContent="flex-start"
              />
              <View style={styles.passwordContainer}>
                <InputField
                  label="Confirm Password"
                  placeholder="Password"
                  secureTextEntry={!showPassword}
                  onChangeText={handleChange('confirmPassword')}
                  value={values.confirmPassword}
                  width="100%"
                  marginLeft="22px"
                  error={errors.confirmPassword}
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
              <ErrorAlert
                error={errors.confirmPassword}
                justifyContent="flex-start"
              />
              <StyledButton
                title={loading ? <ActivityIndicator color="#fff" /> : 'Submit'}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </>
      <ResponseModal
        visible={modal}
        title={success ? 'Success' : 'Error!'}
        message={error || 'Password has been Reset'}
        isSuccess={success}
        onDismiss={() => {
          setModalVisible(false);
          if (success) {
            props.navigation.navigate('Login');
          } else {
            props.navigation.navigate('ForgotPassword');
          }
        }}
        buttonTitle={success ? 'Login' : 'Try again'}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    width: '100%',
    paddingTop: 40,
    alignItems: 'center',
  },

  Heading: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 30,
  },
  SubHeading: {
    color: '#3F4654',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    width: '94%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  TextInstruct: {
    color: '#00B84E',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    width: '90%',
    alignItems: 'center',
    paddingVertical: 22,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 30,
    bottom: 26,
  },
});
export default ResetPassword;
