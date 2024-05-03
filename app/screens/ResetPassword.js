import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import InputField from '../components/InputField';
import StyledButton from '../components/StyledButton';
import { FontAwesome5 } from '@expo/vector-icons';

function ResetPassword(props) {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <SafeAreaView style={styles.Container}>
            <Text style={styles.Heading}>Reset password</Text>
            <Text style={styles.SubHeading}>Please enter the code we've sent to </Text>
            <View style={styles.passwordContainer}>
                <InputField
                    label="New Password"
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    onChangeText={text => setOldPassword(text)}
                    value={oldPassword}
                    width="100%"
                    marginLeft="22px"
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
            <View style={styles.passwordContainer}>
                <InputField
                    label="Confirm Password"
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    onChangeText={text => setNewPassword(text)}
                    value={newPassword}
                    width="100%"
                    marginLeft="22px"
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
            <StyledButton title="Submit" />

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
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
    },
    eyeIconContainer: {
        position: 'absolute',
        right: 30,
        bottom: 23,
    },
})
export default ResetPassword;