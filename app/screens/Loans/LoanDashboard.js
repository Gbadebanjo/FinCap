import { StyleSheet, View, TouchableOpacity, ScrollView, ActivityIndicator, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { FontAwesome, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import moment from 'moment';

export default function LoanDashboard() {
  const navigation = useNavigation();
  const [isAmountVisible, setIsAmountVisible] = useState(true);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [loanData, setLoanData] = useState(null);

  const toggleAmountVisibility = () => {
    setIsAmountVisible(!isAmountVisible);
  };

  useEffect(() => {
    const fetchLoanData = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        const response = await axios.get(
          'http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/Loan/latest-loan-application',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setLoanData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchLoanData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        const response = await axios.get(
          'http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/savings/earnings',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
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

  const formatDate = (dateString) => {
    return moment(dateString, 'DD MMMM, hh:mm A').format('DD MMMM YYYY');
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#7538EC" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.Heading}>Loans</Text>
        <View style={styles.PlanBox}>
          <Text style={styles.PlanName}>Flex Save</Text>
          {isAmountVisible ? (
            data && data.data ? (
              <Text style={styles.PlanAmount}>{data && formatAmount(data.data.totalAccruedEarningsAllSavingPlans)}</Text>
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
        </View>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoanApplication')}
            style={styles.Button}>
            <Text style={styles.ButtonText}>Apply For loan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('RepayLoan')}
            style={[
              styles.Button,
              {
                backgroundColor: '#fff',
                borderColor: '#7538EC',
                borderWidth: 1,
              },
            ]}>
            <Text style={[styles.ButtonText, { color: '#7538EC' }]}>
              Repay loan
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.InterestBox}>
          <View style={styles.iconbackground} >
            <FontAwesome name="flag" size={24} color="#ba9fed" borderRadius='0' />
          </View>
          <View style={styles.IntrestTextBox}>
            <Text style={styles.InterestTitle}>Credit granted</Text>
            <Text style={styles.InterestAmount}>You have a loan credit limit of NGN 20,000.</Text>
          </View>
        </View>
        <View style={styles.HistoryBox}>
          <Text
            style={[
              styles.InterestAmount,
              { fontWeight: '600', fontSize: 14 },
            ]}>
            Loan History
          </Text>
          <Text style={[styles.InterestTitle, { fontSize: 12 }]}>View all</Text>
        </View>
        <View style={styles.EachTrans}>
                <View style={styles.Icon_Name}>
                  <View style={styles.Icon_cont}>
                    <Octicons
                      style={[
                        styles.RecentIcon,
                        { transform: [{ rotate: '90deg' }] },
                      ]}
                      name="arrow-switch"
                      size={20}
                      color="#541592"
                    />
                  </View>
                  <View style={styles.TransDetails}>
                    <Text style={styles.DetailName}>Loan</Text>
                    <Text style={styles.DetailDate}>
                      {console.log(loanData.data.loanAmount)}
                      {console.log(loanData.data.dueDate)}
                      { loanData && loanData.data && loanData.data.loanAmount >= 0
                        ? 'Loan repaid in full'
                     :  `Repayment due: ${formatDate(loanData.data.dueDate)}`
                    }</Text>                        
                  </View>
                </View>
                <Text style={styles.TransAmount}>
                  {loanData &&  loanData.data && formatAmount(loanData.data.totalRepaymentAmount)}
                </Text>
              </View>

      </ScrollView>
    </SafeAreaView>
  );
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
    backgroundColor: '#27AE60',
    paddingVertical: 26,
    paddingHorizontal: 30,
    width: '100%',
    height: 110,
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
  InterestTitle: {
    color: '#000',
    fontSize: 14,
    fontWeight: '400',
  },
  InterestBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  InterestTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  InterestAmount: {
    color: '#494E57',
    fontSize: 12,
    fontWeight: '400',
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
  IntrestTextBox: {
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 40,
  },
  iconbackground: {
    backgroundColor: '#e8e3ed',
    borderRadius: 30,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  EachTrans: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    width: '90%',
  },
  Icon_Name: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    paddingVertical: 10,
  },
  Icon_cont: {
    backgroundColor: '#f7f7f7',
    borderRadius: 30,
    paddingHorizontal: 14,
    paddingVertical: 11,
  },
  TransDetails: {
    width: '75%',
    marginLeft: 10,
  },
  DetailName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0E0F11',
    marginBottom: 8,
  },
  DetailDate: {
    fontSize: 12,
    fontWeight: '400',
    color: '#494E57',
  },
  TransAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    alignSelf: 'center',
  },
});
