import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import StyledButton from '../../components/StyledButton';

const ReviewWithdrawal = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.icon}
                onPress={() => navigation.navigate('WithdrawalInput')}>
                <AntDesign name="left" size={16} color="black" />
            </TouchableOpacity>
            <Text style={styles.heading}>Review Transaction</Text>
            <View style={styles.summaryContainer}>
                <View style={styles.detailsContainer}>
                    <Text style={styles.subject}>ACCOUNT NAME</Text>
                    <Text style={styles.value}>Timilehin George</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.subject}>BANK NAME</Text>
                    <Text style={styles.value}>Access Bank</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.subject}>ACCOUNT NUMBER</Text>
                    <Text style={styles.value}>00012276427</Text>
                </View>
            </View>
            <View style={styles.summaryContainer}>
                <View style={styles.detailsContainer}>
                    <Text style={styles.subject}>ACCOUNT SENT</Text>
                    <Text style={styles.value}>$570.00</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.subject}>CHARGE</Text>
                    <Text style={styles.value}>$10</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.subject}>TOTAL AMOUNT</Text>
                    <Text style={styles.value}>$490.00</Text>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Narration</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Amount"
                    // onChangeText={text => setInputAmount(text)}
                    placeholderTextColor="#d2d2d4"
                // value={inputAmount}
                />
            </View>
            <View style={styles.addButtonContainer}>
                        <StyledButton
                            title={'Send Money'}
                            onPress={() => navigation.navigate('WithdrawalReceipt')}
                            width='100%'
                        />
                    </View>
        </SafeAreaView>
    )
}

export default ReviewWithdrawal

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
    summaryContainer: {
        marginVertical: 20,
        paddingBottom: 20,
        borderBottomColor: '#BBBBBD',
        borderBottomWidth: 1,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    subject: {
        color: '#a5a5a5',
        fontSize: 12,
    },
    value: {
        color: '#000',
        fontSize: 14,
    },
    inputContainer: {
        marginVertical: 20

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
    addButtonContainer: {
        justifyContent: 'flex-end',
        paddingBottom: 30,
        flex: 1,
    }
})