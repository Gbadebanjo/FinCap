import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import StyledButton from '../components/StyledButton';

export default function SavingsInputScreen({ route }) {
    const { title, interest, amount } = route.params;
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [selectedDuration, setSelectedDuration] = useState();
    const [selectedButton, setSelectedButton] = useState(null);
    const [inputAmount, setInputAmount] = useState();

    const buttons = ['Daily', 'Weekly', 'Monthly'];

    const placeholder = {
        label: 'Select duration',
        value: null,
        color: '#9EA0A4',
    };

    return (
        <SafeAreaView style={styles.main}>
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.icon}
                onPress={() => navigation.navigate('Savings')}>
                <AntDesign name="left" size={16} color="black" />
            </TouchableOpacity>
            <Text style={styles.plantitle}>{title} plan </Text>
            <Text style={styles.planbold}>How much do you want to save?</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Amount</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Amount"
                    onChangeText={text => setInputAmount(text)} 
                    placeholderTextColor="#d2d2d4"
                    value={inputAmount}
                />
                <Text style={[styles.label, { color: '#475467' }]}>Your interest rate would be 10% per annum</Text>
                <Text style={styles.label}>Select duration</Text>

            </View>
            <RNPickerSelect
                placeholder={placeholder}
                items={[
                    { label: '12 month', value: '12' },
                    { label: '24 months', value: '24' },
                    { label: '36 months', value: '36' },
                    { label: '48 months', value: '48' },
                ]}
                onValueChange={(value) => setSelectedDuration(value)}
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
            <Text style={styles.label}>How often do you want to save?</Text>
            <View style={styles.buttonContainer}>
                {buttons.map((button, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.button,
                            selectedButton === button && styles.selectedButton
                        ]}
                        onPress={() => setSelectedButton(button)}
                    >
                        <Text style={{ color: selectedButton === button ? '#fff' : "#766B80" }}>{button}</Text>
                    </TouchableOpacity>
                ))}
            </View>            
        </View>
        <StyledButton
                title={loading ? <ActivityIndicator color="#fff" /> : 'Continue'}
                onPress={() => {
                    if (!inputAmount || !selectedDuration || !selectedButton) {
                        alert('Please fill all the fields');
                    } else {
                        navigation.navigate('SavingsReview', {
                            goal: title,
                            interest: interest,
                            amountToSave: inputAmount,
                            duration: selectedDuration,
                            frequency: selectedButton
                        });
                    }
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
        height: '100%',
    },
    container: {
        paddingLeft: 20,
        marginBottom: 'auto',
        },
    icon: {
        paddingVertical: 10,
    },
    plantitle: {
        color: '#96959A',
        fontSize: 16,
        paddingVertical: 10,
    },
    planbold: {
        color: '#111827',
        fontSize: 22,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    inputContainer: {
        width: '95%',
        alignItems: 'center',
    },
    label: {
        color: '#111827',
        width: '90%',
        fontSize: 14,
        marginVertical: 10,
        alignSelf: 'flex-start',
    },
    input: {
        height: 48,
        width: '100%',
        borderRadius: 8,
        borderColor: 'gray',
        borderWidth: 1,
        // margin: 10,
        paddingLeft: 10,
    },
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        color: 'black',
        paddingRight: 30,
        width: '95%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        width: '95%',
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        padding: 5,

    },
    button: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#f4f4f4',
    },
    selectedButton: {
        backgroundColor: '#7538EC',
    },
});