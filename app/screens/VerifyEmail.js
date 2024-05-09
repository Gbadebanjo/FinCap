import React from 'react';
import {
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import InputField from '../components/InputField';
import StyledButton from '../components/StyledButton';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import ErrorAlert from '../components/ErrorAlert';

const validationSchema = Yup.object().shape({
    code: Yup.string().min(6).max(6).required(),
});

function VerifyEmail(props) {
  const [code, setCode] = useState('');
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

  const resendCode = () => {
    // Resend code logic here
    setCountdown(120);
    setResendDisabled(true);
  };

    return (
        <SafeAreaView style={styles.Container}>
            <TouchableOpacity style={styles.Icon} onPress={() => navigation.navigate('Login')}>
                <AntDesign name="left" size={16} color="black" />
            </TouchableOpacity>
            <Text style={styles.Heading}>Verify email address</Text>
            <Text style={styles.SubHeading}>Please enter the code we've sent to {email} </Text>
            <ErrorAlert errors={error} showIcon justifyContent="center" />
            <Formik
                initialValues={{ code: '' }}
                onSubmit={handleCodeSubmit}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, values }) => (
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
                        />
                        <StyledButton
                            title={
                                loading ? (
                                    <ActivityIndicator color="#fff" />
                                ) : (
                                    'Submit'
                                )
                            }
                            onPress={handleSubmit}
                        />
                    </>
                )}
            </Formik>


      <TouchableOpacity disabled={resendDisabled} onPress={resendCode}>
        <Text style={styles.resendText}>
          We have sent you a code.{' '}
          <Text
            style={
              resendDisabled ? styles.resendDisabled : styles.resendEnabled
            }>
            Resend after
          </Text>
          {resendDisabled && (
            <Text style={styles.resendText}>
              {'\n'} {formatTime(countdown)}
            </Text>
          )}
        </Text>
      </TouchableOpacity>
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
  Icon: {
    paddingTop: 40,
    paddingHorizontal: 20,
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
    fontSize: 16,
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
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  resendEnabled: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  resendDisabled: {
    color: 'gray',
  },
});

export default VerifyEmail;
