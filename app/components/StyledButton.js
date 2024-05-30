import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function StyledButton({ title, onPress, width = ' 90%', margin = 20 }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { width }, { margin }]}>
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
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});

export default StyledButton;
