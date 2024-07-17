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
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// import FundingSource from '../../components/Modals/FundingSourceModal';
import ResponseModal from '../../components/Modals/ResponseModal';

const Review = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { planName, fixedAmount, duration, interestRate, calculatedReturns } =
    route.params;
  const [success, isSuccess] = useState(false);
  const [error, setError] = useState('');

  const wallet = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(50000);

  const createInvestmentPlan = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios
        .post(
          'http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/investments/create',
          {
            type: 'fixed',
            plan: planName,
            amount: parseInt(fixedAmount.replace(/,/g, '')),
            duration: parseInt(duration),
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .catch(networkError => {
          console.log('Network error:', networkError);
          setError('A network error occurred. Please try again');
          isSuccess(false);
          setModalVisible(true);
          setLoading(false);
        });

      if (response && response.data && response.data.isSuccessful) {
        isSuccess(true);
        setModalVisible(true);
      } else {
        isSuccess(false);
        setError(
          response.data.message || 'An error occurred. Please try again',
        );
        setModalVisible(true);
      }
    } catch (error) {
      let errorMessage = 'An error occurred. Please try again';
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }
      console.log(
        'Server response data:',
        error.response && error.response.data,
      );
      setError(errorMessage);
      isSuccess(false);
      setModalVisible(true);
    } finally {
      setLoading(false);
    }
  };

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
              <Text style={styles.planName}>{planName} Plan</Text>
              <Text style={styles.interestRate}>{interestRate}</Text>
            </View>
            <View style={styles.amountCont}>
              <Text style={styles.fixedAmount}>Amount</Text>
              <Text style={styles.perMonth}>{fixedAmount}/ month</Text>
            </View>
            <View style={styles.durationCont}>
              <Text style={styles.Duration}>Duration</Text>
              <Text style={styles.Date}>{duration} months</Text>
            </View>
            <View style={styles.calculatedCont}>
              <Text style={styles.fixedAmount}>Calculated returns</Text>
              <Text style={styles.perMonth}>{calculatedReturns}</Text>
            </View>
          </View>
        </View>
        <StyledButton
          title={loading ? <ActivityIndicator color="#fff" /> : 'Continue'}
          onPress={createInvestmentPlan}
          width='90%'
          marginLeft='5%'
          marginBottom={30}
        />
      </>
      <ResponseModal
        visible={modalVisible}
        title={success ? 'Success' : 'Error!'}
        message={error || 'Investment Plan created successfully!'}
        isSuccess={success}
        onDismiss={() => {
          setModalVisible(false);
          if (success) {
            navigation.navigate('InvestmentHome');
          } else {
            navigation.navigate('InvestmentPlans');
          }
        }}
        buttonTitle={success ? 'Continue' : 'Try again'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  OuterContainer: {
    backgroundColor: 'white',
    height: '100vh',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  Container: {
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
