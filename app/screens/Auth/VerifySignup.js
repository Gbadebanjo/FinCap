import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import InputField from '../../components/InputField';
import StyledButton from '../../components/StyledButton';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import ErrorAlert from '../../components/ErrorAlert';
import ResponseModal from '../../components/Modals/ResponseModal';

const validationSchema = Yup.object().shape({
  code: Yup.string().min(6).max(6).required(),
});

function VerifySignup(props) {
  const email = props.route.params.email;
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, isSuccess] = useState(false);
  const [error, setError] = useState('');
  const [modal, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [countdown, setCountdown] = useState(120);
  const [resendDisabled, setResendDisabled] = useState(true);

  useEffect(() => {
    if (resendDisabled && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
    if (countdown === 0) {
      setResendDisabled(false);
    }
  }, [countdown, resendDisabled]);

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  const resendCode = async () => {
    const email = props.route.params.email;
    const response = await axios.post(
      `http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/auth/resendcode?email=${email}`,
    );
    console.log(response);
    try {
      if (response.status === 200) {
        setResendDisabled(true);
        setCountdown(120);
      }
    } catch (error) {
      setError('An error occurred while resending the code. Please try again.');
    }
  };

  const handleCodeSubmit = async values => {
    setLoading(true);
    const data = {
      email: props.route.params.email,
      verificationCode: values.code,
    };
    try {
      const response = await axios.get(
        `http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/auth/confirmemail?email=${data.email}&code=${data.verificationCode}`,
      );
      if (response.code === 200) {
        isSuccess(true);
        setModalVisible(true);
      } else {
        setError(
          'An error occurred while verifying the code. Please try again.',
        );
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        isSuccess(false);
        setModalVisible(true);
        setError(error.response.data.error);
        console.log(error.response.data.error);
      } else {
        setError(
          'An error occurred while verifying the code. Please try again.',
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.Container}>
      <TouchableOpacity
        style={styles.Icon}
        onPress={() => navigation.navigate('Login')}>
        <AntDesign name="left" size={16} color="black" />
      </TouchableOpacity>
      <Text style={styles.Heading}>Verify email address</Text>
      <Text style={styles.SubHeading}>
        Please enter the code we've sent to {email}{' '}
      </Text>
      <ErrorAlert error={error} showIcon justifyContent="center" />
      <Formik
        initialValues={{ code: '' }}
        onSubmit={handleCodeSubmit}
        validationSchema={validationSchema}>
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <InputField
              label="Verification Code"
              placeholder="000-000"
              onChangeText={handleChange('code')}
              value={values.code}
              keyboardType="numeric"
              width="100%"
              marginLeft="22px"
              textAlign="center"
              error={errors.code}
            />
            <StyledButton
              title={loading ? <ActivityIndicator color="#fff" /> : 'Submit'}
              onPress={handleSubmit}
              width='100%'
            />
          </>
        )}
      </Formik>

      <View disabled={resendDisabled} style={styles.resendView}>
        <Text style={styles.resendText}>We have sent you a code. </Text>
        <TouchableOpacity style={styles.touchable} onPress={resendCode}>
          <Text
            style={
              resendDisabled ? styles.resendDisabled : styles.resendEnabled
            }>
            Resend code
          </Text>
        </TouchableOpacity>
      </View>
      {resendDisabled && (
        <Text style={styles.resendTimer}>{formatTime(countdown)}</Text>
      )}

      <ResponseModal
        visible={setModalVisible}
        title={success ? 'Success' : 'Error!'}
        message={error || 'Your email have been verified'}
        isSuccess={success}
        onDismiss={() => {
          setModalVisible(false);
          if (success) {
            // Navigate to next screen if signup was successful
            navigation.navigate('Dashboard');
          }
        }}
        buttonTitle={success ? 'Okay, Got it' : 'Try again'}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    width: '90%',
    paddingTop: 40,
    alignItems: 'center',
  },
  Icon: {
    paddingTop: 40,
    // paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  Heading: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 30,
  },
  SubHeading: {
    color: '#3F4654',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    width: '94%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  resendText: {
    color: '#3F4654',
    fontSize: 14,
    textAlign: 'center',
    alignItems: 'center',
  },
  resendView: {
    flexDirection: 'row',
    paddingVertical: 0,
  },
  resendEnabled: {
    color: '#7538EC',
    textAlign: 'center',
  },
  resendDisabled: {
    color: 'gray',
    textAlign: 'center',
  },
  resendTimer: {
    color: 'gray',
    paddingVertical: 0,
  },
});

export default VerifySignup;
