import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import InputField from '../components/InputField';
import StyledButton from '../components/StyledButton';

function Loginscreen(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            
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
            
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        width: "100%",
    }
})

export default Loginscreen;