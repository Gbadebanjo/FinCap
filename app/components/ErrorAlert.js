import React from 'react';

import {Text, StyleSheet} from 'react-native';

function ErrorAlert({ error }) {
    if (!error) return null;
    return (
        <Text style={styles.error}>
            {error}
        </Text>
    );
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 13,
        marginBottom: 10,
        marginLeft: 23,
    },
})

export default ErrorAlert;