import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

const InputField = ({ label, placeholder, secureTextEntry, onChangeText, value }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        alignItems: 'center',
    },
    label: {
        color: '#000',
        marginBottom: 5,
    },
    input: {
        height: 45,
        width: '90%',
        borderRadius: 8,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 15,
        paddingLeft: 10,
    },
});

export default InputField;
