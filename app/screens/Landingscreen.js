import React from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import StyledButton from '../components/StyledButton';
// import Carousel, { Pagination } from 'react-native-snap-carousel';

const Landingscreen = () => {
  const navigation = useNavigation();

  return (
    <Swiper loop={true}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text onPress={() => navigation.navigate('SignUp')}>
          Page 1: Welcome
        </Text>

        {/* Add your welcome content here */}
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text onPress={() => navigation.navigate('SignUp')}>
          Page 2: Signup
        </Text>
        {/* Add your signup form here */}
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text onPress={() => navigation.navigate('Login')}>Page 3: Login</Text>
        {/* Add your login form here */}
      </View>
    </Swiper>
  );
};

export default Landingscreen;
