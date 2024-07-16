import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const LogoutModal = ({ onCancel, onConfirm, title, message, visible }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.titleNcancel}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onCancel}>
            <AntDesign name="close" size={22} color="#808080" />
            </TouchableOpacity>
          </View>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onConfirm} style={styles.confirmButton}>
              <Text style={styles.confirmText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
              <Text style={styles.cancelText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    backgroundColor: 'white',
    padding: 25,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '100%',
    maxHeight: '50%',
  },
  titleNcancel:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 10,
    textAlign: 'start',
  },
  message: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
    marginBottom: 20,
    textAlign: 'start',
  },
  buttonContainer: {
    width: '100%',
    gap: 30,
    alignContent: 'center'
  },
  cancelButton: {
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#D0D5DD',
  },
  confirmButton: {
    marginTop: 10,
    backgroundColor: '#CC342E',
    borderRadius: 8,
    paddingVertical: 15,
  },
  confirmText:{
    textAlign: 'center',
    color: '#FFFFFF',
  },
  cancelText:{
    textAlign: 'center',
    color: '#344054',
  }
});

export default LogoutModal;