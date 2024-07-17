import React from 'react'
import { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import StyledButton from '../../components/StyledButton';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import ResponseModal from '../../components/Modals/ResponseModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddBankForm() {
    const [selectedBank, setSelectedBank] = useState();
    const [accountNumber, setAccountNumber] = useState();
    const [accountName, setAccountName] = useState();
    const [loading, setLoading] = useState(false);
    const [modal, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const navigation = useNavigation();
    const [banks, setBanks] = useState([]);
    const [success, isSuccess] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBanks = async () => {
            try {
                const response = await axios.get('https://api.paystack.co/bank');
                const bankList = response.data.data.map(bank => ({ label: bank.name, value: bank.name }));
                setBanks(bankList);
                // console.log('bankList', bankList);
            } catch (error) {
                console.error("Error fetching banks: ", error);
                setError('Failed to load banks. Please try again later.');
            }
        };

        fetchBanks();
    }, []);

    const placeholder = {
        label: 'Select Bank',
        value: null,
        color: '#9EA0A4',
    };

    const handleAddBank = async () => {
        if (!selectedBank || !accountNumber || !accountName) {
            setError('All fields are required.');
            setModalVisible(true);
            return;
        }
    
        setLoading(true);
        try {
            const token = await AsyncStorage.getItem('userToken');
            const response = await axios.post(
                'http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/settings/add-bank-account-detail', // Replace with your API endpoint
                {
                    bankName: selectedBank,
                    accountNumber: accountNumber,
                    accountName: accountName
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
    
            if (response.data && response.data.code === 200) {
                isSuccess(true);
                // setModalVisible(true);
                // setIsSuccess(true);
                setModalTitle('Success');
                setModalMessage('Bank account details added successfully');
            }else {
                isSuccess(false);
                setModalTitle('Error');
                if (response.data && response.data.errors && response.data.errors.length > 0) {
                  setModalMessage(response.data.errors[0].message || 'Failed to add Bank details');
                } else {
                  setModalMessage('Failed to add Bank details');
                }
              }
        } catch (error) {
            console.error("Error adding bank details: ", error);
            // setModalVisible(true);
            isSuccess(false);
            setModalTitle('Error');
            if (error.response && error.response.data && error.response.data.errors && error.response.data.errors.length > 0) {
              setModalMessage(error.response.data.errors[0].message || 'Failed to add Bank details. Please try again.');
            } else {
              setModalMessage('Failed to add Bank details. Please try again.');
            }
        } finally {
            setLoading(false);
            setModalVisible(true);
        }
    };

  return (
    <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.topcontainer}>
                    <TouchableOpacity
                        style={styles.anleleft}
                        onPress={() => navigation.goBack()}>
                        <FontAwesome name="angle-left" size={22} color="#808080" />
                    </TouchableOpacity>
                    <Text style={styles.pageTitle}>Add Bank Account</Text>
                </View>
                <Text style={styles.subtext}>Add only bank account that you own</Text>
                <View style={styles.inputContainer}>
                <Text style={styles.label}>Bank name</Text>
                <RNPickerSelect
                    placeholder={placeholder}
                    items={banks}
                    onValueChange={(value) => setSelectedBank(value)}
                    style={{
                        inputIOS: styles.inputIOS,
                        inputAndroid: styles.inputAndroid,
                        iconContainer: styles.iconContainer,
                        }}
                    useNativeAndroidPickerStyle={false} // This is important to hide the default Android icon
                    Icon={() => {
                    return <AntDesign name="down" size={14} color="gray" />; 
                    }}
                />
                </View>
                <View style={styles.inputContainer}>
                        <Text style={styles.label}>Account Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter account number"
                            onChangeText={text => setAccountNumber(text)} 
                            placeholderTextColor="#d2d2d4"
                            value={accountNumber}
                        />
                </View>
                <View style={styles.inputContainer}>
                        <Text style={styles.label}>Account Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter account name"
                            onChangeText={text => setAccountName(text)} 
                            placeholderTextColor="#d2d2d4"
                            value={accountName}
                        />
                </View>

            </View> 
            <View style={styles.addButtonContainer}>
                    <StyledButton
                        title={'Add Bank Detail'}
                        onPress={handleAddBank}
                        width='90%'
                        marginLeft='5%'
                        loading={loading}

                    />
                </View>

            <ResponseModal
                visible={modal}
                title={modalTitle}
                message={modalMessage}
                isSuccess={success}
                color='white'
                width='90%'
                backgroundColor='#7538EC'
                onDismiss={() => {
                setModalVisible(false);
                if (success) {
                    navigation.navigate('BankAccount');
                }
                }}
                buttonTitle={success ? 'Close' : 'Try again'}
            />
        </SafeAreaView>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  content: {
    flex: 1,
  },
  topcontainer: {
    alignContent: 'flex-start',
    // flexDirection: 'column',
    // justifyContent: 'space-between',
  },
  anleleft: {
    marginLeft: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  pageTitle: {
    paddingLeft: '5%',
    marginTop: 10,
    fontSize: 24,
    fontWeight: '600',
    width: '90%',
    color: '#1F2C37',
    marginBottom: 10,
  },
  subtext: {
    color: '#3F4654',
    width: '90%',
    marginLeft: '5%',
    fontWeight: '400',
    fontSize: 14,
    marginBottom: 10,
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 15,
    paddingHorizontal: 10,
    color: 'black',
    paddingRight: 30,
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
},
inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '100%',
    color: 'black',
    paddingRight: 30,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
},
iconContainer: {
    top: 15,
    right: 30,
},
inputContainer: {
    width: '90%',
    marginTop: 10,
    marginLeft: '5%',
},
label: {
    color: '#111827',
    width: '90%',
    fontSize: 13,
    marginVertical: 5,
    alignSelf: 'flex-start',
},
input: {
    height: 48,
    width: '100%',
    borderRadius: 8,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
},
addButtonContainer: {
    justifyContent: 'flex-end',
    paddingBottom: 5,
  },
});
