import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function FundWallet() {
  const navigation = useNavigation();

  const HandlePayment = () => {

  }

  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.navigate('Home')}>
        <AntDesign name="left" size={16} color="black" />
      </TouchableOpacity>
      <Text style={styles.Heading}>Fund wallet</Text>
      <Text style={styles.SubHeading}>Choose how you want to fund your account</Text>
      <TouchableOpacity
       style={styles.PaymentBox} 
       onPress={() => navigation.navigate('AddMoney')}
       >
        <View style={[styles.Icon, { backgroundColor: "#ffe6d4" }]} >
          <FontAwesome name="flag" size={24} color="#ffc061" borderRadius='0' />
        </View>
        <View style={styles.PaymentTextBox}>
          <Text style={styles.PaymentTitle}>Fund wallet with Paystack</Text>
          <Text style={styles.PaymentAmount}>Click to fund wallet</Text>
        </View>
        <View style={styles.icon2}>
          <AntDesign name="right" size={14} color="black" />
        </View>

      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    height: '100%',
    paddingHorizontal: 20,
  },
  icon: {
    paddingVertical: 20,
  },
  Heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  SubHeading: {
    fontSize: 14,
    color: '#96959A',
    paddingVertical: 5,
  },
  Icon: {
    backgroundColor: '#0370d6',
    width: 35,
    height: 35,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  PaymentBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  PaymentTextBox: {
    marginLeft: 10,
    justifyContent: 'space-between'
  },
  PaymentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  PaymentAmount: {
    fontSize: 11,
    color: '#494E57',
  },
  icon2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
  }
})