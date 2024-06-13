import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SelectInput from '../../components/SelectInput';
import InputField from '../../components/InputField';
import StyledButton from '../../components/StyledButton';
export default function LoanApplyPro() {
    const placeholder = { label: 'Select duration', value: null, color: '#9EA0A4', };
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
                    style={styles.anleleft}
                    onPress={() => navigation.navigate('Welcome')}>
                    <FontAwesome name="angle-left" size={22} color="#808080" />
                </TouchableOpacity>
                <Text style={styles.welcometext}>Apply for Loan</Text>
                <Text style={styles.subtext}>Kindly provide the required information to continue</Text>
                <InputField
                    label={'Amount'}
                    placeholder={'Enter amount'}
                    // onChangeText={handleChange('amount')}
                    // value={values.amount}
                    width="100%"
                />
                <SelectInput
                    label={'Duration'}
                    placeholder={placeholder}
                    items={[
                        { label: '1 month', value: '1' },
                        { label: '2 months', value: '2' },
                        { label: '3 months', value: '3' },
                        { label: '4 months', value: '4' },
                        { label: '5 months', value: '5' },
                        { label: '6 months', value: '6' },
                        { label: '7 months', value: '7' },
                        { label: '8 months', value: '8' },
                        { label: '9 months', value: '9' },
                        { label: '10 months', value: '10' },
                        { label: '11 months', value: '11' },
                        { label: '12 months', value: '12' },
                    ]}
                    onValueChange={(value) => setSelectedDuration(value)}
                    width="90%"
                />
                <View style={styles.Submit}>
                <StyledButton
                    title="Apply for Loan"
                    onPress={() => navigation.navigate('LoanApplyPro')}
                />
                </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    anleleft: {
        marginLeft: 20,
        marginTop: 20,
    },
    welcometext: {
        fontSize: 24,
        color: '#111827',
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 20,
    },
    subtext: {
        fontSize: 15,
        color: '#96959A',
        marginLeft: 20,
        marginBottom: 20,
    },
    Submit: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
   
})