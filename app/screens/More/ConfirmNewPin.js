import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PinView from 'react-native-pin-view';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import ResponseModal from '../../components/Modals/ResponseModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function ConfirmNewPin(){
    const pinView = useRef(null);
    const [showRemoveButton, setShowRemoveButton] = useState(false);
    const [showCompleteButton, setShowCompletedButton] = useState(false);
    const [enteredPin, setEnteredPin] = useState('');
    const [modal, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const navigation = useNavigation();
    const [success, setIsSuccess] = useState(true);
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const route = useRoute();
    const { password, newPin } = route.params;

  
    useEffect(() => {
      if (enteredPin.length > 0) {
        setShowRemoveButton(true);
      } else {
        setShowRemoveButton(false);
      }
      if (enteredPin.length === 4) {
        setShowCompletedButton(true);
      } else {
        setShowCompletedButton(false);
      }
    }, [enteredPin]);

    const handleConfirmPin = async () => {
      setIsLoading(true);
      try {
        const token = await AsyncStorage.getItem('userToken');
        const response = await axios.post(
          'http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/settings/reset-transaction-pin',
          { password, newPin, confirmNewPin: enteredPin },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data && response.data.code === 200) {
          setIsSuccess(true);
          setModalTitle('Success');
          setModalMessage('Your new PIN has been set successfully');
        }else {
          setIsSuccess(false);
          setModalTitle('Error');
          if (response.data && response.data.errors && response.data.errors.length > 0) {
            setModalMessage(response.data.errors[0].message || 'Failed to set the new PIN');
          } else {
            setModalMessage('Failed to set the new PIN');
          }
        }
      } catch (error) {
        setIsSuccess(false);
        setModalTitle('Error');
        if (error.response && error.response.data && error.response.data.errors && error.response.data.errors.length > 0) {
          setModalMessage(error.response.data.errors[0].message || 'Failed to set the new PIN. Please try again.');
        } else {
          setModalMessage('Failed to set the new PIN. Please try again.');
        }
      } finally {
        setIsLoading(false);
        setModalVisible(true);
      }
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.anleleft}
          onPress={() => navigation.navigate('SetUpNewPin')}>
          <FontAwesome name="angle-left" size={22} color="#808080" />
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.Heading}>Confirm PIN</Text>
          <Text style={styles.SubHeading}>Enter the 4-digit pin that will be used to confirm transactions</Text>
          <View style={styles.pinContainer}>
            <PinView
              ref={pinView}
              pinLength={4}
              buttonSize={50}
              showInputText={true}
              onValueChange={value => setEnteredPin(value)}
              inputAreaStyle={styles.inputArea}
              inputViewEmptyStyle={styles.inputEmpty}
              inputViewFilledStyle={styles.inputFilled}
              buttonTextStyle={styles.buttonText}
              buttonAreaStyle={styles.buttonArea}
              customRightButton={
                showRemoveButton && enteredPin.length === 4 ? (
                  <TouchableOpacity onPress={handleConfirmPin}>
                    <Text style={styles.customRightButton}>
                      {loading ? <ActivityIndicator color="#fff" style={{paddingTop: 30, paddingLeft: 30}} /> : '✔️'}
                    </Text>
                  </TouchableOpacity>
                ) : null
              }
              customLeftButton={
                showRemoveButton ? (
                  <TouchableOpacity onPress={() => pinView.current.clearAll()}>
                    <Text style={styles.customLeftButton}>❌</Text>
                  </TouchableOpacity>
                ) : null
              }
              inputTextStyle={styles.inputText} 
            />
          </View>
        </View>

        <ResponseModal
        visible={modal}
        title={modalTitle}
        message={modalMessage}
        isSuccess={success}
        color='white'
        width='90%'
        backgroundColor='#7538EC'
        onDismiss={() => {
          setModalVisible(false);
          if (success) {
            navigation.navigate('MoreScreen');
          } else {
            navigation.navigate('VerifyNewPassword');
          }
        }}
        buttonTitle={success ? 'Go baack to settings' : 'Try again'}
      />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    anleleft: {
      backgroundColor: '#f9f9f9',
      borderRadius: 10,
      width: '10%', 
      marginStart: 20,
      padding: 10,
      marginTop: 40,
      marginBottom: 10,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
    //   alignItems: 'center',
  
    },
    Heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1F2C37',
    },
    SubHeading: {
        color: '#78828A',
        fontSize: 14,
        fontWeight: 'normal',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
      },
    pinContainer: {
      flexGrow: 1,
      justifyContent: 'flex-end', 
      marginBottom: 40, 
    },
    inputArea: {
      alignSelf: 'center',
      marginBottom: 24,
      flexDirection: 'row', 
      gap: 5,
    },
    inputEmpty: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#ccc',
      width: 50,
      height: 50, 
      margin: 5, 
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5, 
    },
    inputFilled: {
      backgroundColor: 'white',
      borderWidth: 1,
      color: '#000',
      borderColor: '#541592',
      width: 50, 
      height: 50, 
      margin: 5, 
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5, 
    },
    inputText: {
      color: 'black', 
      fontSize: 18,
    },
    buttonText: {
      color: '#000',
    },
    buttonArea: {
    },
    customRightButton: {
      color: '#27AE60',
      fontSize: 15,
      backgroundColor: '#B3E6CA',
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    customLeftButton: {
      color: '#F50100',
      backgroundColor: '#FAD4D2',
      fontSize: 15,
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
  });