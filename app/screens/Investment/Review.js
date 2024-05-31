import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import StyledButton from '../../components/StyledButton';
import { AntDesign } from '@expo/vector-icons';
import FundingSource from '../../components/Modals/FundingSourceModal';

const Review = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { planName, interestRate, fixedAmount, calculatedReturns, duration } =
    route.params;

  const wallet = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(50000);

  function handleSubmit() {
    setLoading(true)
    setModalVisible(true);
  }
  return (
    <SafeAreaView style={styles.OuterContainer}>
      <>
        <View style={styles.Container}>
          <TouchableOpacity
            style={styles.anleleft}
            onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={16} color="black" />
          </TouchableOpacity>
          <Text style={styles.pageHeader}>Review your investment</Text>
          <View style={styles.plansBody}>
            <View style={styles.nameAndInterest}>
              <Text style={styles.planName}>{planName}</Text>
              <Text style={styles.interestRate}>{interestRate}</Text>
            </View>
            <View style={styles.amountCont}>
              <Text style={styles.fixedAmount}>Amount</Text>
              <Text style={styles.perMonth}>{fixedAmount}</Text>
            </View>
            <View style={styles.durationCont}>
              <Text style={styles.Duration}>Duration</Text>
              <Text style={styles.Date}>{duration}</Text>
            </View>
            <View style={styles.calculatedCont}>
              <Text style={styles.fixedAmount}>Calculated returns</Text>
              <Text style={styles.perMonth}>{calculatedReturns}</Text>
            </View>
          </View>
        </View>
        <StyledButton
          title={loading ? <ActivityIndicator color="#fff" /> : 'Continue'}
          onPress={handleSubmit}
        />
      </>
      <FundingSource
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
        planName={planName}
        interestRate={interestRate}
        fixedAmount={fixedAmount}
        calculatedReturns={calculatedReturns}
        duration={duration}
        wallet={wallet}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  OuterContainer: {
    backgroundColor: '#ffffff',
  },
  Container: {
    height: '77%',
    width: '90%',
    marginTop: 40,
    marginHorizontal: '5%',
  },
  anleleft: {
    marginTop: 0,
    marginBottom: 10,
  },
  plansBody: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: '5%',
    backgroundColor: '#E0E0E0',
  },
  nameAndInterest: {
    marginBottom: 20,
  },
  pageHeader: {
    fontSize: 25,
    fontWeight: '700',
  },
  planName: {
    fontSize: 18,
    fontWeight: '600px',
  },
  interestRate: {
    marginTop: 5,
    fontSize: 14,
    color: '#3F4654',
    fontWeight: '400px',
  },
  fixedAmount: {
    fontWeight: '500px',
    color: '#3F4654',
    fontSize: 14,
  },
  perMonth: {
    marginTop: 10,
    marginHorizontal: 10,
    fontWeight: '500px',
    color: '#111827',
    fontSize: 18,
  },
  durationCont: {
    marginTop: 15,
  },
  Duration: {
    fontWeight: '500px',
    color: '#3F4654',
    fontSize: 14,
  },
  Date: {
    marginTop: 10,
    fontWeight: '400px',
    color: '#111827',
    fontSize: 18,
  },
  calculatedCont: {
    marginTop: 15,
  },
});

export default Review;
