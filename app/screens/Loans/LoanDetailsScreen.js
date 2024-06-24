import { StyleSheet, View, TouchableOpacity, ScrollView, ActivityIndicator, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import StyledButton from '../../components/StyledButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';


export default function LoanDetailScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
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
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    const totalRepaymentAmount = data?.data?.totalRepaymentAmount;
    console.log(totalRepaymentAmount)

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    return moment(dateString, 'DD MMMM, hh:mm A').format('DD MMMM YYYY');
  }

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
    <SafeAreaView style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.topcontainer}>
            <TouchableOpacity
                style={styles.anleleft}
                onPress={() => navigation.navigate('Welcome')}>
                <FontAwesome name="angle-left" size={22} color="#808080" />
            </TouchableOpacity>
                <Text style={styles.Heading}>Loans</Text>
        </View>
        <View style={styles.PlanBox}>
          <Text style={styles.PlanName}>Recieve Amount</Text>
              <Text style={styles.PlanAmount}>{formatAmount(data.data.loanAmount)}</Text>
              
        </View>
        <View style={[
              { marginBottom: 15 },
            ]}>
        <View style={styles.HistoryBox}>
          <Text
            style={[
              styles.InterestAmount,
              { fontWeight: '600', fontSize: 14 },
            ]}>
            Loan History
          </Text>
          <Text style={[styles.InterestTitle, { fontSize: 16 }]}>{formatAmount(data.data.loanAmount + data.data.administrativeFee + data.data.interestRate )}</Text>
        </View>
        <View>
        <View style={styles.HistoryDetails}>
          <Text
            style={[
              styles.InterestAmount,
              { fontWeight: '400', fontSize: 14 },
            ]}>
            Loan amount
          </Text>
          <Text style={[styles.InterestText, { fontSize: 14 }]}>{formatAmount(data.data.loanAmount)}</Text>
        </View>
        <View style={styles.HistoryDetails}>
          <Text
            style={[
              styles.InterestAmount,
              { fontWeight: '400', fontSize: 14 },
            ]}>
            Service fee
          </Text>
          <Text style={[styles.InterestText, { fontSize: 14 }]}>{formatAmount(data.data.administrativeFee + data.data.interestRate)}</Text>
        </View>
        <View style={styles.HistoryDetails}>
          <Text
            style={[
              styles.InterestAmount,
              { fontWeight: '400', fontSize: 14 },
            ]}>
            Coupon
          </Text>
          <Text style={[styles.CouponAmount, { fontSize: 16 }]}>N0</Text>
        </View>
        </View>
        </View>
        <View style={styles.HistoryBox}>
          <Text
            style={[
              styles.InterestAmount,
              { fontWeight: '600', fontSize: 14 },
            ]}>
            Repayment Plan
          </Text>
          <Text style={[styles.InterestTitle, { fontSize: 16 }]}>1 installment</Text>
        </View>
        <View style={[
              { marginBottom: 50 },
            ]}>
        <View style={styles.HistoryDetails}>
          <Text
            style={[
              styles.InterestAmount,
              { fontWeight: '400', fontSize: 14 },
            ]}>
            1/1 Due date
          </Text>
          <Text style={[styles.InterestText, { fontSize: 14 }]}>{formatDate(data.data.dueDate)}</Text>
        </View>
        <View style={styles.HistoryDetails}>
          <Text
            style={[
              styles.InterestAmount,
              { fontWeight: '400', fontSize: 14 },
            ]}>
                Due amount
          </Text>
          <Text style={[styles.InterestText, { fontSize: 14 }]}>{formatAmount(data.data.totalRepaymentAmount)}</Text>
        </View>
        </View>

            <View style={styles.Submit}>
                <StyledButton
                    title="Back to Loan Dashboard"
                    onPress={() => navigation.navigate('LoanDashboard')}
                />
            </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  topcontainer:{
    flexDirection: 'row',
    // justifyContent: 'space-between',
},
  anleleft: {
    marginLeft: 20,
    marginTop: 20,
},
  Heading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    paddingTop: 20,
    paddingLeft: '35%',
    paddingBottom: 5,
    alignSelf: 'center',
  },
  PlanBox: {
    backgroundColor: '#27AE60',
    paddingVertical: 50,
    width: '100%',
    marginTop: 10,
    position: 'relative',
    marginBottom: 10,
  },
  PlanName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
  PlanAmount: {
    color: '#fff',
    fontSize: 36,
    marginTop: 10,
    fontWeight: '700',
    textAlign: 'center',
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
    width: '90%',
    marginLeft: '5%',
    marginTop: 20,
  },
  HistoryDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    marginLeft: '7.5%',
    marginTop: 20,
  },
  InterestTitle: {
    color: '#541592',
    fontWeight: '700',
  },
  InterestText: {
    color: '#111827',
    fontWeight: '400',
  },
  CouponAmount: {
    color: '#111827',
    fontWeight: '600',
  },
  Submit: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
},
});
