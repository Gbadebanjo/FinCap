import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function StyledButton({ title, onPress, width, marginRight, marginLeft, marginTop, marginBottom, BackColor, borderWidth, borderColor, TextColor }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: BackColor || '#7538EC' }, { width }, { marginRight }, { marginLeft }, { marginTop }, { marginBottom }, { borderWidth }, { borderColor }]}>
      <Text style={[styles.text, { color: TextColor || '#fff' }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 17,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {
    // color: '#fff',
    fontSize: 18,
  },
});

export default StyledButton;
