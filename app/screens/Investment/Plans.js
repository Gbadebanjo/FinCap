import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Plans = props => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.pageHeader}>Investment Plans</Text>
      <TouchableOpacity
        style={styles.plansBody}
        onPress={() => navigation.navigate('InvestmentReview')}>
        <View>
          <Text style={styles.planName}>Basic Plan</Text>
          <Text style={styles.interestRate}>10% interest p.a</Text>
        </View>
        <View style={styles.secondCont}>
          <View style={styles.amountCont}>
            <Text style={styles.fixedAmount}>fixed amount</Text>
            <Text style={styles.fixedAmount}>Calculated returns</Text>
          </View>
          <View style={styles.amountCont}>
            <Text style={styles.perMonth}>25,000/ month</Text>
            <Text style={styles.perMonth}>330,000</Text>
          </View>
        </View>
        <View style={styles.durationCont}>
          <Text style={styles.Duration}>Duration</Text>
          <Text style={styles.Date}>12 months</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.plansBody}
        onPress={() => navigation.navigate('InvestmentReview')}>
        <View>
          <Text style={styles.planName}>Standard Plan</Text>
          <Text style={styles.interestRate}>10% interest p.a</Text>
        </View>
        <View style={styles.secondCont}>
          <View style={styles.amountCont}>
            <Text style={styles.fixedAmount}>fixed amount</Text>
            <Text style={styles.fixedAmount}>Calculated returns</Text>
          </View>
          <View style={styles.amountCont}>
            <Text style={styles.perMonth}>25,000/ month</Text>
            <Text style={styles.perMonth}>330,000</Text>
          </View>
        </View>
        <View style={styles.durationCont}>
          <Text style={styles.Duration}>Duration</Text>
          <Text style={styles.Date}>12 months</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.plansBody}
        onPress={() => navigation.navigate('InvestmentReview')}>
        <View>
          <Text style={styles.planName}>Premium</Text>
          <Text style={styles.interestRate}>10% interest p.a</Text>
        </View>
        <View style={styles.secondCont}>
          <View style={styles.amountCont}>
            <Text style={styles.fixedAmount}>fixed amount</Text>
            <Text style={styles.fixedAmount}>Calculated returns</Text>
          </View>
          <View style={styles.amountCont}>
            <Text style={styles.perMonth}>25,000/ month</Text>
            <Text style={styles.perMonth}>330,000</Text>
          </View>
        </View>
        <View style={styles.durationCont}>
          <Text style={styles.Duration}>Duration</Text>
          <Text style={styles.Date}>12 months</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    width: '80%',
    marginTop: 50,
    marginHorizontal: '10%',
  },
  plansBody: {
    marginTop: 40,
  },
  pageHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  planName: {
    fontSize: 18,
    fontWeight: '600px',
    alignItems: 'center',
  },
  interestRate: {
    fontSize: 14,
    color: '#3F4654',
    fontWeight: '400px',
    alignItems: 'center',
  },
  secondCont: {
    marginTop: 15,
  },
  amountCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fixedAmount: {
    flexDirection: 'row',
    color: '#96959A',
    fontSize: 14,
  },
  perMonth: {
    fontWeight: '500px',
    color: '#111827',
    fontSize: 16,
  },
  durationCont: {
    marginTop: 15,
  },
  Duration: {
    fontWeight: '400px',
    color: '#96959A',
    fontSize: 14,
  },
  Date: {
    fontWeight: '500px',
    color: '#111827',
    fontSize: 16,
  },
});

export default Plans;
