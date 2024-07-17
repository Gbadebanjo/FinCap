import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import InputField from '../../components/InputField';
import PhoneInput from 'react-native-phone-number-input';
import SelectInput from '../../components/SelectInput';
import StyledButton from '../../components/StyledButton';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function KycProfile() {
  const [bvn, setBvn] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const phoneInputRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    if (selectedState) {
      fetchCities(selectedState);
    } else {
      setCities([]);
    }
  }, [selectedState]);

  const fetchStates = async () => {
    try {
      const response = await axios.get('https://nga-states-lga.onrender.com/fetch');
      setStates(response.data);
    } catch (error) {
      console.error('Error fetching states:', error);
    }
  };

  const fetchCities = async (state) => {
    try {
      const response = await axios.get(`https://nga-states-lga.onrender.com/?state=${state}`);
      setCities(response.data);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  // This form handling mtd can be changed to formik but experienced a long error utilizing that. Review
  const handleNext = () => {
    // Check if all fields are filled
    if (bvn && phoneNumber && address && selectedState && selectedCity) {
      // Navigate to next screen
      navigation.navigate('VerifyProfile', {
        bvn,
        phoneNumber,
        address,
        selectedState,
        selectedCity,
      });
    } else {
      // Alert user to fill all fields
      Alert.alert('Incomplete Form', 'Please fill all required fields.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('Home')}
        >
          <AntDesign name="left" size={16} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>KYC/Profile update</Text>
      </View>
      <InputField
        label="BVN"
        placeholder="Enter your BVN"
        keyboardType="numeric"
        width="100%"
        value={bvn}
        onChangeText={(text) => setBvn(text)}
      />
      <Text style={styles.helperText}>Dial *565*0# to get your BVN</Text>

      <Text style={styles.label}>Mobile number</Text>
      <View style={styles.phoneContainer}>
        <PhoneInput
          ref={phoneInputRef}
          defaultValue={phoneNumber}
          defaultCode="NG"
          layout="first"
          onChangeText={(text) => setPhoneNumber(text)}
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
        value={address}
        onChangeText={(text) => setAddress(text)}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10, width: '100%' }}>
        <SelectInput
          label="State"
          items={states.map(state => ({ label: state, value: state }))}
          placeholder={{ label: 'Select state', value: null }}
          onValueChange={(value) => setSelectedState(value)}
          value={selectedState}
          width="100%"
        />
        <SelectInput
          label="City"
          items={cities.map(city => ({ label: city, value: city }))}
          placeholder={{ label: 'Select city', value: null }}
          onValueChange={(value) => setSelectedCity(value)}
          value={selectedCity}
          width="100%"
          disabled={!selectedState}
        />
      </View>

      <StyledButton
        title="Next"
        onPress={handleNext}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    paddingHorizontal: 20,
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 50,
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
  helperText: {
    color: '#888',
    marginBottom: 20,
    marginTop: -15
  },
  label: {
    marginBottom: 10,
  },
  phoneContainer: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  phoneFlagContainer: {
    height: '100%',
    borderColor: 'gray',
    borderRadius: 8,
    borderWidth: 1,
    width: '100%',
  },
  phoneInputTextContainer: {
    height: '100%',
    paddingHorizontal: 10,
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});
