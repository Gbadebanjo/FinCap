import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import StyledButton from '../components/StyledButton';
import { AntDesign } from '@expo/vector-icons';

const SavingsReviewScreen = ({ route }) => {
  const { goal, interest, amountToSave, duration, frequency } = route.params;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const createSavingsPlan = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.post('http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/savings/create', {
        goal,
        amountToSave: parseInt(amountToSave),
        duration: parseInt(duration),
        frequency,
        isAutoSave: true,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response.data);
      if (response.data && response.data.isSuccessful) {
        Alert.alert('Success', 'Savings plan created successfully!');
        navigation.navigate('SavingsDashboard', {
          goal,
        });
      } else {
        // console.log(response.errors);
        Alert.alert('Error', response.data.message || 'An error occurred. Please try again');
      }
    } catch (error) {
      // console.log(error.message);
      Alert.alert('Error', 'An error occurred. Please try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('Savings')}>
          <AntDesign name="left" size={16} color="black" />
        </TouchableOpacity>
        <Text style={styles.plantitle}>{goal}</Text>
        <Text style={styles.planbold}>Review your savings plans</Text>
        <View style={styles.reviewbox}>
          <Text style={styles.reviewtitle}>Amount</Text>
          <Text style={styles.reviewbold}>
            {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(amountToSave)}
          </Text>
          <Text style={styles.reviewtitle}>Saving Schedule</Text>
          <Text style={styles.reviewbold}>{frequency}</Text>
          <Text style={styles.reviewtitle}>Interest</Text>
          <Text style={styles.reviewbold}>{interest}</Text>
        </View>
      </View>
      <View>
        <StyledButton
          title={loading ? <ActivityIndicator color="#fff" /> : 'Create Savings Plans'}
          onPress={createSavingsPlan}
        />
        <TouchableOpacity
          style={styles.newbutton}
          onPress={() => navigation.navigate('Savings')}
        >
          <Text style={{ color: '#7538EC' }}>Go Back</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    height: '100%',
  },
  container: {
    padding: 20,
    marginBottom: 'auto',
  },
  icon: {
    paddingVertical: 10,
  },
  plantitle: {
    color: '#96959A',
    fontSize: 16,
    paddingVertical: 10,
  },
  planbold: {
    color: '#111827',
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  reviewbox: {
    backgroundColor: '#f6f6f6',
    paddingLeft: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  reviewtitle: {
    color: '#3F4654',
    fontSize: 14,
    fontWeight: '500',
    paddingVertical: 10,
  },
  reviewbold: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '400',
    paddingVertical: 10,
  },
  newbutton: {
    backgroundColor: 'white',
    borderColor: '#7538EC',
    borderWidth: 1,
    width: '90%',
    borderRadius: 8,
    padding: 14,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default SavingsReviewScreen