import React from 'react';
import {
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

function VerifyEmail(props) {
    const [code, setCode] = useState('');
    const navigation = useNavigation();
    
    return (
        <SafeAreaView style={styles.Container}>
            <TouchableOpacity style={styles.Icon} onPress={() => navigation.navigate('Login')}>
                <AntDesign name="left" size={16} color="black" />
            </TouchableOpacity>
            <Text style={styles.Heading}>Verify email address</Text>
            <Text style={styles.SubHeading}>Please enter the code we've sent to{email}</Text>
            <InputField
                label="Verification Code"
                placeholder="000-000"
                onChangeText={text => setCode(text)}
                value={code}
                keyboardType="numeric"
            />
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

export default VerifyEmail;