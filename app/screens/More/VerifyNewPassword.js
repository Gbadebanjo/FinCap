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
          <TouchableOpacity
            style={styles.angleLeft}
            onPress={() => navigation.navigate('MoreScreen')}
          >
            <FontAwesome name="angle-left" size={22} color="#808080" />
          </TouchableOpacity>

        <Text style={styles.Heading}>Verify that it's you</Text>
        <Text style={styles.SubHeading}>Enter your password to reset your pin </Text>

        <Formik
          initialValues={{ code: '' }}
          onSubmit={()=> alert('Password changed successfully')}
          validationSchema={validationSchema}>
          {({ handleChange, handleSubmit, values, errors }) => (
            <>
              <View style={styles.passwordContainer}>
                <InputField
                  label="Enter Your Password"
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

              <TouchableOpacity>
                <Text
                  style={styles.forgotText}
                  onPress={() => navigation.navigate('ForgotPassword')}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>

              <StyledButton
                title={loading ? <ActivityIndicator color="#fff" /> : 'Verify'}
                onPress={()=> navigation.navigate('SetNewPassword')}
                width='100%'
                marginTop={10}
              />
            </>
          )}
        </Formik>
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
      fontWeight: 'bold',
      color: '#1F2C37',
    },
    SubHeading: {
      color: '#78828A',
      fontSize: 14,
      fontWeight: 'normal',
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
    forgotText: {
      color: '#7538EC',
      fontSize: 13,
      marginBottom: 0,
      textAlign: 'right',
      textDecorationLine: 'underline'
    },
  });
