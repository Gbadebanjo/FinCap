import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

const InputField = ({
  label,
  placeholder,
  secureTextEntry,
  onChangeText,
  value,
  width,
  marginLeft,
}) => {
  const styles = getStyles(width, marginLeft);

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        placeholderTextColor="#d2d2d4"
        value={value}
      />
    </View>
  );
};

const getStyles = (width, marginLeft) =>
  StyleSheet.create({
    inputContainer: {
      width: width,
      alignItems: 'center',
    },
    label: {
      color: '#111827',
      width: 500,
      fontSize: 16,
      marginLeft: marginLeft,
      marginTop: 2,
      alignSelf: 'flex-start',
    },
    input: {
      height: 48,
      width: '90%',
      borderRadius: 8,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 10,
      paddingLeft: 10,
    },
  });

export default InputField;
