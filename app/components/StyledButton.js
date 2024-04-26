import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function StyledButton({ title }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7538EC',
    borderRadius: 8,
    padding: 12,
    justifyContent: 'center',
    width: '90%',
    alignItems: 'center',
    margin: 15,
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 15,
  },
});

export default StyledButton;
