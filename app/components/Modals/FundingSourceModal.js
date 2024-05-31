import { useState } from 'react';
import { Modal, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import StyledButton from '../StyledButton';
import FundSourceOption from '../FundSourceOption';
import { useNavigation } from '@react-navigation/native';
import { Card } from '../FundSourceOption';

const FundingSource = ({
  visible,
  onDismiss,
  wallet,
  planName,
  interestRate,
  fixedAmount,
  calculatedReturns,
  duration,
}) => {
  const [selectedFundSource, setSelectedFundSource] = useState('wallet');
  const [loading, setLoading] = useState(false);
  const iconColor = '#D0D5DD';
  const navigation = useNavigation();

  const handleAddCard = () => {
    alert(
      wallet,
      planName,
      interestRate,
      interestRate,
      calculatedReturns,
      duration,
    );
    onDismiss();
    navigation.navigate('InvestTab', { screen: 'ChangeCards' });
  };

  const handleCreate = () => {
    setLoading(true);
    navigation.navigate('InvestTab', { screen: 'InvestmentHome' });
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <LinearGradient
        colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.5)']}
        style={styles.modalOverlay}>
        <View style={styles.modalView}>
          <View>
            <View style={styles.selectCancel}>
              <Text style={styles.modalTitle}>Select funding source</Text>
              <Feather
                name="x"
                size={22}
                color={iconColor}
                onPress={onDismiss}
              />
            </View>
            <Text style={styles.modalMessage}>
              You can auto-save from your cash wallet or your bank
            </Text>
            <FundSourceOption
              id="wallet"
              title="Wallet"
              balance={wallet}
              isSelected={selectedFundSource === 'wallet'}
              onSelect={setSelectedFundSource}
            />
            <FundSourceOption
              Card={Card}
              id="card"
              isSelected={selectedFundSource === 'card'}
              onSelect={setSelectedFundSource}
            />
          </View>

          <Text style={styles.addCardText} onPress={handleAddCard}>
            Add card
          </Text>

          <StyledButton
            title={
              loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                'Create Investment Plans'
              )
            }
            onPress={handleCreate}
            width="100%"
            margin={0}
          />
        </View>
      </LinearGradient>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingTop: 30,
    paddingHorizontal: 20,
    width: '100%',
    paddingBottom: '10%',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  selectCancel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#111827',
  },
  modalMessage: {
    marginBottom: 15,
    textAlign: 'left',
    width: '100%',
  },
  addCardText: {
    marginBottom: 35,
    marginTop: 20,
    width: '100%',
    color: '#7538EC',
  },
  buttonText: {
    color: '#7538EC',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    marginRight: 10,
    borderColor: '#D0D5DD',
  },
});

export default FundingSource;
