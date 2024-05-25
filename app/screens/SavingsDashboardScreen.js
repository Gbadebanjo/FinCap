import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function SavingsDashboardScreen() {
    const navigation = useNavigation();
    const [isAmountVisible, setIsAmountVisible] = useState(true);

    const toggleAmountVisibility = () => {
        setIsAmountVisible(!isAmountVisible);
    };

    return (
        <SafeAreaView style={styles.Container}>
            <Text style={styles.Heading}>Savings Plan</Text>
            <View style={styles.PlanBox}>
                <Text style={styles.PlanName}>Flex Save</Text>
                {isAmountVisible ? <Text style={styles.PlanAmount}>$10,000.00</Text> : <Text style={styles.PlanAmount}>****</Text>}
                <TouchableOpacity onPress={toggleAmountVisibility} style={styles.EyeIcon}>
                    <Icon name={isAmountVisible ? 'eye' : 'eye-off'} size={20} color="#fff" />
                </TouchableOpacity>
            </View>
            <View style={styles.ButtonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('SavingsScreen')} style={styles.Button}>
                    <Text style={styles.ButtonText}>Create Saving Plan</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SavingsScreen')} style={[styles.Button, { backgroundColor: '#fff', borderColor: '#7538EC', borderWidth: 1 }]}>
                    <Text style={[styles.ButtonText, { color: "#7538EC" }]}>Withdraw</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.InterestHead}>Interest overview</Text>
            <View style={styles.InterestBox}>
                <View style={styles.Each}>
                    <Text style={styles.InterestTitle}>Amount</Text>
                    <Text style={styles.InterestAmount}>$10,000.00</Text>
                </View>
                <View style={styles.Each}>
                    <Text style={styles.InterestTitle}>Saving Schedule</Text>
                    <Text style={styles.InterestAmount}>Daily</Text>
                </View>
            </View>
            <View style={styles.HistoryBox}>
                <Text style={[styles.InterestAmount, { fontWeight: '500', fontSize: 14, }]}>History</Text>
                <Text style={[styles.InterestTitle, { fontSize: 12 }]}>View all</Text>
            </View>
            <View style={styles.TransactionHeading}>
                <View style={styles.Each}>
                    <Text style={styles.InterestTitle}>Deposit</Text>
                    <Text style={styles.InterestAmount}>$10,000.00</Text>
                </View>
                <View style={styles.Each}>
                    <Text style={styles.InterestTitle}>Date</Text>
                    <Text style={styles.InterestAmount}>12/10/2021</Text>
                </View>
            </View>
            <View style={styles.TransactionHeading}>
                <View style={styles.Each}>
                    <Text style={styles.InterestTitle}>Deposit</Text>
                    <Text style={styles.InterestAmount}>$10,000.00</Text>
                </View>
                <View style={styles.Each}>
                    <Text style={styles.InterestTitle}>Date</Text>
                    <Text style={styles.InterestAmount}>12/10/2021</Text>
                </View>
            </View>
            <View style={styles.TransactionHeading}>
                <View style={styles.Each}>
                    <Text style={styles.InterestTitle}>Deposit</Text>
                    <Text style={styles.InterestAmount}>$10,000.00</Text>
                </View>
                <View style={styles.Each}>
                    <Text style={styles.InterestTitle}>Date</Text>
                    <Text style={styles.InterestAmount}>12/10/2021</Text>
                </View>
            </View>
            <View style={styles.TransactionHeading}>
                <View style={styles.Each}>
                    <Text style={styles.InterestTitle}>Deposit</Text>
                    <Text style={styles.InterestAmount}>$10,000.00</Text>
                </View>
                <View style={styles.Each}>
                    <Text style={styles.InterestTitle}>Date</Text>
                    <Text style={styles.InterestAmount}>12/10/2021</Text>
                </View>
            </View>
            <View style={styles.TransactionHeading}>
                <View style={styles.Each}>
                    <Text style={styles.InterestTitle}>Deposit</Text>
                    <Text style={styles.InterestAmount}>$10,000.00</Text>
                </View>
                <View style={styles.Each}>
                    <Text style={styles.InterestTitle}>Date</Text>
                    <Text style={styles.InterestAmount}>12/10/2021</Text>
                </View>
            </View>
            <View style={styles.TransactionHeading}>
                <View style={styles.Each}>
                    <Text style={styles.InterestTitle}>Deposit</Text>
                    <Text style={styles.InterestAmount}>$10,000.00</Text>
                </View>
                <View style={styles.Each}>
                    <Text style={styles.InterestTitle}>Date</Text>
                    <Text style={styles.InterestAmount}>12/10/2021</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    Heading: {
        fontSize: 18,
        fontWeight: '700',
        color: '#111827',
        paddingTop: 40,
    },
    PlanBox: {
        backgroundColor: '#0D7FE9',
        paddingVertical: 26,
        paddingHorizontal: 30,
        width: '100%',
        height: '14%',
        borderRadius: 25,
        marginTop: 20,
        position: 'relative',
    },
    PlanName: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '400',
    },
    PlanAmount: {
        color: '#fff',
        fontSize: 24,
        marginTop: 10,
        fontWeight: '700',
    },
    EyeIcon: {
        position: 'absolute',
        right: 20,
        bottom: '80%',
    },
    ButtonContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 25,
    },
    ButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    Button: {
        backgroundColor: '#7538EC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 50,
        width: 160,
    },
    InterestHead: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000',
        paddingLeft: 5,
        alignSelf: 'flex-start',
    },
    InterestBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
        marginTop: 10,
        alignSelf: 'flex-start',
    },
    Each: {
        gap: 10,
    },
    InterestTitle: {
        color: '#000',
        fontSize: 14,
        fontWeight: '400',
    },
    InterestAmount: {
        color: '#000',
        fontSize: 16,
        fontWeight: '700',
    },
    HistoryBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 5,
        marginTop: 10,
    },
    TransactionHeading: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    TransactionBox: {
        display: 'flex',
        flexDirection: 'column',
    },
})