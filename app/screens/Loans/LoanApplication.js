import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, ScrollView, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import InputField from '../../components/InputField';
import SelectInput from '../../components/SelectInput';
import StyledButton from '../../components/StyledButton';
import { useNavigation } from '@react-navigation/native';
import ErrorAlert from '../../components/ErrorAlert';

const validationSchema = Yup.object().shape({
    employmentStatus: Yup.string().required('Employment status is required'),
    houseAddress: Yup.string().required('House address is required'),
    salaryAmount: Yup.number().typeError('Salary must be a number').required('Salary amount is required'),
    salaryPayDay: Yup.string().required('Salary pay day is required'),
    companyName: Yup.string().required('Company name is required'),
    firstGuarantorName: Yup.string().required('Guarantor name is required'),
    firstGuarantorRelationship: Yup.string().required('Guarantor relationship is required'),
    firstGuarantorPhoneNumber: Yup.string().required('Guarantor phone number is required'),
    secondGuarantorName: Yup.string().required('Guarantor name is required'),
    secondGuarantorRelationship: Yup.string().required('Guarantor relationship is required'),
    secondGuarantorPhoneNumber: Yup.string().required('Guarantor phone number is required'),
    bankName: Yup.string().required('Bank name is required'),
    accountNumber: Yup.number().required('Account number is required'),
    loanPurpose: Yup.string().required('Loan purpose is required'),
    loanAmount: Yup.number().typeError('Loan amount must be a number').required('Loan amount is required'),
    loanDuration: Yup.string().required('Loan duration is required'),
});

