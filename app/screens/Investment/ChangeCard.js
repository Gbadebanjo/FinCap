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

const ChangeCard = () => {
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const navigation = useNavigation();

  function handleConfirmButton() {
    // Show confirm modal here
    setIsConfirmModalVisible(true);
  }

  function handleConfirmCardChange() {
    // Handle card change confirmation logic here (e.g., API call, navigation)
    navigation.navigate('InvestmentHome');
    setIsConfirmModalVisible(false);
  }

  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <View style={styles.arrowChange}>
          <TouchableOpacity
            style={styles.angleleft}
            onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={15} color="#101828" />
          </TouchableOpacity>
          <Text style={styles.pageHeader}>Change Card</Text>
        </View>

        <View style={styles.plansBody}>
          <TouchableOpacity style={styles.eachCard}>
            <View style={styles.icons}>
              <FontAwesome
                style={styles.icon2}
                name="circle"
                size={17}
                color="#F9A000"
              />
              <FontAwesome
                style={styles.icon1}
                name="circle"
                size={17}
                color="#ED0006"
              />
            </View>
            <Text style={styles.CardNumber}>***7463</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.eachCard}>
            <View style={styles.icons}>
              <FontAwesome
                style={styles.icon2}
                name="circle"
                size={17}
                color="#F9A000"
              />
              <FontAwesome
                style={styles.icon1}
                name="circle"
                size={17}
                color="#ED0006"
              />
            </View>
            <Text style={styles.CardNumber}>***7463</Text>
          </TouchableOpacity>
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
              name="right"
              size={15}
              color="#96959A"
            />
          </TouchableOpacity>
        </View>
      </View>
      <StyledButton title={'Confirm'} onPress={handleConfirmButton} />

      {/* Conditionally render ConfirmModal */}
      {isConfirmModalVisible && (
        <ConfirmModal
          title="Confirm Change Card"
          message=" Your card will be charged for the months you missed. Do you agree to
          this transaction?"
          onCancel={() => setIsConfirmModalVisible(false)}
          onConfirm={handleConfirmCardChange}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
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
    paddingLeft: '25%',
    marginTop: 0,
    fontSize: 16,
    fontWeight: '600',
    width: '90%',
  },
  plansBody: {
    width: '100%',
    marginTop: 20,
  },
  eachCard: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#EAECF0',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 22,
  },
  icons: {
    position: 'relative',
    height: 15,
    width: 30,
  },
  icon1: {
    position: 'absolute',
    left: 0,
  },
  icon2: {
    position: 'absolute',
    left: 9,
  },
  CardNumber: {
    fontSize: 13,
    width: '90%',
    color: '#344054',
    fontWeight: '500px',
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

export default ChangeCard;
