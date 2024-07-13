import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Text, StyleSheet, View } from 'react-native';

function ErrorAlert({ error, showIcon, justifyContent }) {
  const styles = getStyles(justifyContent);

  if (!error) return null;
  return (
    <View style={styles.errorContainer}>
      {showIcon && (
        <FontAwesome5
          name="exclamation-triangle"
          size={24}
          style={{ paddingLeft: 0 }}
          color="red"
        />
      )}
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
}

const getStyles = justifyContent =>
  StyleSheet.create({
    errorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: justifyContent,
      // margin: 10,
    },
    errorText: {
      color: 'red',
      // marginLeft: 10,
    },
  });

export default ErrorAlert;
