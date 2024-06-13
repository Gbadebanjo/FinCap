import { StyleSheet, Text, View, TouchableOpacity, ScrollView, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import SelectInput from '../../components/SelectInput';
import InputField from '../../components/InputField';
import StyledButton from '../../components/StyledButton';

export default function RepayLoan() {
    const placeholder = { label: 'Select duration', value: null, color: '#9EA0A4', };
    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.topcontainer}>
            <TouchableOpacity
                style={styles.anleleft}
                onPress={() => navigation.navigate('Welcome')}>
                <FontAwesome name="angle-left" size={22} color="#808080" />
            </TouchableOpacity>
            <Text style={styles.repayloan}>Repay Loan</Text>
      </View>

      <Text style={styles.subtext}>How much whould you like to pay?</Text>

      <TouchableOpacity style={styles.payfull}>
        <Text style={styles.payfullText}> Pay Full Amount</Text>
        <View style={styles.payfullAmount_check}>
            <Text style={styles.payfullAmount}>N55,000</Text>
            <View style={styles.payfullCheckview}>
                <AntDesign style={styles.payfullCheck} name='check' size={10} color='000'  />
            </View>
        </View>
      </TouchableOpacity>
       <InputField
           label={'Enter a different amount'}
           placeholder={'Enter amount'}
           // onChangeText={handleChange('amount')}
           // value={values.amount}
           width="100%"
       />
       <View style={styles.loanDetails}>
            <Text style={styles.DetailsHeader}>Loan Details</Text>
            <View style={styles.DetailsEach}>
                <Text style={styles.DetailsKey}>Amount</Text>
                <Text style={styles.DetailsValue}>N50,000.00</Text>
            </View>
            <View style={styles.DetailsEach}>
                <Text style={styles.DetailsKey}>Interest On Loan</Text>
                <Text style={styles.DetailsValue}>N5,000.00</Text>
            </View>
            <View style={styles.DetailsEach}>
                <Text style={styles.DetailsKey}>Duration</Text>
                <Text style={styles.DetailsValue}>30 Days</Text>
            </View>
            <View style={styles.DetailsEach}>
                <Text style={styles.DetailsKey}>Application Date</Text>
                <Text style={styles.DetailsValue}>10th February 2022</Text>
            </View>
            <View style={styles.DetailsEach}>
                <Text style={styles.DetailsKey}>Payback Date</Text>
                <Text style={styles.DetailsValue}>10th March 2022</Text>
            </View>
        </View>
        <View style={styles.Submit}>
            <StyledButton
                title="Proceed With Payment"
                onPress={() => navigation.navigate('LoanPaymentMethod')}
            />
        </View>
                </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 40,
    },
    anleleft: {
        marginLeft: 20,
        marginTop: 20,
    },
    topcontainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    repayloan: {
        paddingVertical: 5,
        paddingLeft: '32%',
        marginTop: 20,
        fontSize: 16,
        fontWeight: '600',
        width: '90%',
        color: '#111827'
    },
    subtext: {
        marginTop: 20,
        color: '#111827',
        marginLeft: 20,
        marginBottom: 20,
        fontWeight: '700',
        fontSize: 24,
    },
    payfull:{
        backgroundColor: '#7538EC',
        width: '90%',
        marginLeft: '5%',
        borderRadius: 8,
        flexDirection: 'row',
        paddingVertical: 20,
        justifyContent: 'space-between',
        marginBottom: 20
    },
    payfullText:{
        color: 'white',
        fontSize: 12,
        fontWeight: '600',
        marginLeft: '2%',
    },
    payfullAmount_check:{
        flexDirection: 'row',
        width: '24%',
        justifyContent: 'space-between',
        marginRight: '2%',
    },
    payfullAmount:{
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
    },
    payfullCheckview:{
        backgroundColor: '#ffffff',
        borderRadius: '50%',
    },
    payfullCheck:{
        padding: 3,
    },
    loanDetails: {
        backgroundColor: '#F6F6F6',
        width: '90%',
        marginLeft: '5%',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 40,
    },
    DetailsHeader:{
        color: '#111827',
        fontSize: 14,
        fontWeight: 'bold',
        paddingBottom: 18,
    },
    DetailsEach:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 15,
    },
    DetailsKey:{
        color: '#111827',
        fontSize: 13,
        fontWeight: '400',
    },
    DetailsValue:{
        color: '#111827',
        fontSize: 13,
        fontWeight: '600',
    },
    Submit: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
   
})