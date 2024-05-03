import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

import InputField from '../components/InputField';
import StyledButton from '../components/StyledButton';

export default function ForgotPasswordScreen() {
    const [email, setEmail] = useState('')
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.Container}>
            <TouchableOpacity style={styles.Icon} onPress={() => navigation.navigate('Login')}>
                <AntDesign name="left" size={16} color="black" />
            </TouchableOpacity>
            <Text style={styles.Heading}>Forgot Password</Text>
            <Text style={styles.SubHeading}>Enter your email address, a code will be sent to you to reset password.</Text>
            <InputField
                label="Email address"
                placeholder="Enter your email adress"
                onChangeText={text => setEmail(text)}
                value={email}
            />
                  <StyledButton title="Submit" />

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
