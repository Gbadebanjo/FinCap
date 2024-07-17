import React, { useRef, useState, useEffect } from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PinView from 'react-native-pin-view';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function SetupPin() {
  const pinView = useRef(null);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [showCompleteButton, setShowCompletedButton] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const navigation = useNavigation();

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

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.anleleft}
        onPress={() => navigation.navigate('HomeScreen')}>
        <FontAwesome name="angle-left" size={22} color="#808080" />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>Set up pin</Text>
        <Text style={styles.subtext}>Enter pin to perform transactions</Text>
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
                <TouchableOpacity
                  onPress={() => navigation.navigate('PinConfirm', {
                    newPin: enteredPin,
                  })}
                >
                  <Text style={styles.customRightButton}>✔️</Text>
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
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center',

  },
  title: {
    fontSize: 20,
    color: '#111827',
    marginBottom: 10,
    marginTop: 20,
  },
  subtext: {
    fontSize: 14,
    color: '#3F4654',
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

