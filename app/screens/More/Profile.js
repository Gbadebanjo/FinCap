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
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import GoogleLogo from '../../assets/googleicon.png';
import StyledButton from '../../components/StyledButton';
import InputField from '../../components/InputField';
import ErrorAlert from '../../components/ErrorAlert';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required().label('First Name'),
    lastName: Yup.string().required().label('Last Name'),
    phoneNumber: Yup.string().required().label('Phone Number'),
    email: Yup.string().required().email().label('Email'),
    dob: Yup.string().required().label('Date of Birth'),
  });

export default function Profile() {
  const [imageUri, setImageUri] = useState(null);
    const [signupError, setSignupError] = useState('');
    const [loading, setLoading] = useState(false);
  
    const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <ScrollView>

        <View style={styles.titleContainer}>  
            <TouchableOpacity
            style={styles.anleleft}
            onPress={() => navigation.navigate('Welcome')}>
            <FontAwesome name="angle-left" size={22} color="#808080" />
            </TouchableOpacity>
            <Text style={styles.welcometext}>Profile</Text>
        </View>

        <View style={styles.imageContainer}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.image} />
          ) : (
            <View style={styles.placeholder}>
              <Text style={styles.placeholderText}>JW</Text>
            </View>
          )}
        </View>
        <ErrorAlert error={signupError} showIcon justifyContent="center" />
        <Formik
          initialValues={{
            phoneNumber: '',
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={()=>alert('Clicked')}>
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   <View style={styles.names}>
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
              <InputField
                label="Phone Number"
                style={styles.input}
                placeholder="+23465434567"
                value={values.userName}
                onChangeText={handleChange('Phone Number')}
                width="100%"
                marginLeft="22px"
                error={errors.phoneNumber}
              />
              <ErrorAlert error={errors.phoneNumber} />

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
              {/* <View style={styles.passwordContainer}> */}
                <InputField
                  label="Date of Birth"
                  style={styles.input}
                  placeholder="16th Aug 2025"
                  onChangeText={handleChange('dob')}
                  value={values.dob}
                  width="100%"
                  marginLeft="22px"
                  error={errors.dob}
                />
              {/* </View> */}
              <ErrorAlert error={errors.dob} />

              <StyledButton
                title={
                  loading ? (
                    <ActivityIndicator color="#fff" />
                  ) : (
                    'Save Changes'
                  )
                }
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100vh',
      marginTop: 40,
    },
    titleContainer: {
    flexDirection: 'row',
    },
    anleleft: {
      marginLeft: 30,
      marginBottom: 30,
    },
    welcometext: {
        fontSize: 16,
        fontWeight: 700,
        width: '80%',
        color: '#101828',
        textAlign: 'center',
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

    imageContainer: {
        width: 60,
        height: 60,
        borderRadius: 50,
        overflow: 'hidden',
        // backgroundColor: '#F2F4F7',
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center', 
      },
      placeholder: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        // backgroundColor: '#F2F4F7',
      },
      placeholderText: {
        color: '#0E0F11',
        fontSize: 16,
      },
      image: {
        width: '100%',
        height: '100%',
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
      bottom: 26,
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