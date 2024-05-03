import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Image, Animated } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

const Landingscreen = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Welcome');
    }, 5000);

    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    return () => {
      clearTimeout(timer);
    };
  }, [navigation, fadeAnim]);

  return (
    <Swiper loop={true}>
      <View style={styles.container}>
        <Animated.Image
          source={require('./../assets/Gradient Logo@3x 1.png')}
          style={{ ...styles.image, opacity: fadeAnim }}
        />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7538ec',
  },
  image: {
    width: 200,
    height: 100,
  },
});
export default Landingscreen;
