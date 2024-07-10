import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup'; 
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import InputField from '../../components/InputField';
import StyledButton from '../../components/StyledButton';
import { FontAwesome5 } from '@expo/vector-icons';
import ErrorAlert from '../../components/ErrorAlert';
import ResponseModal from '../../components/Modals/ResponseModal';

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

export default function VerifyNewPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, isSuccess] = useState(false);
    const [modal, setModalVisible] = useState(false);
    const [error, setError] = useState('');

    const navigation = useNavigation();
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  return (
    <SafeAreaView style={styles.Container}>
      <>

          <TouchableOpacity
            style={styles.angleLeft}
            onPress={() => navigation.navigate('Welcome')}
          >
            <FontAwesome name="angle-left" size={22} color="#808080" />
          </TouchableOpacity>

        <Text style={styles.Heading}>Set new password</Text>
        <Text style={styles.SubHeading}>No worries, we’ll send you reset instructions. </Text>

        <Formik
          initialValues={{ code: '' }}
          onSubmit={()=> alert('Password changed successfully')}
          validationSchema={validationSchema}>
          {({ handleChange, handleSubmit, values, errors }) => (
            <>
              <View style={styles.passwordContainer}>
                <InputField
                  label="Enter Old Password"
                  placeholder="*****"
                  secureTextEntry={!showPassword}
                  onChangeText={handleChange('newPassword')}
                  value={values.newPassword}
                  width="100%"
                  paddingLeft='0'
                  error={errors.newPassword}
                />
                <TouchableOpacity
                  style={styles.eyeIconContainer}
                  onPress={togglePasswordVisibility}>
                  <FontAwesome5
                    name={showPassword ? 'eye' : 'eye-slash'}
                    size={17}
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
                  label="New Password"
                  placeholder="******"
                  secureTextEntry={!showPassword}
                  onChangeText={handleChange('newPassword')}
                  value={values.newPassword}
                  width="100%"
                  paddingLeft='0'
                  error={errors.newPassword}
                />
                <TouchableOpacity
                  style={styles.eyeIconContainer}
                  onPress={togglePasswordVisibility}>
                  <FontAwesome5
                    name={showPassword ? 'eye' : 'eye-slash'}
                    size={17}
                    color="#808080"
                  />
                </TouchableOpacity>
              </View>
              <ErrorAlert
                error={errors.newPassword}
                justifyContent="flex-start"
              />

                <Text style={styles.TextInstruct}>
                    Password must have at least 8 characters, 1 letter, 1 number and include both uppercase and lowercase characters{' '}
                </Text>

              <View style={styles.passwordContainer}>
                <InputField
                  label="Confirm Password"
                  placeholder="******"
                  secureTextEntry={!showPassword}
                  onChangeText={handleChange('confirmPassword')}
                  value={values.confirmPassword}
                  width="100%"
                  marginLeft=""
                  error={errors.confirmPassword}
                />
                <TouchableOpacity
                  style={styles.eyeIconContainer}
                  onPress={togglePasswordVisibility}>
                  <FontAwesome5
                    name={showPassword ? 'eye' : 'eye-slash'}
                    size={18}
                    color="#808080"
                  />
                </TouchableOpacity>
              </View>
              <ErrorAlert
                error={errors.confirmPassword}
                justifyContent="flex-start"
              />
              <StyledButton
                title={loading ? <ActivityIndicator color="#fff" /> : 'Set New Password'}
                onPress={()=> alert('Password has been changed')}
                width='100%'
                marginTop={10}
              />
            </>
          )}
        </Formik>
      </>
      <ResponseModal
        visible={modal}
        title={success ? 'Your new Password has been Saved' : 'Error!'}
        message={error || 'Your can now login using your new password'}
        isSuccess={success}
        onDismiss={() => {
          setModalVisible(false);
          if (success) {
            props.navigation.navigate('Login');
          } else {
            props.navigation.navigate('ForgotPassword');
          }
        }}
        buttonTitle={success ? 'Go back to settings' : 'Try again'}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      height: '100%',
      width: '90%',
      marginTop: 50,
      marginHorizontal: '5%',
    },
    angleLeft: {
        marginLeft: 10,
        marginBottom: 30,
    },
    Heading: {
      fontSize: 24,
      fontWeight: 700,
      color: '#1F2C37',
    },
    SubHeading: {
      color: '#78828A',
      fontSize: 14,
      fontWeight: '400',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    TextInstruct: {
      color: '#475467',
      fontSize: 12,
      fontWeight: '400',
      textAlign: 'start',
      width: '90%',
      alignItems: 'center',
      marginBottom: 20,
      // paddingVertical: 22,
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    eyeIconContainer: {
      right: 40,
      top: 2,
    },
  });
