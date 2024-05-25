import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import StyledButton from '../components/StyledButton';
const SavingsReviewScreen = ({ route }) => {
  // console.log(route.params);
  const { title, interest, amount, selectedDuration, selectedButton } = route.params;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('SavingsScreen')}>
          <AntDesign name="left" size={16} color="black" />
        </TouchableOpacity>
        <Text style={styles.plantitle}>{title}</Text>
        <Text style={styles.planbold}>Review your savings plans</Text>
        <View style={styles.reviewbox}>
          <Text style={styles.reviewtitle}>Amount</Text>
          <Text style={styles.reviewbold}>
            {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(amount)}
          </Text>
          <Text style={styles.reviewtitle}>Saving Schedule</Text>
          <Text style={styles.reviewbold}>{selectedButton}</Text>
          <Text style={styles.reviewtitle}>Interest</Text>
          <Text style={styles.reviewbold}>{interest}</Text>
        </View>
      </View>
      <View>
        <StyledButton
          title={loading ? <ActivityIndicator color="#fff" /> : 'Create Savings Plans'}
          onPress={() => {
            navigation.navigate('SavingsDashboardScreen', {
                title: title,
                interest: interest,
            });
        }}
        />
        <TouchableOpacity
          style={styles.newbutton}
          onPress={() => navigation.navigate('SavingsScreen')}
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
    marginBottom: 20,
  }
})

export default SavingsReviewScreen