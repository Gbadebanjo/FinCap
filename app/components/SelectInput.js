import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { AntDesign } from '@expo/vector-icons';

const SelectInput = ({ label, items, placeholder, onValueChange, width }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <RNPickerSelect
        placeholder={placeholder}
        items={items}
        onValueChange={onValueChange}
        style={{
          iconContainer: {...styles.iconContainer, right: width === '90%' ? '10%' : '5%'} ,
          inputIOS: { ...styles.inputIOS, width },
          inputAndroid: { ...styles.inputAndroid, width },
        }}
        useNativeAndroidPickerStyle={false}
        Icon={() => {
          return <AntDesign name="down" size={14} color="gray" />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20, // Adjust as needed
  },
  label: {
    fontSize: 14,
    color: 'black',
    marginBottom: 5,
    // marginLeft: 20,
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: 'black',
    paddingRight: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    // marginLeft: 20,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 8,
    color: 'black',
    paddingRight: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    // marginLeft: 20,
  },
  iconContainer: {
    top: 16,
    right: '10%',
  },
});

export default SelectInput;