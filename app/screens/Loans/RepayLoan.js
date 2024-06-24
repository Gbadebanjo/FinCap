import React, { useState, useEffect } from 'react'; 
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import InputField from '../../components/InputField';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ResponseModal from '../../components/Modals/ResponseModal';
import ErrorAlert from '../../components/ErrorAlert';


const validationSchema = Yup.object().shape({
    amount: Yup.number().required('required').positive('Amount must be positive').integer('Amount must be an integer'),
  });

export default function RepayLoan() {
    const [fullRepayment, setFullRepayment] = useState(false);
    const [loanData, setLoanData] = useState(null);
    const navigation = useNavigation();
    const [amount, setAmount] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);


    useEffect(() => {
        const fetchLoanData = async () => {
            try {
            const token = await AsyncStorage.getItem('userToken');
            const response = await axios.get(
                'http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/Loan/latest-loan-application',
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setLoanData(response.data);
            console.log(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        };
    };
        fetchLoanData();
    }, []);

    const handleRepayLoan = async (values) => { 
        setLoading(true);
        try {
            const token = await AsyncStorage.getItem('userToken');
            const response = await axios.post(
                'http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/Loan/repay-loan',
                {
                    amount: Number(values.amount),               
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log('Loan repayment successful:', response.data);
            setModalTitle('Success');
            setModalMessage('Loan repayment successful.');
            setIsSuccess(true);
            setModalVisible(true);
        } catch (error) {
            const errorMessage = error.response && error.response.data && error.response.data.errors && error.response.data.errors.length > 0
            ? error.response.data.errors[0].message
            : error.message;
        console.error('Loan repayment error:', errorMessage);
        setModalTitle(errorMessage);
        setModalMessage('Add Funds to wallet to continue');
        setIsSuccess(false);
        setModalVisible(true);
        } finally {
            setLoading(false);
        }
    };

    const formatAmount = amount => {
        return (
          '₦' +
          Number(amount).toLocaleString('en-NG', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        );
      };

    useEffect(() => {
        if (fullRepayment) {
            handleRepayLoan({ amount: loanData.data.loanAmount + loanData.data.administrativeFee + loanData.data.interestRate });
            setFullRepayment(false);
        }
    }, [fullRepayment]); 
    
      const formatDate = (dateString) => {
        return moment(dateString, 'DD MMMM, hh:mm A').format('DD MMMM YYYY');
      }

      if (loading) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#7538EC" />
          </View>
        );
      }
    
      if (!loanData) {
        return null; 
    }

  return (
    <SafeAreaView style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.topcontainer}>
            <TouchableOpacity
                style={styles.anleleft}
                onPress={() => navigation.navigate('LoanDashboard')}>
                <FontAwesome name="angle-left" size={22} color="#808080" />
            </TouchableOpacity>
            <Text style={styles.repayloan}>Repay Loan</Text>
      </View>

      <Text style={styles.subtext}>How much whould you like to pay?</Text>

      <TouchableOpacity style={styles.payfull}
      onPress={() => {
        const fullAmount = loanData.data.loanAmount + loanData.data.administrativeFee + loanData.data.interestRate;
        setAmount(fullAmount);
        setFullRepayment(true);
        }}
        disabled={loanData && loanData.data.loanAmount === 0}
      >
        <Text style={styles.payfullText}> Pay Full Amount</Text>
        <View style={styles.payfullAmount_check}>
            <Text style={styles.payfullAmount}>
                {loanData && loanData.data.loanAmount === 0 
                ? formatAmount(0)
                : formatAmount(loanData.data.loanAmount + loanData.data.administrativeFee + loanData.data.interestRate)
                 }
            </Text>
            <View style={styles.payfullCheckview}>
                <AntDesign style={styles.payfullCheck} name='check' size={10} color='000'  />
            </View>
        </View>
      </TouchableOpacity>
      <Formik
          initialValues={{ amount: '' }}
          validationSchema={validationSchema}
          onSubmit={handleRepayLoan}>
        {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <View>
                <InputField
                label={'Enter a different amount'}
                placeholder={'Enter amount'}
                onChangeText={handleChange('amount')}
                value={values.amount}
                width="100%"
            />
            <ErrorAlert error={errors.amount}/>

            <View style={styles.loanDetails}>
            <Text style={styles.DetailsHeader}>Loan Details</Text>
            <View style={styles.DetailsEach}>
                <Text style={styles.DetailsKey}>Amount</Text>
                <Text style={styles.DetailsValue}>{formatAmount(loanData.data.loanAmount)}</Text>
            </View>
            <View style={styles.DetailsEach}>
                <Text style={styles.DetailsKey}>Interest On Loan</Text>
                <Text style={styles.DetailsValue}>{formatAmount(loanData.data.interestRate + loanData.data.administrativeFee)}</Text>
            </View>
            <View style={styles.DetailsEach}>
                <Text style={styles.DetailsKey}>Duration</Text>
                <Text style={styles.DetailsValue}>{loanData.data.repaymentDuration} days</Text>
            </View>
            <View style={styles.DetailsEach}>
                <Text style={styles.DetailsKey}>Application Date</Text>
                <Text style={styles.DetailsValue}>{formatDate(loanData.data.dateApplied)}</Text>
            </View>
            <View style={styles.DetailsEach}>
                <Text style={styles.DetailsKey}>Payback Date</Text>
                <Text style={styles.DetailsValue}>{formatDate(loanData.data.dueDate)}</Text>
            </View>
             </View>

       <View style={styles.submit}>
                <TouchableOpacity
                    onPress={handleSubmit}
                    style={[styles.button, { width: '90%', margin: 20 }]}
                    disabled={!isValid || loading}
                >
                    {loading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={styles.text}>Proceed With Payment</Text>
                    )}
                </TouchableOpacity>
            </View>
       </View>
    )}
       </Formik>
        <ResponseModal
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                title={modalTitle}
                message={modalMessage}
                isSuccess={isSuccess}
                onDismiss={() => {
                    setModalVisible(false);
                    if (isSuccess) {
                        navigation.navigate('LoanDashboard');
                    } else {
                        navigation.navigate('RepayLoan');
                    }
                }}
                buttonTitle={isSuccess ? 'Continue' : 'Retry!'}
            />
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
        paddingLeft: '28%',
        marginTop: 20,
        fontSize: 18,
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
        fontSize: 22,
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
        width: '30%',
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
    submit: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#7538EC',
        borderRadius: 8,
        padding: 17,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 18,
    },
})