export default function LoanApplication() {
    const navigation = useNavigation();
    const [errorInfo, setErrorInfo] = useState('');

    const handleSubmit = (values) => {
        console.log(values)
        navigation.navigate('LoanApplyPro', { values });
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity
                    style={styles.angleLeft}
                    onPress={() => navigation.navigate('LoanDashboard')}>
                    <FontAwesome name="angle-left" size={22} color="#808080" />
                </TouchableOpacity>
                <Text style={styles.welcomeText}>Apply for Loan</Text>
                <Text style={styles.subText}>Kindly provide the required information to continue</Text>
                <ErrorAlert error={errorInfo} showIcon justifyContent="center" />
                <Formik
                    initialValues={{
                        employmentStatus: '',
                        houseAddress: '',
                        salaryAmount: '',
                        salaryPayDay: '',
                        companyName: '',
                        firstGuarantorName: '',
                        firstGuarantorRelationship: '',
                        firstGuarantorPhoneNumber: '',
                        secondGuarantorName: '',
                        secondGuarantorRelationship: '',
                        secondGuarantorPhoneNumber: '',
                        bankName: '',
                        accountNumber: '',
                        loanPurpose: '',
                        loanAmount: '',
                        loanDuration: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
                        <View>
                            <Text style={styles.labelHead}>1. Work Information</Text>
                            <SelectInput
                                label={'Employment Status'}
                                placeholder={{ label: 'Select Employment Status', value: null, color: '#9EA0A4' }}
                                items={[
                                    { label: 'Employed', value: 'employed' },
                                    { label: 'Unemployed', value: 'unemployed' },
                                    { label: 'Self-employed', value: 'selfemployed' },
                                ]}
                                onValueChange={handleChange('employmentStatus')}
                                onBlur={handleBlur('employmentStatus')}
                                value={values.employmentStatus}
                                width="90%"
                                error={errors.employmentStatus}
                            />
                            <InputField
                                label="House Address"
                                placeholder="Enter address"
                                onChangeText={handleChange('houseAddress')}
                                onBlur={handleBlur('houseAddress')}
                                value={values.houseAddress}
                                width="100%"
                                error={errors.houseAddress}
                            />
                            <ErrorAlert error={errors.houseAddress} />
                            <View style={styles.viewContainer}>
                                <InputField
                                    label="Salary Amount"
                                    placeholder="Enter salary"
                                    onChangeText={handleChange('salaryAmount')}
                                    onBlur={handleBlur('salaryAmount')}
                                    value={values.salaryAmount}
                                    width="50%"
                                    error={errors.salaryAmount}
                                />
                                <InputField
                                    label="Salary Pay Day"
                                    placeholder="1st"
                                    onChangeText={handleChange('salaryPayDay')}
                                    onBlur={handleBlur('salaryPayDay')}
                                    value={values.salaryPayDay}
                                    width="50%"
                                    error={errors.salaryPayDay}
                                />
                            </View>
                            <InputField
                                label="Company Name"
                                placeholder="Enter company name"
                                onChangeText={handleChange('companyName')}
                                onBlur={handleBlur('companyName')}
                                value={values.companyName}
                                width="100%"
                                error={errors.companyName}
                            />
                            <ErrorAlert error={errors.companyName} />
                            <Text style={styles.labelHead}>2. Guarantor Information</Text>
                            <InputField
                                label="Name"
                                placeholder="First Guarantor's Name"
                                onChangeText={handleChange('firstGuarantorName')}
                                onBlur={handleBlur('firstGuarantorName')}
                                value={values.firstGuarantorName}
                                width="100%"
                                error={errors.firstGuarantorName}
                            />
                            <InputField
                                label="Relationship"
                                placeholder="Guarantor's relationship"
                                onChangeText={handleChange('firstGuarantorRelationship')}
                                onBlur={handleBlur('firstGuarantorRelationship')}
                                value={values.firstGuarantorRelationship}
                                width="100%"
                                error={errors.firstGuarantorRelationship}
                            />
                            <InputField
                                label="Phone Number"
                                placeholder="Guarantor's number"
                                onChangeText={handleChange('firstGuarantorPhoneNumber')}
                                onBlur={handleBlur('firstGuarantorPhoneNumber')}
                                value={values.firstGuarantorPhoneNumber}
                                width="100%"
                                error={errors.firstGuarantorPhoneNumber}
                            />
                            <InputField
                                label="Name"
                                placeholder="Second Guarantor's Name"
                                onChangeText={handleChange('secondGuarantorName')}
                                onBlur={handleBlur('secondGuarantorName')}
                                value={values.secondGuarantorName}
                                width="100%"
                                error={errors.secondGuarantorName}
                            />
                            <InputField
                                label="Relationship"
                                placeholder="Guarantor's relationship"
                                onChangeText={handleChange('secondGuarantorRelationship')}
                                onBlur={handleBlur('secondGuarantorRelationship')}
                                value={values.secondGuarantorRelationship}
                                width="100%"
                                error={errors.secondGuarantorRelationship}
                            />
                            <InputField
                                label="Phone Number"
                                placeholder="Guarantor's number"
                                onChangeText={handleChange('secondGuarantorPhoneNumber')}
                                onBlur={handleBlur('secondGuarantorPhoneNumber')}
                                value={values.secondGuarantorPhoneNumber}
                                width="100%"
                                error={errors.secondGuarantorPhoneNumber}
                            />
                            <Text style={styles.labelHead}>3. Bank Account</Text>
                            <InputField
                                label="Bank Name"
                                placeholder="Bank name"
                                onChangeText={handleChange('bankName')}
                                onBlur={handleBlur('bankName')}
                                value={values.bankName}
                                width="100%"
                                error={errors.bankName}
                            />
                            <InputField
                                label="Account Number"
                                placeholder="Account number"
                                onChangeText={handleChange('accountNumber')}
                                onBlur={handleBlur('accountNumber')}
                                value={values.accountNumber}
                                width="100%"
                                error={errors.accountNumber}
                            />
                            <Text style={styles.labelHead}>4. Loan History</Text>
                            <InputField
                                label="Loan Purpose"
                                placeholder="Purpose"
                                onChangeText={handleChange('loanPurpose')}
                                onBlur={handleBlur('loanPurpose')}
                                value={values.loanPurpose}
                                width="100%"
                                error={errors.loanPurpose}
                            />
                            <InputField
                                label="Loan Amount"
                                placeholder="Amount"
                                onChangeText={handleChange('loanAmount')}
                                onBlur={handleBlur('loanAmount')}
                                value={values.loanAmount}
                                width="100%"
                                error={errors.loanAmount}
                            />
                            <SelectInput
                                label={'Loan Duration'}
                                placeholder={{ label: 'Select duration', value: null, color: '#9EA0A4' }}
                                items={[
                                    { label: '30 days', value: '30' },
                                    { label: '90 days', value: '90' },
                                    { label: '120 days', value: '120' },
                                ]}
                                onValueChange={handleChange('loanDuration')}
                                onBlur={handleBlur('loanDuration')}
                                value={values.loanDuration}
                                width="90%"
                                error={errors.loanDuration}
                            />
                            <StyledButton title="Submit" onPress={handleSubmit} disabled={isSubmitting} />
                            {errors.api && <Text style={styles.error}>{errors.api}</Text>}
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fff',
    },
    angleLeft: {
        marginTop: 40,
        marginBottom: 10,
        marginLeft: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#111827',
        paddingBottom: 5,
        marginLeft: 20,
    },
    subText: {
        fontSize: 15,
        color: '#96959A',
        marginLeft: 20,
        marginBottom: 20,
    },
    viewContainer: {
        flexDirection: 'row',
        width: '95%',
        marginHorizontal: 10,
        justifyContent: 'space-between',
    },
    labelHead: {
        fontSize: 16,
        fontWeight: '500',
        color: '#111827',
        marginBottom: 5,
        marginTop: 20,
        paddingLeft: 20,
    },
    error: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
    },
});