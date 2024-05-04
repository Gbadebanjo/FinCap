import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <Swiper loop={true}>
      <ImageBackground
        source={require('./../assets/image1.jpeg')}
        style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.bigText}>Secure your Finance</Text>
          <Text style={styles.text}>
            Save and get 10% interest on your savings
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.createText}>Create New Account</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.LoginText}>Have an account? Sign In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ImageBackground
        source={require('./../assets/image2.jpeg')}
        style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.bigText}>Fast and easy loans</Text>
          <Text style={styles.text}>Get up to 500,000 loan in minutes</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.createText}>Create New Account</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.LoginText}>Have an account? Sign In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ImageBackground
        source={require('./../assets/image3.jpeg')}
        style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.bigText}>Earn</Text>
          <Text style={styles.text}>Get up 20% return on investment</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.createText}>Create New Account</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.LoginText}>Have an account? Sign In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50,
  },
  bigText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 24,
  },
  text: {
    color: 'white',
    fontWeight: '400',
    fontSize: 16,
    marginTop: 7,
  },
  createText: {
    color: '#541592',
    fontWeight: '500',
    fontSize: 16,
  },
  LoginText: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 8,
    padding: 15,
    justifyContent: 'center',
    width: '90%',
    alignItems: 'center',
    // marginHorizontal: 20,
    marginTop: 70,
    textAlign: 'center',
  },
  loginButton: {
    borderWidth: 1,
    borderColor: '#fff',
    flexDirection: 'row',
    borderRadius: 8,
    padding: 15,
    justifyContent: 'center',
    width: '90%',
    alignItems: 'center',
    // marginHorizontal: 20,
    marginTop: 18,
    textAlign: 'center',
  },
});

export default WelcomeScreen;
