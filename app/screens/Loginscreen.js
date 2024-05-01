import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import InputField from '../components/InputField';
import StyledButton from '../components/StyledButton';

function Loginscreen(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.welcometext}>Welcome back !</Text>
        <Text style={styles.subtext}>Login to continue</Text>
        <InputField
            placeholder="Email "
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <InputField
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <StyledButton title="Submit" />
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        width: "100%",
        height: "100%",
        paddingTop: 90,
    },
    subtext: {
        fontSize: 16,
        color: '#3F4654',
        paddingLeft: 20,
        paddingTop: 10,
    
    },
    welcometext: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingLeft: 20,
    },
})

export default Loginscreen;