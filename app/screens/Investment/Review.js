import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import StyledButton from '../../components/StyledButton';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Review = props => {
  const navigation = useNavigation();

  function handleSubmit() {
    navigation.navigate('InvestmentHome');
  }
  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <TouchableOpacity
          style={styles.anleleft}
          onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={16} color="black" />
        </TouchableOpacity>
        <Text style={styles.pageHeader}>Review your investment</Text>
        <View style={styles.plansBody}>
          <View style={styles.nameAndInterest}>
            <Text style={styles.planName}>Basic Plan</Text>
            <Text style={styles.interestRate}>10% interest p.a</Text>
          </View>
          <View style={styles.amountCont}>
            <Text style={styles.fixedAmount}>Amount</Text>
            <Text style={styles.perMonth}>25,000/ month</Text>
          </View>
          <View style={styles.durationCont}>
            <Text style={styles.Duration}>Duration</Text>
            <Text style={styles.Date}>12 months</Text>
          </View>
          <View style={styles.calculatedCont}>
            <Text style={styles.fixedAmount}>Calculated returns</Text>
            <Text style={styles.perMonth}>330,000</Text>
          </View>
        </View>
      </View>
      <StyledButton title={'Continue'} onPress={handleSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: '77%',
    width: '90%',
    marginTop: 40,
    marginHorizontal: '5%',
  },
  anleleft: {
    marginTop: 0,
    marginBottom: 20,
  },
  plansBody: {
    marginTop: 35,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: '5%',
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
