import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';

const Plans = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.OuterContainer}>
      <View style={styles.Container}>
        <Text style={styles.pageHeader}>Investment Plans</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.plansBody1}
            onPress={() =>
              navigation.navigate('InvestmentReview', {
                planName: 'Basic Plan',
                interestRate: '10% interest p.a',
                fixedAmount: '25,000/ month',
                calculatedReturns: '330,000',
                duration: '12 months',
              })
            }>
            <View>
              <Text style={styles.planName}>Basic Plan</Text>
              <Text style={styles.interestRate}>10% interest p.a</Text>
            </View>
            <View style={styles.secondCont}>
              <View style={styles.amountCont}>
                <Text style={styles.fixedAmount}>Fixed Amount</Text>
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
            style={styles.plansBody2}
            onPress={() =>
              navigation.navigate('InvestmentReview', {
                planName: 'Standard Plan',
                interestRate: '15% interest p.a',
                fixedAmount: '50,000/ month',
                calculatedReturns: '690,000',
                duration: '12 months',
              })
            }>
            <View>
              <Text style={styles.planName}>Standard Plan</Text>
              <Text style={styles.interestRate}>15% interest p.a</Text>
            </View>
            <View style={styles.secondCont}>
              <View style={styles.amountCont}>
                <Text style={styles.fixedAmount}>Fixed Amount</Text>
                <Text style={styles.fixedAmount}>Calculated returns</Text>
              </View>
              <View style={styles.amountCont}>
                <Text style={styles.perMonth}>50,000/ month</Text>
                <Text style={styles.perMonth}>690,000</Text>
              </View>
            </View>
            <View style={styles.durationCont}>
              <Text style={styles.Duration}>Duration</Text>
              <Text style={styles.Date}>12 months</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.plansBody3}
            onPress={() =>
              navigation.navigate('InvestmentReview', {
                planName: 'Premium Plan',
                interestRate: '20% interest p.a',
                fixedAmount: '100,000/ month',
                calculatedReturns: '1,440,000',
                duration: '12 months',
              })
            }>
            <View>
              <Text style={styles.planName}>Premium</Text>
              <Text style={styles.interestRate}>20% interest p.a</Text>
            </View>
            <View style={styles.secondCont}>
              <View style={styles.amountCont}>
                <Text style={styles.fixedAmount}>Fixed Amount</Text>
                <Text style={styles.fixedAmount}>Calculated returns</Text>
              </View>
              <View style={styles.amountCont}>
                <Text style={styles.perMonth}>100,000/ month</Text>
                <Text style={styles.perMonth}>1,440,000</Text>
              </View>
            </View>
            <View style={styles.durationCont}>
              <Text style={styles.Duration}>Duration</Text>
              <Text style={styles.Date}>12 months</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  OuterContainer: {
    backgroundColor: '#ffffff',
  },
  Container: {
    height: '100%',
    width: '90%',
    marginTop: 40,
    marginHorizontal: '5%',
    backgroundColor: '#ffffff',
  },
  pageHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  plansBody1: {
    padding: '5%',
    borderRadius: 5,
    backgroundColor: '#E6EAEE',
  },
  plansBody2: {
    padding: '5%',
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: '#FDFBFF',
  },
  plansBody3: {
    padding: '5%',
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: '#fffcf1',
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
