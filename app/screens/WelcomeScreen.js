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
// import StyledButton from '../components/StyledButton';
// import Carousel, { Pagination } from 'react-native-snap-carousel';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <Swiper loop={true}>
      <ImageBackground
        source={require('./../assets/image1.jpeg')}
        style={styles.image}>
        <View style={styles.textContainer}>
          <Text
            style={styles.bigText}
            onPress={() => navigation.navigate('SignUp')}>
            Secure your Finance
          </Text>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate('SignUp')}>
            Save and get 10% interest on your savings
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.createText}>Create New Account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.LoginText}>Have an account? Sign In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ImageBackground
        source={require('./../assets/image2.jpeg')}
        style={styles.image}>
        <View style={styles.textContainer}>
          <Text
            style={styles.bigText}
            onPress={() => navigation.navigate('SignUp')}>
            Fast and easy loans
          </Text>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate('SignUp')}>
            Get up to 500,000 loan in minutes
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.createText}>Create New Account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.LoginText}>Have an account? Sign In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ImageBackground
        source={require('./../assets/image3.jpeg')}
        style={styles.image}>
        <View style={styles.textContainer}>
          <Text
            style={styles.bigText}
            onPress={() => navigation.navigate('SignUp')}>
            Earn
          </Text>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate('SignUp')}>
            Get up 20% return on investment
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.createText}>Create New Account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton}>
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
    fontWeight: 400,
    fontSize: 24,
  },
  text: {
    color: 'white',
    fontWeight: 400,
    fontSize: 16,
    marginTop: 7,
  },
  createText: {
    color: '#541592',
    fontWeight: 500,
    fontSize: 16,
  },
  LoginText: {
    color: '#fff',
    fontWeight: 400,
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
