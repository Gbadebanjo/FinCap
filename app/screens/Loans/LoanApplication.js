import { StyleSheet, Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Formik } from 'formik';
import InputField from '../../components/InputField';
import ErrorAlert from '../../components/ErrorAlert';
import SelectInput from '../../components/SelectInput';
import StyledButton from '../../components/StyledButton';
import { useNavigation } from '@react-navigation/native';

export default function LoanApplication() {
    const placeholder = { label: 'Select duration', value: null, color: '#9EA0A4', };
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity
                    style={styles.anleleft}
                    onPress={() => navigation.navigate('Welcome')}>
                    <FontAwesome name="angle-left" size={22} color="#808080" />
                </TouchableOpacity>
                <Text style={styles.welcometext}>Apply for Loan</Text>
                <Text style={styles.subtext}>Kindly provide the required information to continue</Text>
                <Text style={styles.labelhead}>1. Work Information</Text>
                <SelectInput
                    label={'Employment Status'}
                    placeholder={placeholder}
                    items={[
                        { label: 'Employed', value: 'employed' },
                        // Add other items here
                    ]}
                    onValueChange={(value) => setSelectedEmploymentStatus(value)}
                    width="90%" // Pass the width as a prop
                
                />
                <View style={styles.viewcontainer}>
                <SelectInput
                    label={'Salary Range'}
                    placeholder={placeholder}
                    items={[
                        { label: 'Employed', value: 'employed' },
                        // Add other items here
                    ]}
                    onValueChange={(value) => setSelectedEmploymentStatus(value)}
                    width="90%" // Pass the width as a prop
                />
                <SelectInput
                    label={'Salary day'}
                    placeholder={placeholder}
                    items={[
                        { label: 'Employed', value: 'employed' },
                        // Add other items here
                    ]}
                    onValueChange={(value) => setSelectedEmploymentStatus(value)}
                    width="90%" // Pass the width as a prop
                />
                </View>
                <InputField 
                    label="Where do you work"
                    placeholder="Enter address"
                    width="100%"
                    
                />
                <Text style={styles.labelhead}>2. Guarantor Information</Text>
                <InputField 
                    label="Full Name"
                    placeholder="Name"
                    width="100%"
                    />
                <InputField
                    label="Relationship status"
                    placeholder="Next of kin relationship"
                    width="100%"
                />
                <InputField
                    label="Phone Number"
                    placeholder="Phone number"
                    width="100%"
                />
                <Text style={styles.labelhead}>3. Bank Account</Text>
                <SelectInput
                    placeholder={placeholder}
                    items={[
                        { label: 'Employed', value: 'employed' },
                        // Add other items here
                    ]}
                    onValueChange={(value) => setSelectedEmploymentStatus(value)}
                    width="90%" // Pass the width as a prop
                />
                <InputField
                    label="Account Number"
                    placeholder="Account number"
                    width="100%"
                />
                <StyledButton
                    title="Continue"
                    onPress={() => navigation.navigate('LoanApplyPro')}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100vh',
        flex: 1,
        backgroundColor: '#fff',
    },
    anleleft: {
        marginTop: 40,
        marginBottom: 10,
        marginLeft: 20,
    },
    welcometext: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#111827',
        paddingBottom: 5,
        marginLeft: 20,
    },
    subtext: {
        fontSize: 15,
        color: '#96959A',
        marginLeft: 20,
        marginBottom: 20,
    },
    viewcontainer: {
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'space-between',

    },
    labelhead: {
        fontSize: 16,
        fontWeight: '500',
        color: '#111827',
        marginBottom: 5,
        paddingLeft: 20,

    },


})