import {
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import * as Yup from 'yup';
import { Formik } from 'formik';

import InputField from '../components/InputField';
import StyledButton from '../components/StyledButton';
import ResponseModal from '../components/ResponseModal';
import ErrorAlert from '../components/ErrorAlert';
import axios from 'axios';
import { ActivityIndicator } from 'react-native';

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label('Email'),
});

export default function ForgotPasswordScreen(props) {
    const [isModalVisible, setModalVisible] = useState(false)
    const navigation = useNavigation();
    const [isSuccess, setIsSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            const response = await axios.post(
                `http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/auth/ForgotPassword`,
                values)
            if (response.status === 200) {
                setIsSuccess(true);
                navigation.navigate('VerifyEmail');
            }
        } catch (error) {
            setError(error);
            setIsSuccess(false);
            setModalVisible(true);
        }
        setLoading(false);
    }

    return (
        <SafeAreaView style={styles.Container}>
            <>
                <TouchableOpacity style={styles.Icon} onPress={() => navigation.navigate('Login')}>
                    <AntDesign name="left" size={16} color="black" />
                </TouchableOpacity>
                <Text style={styles.Heading}>Forgot Password</Text>
                <Text style={styles.SubHeading}>Enter your email address, a code will be sent to you to reset password.</Text>
                <ErrorAlert errors={error} showIcon justifyContent="left" />
                <Formik
                    initialValues={{ email: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ handleSubmit, handleChange, values, errors }) => (
                        <>
                            <InputField
                                label="Email address"
                                placeholder="Enter your email address"
                                onChangeText={handleChange('email')}
                                value={values.email}
                                error={errors.email}
                                width="100%"
                                marginLeft="22px"
                            />
                            <ErrorAlert error={errors.email} />

                            <StyledButton title={
                                loading ? (
                                    <ActivityIndicator color="#fff" />
                                ) : (
                                    'Submit'
                                )
                            } onPress={handleSubmit} />
                        </>
                    )}
                </Formik>
            </>
            <ResponseModal
                visible={isModalVisible}
                title={isSuccess ? 'Success' : 'Error'}
                message={error || 'Signup successful!'}
                isSuccess={isSuccess}
                onDismiss={() => {
                    setModalVisible(false);
                    if (isSuccess) {
                        // Navigate to next screen if signup was successful
                        navigation.navigate('Dashboard');
                    }
                }}
                buttonTitle="OK"
            />

        </SafeAreaView>
    )
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
        paddingVertical: 20,
    },
})
