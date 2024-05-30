import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function SavingsDashboardScreen() {
    const navigation = useNavigation();
    const [isAmountVisible, setIsAmountVisible] = useState(true);
    const [data, setData] = useState(null);

    const toggleAmountVisibility = () => {
        setIsAmountVisible(!isAmountVisible);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await AsyncStorage.getItem('userToken');
                const response = await axios.get('http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/savings/earnings', {
                    headers: {
                        'Authorization': `Bearer ${token}` 
                    }
                });
                setData(response.data);
                console.log(response.data)
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <SafeAreaView style={styles.Container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.Heading}>Savings Plan</Text>
                <View style={styles.PlanBox}>
                    <Text style={styles.PlanName}>Flex Save</Text>
                    {isAmountVisible ? <Text style={styles.PlanAmount}>₦0.00</Text> : <Text style={styles.PlanAmount}>****</Text>}
                    <TouchableOpacity onPress={toggleAmountVisibility} style={styles.EyeIcon}>
                        <Icon name={isAmountVisible ? 'eye' : 'eye-off'} size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.ButtonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Savings')} style={styles.Button}>
                        <Text style={styles.ButtonText}>Create Saving Plan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Savings')} style={[styles.Button, { backgroundColor: '#fff', borderColor: '#7538EC', borderWidth: 1 }]}>
                        <Text style={[styles.ButtonText, { color: "#7538EC" }]}>Withdraw</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.InterestHead}>Interest overview</Text>
                <View style={styles.InterestBox}>
                    <View style={styles.Each}>
                        <Text style={styles.InterestTitle}>Amount</Text>
                        <Text style={styles.InterestAmount}>₦0.00</Text>
                    </View>
                    <View style={styles.Each}>
                        <Text style={styles.InterestTitle}>Saving Schedule</Text>
                        <Text style={styles.InterestAmount}>Daily</Text>
                    </View>
                </View>
                <View style={styles.HistoryBox}>
                    <Text style={[styles.InterestAmount, { fontWeight: '600', fontSize: 14, }]}>History</Text>
                    <Text style={[styles.InterestTitle, { fontSize: 12 }]}>View all</Text>
                </View>
                <View style={styles.TransactionBox}>
                    <View style={styles.IntrestIcon}>
                        <Icon name="analytics-outline" size={20} color="#7538EC" />
                    </View>
                    <View style={styles.IntrestTextBox}>
                        <Text style={styles.InterestTextTitle}>Daily interest</Text>
                        <Text style={styles.InterestTextDate}>29th September, 04:09am</Text>
                    </View>
                    <View style={styles.TransactionAmountBox}>
                        <Text style={styles.TransactionAmount}>₦ 100</Text>
                    </View>
                </View>
            </ScrollView>
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
        paddingTop: 30,
        paddingBottom: 5,
        alignSelf: 'center',
    },
    PlanBox: {
        backgroundColor: '#0D7FE9',
        paddingVertical: 26,
        paddingHorizontal: 30,
        width: '100%',
        height: 100,
        borderRadius: 25,
        marginTop: 10,
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
        justifyContent: 'space-between',
        marginVertical: 15,
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
        height: 48,
        width: 165,
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
        backgroundColor: '#f5f5f5',
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
        fontWeight: '500',
    },
    HistoryBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginTop: 10,
    },
    TransactionBox: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    IntrestTextBox: {
        paddingLeft: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 40,
    },
    InterestTextTitle: {
        color: '#000',
        fontSize: 16,
        fontWeight: '500',
    },
    InterestTextDate: {
        color: '#000',
        fontSize: 12,
        fontWeight: '400',
    },
    TransactionAmountBox: {
        position: 'absolute',
        right: 4,
        top: 15,
    },
    TransactionAmount: {
        color: '#000',
        fontSize: 16,
        fontWeight: '700',
    },
    IntrestIcon : {
        backgroundColor: '#f7f7f7', 
        borderRadius: 30, 
        width: 40, 
        height: 40, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
})