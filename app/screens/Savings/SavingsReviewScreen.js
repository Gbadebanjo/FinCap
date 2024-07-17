import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import StyledButton from '../../components/StyledButton';
import { AntDesign } from '@expo/vector-icons';
import ResponseModal from '../../components/Modals/ResponseModal';

const SavingsReviewScreen = ({ route }) => {
  const { goal, interest, amountToSave, duration, frequency } = route.params;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [success, isSuccess] = useState(false);
  const [modal, setModalVisible] = useState(false);
  const [error, setError] = useState('');

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
      if (response.data && response.data.isSuccessful) {
        isSuccess(true);
        setModalVisible(true);
      } else {
        isSuccess(false);
        setError(response.data.message || 'An error occurred. Please try again');
        setModalVisible(true);}
    } catch (error) {
      let errorMessage = 'An error occurred. Please try again';
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }
      setError(errorMessage);
      isSuccess(false);
      setModalVisible(true);
      console.log('Server response data:', error.response && error.response.data);
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
          width="90%"
          marginTop={20}
          marginLeft="5%"

        />
        <TouchableOpacity
          style={styles.newbutton}
          onPress={() => navigation.navigate('Savings')}
        >
          <Text style={{ color: '#7538EC' }}>Go Back</Text>
        </TouchableOpacity>
      </View>

      <ResponseModal
        visible={modal}
        title={success ? 'Success' : 'Error!'}
        message={error || 'Savings plan created successfully!'}
        isSuccess={success}
        onDismiss={() => {
          setModalVisible(false);
          if (success) {
            navigation.navigate('SavingsDashboard', {
              goal,
            });
          } else {
            navigation.navigate('Savings');
          }
        }}
        buttonTitle={success ? 'Continue' : 'Try again'}
      />

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
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default SavingsReviewScreen