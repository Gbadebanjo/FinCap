import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import StyledButton from '../../components/StyledButton';

const WithdrawalReceipt = ({ navigation }) => {
    return (
        <SafeAreaView>
            <TouchableOpacity
                style={styles.icon}
                onPress={() => navigation.navigate('Home')}>
                <AntDesign name="left" size={16} color="black" />
            </TouchableOpacity>
            <Text style={styles.heading}>Withdrawal</Text>
            <Text style={styles.headingAmount}>$490.00</Text>
            <Text style={styles.headingMessage}>Transaction successful</Text>
            <View style={styles.detailsContainer}>
                <View style={styles.details}>
                    <Text style={styles.detailsText}>Transaction Amount</Text>
                    <Text style={styles.detailsValue}>$490.00</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailsText}>Transaction Date</Text>
                    <Text style={styles.detailsValue}>2024-07-02 12:15:14</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailsText}>Sender</Text>
                    <Text style={styles.detailsValue}>Timilehin George</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailsText}>Recipient</Text>
                    <Text style={styles.detailsValue}>Timilehin George</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailsText}>Fee</Text>
                    <Text style={styles.detailsValue}>$10</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailsText}>Narration</Text>
                    <Text style={styles.detailsValue}>Nil</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailsText}>Reference Code</Text>
                    <Text style={styles.detailsValue}>ygfhokjjhvghok;kljhjh</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailsText}>Transaction ID</Text>
                    <Text style={styles.detailsValue}>000000HGV89JHJ</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailsText}>Status</Text>
                    <Text style={styles.detailsValue}>Successful</Text>
                </View>
            </View>
            <View style={styles.buttons}>
                <StyledButton
                    title='Share Receipt'
                    // onPress={handleSubmit}
                    width="90%"
                    marginLeft="5%"
                    marginTop={20}
                />
                <StyledButton
                    title="Done"
                    width="90%"
                    marginLeft="5%"
                    marginTop={20}
                    BackColor="#F5F5F5"
                    borderWidth={1}
                    borderColor="#7538EC"
                    TextColor="#7538EC"
                />
            </View>
        </SafeAreaView>
    )
}

export default WithdrawalReceipt

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    icon: {
        // paddingTop: 20,
        margin: 20,
        width: 30,
    },
    heading: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 10
    },
    headingAmount: {
        fontSize: 40,
        marginBottom: 10,
        fontWeight: '700',
        textAlign: 'center'
    },
    headingMessage: {
        fontSize: 16,
        marginBottom: 30,
        backgroundColor: '#27AE60',
        color: 'white',
        padding: 20,
        textAlign: 'center',
        width: 250,
        alignSelf: 'center',
        borderRadius: 30,
        overflow: 'hidden',
    },
    detailsContainer: {
        marginHorizontal: 20,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    detailsText: {
        fontSize: 16,
        color: '#A5A5A5',
    },
    detailsValue: {
        fontSize: 14,
        color: '#000',
        fontWeight: '500',
    },
    buttons: {
        justifyContent: 'flex-end',
    },
})