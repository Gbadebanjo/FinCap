import { useState } from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import StyledButton from './StyledButton';
import FundSourceOption from './FundSourceOption';

const ResponseModal = ({
  visible,
  title,
  message,
  isSuccess,
  onDismiss,
  buttonTitle,
}) => {
  const iconName = isSuccess ? 'check' : 'times';
  const iconColor = 'black';

  const handlePress = () => {
    alert('Create Saving Plans');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalView}>
        <View>
          <View style={styles.selectCancel}>
            <Text style={styles.modalTitle}>Select funding source</Text>
            <FontAwesome
              name={iconName}
              size={22}
              color={iconColor}
              onPress={onDismiss}
            />
          </View>
          <Text style={styles.modalMessage}>
            You can auto-save from your cash wallet or your bank
          </Text>
          <FundSourceOption title="Wallet" balance="21,000" isSelected={true} />
          <FundSourceOption title="Wallet" isSelected={true} />
        </View>
        <Text style={styles.addCardText}>Add card</Text>
        <StyledButton title={'Create Saving Plans'} onPress={handlePress} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    marginTop: '50%',
    paddingTop: 30,
  },
  selectCancel: {
    marginTop: 0,
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
    textAlign: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  addCardText: {
    marginBottom: 15,
    marginLeft: '12%',
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
    color: '#7538EC',
  },
  button: {
    borderColor: '#7538EC',
    borderWidth: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
  },
  buttonText: {
    color: '#7538EC',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ResponseModal;
