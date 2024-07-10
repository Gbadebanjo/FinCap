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
import StyledButton from '../../components/StyledButton';
import InputField from '../../components/InputField';
import ErrorAlert from '../../components/ErrorAlert';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label('First Name'),
  lastName: Yup.string().required().label('Last Name'),
  phoneNumber: Yup.string().required().label('Phone Number'),
  email: Yup.string().required().email().label('Email'),
  dob: Yup.string().required().label('Date of Birth'),
  address: Yup.string().required().label('Address'),
});

export default function Profile() {
  const [imageUri, setImageUri] = useState(null);
  const [signupError, setSignupError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <TouchableOpacity
            style={styles.angleLeft}
            onPress={() => navigation.navigate('MoreScreen')}
          >
            <FontAwesome name="angle-left" size={22} color="#808080" />
          </TouchableOpacity>
          <Text style={styles.welcomeText}>Profile</Text>
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
            dob: '',
            address: '',
          }}
          validationSchema={validationSchema}
          onSubmit={() => alert('Clicked')}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <View style={styles.form}>
              <View style={styles.names}>
                <InputField
                  label="First Name"
                  placeholder="First Name"
                  value={values.firstName}
                  onChangeText={handleChange('firstName')}
                  width="100%"
                  marginLeft=""
                  error={errors.firstName}
                  flex={1}
                />
                <InputField
                  label="Last Name"
                  placeholder="Last Name"
                  value={values.lastName}
                  onChangeText={handleChange('lastName')}
                  width="100%"
                  marginLeft=""
                  flex={1}
                  error={errors.lastName}
                />
              </View>
              <InputField
                label="Phone Number"
                style={styles.input}
                placeholder="+23465434567"
                value={values.phoneNumber}
                onChangeText={handleChange('phoneNumber')}
                width="100%"
                // marginLeft="22px"
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
                // marginLeft="22px"
                error={errors.email}
              />
              <ErrorAlert error={errors.email} />

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
              <ErrorAlert error={errors.dob} />

              <InputField
                label="Address"
                style={styles.input}
                placeholder="Dede Kemi Street Ikeja Lagos"
                onChangeText={handleChange('address')}
                value={values.address}
                width="100%"
                marginLeft="22px"
                error={errors.address}
              />
              <ErrorAlert error={errors.address} />

              <StyledButton
                title={
                  loading ? (
                    <ActivityIndicator color="#fff" />
                  ) : (
                    'Save Changes'
                  )
                }
                onPress={()=> navigation.navigate('SetNewPassword')}
                width='100%'
                margin= '0px'
              />
            </View>
          )}
        </Formik>
      </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  content:{
    flex: 1,
    width: '100%',
    marginTop: 40,
    // marginLeft: '5%',
    paddingHorizontal: 20,
    // alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  angleLeft: {
    // marginLeft: 30,
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: '700',
    width: '80%',
    marginLeft: '8%',
    color: '#101828',
    textAlign: 'center',
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: '#F2F4F7',
    alignSelf: 'center',
    marginBottom: 30,
  },
  placeholder: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F4F7',
  },
  placeholderText: {
    color: '#0E0F11',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  form:{
    width: '100%',
  },
  names: {
    flexDirection: 'row',
    gap: 20,
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 50,
    paddingLeft: 10,
    color: '#d2d2d4',
  },
  errorText: {
    color: 'red',
    marginLeft: 22,
  },
});
