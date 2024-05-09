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
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import ErrorAlert from '../components/ErrorAlert';

const validationSchema = Yup.object().shape({
    code: Yup.string().min(6).max(6).required(),
});

function VerifyEmail({ route }) {
    // const { email } = route.params;
    const [code, setCode] = useState('');
    const navigation = useNavigation();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCodeSubmit = async (values) => {
        setLoading(true);
        console.log(`values: ${values}`);
        // try {
        //     const response = await axios.post('http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/auth/VerifyResetCode', { email, values });
        //     if (response.data) {
        //         navigation.navigate('ResetPassword');
        //         setLoading(false);
        //     } else {
        //         setIsSuccess(false);
        //         setModalVisible(true);
        //         setLoading(false);
        //     }
        // } catch (error) {
        //     console.log(response.error);
        //     setError(error.response.error);
        //     setLoading(false);
        // }
    }

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
})

export default VerifyEmail;