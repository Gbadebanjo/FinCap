import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Linking, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import StyledButton from '../../components/StyledButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddMoney = ({ navigation }) => {
    const [inputAmount, setInputAmount] = useState('');
    const [loading, setLoading] = useState(false);

    const HandlePayment = async () => {
        if (!inputAmount) {
            Alert.alert('Error', 'Please enter an amount.');
            return;
        }

        setLoading(true);
        try {
            const token = await AsyncStorage.getItem('userToken'); 
            const response = await axios.post(`http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/Payment/make-payment-to-paystack?amount=${inputAmount}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.data.status) {
                // Open Paystack URL
                const { authorization_url } = response.data.data;
                Alert.alert(
                    'Payment',
                    'You will be redirected to Paystack to complete your payment.',
                    [
                        {
                            text: 'Proceed',
                            onPress: () => Linking.openURL(authorization_url),
                        },
                        {
                            text: 'Cancel',
                            style: 'cancel',
                        },
                    ]
                );
            } else {
                Alert.alert('Error', 'Failed to create authorization URL.');
            }
        } catch (error) {
            Alert.alert('Error', 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.heading}>
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => navigation.navigate('FundWallet')}>
                    <AntDesign name="left" size={16} color="#96959A" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Fund Wallet with Paystack</Text>
            </View>
            <Text style={styles.Text}>How much will you like to add?</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Amount"
                onChangeText={text => setInputAmount(text)}
                placeholderTextColor="#d2d2d4"
                value={inputAmount}
                keyboardType="numeric"
            />
            <View style={styles.button}>
                {loading ? (
                    <ActivityIndicator size="small" color="#7538EC" />
                ) : (
                    <StyledButton
                        title="Add Money"
                        onPress={HandlePayment}
                    />
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    heading: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
        gap: 15,
        marginBottom: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
    },
    input: {
        height: 48,
        width: '100%',
        borderRadius: 8,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
    },
    Text: {
        fontSize: 14,
        color: '#000',
        marginBottom: 10,
    },
    button: {
        width: '100%',
        marginTop: 20,
        
    },
});

export default AddMoney;
