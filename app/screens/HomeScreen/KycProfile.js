import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import InputField from '../../components/InputField';
import PhoneInput from 'react-native-phone-number-input';
import SelectInput from '../../components/SelectInput';
import StyledButton from '../../components/StyledButton';
import { useNavigation } from '@react-navigation/native';

export default function KycProfile() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInputRef = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('Savings')}>
          <AntDesign name="left" size={16} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>KYC/Profile update</Text>
      </View>
      <InputField
        label="BVN"
        placeholder="Enter your BVN"
        keyboardType="numeric"
        width="100%"
      />
      <Text style={styles.helperText}>Dial *565*0# to get your BVN</Text>

      <Text style={styles.label}>Mobile number</Text>
      <View style={styles.phoneContainer}>
        <PhoneInput
          ref={phoneInputRef}
          defaultValue={phoneNumber}
          defaultCode="NG"
          layout="first"
          onChangeText={(text) => {
            setPhoneNumber(text);
          }}
          containerStyle={styles.phoneFlagContainer}
          textContainerStyle={styles.phoneInputTextContainer}
          withDarkTheme 
        />
      </View>
      <InputField
        label="Full address"
        placeholder="Enter address"
        keyboardType="text"
        width="100%"
      />
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', gap: 10, width: '90%'}}>
      <SelectInput
        label="City"
        items={[
          { label: 'Lagos', value: 'lagos' },
          { label: 'Abuja', value: 'abuja' },
          { label: 'Kano', value: 'kano' },
        ]}
        placeholder={{ label: 'Select city', value: null }}
        onValueChange={(value) => console.log(value)}
        width="100%"
      />
      <SelectInput
        label="State"
        items={[
          { label: 'Ikeja', value: 'ikeja' },
          { label: 'Surulere', value: 'surulere' },
          { label: 'Yaba', value: 'yaba' },
        ]}
        placeholder={{ label: 'Select state', value: null }}
        onValueChange={(value) => console.log(value)}
        width="100%"
      />
      </View>
      <StyledButton
        title="Next"
        onPress={() => console.log('Profile updated')}
      />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 50,
    paddingHorizontal: 20,
    gap: 15,
  },
  icon: {
    color: '#96959A',
    marginTop: 4,

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
    paddingLeft: 20,
  },
  label: {
    paddingLeft: 20,
    marginBottom: 10,
  },
  phoneContainer: {
    height: 50,
    width: '90%',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  phoneFlagContainer: {
    height: "100%",
    borderColor: 'gray',
    borderRadius: 8,
    borderWidth: 1,
    width: '100%',
  },
  phoneInputTextContainer: {
    height: "100%",
    paddingHorizontal: 10,
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});