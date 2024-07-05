import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RNPickerSelect from 'react-native-picker-select';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';

export default function KycProfile() {
  const [countryCode, setCountryCode] = useState('NG');
  const [phoneNumber, setPhoneNumber] = useState('');

  const phoneRef = useRef(null);
  const countryPickerRef = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>KYC/Profile update</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your BVN"
        keyboardType="numeric"
      />
      <Text style={styles.helperText}>Dial *565*0# to get your BVN</Text>

      <View style={styles.phoneContainer}>
        <PhoneInput
          ref={phoneRef}
          onPressFlag={() => countryPickerRef.current.openModal()}
          style={styles.phoneInput}
          onChangePhoneNumber={(number) => setPhoneNumber(number)}
        />
        <CountryPicker
          ref={countryPickerRef}
          onChange={(value) => {
            setCountryCode(value.cca2);
            phoneRef.current.selectCountry(value.cca2.toLowerCase());
          }}
          cca2={countryCode}
          translation="eng"
          hideAlphabetFilter
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Enter address"
      />

      <View style={styles.row}>
        <RNPickerSelect
          style={pickerSelectStyles}
          onValueChange={(value) => console.log(value)}
          items={[
            { label: 'City 1', value: 'city1' },
            { label: 'City 2', value: 'city2' },
          ]}
          placeholder={{ label: "City", value: null }}
        />
        <RNPickerSelect
          style={pickerSelectStyles}
          onValueChange={(value) => console.log(value)}
          items={[
            { label: 'State 1', value: 'state1' },
            { label: 'State 2', value: 'state2' },
          ]}
          placeholder={{ label: "State", value: null }}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  helperText: {
    color: '#888',
    marginBottom: 20,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 50,
  },
  phoneInput: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  picker: {
    flex: 1,
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    height: 50,
    backgroundColor: '#7538EC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    flex: 1,
  },
  inputAndroid: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    flex: 1,
  },
});
