import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import { Text, StyleSheet, View } from 'react-native';

function ErrorAlert({ error, showIcon }) {
    if (!error) return null;
    return (
        <View style={styles.errorContainer}>
            {showIcon && <FontAwesome5 name="exclamation-triangle" size={24} style={{paddingLeft : 20}} color="red" />}
            <Text style={styles.errorText}>{error}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    errorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    errorText: {
        color: 'red',
        marginLeft: 10,
    },
})

export default ErrorAlert;