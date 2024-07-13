import React from 'react'
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import StyledButton from '../../components/StyledButton';
import { useNavigation } from '@react-navigation/native';
import ResponseModal from '../../components/Modals/ResponseModal';

export default function AddBankForm() {
    const [selectedBank, setSelectedBank] = useState();
    const [accountNumber, setAccountNumber] = useState();
    const [accountName, setAccountName] = useState();
    const [loading, setLoading] = useState(false);
    const [modal, setModalVisible] = useState(false);
    const navigation = useNavigation();
    const [success, isSuccess] = useState(true);
    const [error, setError] = useState('');

    const placeholder = {
        label: 'Select Bank',
        value: null,
        color: '#9EA0A4',
    };

  return (
    <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.topcontainer}>
                    <TouchableOpacity
                        style={styles.anleleft}
                        onPress={() => navigation.navigate('HomeScreen')}>
                        <FontAwesome name="angle-left" size={22} color="#808080" />
                    </TouchableOpacity>
                    <Text style={styles.pageTitle}>Add Bank Account</Text>
                </View>
                <Text style={styles.subtext}>Add only bank account that you own</Text>
                <View style={styles.inputContainer}>
                <Text style={styles.label}>Bank name</Text>
                <RNPickerSelect
                placeholder={placeholder}
                items={[
                    { label: 'Access', value: 'Access Bank' },
                    { label: 'Zenith', value: 'Zenith Bank' },
                    { label: 'Sterling', value: 'Sterling Bank' },
                    { label: 'Opay', value: 'Opay' },
                ]}
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
                        onPress={() => setModalVisible(true)}
                        width='90%'
                        marginLeft='5%'
                    />
                </View>

            <ResponseModal
                visible={modal}
                title={success ? 'Success' : 'Error!'}
                message={error || 'Bank account added successfully'}
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
