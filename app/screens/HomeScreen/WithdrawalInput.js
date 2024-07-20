import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import StyledButton from '../../components/StyledButton';

export default function WithdrawalInput({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.icon}
                onPress={() => navigation.navigate('Home')}>
                <AntDesign name="left" size={16} color="black" />
            </TouchableOpacity>
            <Text style={styles.heading}>Withdraw to bank account</Text>
            <Text style={styles.headingText}>Enter amount to withdraw</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Amount</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Amount"
                    // onChangeText={text => setInputAmount(text)}
                    placeholderTextColor="#d2d2d4"
                    // value={inputAmount}
                />
            </View>
            <Text style={styles.labelButtom}>Bal: $5,00.00</Text>
            <View style={styles.detailsContainer}>
                <Text style={styles.detailsText}>Charge</Text>
                <Text style={styles.detailsRate}>2%</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.detailsText}>Amount</Text>
                <Text style={styles.detailsRate}>$0.00</Text>
            </View>
            <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total Amount</Text>
            <Text style={styles.totalAmount}>$0.00</Text>
            </View>
            <View style={styles.addButtonContainer}>
                <StyledButton
                    title={'Continue'}
                    onPress={() => navigation.navigate('ReviewWithdrawal')}
                    width='100%'
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    icon: {
        paddingTop: 30,
        width: 30,
        marginBottom: 20
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    headingText: {
        fontSize: 14,
        marginBottom: 30
    },
    inputContainer: {
        marginBottom: 10
    },
    label: {
        marginBottom: 5,
        fontWeight: '600',

    },
    input: {
        height: 48,
        width: '100%',
        borderRadius: 8,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
    },
    labelButtom: {
        marginBottom: 20,
        fontSize: 12
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderRadius: 4,
        backgroundColor: '#F6F6F6',
        padding: 15,
        marginVertical: 10
    },
    detailsText: {
        fontSize: 16
    },
    detailsRate: {
        fontSize: 16
    },
    totalContainer: {
        paddingTop: 20,
        paddingHorizontal: 5,
    },
    totalText: {
        fontSize: 16,
        fontWeight: '600'
    },
    totalAmount: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#BBBBBD',
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
        color: '#BBBBBD',
        fontWeight: '600',
    },
    addButtonContainer: {
        justifyContent: 'flex-end',
        paddingBottom: 30,
        flex: 1
      },
})