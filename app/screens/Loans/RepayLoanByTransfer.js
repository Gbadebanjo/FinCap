import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';

export default function RepayLoanByTransfer() {
  const navigation = useNavigation();

  const bankdetails = {
    bankName: 'Access Bank',
    number: '12345678',
    accountName: 'SUBA CAPITAL',
  };

  const handleCopy = () => {
    Clipboard.setStringAsync(bankdetails.number);
    Alert.alert("Copied", "Account number has been copied to clipboard");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.arrowRepay}>
        <TouchableOpacity
          style={styles.angleleft}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome name="angle-left" size={18} color="#101828" />
        </TouchableOpacity>
        <Text style={styles.pageHeader}>Repay Loan</Text>
      </View>

      <Text style={styles.subtext}>Transfer #55,500 to the account below</Text>

      <View style={styles.accountDetails}>
        <View style={styles.eachAccountDetail}>
          <Text style={styles.detailKey}>Bank Name</Text>
          <Text style={styles.detailValue}>{bankdetails.bankName}</Text>
        </View>
        <View style={styles.eachAccountDetail}>
          <Text style={styles.detailKey}>Account Number</Text>
          <View style={styles.accountNumberContainer}>
            <Text style={styles.detailValue}>{bankdetails.number}</Text>
            <TouchableOpacity onPress={handleCopy}>
              <Feather name="copy" size={18} color="#111827" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.eachAccountDetail}>
          <Text style={styles.detailKey}>Bank Name</Text>
          <Text style={styles.detailValue}>{bankdetails.accountName}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    width: '90%',
    marginHorizontal: '5%',
  },
  arrowRepay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  angleleft: {
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
    color: '#111827',
  },
  subtext: {
    marginTop: 20,
    color: '#111827',
    marginBottom: 10,
    fontWeight: '700',
    fontSize: 24,
  },
  accountDetails: {
    backgroundColor: '#f6f6f6',
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  eachAccountDetail: {
    marginBottom: 20,
  },
  detailKey: {
    color: '#111827',
    marginBottom: 5,
    fontWeight: '300',
    fontSize: 14,
  },
  detailValue: {
    color: '#111827',
    fontWeight: '600',
    fontSize: 14,
  },
  accountNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
