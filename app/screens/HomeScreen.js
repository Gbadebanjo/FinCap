import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

function HomeScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Welcome to the HomeScreen
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7538EC',
    },
     text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
     },
})

export default HomeScreen;