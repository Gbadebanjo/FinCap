import { StyleSheet, View, TouchableOpacity, ScrollView, ActivityIndicator, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function LoanDetailScreen() {
  const navigation = useNavigation();
  const [isAmountVisible, setIsAmountVisible] = useState(true);
//   const [loading, setLoading] = useState(true);
  const [data, setData] = useState(20000);

  const toggleAmountVisibility = () => {
    setIsAmountVisible(!isAmountVisible);
  };

  const formatAmount = amount => {
    return (
      '₦' +
      Number(amount).toLocaleString('en-NG', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  };

  // if (loading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" color="#7538EC" />
  //     </View>
  //   );
  // }

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.Heading}>Loans</Text>
        <View style={styles.PlanBox}>
          <Text style={styles.PlanName}>Recieve Amount</Text>
          
              {/* <Text style={styles.PlanAmount}>
                {formatAmount(data.data.totalAccruedEarningsAllSavingPlans)}
              </Text> */}
       
              <Text style={styles.PlanAmount}>N28,910</Text>
        </View>
        <View style={styles.HistoryBox}>
          <Text
            style={[
              styles.InterestAmount,
              { fontWeight: '600', fontSize: 14 },
            ]}>
            Loan History
          </Text>
          <Text style={[styles.InterestTitle, { fontSize: 16 }]}>N24,500</Text>
        </View>
        <View style={styles.HistoryDetails}>
          <Text
            style={[
              styles.InterestAmount,
              { fontWeight: '400', fontSize: 14 },
            ]}>
            Loan amount
          </Text>
          <Text style={[styles.InterestText, { fontSize: 14 }]}>N24,500</Text>
        </View>
        <View style={styles.HistoryDetails}>
          <Text
            style={[
              styles.InterestAmount,
              { fontWeight: '400', fontSize: 14 },
            ]}>
            Service fee
          </Text>
          <Text style={[styles.InterestText, { fontSize: 14 }]}>N4,399</Text>
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
  }
});
