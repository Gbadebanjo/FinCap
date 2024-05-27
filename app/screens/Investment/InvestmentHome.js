import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { FontAwesome, Ionicons, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const InvestmentHome = props => {
  const navigation = useNavigation();

  function handleSubmit() {
    alert('Continue button clicked');
  }
  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.pageHeader}>Investment</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.investmentSummary}>
          <View style={styles.totalInvestment}>
            <Text style={styles.totalInvestment}>Total Investment</Text>
            <Text style={styles.totalAmount}>150,000</Text>
          </View>
          <View style={styles.EarningsCleared}>
            <View style={styles.EarningsCont}>
              <Text style={styles.Earnings}>Earnings</Text>
              <Text style={styles.EarningAmount}>15,000</Text>
            </View>
            <View style={styles.ClearedCont}>
              <Text style={styles.Cleared}>Cleared Months</Text>
              <Text style={styles.Number}>6</Text>
            </View>
          </View>
        </View>

        <View style={styles.HoldCont}>
          <View style={styles.HoldIconCont}>
            <View style={styles.HoldIcon}>
              <FontAwesome name="info" size={10} color="#FC1D1D" />
            </View>
          </View>
          <TouchableOpacity
            style={styles.HoldTextCont}
            onPress={() => navigation.navigate('ChangeCard')}>
            <Text style={styles.HoldHeading}>Your Investment is on hold</Text>
            <Text style={styles.HoldText}>
              You don’t have sufficient funds on your card for running
              investments, click to change debit card
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ActionCont}>
          <TouchableOpacity style={styles.Action}>
            <Ionicons
              style={styles.Icon}
              name="receipt-sharp"
              size={24}
              color="#541592"
              onPress={() => navigation.navigate('InvestmentEarnings')}
            />
            <Text style={styles.ViewEarnings}>View Earnings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Action}>
            <FontAwesome
              style={styles.Icon}
              name="send"
              size={24}
              color="#541592"
              onPress={() => navigation.navigate('InvestmentEarnings')}
            />
            <Text style={styles.ViewEarnings}>Withdraw Earnings</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.RecentCont}>
          <View style={styles.RecentHeading}>
            <Text style={styles.RecentTrans}>Recent transactions</Text>
            <Text style={styles.RecentView}>View all</Text>
          </View>
        </View>

        <View style={styles.EachTrans}>
          <View style={styles.Icon_Name}>
            <Octicons
              style={[styles.RecentIcon, { transform: [{ rotate: '90deg' }] }]}
              name="arrow-switch"
              size={24}
              color="#541592"
              onPress={handleSubmit}
            />
            <View style={styles.TransDetails}>
              <Text style={styles.DetailName}>Loan</Text>
              <Text style={styles.DetailDate}>29 September, 04:09PM</Text>
            </View>
          </View>
          <Text style={styles.TransAmount}>-N195</Text>
        </View>

        <View style={styles.EachTrans}>
          <View style={styles.Icon_Name}>
            <Octicons
              style={[styles.RecentIcon, { transform: [{ rotate: '90deg' }] }]}
              name="arrow-switch"
              size={24}
              color="#541592"
              onPress={handleSubmit}
            />
            <View style={styles.TransDetails}>
              <Text style={styles.DetailName}>Loan</Text>
              <Text style={styles.DetailDate}>29 September, 04:09PM</Text>
            </View>
          </View>
          <Text style={styles.TransAmount}>-N195</Text>
        </View>

        <View style={styles.EachTrans}>
          <View style={styles.Icon_Name}>
            <Octicons
              style={[styles.RecentIcon, { transform: [{ rotate: '90deg' }] }]}
              name="arrow-switch"
              size={24}
              color="#541592"
              onPress={handleSubmit}
            />
            <View style={styles.TransDetails}>
              <Text style={styles.DetailName}>Loan</Text>
              <Text style={styles.DetailDate}>29 September, 04:09PM</Text>
            </View>
          </View>
          <Text style={styles.TransAmount}>-N195</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: '90%',
    marginTop: 40,
    marginHorizontal: '5%',
  },
  investmentSummary: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 6,
    padding: '5%',
    backgroundColor: '#003C5C',
    height: 130,
  },
  pageHeader: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: '#111827',
  },
  totalInvestment: {
    fontSize: 14,
    fontWeight: '400px',
    color: '#fff',
    marginBottom: 5,
  },
  totalAmount: {
    marginLeft: 17,
    fontWeight: '700px',
    fontSize: 24,
    color: '#fff',
  },
  EarningsCleared: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  EarningsCont: {
    marginTop: 10,
  },
  Earnings: {
    fontWeight: '400px',
    color: '#fff',
    fontSize: 12,
  },
  EarningAmount: {
    marginLeft: 12.5,
    marginTop: 8,
    fontWeight: '600px',
    color: '#fff',
    fontSize: 16,
  },
  ClearedCont: {
    marginTop: 10,
  },
  Cleared: {
    fontWeight: '400px',
    color: '#fff',
    fontSize: 13,
    textAlign: 'right',
  },
  Number: {
    fontWeight: '500px',
    marginTop: 8,
    color: '#fff',
    fontSize: 16,
    textAlign: 'right',
  },
  HoldCont: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 25,
    alignItems: 'center',
  },
  HoldIconCont: {
    marginHorizontal: 10,
    backgroundColor: '#FC1D1D1A',
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderRadius: 5,
  },
  HoldIcon: {
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 50,
    backgroundColor: '#fe9898',
  },
  HoldTextCont: {
    width: '85%',
  },
  HoldHeading: {
    fontSize: 14,
    fontWeight: '400',
    color: '#3F4654',
    marginBottom: 5,
  },
  HoldText: {
    fontSize: 10,
    fontWeight: '400',
    color: '#96959A',
  },
  ActionCont: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  Icon: {
    marginHorizontal: '35%',
  },
  Action: {
    paddingVertical: 10,
    width: '25%',
    marginHorizontal: 5,
    height: 'auto',
  },
  ViewEarnings: {
    color: '#3F4654',
    fontSize: 10,
    fontWeight: 400,
    textAlign: 'center',
    marginTop: 10,
  },
  RecentCont: {
    marginTop: 20,
  },
  RecentHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  RecentTrans: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  RecentView: {
    fontSize: 14,
    fontWeight: '400',
    color: '#111827',
  },
  EachTrans: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 2,
  },
  Icon_Name: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '60%',
    paddingVertical: 10,
  },
  RecentIcon: {
    marginHorizontal: 30,
    alignContent: 'center',
  },
  TransDetails: {
    width: '80%',
  },
  DetailName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0E0F11',
    marginBottom: 8,
  },
  DetailDate: {
    fontSize: 12,
    fontWeight: '300',
    color: '#494E57',
  },
  TransAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    alignSelf: 'center',
  },
});

export default InvestmentHome;
