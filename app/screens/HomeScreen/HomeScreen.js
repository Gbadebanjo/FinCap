import { Text, StyleSheet, View, Image, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { FontAwesome, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function HomeScreen(props) {
    const navigation = useNavigation();
    const [isAmountVisible, setIsAmountVisible] = useState(true);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const toggleAmountVisibility = () => {
        setIsAmountVisible(!isAmountVisible);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const token = await AsyncStorage.getItem('userToken');
                const response = await axios.get('http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/Payment/user-wallet-summary', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const formatAmount = amount => {
        return (
          '₦' +
          Number(amount).toLocaleString('en-NG', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        );
      };

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#7538EC" />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.Heading}>
                    <View style={styles.HeadingLeft}>
                        <Image
                            source={{ uri: data?.profilePictureUrl || 'https://via.placeholder.com/150' }}
                            style={styles.userImage}
                        />
                        <Text style={styles.welcome}>Welcome</Text>
                    </View>
                    <FontAwesome name="bell-o" size={24} color="#000" />
                </View>
                <View style={styles.PlanBox}>
                    <Text style={styles.PlanName}>Total balance</Text>
                    {isAmountVisible ? (
                        data ? (
                            <Text style={styles.PlanAmount}>
                                {formatAmount(data.totalBalance)}
                            </Text>
                        ) : (
                            <Text style={styles.PlanAmount}>Loading...</Text>
                        )
                    ) : (
                        <Text style={styles.PlanAmount}>****</Text>
                    )}
                    <TouchableOpacity
                        onPress={toggleAmountVisibility}
                        style={styles.EyeIcon}>
                        <Icon
                            name={isAmountVisible ? 'eye' : 'eye-off'}
                            size={20}
                            color="#fff"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.Money}
                        onPress={() => navigation.navigate('FundWallet')}
                    >
                        <Text style={styles.MoneybuttonText}>Fund Wallet</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.Todo}>Todo</Text>
                <View style={styles.Boxes} >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('KycProfile')}
                        style={styles.EachBox}>
                        <View style={styles.Icon}>
                            <FontAwesome name="user-circle" size={20} color="#fff" />
                        </View>
                        <Text>Complete account setup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.EachBox}
                        onPress={() => navigation.navigate('AddBank')}>
                        <View style={styles.Icon}>
                            <FontAwesome name="bank" size={20} color="#fff" />
                        </View>
                        <Text>Add your bank details</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.PaymentBox}>
                    <View style={[styles.Icon, { backgroundColor: "#ffe6d4" }]} >
                        <FontAwesome name="flag" size={24} color="#ffc061" />
                    </View>
                    <View style={styles.PaymentTextBox}>
                        <Text style={styles.PaymentTitle}>Upcoming payment</Text>
                        <Text style={styles.PaymentAmount}>Reach your daily goals</Text>
                    </View>
                    <TouchableOpacity
                        style={[styles.Money, { backgroundColor: "#4e2873", bottom: '70%', }]}
                        onPress={() => navigation.navigate('FundWallet')}
                    >
                        <Text style={{ color: "#fff", fontSize: 13 }}>Fund Wallet</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.HistoryBox}>
                    <Text
                        style={[
                            styles.InterestAmount,
                            { fontWeight: '600', fontSize: 14 },
                        ]}>
                        Recent transactions
                    </Text>
                    <Text style={[styles.InterestTitle, { fontSize: 12 }]}>View all</Text>
                </View>
                {data?.transactions?.map(transaction => (
                    <View key={transaction.transactionId} style={styles.TransactionBox}>
                        <View style={[styles.Icon, { backgroundColor: '#F6F6F8' }]}>
                            <Octicons
                                style={[
                                    { transform: [{ rotate: '90deg' }] },
                                ]}
                                name="arrow-switch"
                                size={20}
                                color="#3F4654"
                            />
                        </View>
                        <View style={styles.IntrestTextBox}>
                            <Text style={styles.InterestTextTitle}>
                                {transaction.description}
                            </Text>
                            <Text style={styles.InterestTextDate}>
                                {new Date(transaction.transactionDate).toLocaleDateString()}
                            </Text>
                        </View>
                        <View style={styles.TransactionAmountBox}>
                            <Text style={styles.TransactionAmount}>
                                {formatAmount(transaction.amount)}
                            </Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    Heading: {
        marginTop: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userImage: {
        width: 35,
        height: 35,
        borderRadius: 50,
        backgroundColor: '#000',
    },
    HeadingLeft: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    welcome: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111827',
    },
    PlanBox: {
        backgroundColor: '#4e2873',
        paddingVertical: 26,
        paddingHorizontal: 30,
        width: '100%',
        height: 110,
        borderRadius: 25,
        marginVertical: 20,
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
        top: '40%',
    },
    Money: {
        position: 'absolute',
        right: 30,
        bottom: '30%',
        backgroundColor: '#fff',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    MoneybuttonText: {
        color: '#4e2873',
    },
    Todo: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
        marginTop: 5,
    },
    Boxes: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    EachBox: {
        height: 100,
        width: "48%",
        backgroundColor: '#f2f7f9',
        padding: 15,
        borderRadius: 15,
        marginVertical: 10,
        gap: 5,
    },
    Icon: {
        backgroundColor: '#0370d6',
        width: 35,
        height: 35,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    PaymentBox: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: '#ffeed4',
        borderWidth: 1,
        borderColor: '#ffc061',
        borderRadius: 10,
        marginTop: 10,
        alignSelf: 'flex-start',
    },
    PaymentTextBox: {
        marginLeft: 10,
        justifyContent: 'space-between'
    },
    PaymentTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
    },
    PaymentAmount: {
        fontSize: 11,
        color: '#494E57',
    },
    HistoryBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
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
});

export default HomeScreen;
