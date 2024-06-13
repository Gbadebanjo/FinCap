import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StyledButton from '../../components/StyledButton';
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import ConfirmModal from '../../components/Modals/ConfirmModal';
import { Card } from '../../components/FundSourceOption';
import  FundSourceOption  from '../../components/FundSourceOption';

export default function LoanPaymentMethod() {
  const [selectedFundSource, setSelectedFundSource] = useState('');
  const navigation = useNavigation();

  function handleBankTransfer() {
    // Show confirm modal here
    navigation.navigate('RepayLoanByTransfer');
  }

  function handleConfirmCardChange() {
    // Handle card change confirmation logic here (e.g., API call, navigation)
    navigation.navigate('LoanDashboard');
    setIsConfirmModalVisible(false);
  }

  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <View style={styles.arrowChange}>
          <TouchableOpacity
            style={styles.angleleft}
            onPress={() => navigation.goBack()}>
            <FontAwesome name="angle-left" size={18} color="#101828" />
          </TouchableOpacity>
          <Text style={styles.pageHeader}>Choose Payment method</Text>
        </View>

        <View style={styles.plansBody}>
          <View style={styles.eachCard}>
            <FundSourceOption
                Card={Card}
                id="card"
                isSelected={selectedFundSource === 'card'}
                onSelect={setSelectedFundSource}/>
          </View>

          <TouchableOpacity style={styles.addCardCont}>
            <View style={styles.cardCont}>
              <MaterialCommunityIcons
                style={styles.card}
                name="credit-card"
                size={20}
                color="#7544A8"
              />
            </View>
            <Text style={styles.CardText}> Add a new card</Text>
            <AntDesign
              style={styles.card}
              a
              name="right"
              size={15}
              color="#96959A"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.addCardCont} onPress={handleBankTransfer}>
            <View style={styles.cardCont}>
              <MaterialCommunityIcons
                style={styles.card}
                name="bank"
                size={20}
                color="#7544A8"
              />
            </View>
            <Text style={styles.CardText}> Pay with bank transfer</Text>
            <AntDesign
              style={styles.card}
              a
              name="right"
              size={15}
              color="#96959A"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: '90%',
    marginTop: 40,
    marginHorizontal: '5%',
    justifyContent: 'space-between',
    marginBottom: '60%',
  },
  arrowChange: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  angleleft: {
    marginTop: 0,
    padding: 5,
  },
  pageHeader: {
    paddingVertical: 5,
    paddingLeft: '18%',
    marginTop: 0,
    fontSize: 16,
    fontWeight: '600',
    width: '90%',
    color: '#111827'
  },
  plansBody: {
    width: '100%',
    marginTop: 20,
  },
  eachCard: {
    marginBottom: 25,
    borderColor: '#EAECF0',
    borderRadius: 20,
    alignItems: 'center',
    color: '#000000',
  },
  addCardCont: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardCont: {
    backgroundColor: '#EEE8F4',
    padding: 10,
    borderRadius: '50%',
  },
  CardText: {
    fontSize: 14,
    color: '#3F4654',
    fontWeight: 400,
    width: '80%',
  },
});
