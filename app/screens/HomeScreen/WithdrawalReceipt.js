import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import StyledButton from '../../components/StyledButton';

const WithdrawalReceipt = () => {
  return (
    <SafeAreaView>
        <TouchableOpacity
                style={styles.icon}
                onPress={() => navigation.navigate('WithdrawalInput')}>
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
                    title='Submit'
                    // onPress={handleSubmit}
                    width="90%"
                    marginLeft="5%"
                    marginTop={20}
                />
                <StyledButton
                    title="Re-upload"
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
    headingAmount: {
        fontSize: 14,
        marginBottom: 30
    },
    headingMessage: {
        fontSize: 14,
        marginBottom: 30,
        color: 'green'
    },
    detailsContainer: {
        marginVertical: 20,
        paddingBottom: 20,
        borderBottomColor: '#BBBBBD',
        borderBottomWidth: 1,
    },
    buttons: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
})