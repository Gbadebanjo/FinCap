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
  paddingLeft,
  error,
  flex = 0
}) => {
  const styles = getStyles(width, marginLeft, paddingLeft, flex);

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error && styles.error]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        placeholderTextColor="#d2d2d4"
        value={value}
        width={width}
      />
    </View>
  );
};

const getStyles = (width, marginLeft, paddingLeft, flex ) =>
  StyleSheet.create({
    inputContainer: {
      flex: flex,
      width: width,
      alignItems: 'center',
      marginBottom: 10
    },
    label: {
      color: '#111827',
      width: 500,
      fontSize: 14,
      marginTop: 2,
      alignSelf: 'flex-start',
      paddingLeft: paddingLeft,
    },
    input: {
      height: 48,
      width: '100%',
      borderRadius: 8,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 10,
      paddingLeft: 10,
    },
    error : {
      borderColor: 'red',
    },
  });

export default InputField;
