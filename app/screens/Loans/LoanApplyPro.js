import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import InputField from '../../components/InputField';
import ResponseModal from '../../components/Modals/ResponseModal';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoanApplyPro() {
    const navigation = useNavigation();
    const route = useRoute();
    const { values } = route.params;

    const [loanAmount, setLoanAmount] = useState(values.loanAmount.toString());
    const [loanDuration, setLoanDuration] = useState(values.loanDuration.toString());
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [loanDetails, setLoanDetails] = useState(null); // New state to store loan details

    const handleApplyForLoan = async () => {
        setLoading(true);
        try {
            const token = await AsyncStorage.getItem('userToken');
            const response = await axios.post(
                'http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/Loan/apply-for-loan',
                {
                    employmentStatus: values.employmentStatus,
                    usersAdress: values.houseAddress,
                    workInfo: {
                        salary: values.salaryAmount,
                        salaryDay: values.salaryPayDay,
                        companysName: values.companyName,
                    },
                    guarantorInfo: {
                        guarantorName: values.firstGuarantorName,
                        guarantorRelationship: values.firstGuarantorRelationship,
                        guarantorPhoneNumber: values.firstGuarantorPhoneNumber,
                    },
                    guarantorInfo2: {
                        guarantorName: values.secondGuarantorName,
                        guarantorRelationship: values.secondGuarantorRelationship,
                        guarantorPhoneNumber: values.secondGuarantorPhoneNumber,
                    },
                    bankInfo: {
                        bankAccount: values.bankName,
                        accountNumber: values.accountNumber,
                    },
                    purpose: values.loanPurpose,
                    loanAmount: parseFloat(loanAmount),
                    repaymentDuration: parseInt(loanDuration, 10),
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log('Loan application successful:', response.data);
            setModalTitle('Success');
            setModalMessage('Loan application successful.');
            setIsSuccess(true);
            setLoanDetails(response.data); // Store loan details
            setModalVisible(true);
        } catch (error) {
            // console.error('Loan application error:', error.response ? error.response.data : error.message);
            // console.error('Loan Error Message:', error.response.data.errors[0].message);
            setModalTitle('Error');
            setModalMessage(error.response.data.errors[0].message);
            setIsSuccess(false);
            setModalVisible(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.angleLeft}
                onPress={() => navigation.navigate('LoanApplication')}
            >
                <FontAwesome name="angle-left" size={22} color="#808080" />
            </TouchableOpacity>
            <Text style={styles.welcomeText}>Apply for Loan</Text>
            <Text style={styles.subText}>Kindly provide the required information to continue</Text>
            <InputField
                label={'Amount'}
                placeholder={'Enter amount'}
                value={loanAmount}
                onChangeText={setLoanAmount}
                width="100%"
            />
            <View style={styles.bankDetails}>
                <Text style={styles.bankText}>Bank account</Text>
                <View style={styles.bankObjects}>
                    <View style={styles.interestIcon}>
                        <FontAwesome name="bank" size={20} color="#7538EC" />
                    </View>
                    <View>
                        <Text style={styles.bankText}>{values.bankName}</Text>
                        <Text style={styles.bankAmount}>{values.accountNumber}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.submit}>
                <TouchableOpacity
                    onPress={handleApplyForLoan}
                    style={[styles.button, { width: '90%', margin: 20 }]}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={styles.text}>Apply for Loan</Text>
                    )}
                </TouchableOpacity>
            </View>
            <ResponseModal
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                title={modalTitle}
                message={modalMessage}
                isSuccess={isSuccess}
                onDismiss={() => {
                    setModalVisible(false);
                    if (isSuccess) {
                        navigation.navigate('LoanDetailScreen', { loanDetails }); // Pass loan details
                    } else {
                        navigation.navigate('LoanApplication');
                    }
                }}
                buttonTitle={isSuccess ? 'Continue' : 'Try Again'}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    angleLeft: {
        marginLeft: 20,
        marginTop: 20,
    },
    welcomeText: {
        fontSize: 24,
        color: '#111827',
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 20,
    },
    subText: {
        fontSize: 15,
        color: '#96959A',
        marginLeft: 20,
        marginBottom: 20,
    },
    submit: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    bankDetails: {
        marginLeft: 20,
        backgroundColor: '#F7F7F7',
        width: '90%',
        borderRadius: 8,
        padding: 15,
        justifyContent: 'space-between',
    },
    bankObjects: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        width: '100%',
    },
    bankText: {
        fontSize: 13,
    },
    bankAmount: {
        fontWeight: '500',
        paddingTop: 5,
    },
    interestIcon: {
        backgroundColor: '#eee8f4',
        borderRadius: 50,
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    button: {
        backgroundColor: '#7538EC',
        borderRadius: 8,
        padding: 17,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 18,
    },
});