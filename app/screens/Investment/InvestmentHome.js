import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { FontAwesome, Ionicons, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const InvestmentHome = props => {
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        const response = await axios.get(
          'http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/investments/earnings',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setData(response.data);
        setLoading(false);
        console.log(response.data.data.investmentPlansWithEarnings);
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

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#7538EC" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.OuterContainer}>
      <View style={styles.Container}>
        <Text style={styles.pageHeader}>Investment</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.investmentSummary}>
            <View style={styles.totalInvestment}>
              <Text style={styles.totalInvestment}>Total Investment</Text>
              <Text style={styles.totalAmount}>
                {data && data.data ? (
                  <Text style={styles.PlanAmount}>
                    {formatAmount(data.data.totalInvestment)}
                  </Text>
                ) : (
                  <Text style={styles.PlanAmount}>****</Text>
                )}
              </Text>
            </View>

            <View style={styles.EarningsCleared}>
              <View style={styles.EarningsCont}>
                <Text style={styles.Earnings}>Earnings</Text>
                <Text style={styles.EarningAmount}>
                  {data && data.data ? (
                    <Text style={styles.PlanAmount}>
                      {formatAmount(
                        data.data.totalAccruedEarningsAllInvestmentPlans,
                      )}
                    </Text>
                  ) : (
                    <Text style={styles.PlanAmount}>****</Text>
                  )}
                </Text>
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
            <TouchableOpacity
              style={styles.Action}
              onPress={() => navigation.navigate('InvestmentPlans')}>
              <Ionicons
                style={styles.Icon}
                name="create"
                size={24}
                color="#541592"
              />
              <Text style={styles.ViewEarnings}>Create Investment</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Action}
              onPress={() => navigation.navigate('InvestmentEarnings')}>
              <Ionicons
                style={styles.Icon}
                name="receipt-sharp"
                size={24}
                color="#541592"
              />
              <Text style={styles.ViewEarnings}>View Earnings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Action}
              onPress={() => navigation.navigate('InvestmentEarnings')}>
              <FontAwesome
                style={styles.Icon}
                name="send"
                size={24}
                color="#541592"
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
          {data &&
            data.data &&
            data.data.investmentPlansWithEarnings.map((plan, index) => (
              <View key={index} style={styles.EachTrans}>
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
                    <Text style={styles.DetailName}>{plan.planName}</Text>
                    <Text style={styles.DetailDate}>{plan.date}</Text>
                  </View>
                </View>
                <Text style={styles.TransAmount}>
                  + {formatAmount(plan.dailyEarnings)}
                </Text>
              </View>
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  OuterContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  Container: {
    width: '90%',
    marginTop: 30,
    marginHorizontal: '5%',
  },
  investmentSummary: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: '5%',
    backgroundColor: '#003C5C',
    paddingVertical: 20,
  },
  pageHeader: {
    fontSize: 18,
    fontWeight: '700',
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
    width: '22%',
    marginHorizontal: 5,
    height: 'auto',
    backgroundColor: '#f7f7f7',
    borderRadius: '8px',
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
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  Icon_Name: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    paddingVertical: 10,
  },
  Icon_cont: {
    backgroundColor: '#f7f7f7',
    borderRadius: '50%',
    paddingHorizontal: 12,
    paddingVertical: 9,
  },
  TransDetails: {
    width: '75%',
    marginLeft: 20,
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
