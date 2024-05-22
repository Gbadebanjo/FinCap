import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Earnings = props => {
  function handleSubmit() {
    alert('Continue button clicked');
  }
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.arrowEarning}>
        <TouchableOpacity style={styles.anleleft} onPress={handleSubmit}>
          <AntDesign name="arrowleft" size={15} color="#101828" />
        </TouchableOpacity>
        <Text style={styles.pageHeader}>Earnings</Text>
      </View>

      <View style={styles.plansBody}>
        <View style={styles.nameAndEarning}>
          <Text style={styles.EarningDate}>
            Start date - 25th February 2022
          </Text>
          <Text style={styles.Earning}>904.10</Text>
        </View>
        <View style={styles.nameAndEarning}>
          <Text style={styles.EarningDate}>26th February 2022</Text>
          <Text style={styles.Earning}>904.10</Text>
        </View>
        <View style={styles.nameAndEarning}>
          <Text style={styles.EarningDate}>27th February 2022</Text>
          <Text style={styles.Earning}>904.10</Text>
        </View>
        <View style={styles.nameAndEarning}>
          <Text style={styles.EarningDate}>28th February 2022</Text>
          <Text style={styles.Earning}>904.10</Text>
        </View>
        <View style={styles.nameAndEarning}>
          <Text style={styles.EarningDate}>29th February 2022</Text>
          <Text style={styles.Earning}>904.10</Text>
        </View>
        <View style={styles.nameAndEarning}>
          <Text style={styles.EarningDate}>30th February 2022</Text>
          <Text style={styles.Earning}>904.10</Text>
        </View>
        <View style={styles.nameAndEarning}>
          <Text style={styles.EarningDate}>1st March 2022</Text>
          <Text style={styles.Earning}>904.10</Text>
        </View>
        <View style={styles.nameAndEarning}>
          <Text style={styles.EarningDate}>2nd March 2022</Text>
          <Text style={styles.Earning}>904.10</Text>
        </View>
        <View style={styles.nameAndEarning}>
          <Text style={styles.EarningDate}>3rd March 2022</Text>
          <Text style={styles.Earning}>904.10</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    width: '90%',
    marginTop: 50,
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
