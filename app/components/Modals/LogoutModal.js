import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LogoutModal = ({ onCancel, onConfirm, title, message, visible}) => {
  return (
    <Modal visible={visible}  >
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.message}>{message}</Text>
                <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={onCancel}>
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onConfirm}>
                    <Text style={styles.confirmText}>Confirm</Text>
                </TouchableOpacity>
                </View>
            </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    maxWidth: '90%',
    // maxHeight: '50%',
    // height: '50vh',
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 19.2,
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cancelText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#96959A',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  confirmText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#541592',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default LogoutModal;
