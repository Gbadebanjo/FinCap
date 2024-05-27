import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FundSourceOption = ({ title, balance, isSelected, onPress }) => {
  const [isActive, setIsActive] = useState(isSelected);

  const handlePress = () => {
    setIsActive(!isActive);
    onPress && onPress(isActive);
  };

   const backgroundColor = isActive ? '#7538EC' : '#fff';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.circle, { backgroundColor: backgroundColor }]}
        onPress={handlePress}
        backgroundColor={backgroundColor}></TouchableOpacity>
      <View style={styles.texts}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.textContainer2}>
          <Text style={styles.balance}>{balance}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    marginRight: 10,
    borderColor: '#D0D5DD',
  },
  texts: {
    width: '80%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
  },
  textContainer2: {
    flex: 1,
  },
  title: {
    fontSize: 16,
  },
  balance: {
    fontSize: 16,
    textAlign: 'end',
  },
});

export default FundSourceOption;
