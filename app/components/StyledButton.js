import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function StyledButton({ title, onPress, children }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7538EC',
    borderRadius: 8,
    padding: 17,
    justifyContent: 'center',
    width: '90%',
    alignItems: 'center',
    margin: 20,
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});

export default StyledButton;
