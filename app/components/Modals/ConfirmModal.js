import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ConfirmModal = ({ onCancel, onConfirm }) => {
  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <Text style={styles.title}>Please Confirm</Text>
        <Text style={styles.message}>
          Your card will be charged for the months you missed. Do you agree to
          this transaction?
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onCancel}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onConfirm}>
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    maxWidth: '90%',
    maxHeight: '50%',
    alignSelf: 'center',
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

export default ConfirmModal;
