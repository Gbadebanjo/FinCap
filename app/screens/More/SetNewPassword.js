import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
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
import AsyncStorage from '@react-native-async-storage/async-storage';

const validationSchema = Yup.object().shape({
  oldPassword: Yup.string()
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
      .label('newPassword'),
      confirmNewPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required()
      .label('Confirm Password'),
  });

export default function SetNewPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setIsSuccess] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    // const [error, setError] = useState('');
    const [initialValues, setInitialValues] = useState({
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    });

    const navigation = useNavigation();
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const handleFormSubmit = async (values) => {
      setLoading(true);
      try {
        const token = await AsyncStorage.getItem('userToken');
        console.log(values);
    
        const response = await axios.post('http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/settings/reset-password', 
          values,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data && response.data.code === 200) {
          setIsSuccess(true);
          setModalTitle('Success');
          setModalMessage('Your new PIN has been set successfully');
        }else {
          setIsSuccess(false);
          setModalTitle('Error');
          if (response.data && response.data.errors && response.data.errors.length > 0) {
            setModalMessage(response.data.errors[0].message || 'Failed to set the new PIN');
          } else {
            setModalMessage('Failed to set the new PIN');
          }
        }
      } catch (error) {
        setIsSuccess(false);
        setModalTitle('Error');
        if (error.response && error.response.data && error.response.data.errors && error.response.data.errors.length > 0) {
          setModalMessage(error.response.data.errors[0].message || 'Failed to set the new PIN. Please try again.');
        } else {
          setModalMessage('Failed to set the new PIN. Please try again.');
        }
      } finally {
        setLoading(false);
        setModalVisible(true);
      }
    };
    

  return (
    <SafeAreaView style={styles.Container}>
      <>
          <TouchableOpacity
            style={styles.angleLeft}
            onPress={() => navigation.goBack()}
          >
            <FontAwesome name="angle-left" size={22} color="#808080" />
          </TouchableOpacity>

        <Text style={styles.Heading}>Set new password</Text>
        <Text style={styles.SubHeading}>No worries, we’ll send you reset instructions. </Text>

        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          validationSchema={validationSchema}>

          {({ handleChange, handleSubmit, values, errors }) => (
            <>
              <View style={styles.passwordContainer}>
                <InputField
                  label="Enter Old Password"
                  placeholder="*****"
                  secureTextEntry={!showPassword}
                  onChangeText={handleChange('oldPassword')}
                  value={values.oldPassword}
                  width="100%"
                  paddingLeft='0'
                  error={errors.oldPassword}
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
                error={errors.oldPassword}
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
                  onChangeText={handleChange('confirmNewPassword')}
                  value={values.confirmNewPassword}
                  width="100%"
                  marginLeft=""
                  error={errors.confirmNewPassword}
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
                error={errors.confirmNewPassword}
                justifyContent="flex-start"
              />
              <StyledButton
                title={loading ? <ActivityIndicator color="#fff" /> : 'Set New Password'}
                onPress={handleSubmit}
                width='100%'
                marginTop={10}
              />
            </>
          )}
        </Formik>
      </>
      <ResponseModal
        visible={modalVisible}
        title={modalTitle}
        message={modalMessage}
        isSuccess={success}
        onDismiss={() => {
          setModalVisible(false);
            navigation.goBack();
        }}
        buttonTitle={success ? 'Continue' : 'Try again'}
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
  });
