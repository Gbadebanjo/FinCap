import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Earnings = props => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [earnings, setEarnings] = useState([]);

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
        setEarnings(prevEarnings => [
          ...prevEarnings,
          ...response.data.data.investmentPlansWithEarnings,
        ]);
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
        <View style={styles.arrowEarning}>
          <TouchableOpacity
            style={styles.anleleft}
            onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={16} color="black" />
          </TouchableOpacity>
          <Text style={styles.pageHeader}>Earnings</Text>
        </View>

        <View style={styles.plansBody}>
          {earnings.map((earning, index) => (
            <View key={index} style={styles.nameAndEarning}>
              <Text style={styles.EarningDate}>
                {index === 0 ? `Start date - ${earning.date}` : earning.date}
              </Text>
              <Text style={styles.Earning}>
                {formatAmount(earning.dailyEarnings)}
              </Text>
            </View>
          ))}
        </View>
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
    height: '100%',
    width: '90%',
    marginTop: 40,
    marginHorizontal: '5%',
  },
  arrowEarning: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  anleleft: {
    marginTop: 0,
    padding: 5,
  },
  pageHeader: {
    paddingVertical: 5,
    paddingLeft: '32%',
    marginTop: 0,
    fontSize: 16,
    fontWeight: '600',
    width: '90%',
  },
  plansBody: {
    marginTop: 20,
    padding: '5%',
  },
  nameAndEarning: {
    marginBottom: 15,
  },
  EarningDate: {
    fontSize: 14,
    fontWeight: '400px',
    color: '#3F4654',
  },
  Earning: {
    marginLeft: 12,
    marginTop: 4,
    fontSize: 16,
    color: '#111827',
    fontWeight: '600px',
  },
});

export default Earnings;
