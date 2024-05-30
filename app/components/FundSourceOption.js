import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const FundSourceOption = ({
  id,
  title,
  balance,
  onSelect,
  isSelected,
  Card,
}) => {
  const handlePress = () => {
    onSelect(id);
  };

  const backgroundColor = isSelected ? '#7538EC' : '#fff';

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View
          style={[styles.circle, { backgroundColor: backgroundColor }]}
          backgroundColor={backgroundColor}></View>
        <View style={styles.texts}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View>
            <Text style={styles.balance}>{balance}</Text>
          </View>
          <View style={styles.cardContainer}>{Card && <Card />}</View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
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
  title: {
    fontSize: 16,
  },
  balance: {
    fontSize: 16,
    textAlign: 'left',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsNnumbers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  icons: {
    position: 'relative',
    justifyContent: 'center',
  },
  icon1: {
    position: 'absolute',
    left: 0,
  },
  icon2: {
    position: 'absolute',
    left: 9,
  },
  CardNumber: {
    fontSize: 13,
    width: '85%',
    color: '#344054',
    fontWeight: '500px',
  },
});

export default FundSourceOption;

export function Card() {
  return (
    <View style={styles.iconsNnumbers}>
      <View style={styles.icons}>
        <FontAwesome
          style={styles.icon2}
          name="circle"
          size={20}
          color="#F9A000"
        />
        <FontAwesome
          style={styles.icon1}
          name="circle"
          size={20}
          color="#ED0006"
        />
      </View>
      <Text style={styles.CardNumber}>***7463</Text>
    </View>
  );
}
