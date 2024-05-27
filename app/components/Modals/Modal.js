import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';
import StyledButton from '../StyledButton';
import { FontAwesome5 } from '@expo/vector-icons';

const ResponseModal = ({
  visible,
  title,
  message,
  onDismiss,
  iconName,
  buttonTitle,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onDismiss}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {iconName && <FontAwesome5 name={iconName} size={50} />}
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalText}>{message}</Text>
          <StyledButton title={buttonTitle} onPress={onDismiss} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 0,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ResponseModal;
