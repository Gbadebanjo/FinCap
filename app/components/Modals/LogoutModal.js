import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

const LogoutModal = ({ onCancel, onConfirm, title, message, visible, confirmText, cancelText }) => {
  return (
    <SafeAreaView>      
    <Modal visible={visible} transparent>
      <View style={styles.fullScreenContainer}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onCancel}>
                <FontAwesome name="angle-left" size={22} color="#808080" />
            </TouchableOpacity>
          </View>
       
          <Text style={styles.message}>{message}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onConfirm} style={styles.confirmTextContainer}>
              <Text style={styles.confirmText}>{confirmText}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onCancel} style={styles.cancelTextContainer}>
              <Text style={styles.cancelText}>{cancelText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor:  'rgba(0, 0, 0, 0.5)', 
  },
  container: {                  
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    maxWidth: '100%',
    // maxHeight: '50%',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    gap: 30,
  },
  cancelTextContainer: {
    fontSize: 16,
    fontWeight: 500,
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius:10,
    textAlign: 'center',
    borderColor: '#D0D5DD'
  },
  cancelText: {
    // color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
  confirmText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
  confirmTextContainer: {
    fontSize: 16,
    fontWeight: 500,
    paddingVertical: 20,
    borderRadius:10,
    backgroundColor: '#CC342E',
    borderColor: '#CC342E'
  },
});

export default LogoutModal;
